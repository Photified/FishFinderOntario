/* Personal fishing entries. This store is independent of saved/favourite lakes. */
window.FFOLogbook = (() => {
  'use strict';
  const KEY='ffoLogbookV1', knownLakes=new Map();
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const text=(value,max=200)=>String(value??'').trim().slice(0,max);
  const choices={weather:{sunny:'Sunny',cloudy:'Cloudy',rainy:'Rainy',windy:'Windy'},clarity:{clear:'Clear water',muddy:'Muddy water'},temp:{cool:'Cool water',warm:'Warm water'}};
  const outcomeLabels={caught:'Caught fish',none:'No catches'};
  const cleanConditions=value=>Object.fromEntries(Object.keys(choices).map(key=>[key,Object.hasOwn(choices[key],value?.[key])?value[key]:'']));
  const safeImage=value=>/^images\/lures\/[a-z0-9_-]+\.png$/i.test(String(value||''))?value:'';
  const today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
  const validDate=value=>/^\d{4}-\d{2}-\d{2}$/.test(value)&&!Number.isNaN(Date.parse(value+'T12:00:00Z'))&&new Date(value+'T12:00:00Z').toISOString().slice(0,10)===value;
  const prettyDate=value=>validDate(value)?new Date(value+'T12:00:00').toLocaleDateString('en-CA',{year:'numeric',month:'short',day:'numeric'}):'Date not recorded';
  const uid=()=>window.crypto?.randomUUID?.()||'entry-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,12);
  let dialog=null,view=null,trigger=null,triggerLake=null,editor=null,selectedNote=null,navigation=null,skipFocus=false;
  let toast=null,toastTimer=null;
  const quickLocks=new Set();

  function entries() {
    const raw=localStorage.getItem(KEY);
    if(raw===null)return [];
    let data;try{data=JSON.parse(raw);}catch{throw new Error('The saved logbook could not be read. Existing data has not been changed.');}
    const fields=['lakeName','lakeTown','species','lure','image','size','colors','retrieve','rod','line','notes','time','outcome','catchDetails','createdAt','updatedAt'];
    if(data?.version!==1||!Array.isArray(data.entries)||data.entries.some(e=>!e||typeof e.id!=='string'||typeof e.lakeId!=='string'||!e.lakeId||!validDate(e.date)||fields.some(key=>e[key]!=null&&typeof e[key]!=='string'))||new Set(data.entries.map(e=>e.id)).size!==data.entries.length)throw new Error('The saved logbook format could not be read. Existing data has not been changed.');
    return data.entries.sort((a,b)=>(b.date+' '+(b.time||'')).localeCompare(a.date+' '+(a.time||''))||String(b.createdAt||'').localeCompare(String(a.createdAt||'')));
  }
  function write(data) {
    localStorage.setItem(KEY,JSON.stringify({version:1,entries:data}));
    refresh();window.dispatchEvent(new CustomEvent('ffo-logbook-change'));
  }
  function count(){try{return entries().length;}catch{return 0;}}
  function register(lake){if(lake?.id)knownLakes.set(String(lake.id),{id:String(lake.id),name:text(lake.name||'Waterbody'),town:text(lake.town||'')});}
  function fishImage(species) {
    return typeof fishTypes==='undefined'?'':Object.values(fishTypes).find(f=>f.name===species)?.imageSrc||'';
  }
  function iconFor(key,value) {
    const icon=window.LakeSetups?.conditionIcon(key==='clarity'?'water':value)||'';
    return key==='clarity'?`<span class="log-water condition-water-${value}" aria-hidden="true">${icon}</span>`:icon;
  }
  function contextItems(draft) {
    const items=[];
    if(draft.species)items.push({key:'species',label:draft.species,image:fishImage(draft.species)});
    if(draft.lure)items.push({key:'lure',label:draft.lure,image:safeImage(draft.image)});
    for(const [key,value]of Object.entries(cleanConditions(draft.conditions)))if(value)items.push({key,label:choices[key][value],icon:iconFor(key,value)});
    if(draft.outcome)items.push({key:'outcome',label:outcomeLabels[draft.outcome]||''});
    return items;
  }
  function chips(draft,removable=false) {
    return contextItems(draft).map(item=>`<span class="log-context-chip">${item.image?`<img data-logbook-image src="${esc(item.image)}" alt="">`:item.icon||''}<span>${esc(item.label)}</span>${removable?`<button type="button" data-log-remove="${item.key}" aria-label="Remove ${esc(item.label)}">×</button>`:''}</span>`).join('');
  }
  function card(entry,showLake=true,focused=false) {
    const details=focused?[entry.size,entry.colors,entry.retrieve,entry.rod,entry.line].filter(Boolean):[];
    return `<article class="log-entry-card${focused?' log-note-selected':''}" data-logbook-entry="${esc(entry.id)}" tabindex="-1">
      <button type="button" class="log-entry-open" data-log-open="${esc(entry.id)}" aria-label="Open ${esc(entry.lakeName)} at this note"><span class="log-entry-heading">${showLake?`<strong>${esc(entry.lakeName)}${entry.lakeTown?' · '+esc(entry.lakeTown):''}</strong>`:''}<time datetime="${esc(entry.date)}">${esc(prettyDate(entry.date))}${entry.time?' · '+esc(entry.time):''}</time></span><span class="log-context-chips">${chips(entry)}</span>${entry.notes?`<span class="log-note-text${focused?' log-note-full':''}">${esc(entry.notes)}</span>`:entry.lure?'<span class="log-note-caption">Saved setup</span>':''}${details.length?`<span class="log-saved-setup">${details.map(esc).join(' · ')}</span>`:''}${entry.catchDetails?`<span class="log-saved-setup">${esc(entry.catchDetails)}</span>`:''}</button>
      <div class="log-card-actions"><button type="button" data-log-edit-id="${esc(entry.id)}" aria-label="Edit note for ${esc(entry.lakeName)}">Edit</button><button type="button" data-log-delete-id="${esc(entry.id)}" aria-label="Delete note for ${esc(entry.lakeName)}">Delete</button></div></article>`;
  }
  function preview(lake) {
    register(lake);let rows=[],error='';try{rows=entries().filter(e=>e.lakeId===String(lake.id));}catch(e){error=e.message;}
    const selected=rows.find(e=>e.id===selectedNote)||rows[0];
    return `<section class="lake-section logbook-lake" data-logbook-preview="${esc(lake.id)}"><div class="logbook-lake-heading"><h4>Notes</h4><button type="button" class="log-action" data-logbook-add="${esc(lake.id)}">Add note</button></div>${error?`<p class="log-error">${esc(error)}</p>`:selected?card(selected,false,selected.id===selectedNote):'<p class="log-muted">Something to remember? Add a quick note.</p>'}${rows.length?`<button type="button" class="log-view-all" data-logbook-list="${esc(lake.id)}">All notes for this lake (${rows.length})</button>`:''}</section>`;
  }
  function refresh() {
    document.querySelectorAll('[data-logbook-count]').forEach(node=>{const n=count();node.textContent=String(n);node.hidden=n===0;});
    document.querySelectorAll('[data-logbook-preview]').forEach(node=>{const lake=knownLakes.get(node.dataset.logbookPreview);if(lake)node.outerHTML=preview(lake);});
    if(dialog?.open&&view?.mode==='list')renderListResults();
  }
  function toastMessage(message,label='',action=null,error=false) {
    clearTimeout(toastTimer);
    if(!toast){toast=document.createElement('div');toast.className='log-toast';}
    (dialog?.open?dialog:document.body).append(toast);
    toast.classList.toggle('log-toast-error',error);toast.innerHTML='<span role="status"></span>';toast.firstChild.textContent=message;toast.hidden=false;
    if(label&&action){const button=document.createElement('button');button.type='button';button.textContent=label;button.onclick=()=>{toast.hidden=true;clearTimeout(toastTimer);action();};toast.append(button);}
    toastTimer=setTimeout(()=>{toast.hidden=true;},8000);
  }
  function ensureDialog() {
    if(dialog)return;
    dialog=document.createElement('dialog');dialog.id='fishingLogbookDialog';dialog.className='simple-dialog fishing-logbook-dialog';dialog.setAttribute('aria-labelledby','fishingLogbookTitle');
    dialog.innerHTML='<div class="log-dialog-header"><div class="dialog-heading"><h2 id="fishingLogbookTitle"></h2><button type="button" data-log-close aria-label="Close notes">✕</button></div><p class="log-dialog-subtitle"></p></div><div class="log-dialog-body"></div>';
    dialog.addEventListener('close',()=>{editor=null;view=null;if(!skipFocus){const target=trigger?.isConnected?trigger:[...document.querySelectorAll('[data-logbook-preview]')].find(node=>node.dataset.logbookPreview===triggerLake)?.querySelector('[data-logbook-add]');target?.focus({preventScroll:true});}skipFocus=false;if(toast?.parentElement===dialog)document.body.append(toast);});
    dialog.addEventListener('keydown',event=>{
      if(event.key!=='Tab')return;
      const nodes=[...dialog.querySelectorAll('button,input,select,textarea,a[href]')].filter(n=>!n.disabled&&n.getClientRects().length),first=nodes[0],last=nodes[nodes.length-1];
      if((event.shiftKey&&document.activeElement===first)||(!event.shiftKey&&document.activeElement===last)){event.preventDefault();(event.shiftKey?last:first)?.focus();}
    });
    dialog.addEventListener('submit',event=>{if(event.target.matches('.log-entry-form')){event.preventDefault();saveEditor(event.target);}});
    dialog.addEventListener('change',event=>{if(view?.mode==='list'&&event.target.matches('[data-log-filter]')){view.lake=event.target.value;view.limit=20;renderListResults();}});
    document.body.append(dialog);
  }
  function show(title,subtitle,html) {
    window.LakeSetups?.pauseAnimations();ensureDialog();
    dialog.querySelector('#fishingLogbookTitle').textContent=title;dialog.querySelector('.log-dialog-subtitle').textContent=subtitle;
    dialog.querySelector('.log-dialog-body').innerHTML=html;if(!dialog.open)dialog.showModal();dialog.scrollTop=0;dialog.querySelector('[data-log-close]').focus({preventScroll:true});
  }
  function captureTrigger(){if(!dialog?.open){trigger=document.activeElement;triggerLake=trigger?.closest('[data-logbook-preview]')?.dataset.logbookPreview||trigger?.closest('.lake-card')?.dataset.lakeid||null;}}
  function openList(lake=null,state=null) {
    if(lake)register(lake);captureTrigger();editor=null;dialog?.classList.remove('log-quick-editor');view=state?{...state}:{mode:'list',lake:lake?.id?String(lake.id):'',limit:20};renderList();
  }
  function renderList() {
    let data;try{data=entries();}catch(e){show('Notes','Saved in this browser.',`<p class="log-error" role="alert">${esc(e.message)}</p>`);return;}
    const lakes=new Map(data.map(e=>[e.lakeId,e.lakeName+(e.lakeTown?' · '+e.lakeTown:'')]));
    if(view.lake&&!lakes.has(view.lake))lakes.set(view.lake,knownLakes.get(view.lake)?.name||'This lake');
    show('Notes','Tap a note to open its lake.',`${lakes.size>1?`<label class="log-list-filter">Lake<select data-log-filter><option value="">All lakes</option>${[...lakes].sort((a,b)=>a[1].localeCompare(b[1])).map(([id,name])=>`<option value="${esc(id)}"${view.lake===id?' selected':''}>${esc(name)}</option>`).join('')}</select></label>`:''}<div class="log-list-results" aria-live="polite"></div><p class="log-device-note">Saved in this browser.</p>`);
    renderListResults();
  }
  function renderListResults() {
    const host=dialog.querySelector('.log-list-results');if(!host)return;
    try{const rows=entries().filter(e=>!view.lake||e.lakeId===view.lake);
      host.innerHTML=rows.length?rows.slice(0,view.limit).map(e=>card(e)).join('')+(rows.length>view.limit?'<button type="button" class="log-view-all" data-log-more>Show more notes</button>':''):'<p class="log-empty">No notes yet. Open a lake to add a note or save a lure setup.</p>';
    }catch(e){host.innerHTML=`<p class="log-error" role="alert">${esc(e.message)}</p>`;}
  }
  async function openEntry(id) {
    let entry;try{entry=entries().find(e=>e.id===id);}catch(e){toastMessage(e.message,'',null,true);return;}
    if(!entry)return;
    selectedNote=id;
    try{
      if(!navigation?.openLake||await navigation.openLake({...entry})===false)throw new Error('This lake is unavailable. Your note is still saved.');
      if(dialog?.open){skipFocus=true;dialog.close();}
      refresh();requestAnimationFrame(()=>{const target=[...document.querySelectorAll('.logbook-lake [data-logbook-entry]')].find(node=>node.dataset.logbookEntry===id);target?.scrollIntoView({behavior:'instant',block:'center'});target?.focus({preventScroll:true});});
    }catch(e){toastMessage(e.message||'Could not open this lake. Your note is still saved.','',null,true);}
  }
  function makeDraft(source={},original=null) {
    return {...source,date:original?.date||today(),time:original?.time||'',species:text(source.species),lure:text(source.lure),image:safeImage(source.image),size:text(source.size),retrieve:text(source.retrieve,400),rod:text(source.rod,240),line:text(source.line,240),colors:original?.colors||'',notes:original?.notes||'',conditions:cleanConditions(source.conditions)};
  }
  function openEditor({lake,snapshot=null,entry=null}) {
    register(lake);captureTrigger();const back=view?.mode==='list'?{...view}:null;
    editor={lake:knownLakes.get(String(lake.id)),original:entry?{...entry}:null,draft:makeDraft(entry||snapshot||{},entry),back};view={mode:'editor'};
    show(entry?'Edit note':'Add note',`${editor.lake.name} · ${entry?prettyDate(entry.date):'Today'}`,`<form class="log-entry-form"><label class="log-form-field"><span class="log-sr-only">Your note</span><textarea name="notes" rows="4" maxlength="8000" placeholder="What do you want to remember?">${esc(editor.draft.notes)}</textarea></label><div class="log-draft-context"><div class="log-context-chips">${chips(editor.draft,true)}</div></div><p class="log-save-error log-error" role="alert"></p><div class="log-form-actions"><button type="submit" class="log-save-entry">Save</button></div></form>`);
    dialog.classList.add('log-quick-editor');dialog.querySelector('textarea').focus({preventScroll:true});
  }
  function persistDraft(draft,lake,original=null) {
    const data=entries();if(original&&!data.some(e=>e.id===original.id))throw new Error('This note was deleted in another view.');
    const saved={...draft,id:original?.id||uid(),lakeId:String(lake.id),lakeName:lake.name,lakeTown:lake.town||'',createdAt:original?.createdAt||new Date().toISOString(),updatedAt:new Date().toISOString()};
    write(original?data.map(e=>e.id===saved.id?saved:e):[saved,...data]);return saved;
  }
  function saveEditor(form) {
    const draft={...editor.draft,notes:text(new FormData(form).get('notes'),8000),conditions:{...editor.draft.conditions}};
    if(!draft.notes&&!contextItems(draft).length){form.querySelector('.log-save-error').textContent='Add a quick note before saving.';form.querySelector('textarea').focus();return;}
    try{const previous=editor.back,saved=persistDraft(draft,editor.lake,editor.original);selectedNote=saved.id;editor=null;
      if(previous){dialog.classList.remove('log-quick-editor');openList(null,previous);}else{refresh();dialog.close('saved');}toastMessage('Note saved');
    }catch(e){form.querySelector('.log-save-error').textContent=e.message.includes('could not be read')||e.message.includes('another view')?e.message:'Could not save. Your note is still here. Browser storage may be full or unavailable.';}
  }
  function quickSave({lake,snapshot},button=null) {
    if(!snapshot?.lure)return;
    const key=String(lake.id)+'/'+snapshot.lure;if(quickLocks.has(key))return;quickLocks.add(key);
    try{register(lake);const saved=persistDraft(makeDraft(snapshot),knownLakes.get(String(lake.id)));selectedNote=saved.id;refresh();
      if(button){button.textContent='Saved ✓';button.disabled=true;}
      toastMessage('Setup saved','Add note',()=>openEditor({lake,entry:saved}));
    }catch(e){toastMessage('Could not save this setup. Try again.','',null,true);}
    setTimeout(()=>{quickLocks.delete(key);if(button?.isConnected){button.textContent='Save this setup';button.disabled=false;}},1500);
  }
  function editEntry(id) {
    try{const entry=entries().find(e=>e.id===id);if(entry)openEditor({lake:{id:entry.lakeId,name:entry.lakeName,town:entry.lakeTown},entry});}catch(e){toastMessage(e.message,'',null,true);}
  }
  function deleteEntry(id) {
    try{const data=entries(),entry=data.find(e=>e.id===id);if(!entry)return;if(selectedNote===id)selectedNote=null;write(data.filter(e=>e.id!==id));
      toastMessage('Note deleted','Undo',()=>{try{const current=entries();if(!current.some(e=>e.id===entry.id))write([entry,...current]);toastMessage('Note restored');}catch{toastMessage('Could not restore the note.','',null,true);}});
    }catch{toastMessage('Could not delete. Your note is still saved.','',null,true);}
  }
  document.addEventListener('click',event=>{
    const target=event.target;
    if(target.closest('[data-log-close]')){dialog.close();return;}
    const remove=target.closest('[data-log-remove]');
    if(remove&&editor){const key=remove.dataset.logRemove;
      if(key==='lure')for(const field of ['lure','image','size','colors','rod','line','retrieve'])editor.draft[field]='';
      else if(key==='species'){editor.draft.species='';editor.draft.speciesId='';}
      else if(key==='outcome'){editor.draft.outcome='';editor.draft.catchDetails='';}
      else editor.draft.conditions[key]='';
      const host=dialog.querySelector('.log-draft-context');const buttons=[...host.querySelectorAll('button')],index=buttons.indexOf(remove);host.innerHTML=`<div class="log-context-chips">${chips(editor.draft,true)}</div>`;
      const next=host.querySelectorAll('button');(next[Math.min(index,next.length-1)]||dialog.querySelector('textarea')).focus({preventScroll:true});return;
    }
    const edit=target.closest('[data-log-edit-id]');if(edit){editEntry(edit.dataset.logEditId);return;}
    const del=target.closest('[data-log-delete-id]');if(del){deleteEntry(del.dataset.logDeleteId);return;}
    const open=target.closest('[data-log-open]');if(open){openEntry(open.dataset.logOpen);return;}
    if(target.closest('[data-log-more]')){view.limit+=20;renderListResults();return;}
    if(dialog&&event.composedPath().includes(dialog))return;
    if(target.closest('[data-logbook-all]')){dialog?.classList.remove('log-quick-editor');openList();return;}
    const add=target.closest('[data-logbook-add]');if(add){const lake=knownLakes.get(add.dataset.logbookAdd);if(lake){const root=add.closest('.lake-card')?.querySelector('[data-setup-context]');openEditor({lake,snapshot:window.LakeSetups?.snapshotFor(root?.dataset.setupContext)});}return;}
    const list=target.closest('[data-logbook-list]');if(list){dialog?.classList.remove('log-quick-editor');openList(knownLakes.get(list.dataset.logbookList));}
  });
  document.addEventListener('error',event=>{if(event.target.matches?.('img[data-logbook-image]'))event.target.hidden=true;},true);
  window.addEventListener('storage',event=>{if(event.key===KEY||event.key===null)refresh();});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refresh,{once:true});else refresh();
  return {preview,openEditor,openList,entries,count,quickSave,connect:adapter=>{navigation=adapter;}};
})();
