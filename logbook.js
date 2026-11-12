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
  let dialog=null,view=null,trigger=null,triggerLake=null,editor=null;

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
  function register(lake){if(lake?.id)knownLakes.set(String(lake.id),{id:String(lake.id),name:text(lake.name||'Waterbody',200),town:text(lake.town||'',200)});}
  function conditionsHTML(conditions) {
    const c=cleanConditions(conditions);
    const chips=Object.entries(c).filter(([,value])=>value).map(([key,value])=>{
      const icon=window.LakeSetups?.conditionIcon(key==='clarity'?'water':value)||'';
      const visual=key==='clarity'?`<span class="log-water condition-water-${value}" aria-hidden="true">${icon}</span>`:icon;
      return `<span class="log-condition-chip" aria-label="${esc(({weather:'Weather',clarity:'Water clarity',temp:'Water temperature'})[key])}: ${esc(choices[key][value])}">${visual}<span>${choices[key][value]}</span></span>`;
    }).join('');
    return chips?`<span class="log-condition-chips">${chips}</span>`:'<span class="log-muted log-no-conditions">Conditions not recorded</span>';
  }
  function card(entry,showLake=true) {
    const image=safeImage(entry.image);
    return `<article class="log-entry-card" data-logbook-entry="${esc(entry.id)}">
      <button type="button" class="log-entry-heading" aria-label="View entry for ${esc(entry.lakeName)}, ${esc(prettyDate(entry.date))}"><span>${showLake?`<strong>${esc(entry.lakeName)}${entry.lakeTown?' · '+esc(entry.lakeTown):''}</strong>`:''}<time datetime="${esc(entry.date)}">${esc(prettyDate(entry.date))}${entry.time?' · '+esc(entry.time):''}</time></span>${entry.outcome?`<span class="log-result log-result-${esc(entry.outcome)}">${esc(outcomeLabels[entry.outcome]||'')}</span>`:''}</button>
      ${entry.species||entry.lure?`<div class="log-setup-preview">${image?`<img class="log-lure-thumb" data-logbook-image src="${esc(image)}" alt="" loading="lazy">`:''}<div>${entry.species?`<p class="log-target">Target: ${esc(entry.species)}</p>`:''}${entry.lure?`<p class="log-lure-name">${esc(entry.lure)}</p>`:''}${entry.size||entry.colors?`<p class="log-muted">${esc([entry.size,entry.colors].filter(Boolean).join(' · '))}</p>`:''}</div></div>`:''}
      ${conditionsHTML(entry.conditions)}${entry.notes?`<p class="log-note-excerpt">${esc(entry.notes)}</p>`:''}${entry.outcome==='caught'&&entry.catchDetails?`<p class="log-catch-preview">${esc(entry.catchDetails)}</p>`:''}
    </article>`;
  }
  function preview(lake) {
    register(lake);let rows=[],error='';try{rows=entries().filter(e=>e.lakeId===String(lake.id));}catch(e){error=e.message;}
    return `<section class="lake-section logbook-lake" data-logbook-preview="${esc(lake.id)}"><div class="logbook-lake-heading"><h4>Fishing logbook</h4><button type="button" class="log-action" data-logbook-add="${esc(lake.id)}">Add entry</button></div>${error?`<p class="log-error">${esc(error)}</p>`:rows.length?card(rows[0],false):'<p class="log-muted">Save a trip, a setup or an observation.</p>'}<button type="button" class="log-view-all" data-logbook-list="${esc(lake.id)}">View all entries (${rows.length})</button></section>`;
  }
  function refresh() {
    document.querySelectorAll('[data-logbook-count]').forEach(node=>node.textContent=String(count()));
    document.querySelectorAll('[data-logbook-preview]').forEach(node=>{const lake=knownLakes.get(node.dataset.logbookPreview);if(lake)node.outerHTML=preview(lake);});
    if(dialog?.open&&view?.mode==='list')renderListResults();
  }
  function ensureDialog() {
    if(dialog)return;
    dialog=document.createElement('dialog');dialog.id='fishingLogbookDialog';dialog.className='simple-dialog fishing-logbook-dialog';dialog.setAttribute('aria-labelledby','fishingLogbookTitle');
    dialog.innerHTML='<div class="log-dialog-header"><div class="dialog-heading"><h2 id="fishingLogbookTitle"></h2><button type="button" data-log-close aria-label="Close logbook">✕</button></div><p class="log-dialog-subtitle"></p></div><div class="log-dialog-body"></div>';
    dialog.addEventListener('close',()=>{editor=null;view=null;const target=trigger?.isConnected?trigger:[...document.querySelectorAll('[data-logbook-preview]')].find(node=>node.dataset.logbookPreview===triggerLake)?.querySelector('[data-logbook-add]');target?.focus({preventScroll:true});});
    dialog.addEventListener('keydown',event=>{
      if(event.key!=='Tab')return;
      const nodes=[...dialog.querySelectorAll('button,input,select,textarea,a[href]')].filter(n=>!n.disabled&&n.getClientRects().length),first=nodes[0],last=nodes[nodes.length-1];
      if((event.shiftKey&&document.activeElement===first)||(!event.shiftKey&&document.activeElement===last)){event.preventDefault();(event.shiftKey?last:first)?.focus();}
    });
    dialog.addEventListener('click',handleDialogClick);
    dialog.addEventListener('submit',event=>{if(event.target.matches('.log-entry-form')){event.preventDefault();saveEditor(event.target);}});
    dialog.addEventListener('change',event=>{
      if(view?.mode==='list'&&event.target.matches('[data-log-filter]')){view.filters[event.target.dataset.logFilter]=event.target.value;view.limit=20;renderListResults();}
      if(view?.mode==='editor'&&event.target.matches('[name="outcome"]'))dialog.querySelector('.log-catch-field').hidden=event.target.value!=='caught';
      if(view?.mode==='editor'&&event.target.matches('input[name="weather"],input[name="clarity"],input[name="temp"]'))updateDraftConditions();
    });
    dialog.addEventListener('input',event=>{if(view?.mode==='editor'&&event.target.name==='lure')updateDraftImage(event.target.value);});
    document.body.append(dialog);
  }
  function show(title,subtitle,html) {
    window.LakeSetups?.pauseAnimations();
    ensureDialog();dialog.querySelector('#fishingLogbookTitle').textContent=title;dialog.querySelector('.log-dialog-subtitle').textContent=subtitle;
    dialog.querySelector('.log-dialog-body').innerHTML=html;if(!dialog.open)dialog.showModal();dialog.scrollTop=0;dialog.querySelector('[data-log-close]').focus({preventScroll:true});
  }
  function captureTrigger(){if(!dialog?.open){trigger=document.activeElement;triggerLake=trigger?.closest('[data-logbook-preview]')?.dataset.logbookPreview||trigger?.closest('.lake-card')?.dataset.lakeid||null;}}
  function openList(lake=null) {
    if(lake)register(lake);captureTrigger();view={mode:'list',filters:{lake:lake?.id?String(lake.id):'',species:''},limit:20};renderList();
  }
  function renderList() {
    let data;try{data=entries();}catch(e){show('Fishing logbook','Saved in this browser.',`<p class="log-error" role="alert">${esc(e.message)}</p>`);return;}
    const lakes=new Map(data.map(e=>[e.lakeId,e.lakeName+(e.lakeTown?' · '+e.lakeTown:'')]));if(view.filters.lake&&!lakes.has(view.filters.lake))lakes.set(view.filters.lake,knownLakes.get(view.filters.lake)?.name||'This lake');
    const species=[...new Set(data.map(e=>e.species).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
    const options=(rows,selected)=>rows.map(([value,label])=>`<option value="${esc(value)}"${value===selected?' selected':''}>${esc(label)}</option>`).join('');
    const scopeLake=knownLakes.get(view.filters.lake)||data.find(e=>e.lakeId===view.filters.lake)&&{id:view.filters.lake,name:lakes.get(view.filters.lake)};
    show('Fishing logbook','Dated notes and setups, across your lakes.',`<div class="log-list-toolbar"><div class="log-list-filters"><label>Lake<select data-log-filter="lake">${options([['','All lakes'],...[...lakes].sort((a,b)=>a[1].localeCompare(b[1]))],view.filters.lake)}</select></label><label>Target species<select data-log-filter="species">${options([['','All species'],...species.map(s=>[s,s])],view.filters.species)}</select></label></div>${scopeLake?`<button type="button" class="log-action" data-log-add-scoped="${esc(scopeLake.id)}">Add entry</button>`:''}</div><div class="log-list-results" aria-live="polite"></div><p class="log-device-note">Saved in this browser.</p>`);
    renderListResults();
  }
  function renderListResults() {
    const host=dialog.querySelector('.log-list-results');if(!host)return;
    try{const data=entries(),rows=data.filter(e=>(!view.filters.lake||e.lakeId===view.filters.lake)&&(!view.filters.species||e.species===view.filters.species));
      host.innerHTML=`<p class="log-list-count">${rows.length} ${rows.length===1?'entry':'entries'}</p>${rows.length?rows.slice(0,view.limit).map(e=>card(e,!view.filters.lake)).join(''):`<p class="log-empty">${data.length?'No entries match these filters.':'No entries yet. Open a lake and choose Add entry, or log a selected setup.'}</p>`}${rows.length>view.limit?'<button type="button" class="log-view-all" data-log-more>Show more entries</button>':''}`;
    }catch(e){host.innerHTML=`<p class="log-error" role="alert">${esc(e.message)}</p>`;}
  }
  function openEntry(id,back=null) {
    let entry;try{entry=entries().find(e=>e.id===id);}catch(e){show('Fishing logbook','',`<p class="log-error" role="alert">${esc(e.message)}</p>`);return;}
    if(!entry){openList();return;}captureTrigger();view={mode:'detail',id,back};
    const facts=[['Target species',entry.species],['Lure or bait',entry.lure],['Size & weight',entry.size],['Colour(s) used',entry.colors],['Retrieve',entry.retrieve],['Rod',entry.rod],['Line',entry.line]].filter(([,v])=>v);
    show('Log entry',`${entry.lakeName} · ${prettyDate(entry.date)}${entry.time?' · '+entry.time:''}`,`${back?'<button type="button" class="log-back" data-log-back>← Back to entries</button>':''}<div class="log-detail-top">${safeImage(entry.image)?`<img class="log-detail-lure" data-logbook-image src="${esc(entry.image)}" alt="${esc(entry.lure)}">`:''}${entry.outcome?`<span class="log-result log-result-${esc(entry.outcome)}">${esc(outcomeLabels[entry.outcome]||'')}</span>`:''}</div>${conditionsHTML(entry.conditions)}${facts.length?`<dl class="log-detail-facts">${facts.map(([name,value])=>`<div><dt>${name}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>`:''}${entry.notes?`<section class="log-detail-notes"><h3>Notes</h3><p>${esc(entry.notes)}</p></section>`:''}${entry.outcome==='caught'&&entry.catchDetails?`<section class="log-detail-notes"><h3>Catch details</h3><p>${esc(entry.catchDetails)}</p></section>`:''}<div class="log-detail-actions"><button type="button" class="log-action" data-log-edit>Edit entry</button><button type="button" class="log-text-danger" data-log-delete>Delete entry</button></div><div class="log-delete-confirm" hidden><p>Delete this entry?</p><button type="button" class="log-action" data-log-keep>Keep entry</button><button type="button" class="log-danger" data-log-delete-confirm>Delete entry</button></div><p class="log-detail-error log-error" role="alert"></p>`);
  }
  function field(label,name,value='',extra='') {return `<label class="log-form-field">${label}<input name="${name}" value="${esc(value)}" ${extra}></label>`;}
  function openEditor({lake,snapshot=null,entry=null,returnView=null}) {
    register(lake);captureTrigger();
    const source=entry||snapshot||{},conditions=cleanConditions(source.conditions);
    const draft={date:entry?.date||today(),time:entry?.time||'',species:source.species||'',lure:source.lure||'',image:safeImage(source.image),size:source.size||'',retrieve:source.retrieve||'',rod:source.rod||'',line:source.line||'',colors:entry?.colors||'',conditions,notes:entry?.notes||'',outcome:entry?.outcome||'',catchDetails:entry?.catchDetails||''};
    editor={lake:knownLakes.get(String(lake.id)),original:entry?JSON.parse(JSON.stringify(entry)):null,draft,returnView};view={mode:'editor'};
    const species=typeof fishTypes==='undefined'?[]:Object.values(fishTypes).map(f=>f.name),lures=typeof lureMap==='undefined'?[]:Object.keys(lureMap);
    show(entry?'Edit entry':'Add log entry',editor.lake.name,`<form class="log-entry-form"><p class="log-form-intro">${snapshot?.lure?'Review the setup and conditions to record what you actually used.':'Add what you want to remember from this visit.'}</p><div class="log-form-grid">${field('Date','date',draft.date,'type="date" required')}${field('Time (optional)','time',draft.time,'type="time"')}${field('Target species (optional)','species',draft.species,'list="logSpecies" maxlength="120" autocomplete="off"')}${field('Lure or bait (optional)','lure',draft.lure,'list="logLures" maxlength="120" autocomplete="off"')}</div><datalist id="logSpecies">${species.map(name=>`<option value="${esc(name)}"></option>`).join('')}</datalist><datalist id="logLures">${lures.map(name=>`<option value="${esc(name)}"></option>`).join('')}</datalist><div class="log-editor-image">${draft.image?`<img data-logbook-image src="${esc(draft.image)}" alt="${esc(draft.lure)}">`:''}</div><details class="log-setup-fields"${draft.lure?' open':''}><summary>Setup details</summary><div class="log-form-grid">${field('Size & weight','size',draft.size,'maxlength="160"')}${field('Colour(s) used','colors',draft.colors,'maxlength="160" placeholder="'+esc(snapshot?.suggestedColors?.length?'Suggestions: '+snapshot.suggestedColors.join(', '):'e.g. Green pumpkin')+'"')}${field('Rod','rod',draft.rod,'maxlength="240"')}${field('Line','line',draft.line,'maxlength="240"')}</div>${field('Retrieve','retrieve',draft.retrieve,'maxlength="400"')}</details><details class="log-condition-fields"><summary><span>Conditions</span><span class="log-draft-conditions">${conditionsHTML(conditions)}</span><span class="log-edit-hint">Edit</span></summary><div class="log-condition-options">${window.LakeSetups?.conditionFieldsFor(conditions)||''}</div></details><label class="log-form-field">Your notes<textarea name="notes" rows="4" maxlength="8000" placeholder="Where you fished, what worked, or what you would change next time…">${esc(draft.notes)}</textarea></label><fieldset class="log-outcome-field"><legend>Result (optional)</legend><div class="log-outcome-options">${[['','Not recorded'],['caught','Caught fish'],['none','No catches']].map(([value,label])=>`<label><input type="radio" name="outcome" value="${value}"${draft.outcome===value?' checked':''}><span>${label}</span></label>`).join('')}</div></fieldset><label class="log-form-field log-catch-field"${draft.outcome==='caught'?'':' hidden'}>Catch details (optional)<input name="catchDetails" value="${esc(draft.catchDetails)}" maxlength="400" placeholder="e.g. One smallmouth, released"></label><p class="log-save-error log-error" role="alert"></p><div class="log-form-actions"><button type="button" data-log-cancel>Cancel</button><button type="submit" class="log-save-entry">Save entry</button></div></form>`);
  }
  function updateDraftConditions() {
    const form=dialog.querySelector('form'),values=new FormData(form);
    dialog.querySelector('.log-draft-conditions').innerHTML=conditionsHTML(Object.fromEntries(Object.keys(choices).map(key=>[key,values.get(key)||''])));
  }
  function updateDraftImage(name) {
    const image=safeImage(window.TackleCoach?.imageFor({name})||''),host=dialog.querySelector('.log-editor-image');
    host.innerHTML=image?`<img data-logbook-image src="${esc(image)}" alt="${esc(name)}">`:'';
  }
  function saveEditor(form) {
    const values=new FormData(form),draft=Object.fromEntries(['date','time','species','lure','size','colors','retrieve','rod','line','notes','outcome','catchDetails'].map(key=>[key,text(values.get(key),key==='notes'?8000:key==='catchDetails'?400:400)]));
    if(typeof fishTypes!=='undefined')draft.species=Object.values(fishTypes).find(f=>f.name.toLowerCase()===draft.species.toLowerCase())?.name||draft.species;
    if(!validDate(draft.date)){form.querySelector('.log-save-error').textContent='Choose a valid date for this entry.';return;}
    draft.conditions=cleanConditions(Object.fromEntries(Object.keys(choices).map(key=>[key,values.get(key)||''])));
    if(![draft.species,draft.lure,draft.size,draft.colors,draft.retrieve,draft.rod,draft.line,draft.notes,draft.outcome,...Object.values(draft.conditions)].some(Boolean)){form.querySelector('.log-save-error').textContent='Add a note, species, setup, conditions or result before saving.';return;}
    draft.time=/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(draft.time)?draft.time:'';
    draft.outcome=Object.hasOwn(outcomeLabels,draft.outcome)?draft.outcome:'';if(draft.outcome!=='caught')draft.catchDetails='';
    draft.image=safeImage(window.TackleCoach?.imageFor({name:draft.lure})||'');
    try{
      const data=entries(),original=editor.original;if(original&&!data.some(e=>e.id===original.id))throw new Error('This entry was removed in another view. Close it and add a new entry.');
      const saved={...draft,id:original?.id||uid(),lakeId:editor.lake.id,lakeName:editor.lake.name,lakeTown:editor.lake.town,createdAt:original?.createdAt||new Date().toISOString(),updatedAt:new Date().toISOString()};
      const next=original?data.map(e=>e.id===saved.id?saved:e):[...data,saved];const returnView=editor.returnView;
      write(next);editor=null;if(returnView)openEntry(saved.id,returnView.back);else dialog.close('saved');
    }catch(e){form.querySelector('.log-save-error').textContent=e.message.includes('could not be read')||e.message.includes('another view')?e.message:'Could not save this entry. Browser storage may be unavailable or full. Your draft is still here.';}
  }
  function handleDialogClick(event) {
    if(event.target.closest('[data-log-close]')){dialog.close();return;}
    if(event.target.closest('[data-log-cancel]')){const previous=editor?.returnView;editor=null;if(previous)openEntry(previous.id,previous.back);else dialog.close('cancel');return;}
    const entryCard=event.target.closest('[data-logbook-entry]');if(entryCard){openEntry(entryCard.dataset.logbookEntry,{...view,filters:{...view.filters}});return;}
    if(event.target.closest('[data-log-back]')){view={...view.back,filters:{...view.back.filters}};renderList();return;}
    if(event.target.closest('[data-log-more]')){view.limit+=20;renderListResults();return;}
    const add=event.target.closest('[data-log-add-scoped]');if(add){const lake=knownLakes.get(add.dataset.logAddScoped);if(lake)openEditor({lake});return;}
    if(event.target.closest('[data-log-edit]')){try{const e=entries().find(e=>e.id===view.id);if(e)openEditor({lake:{id:e.lakeId,name:e.lakeName,town:e.lakeTown},entry:e,returnView:{...view}});}catch(e){dialog.querySelector('.log-detail-error').textContent=e.message;}return;}
    if(event.target.closest('[data-log-delete]')){dialog.querySelector('.log-delete-confirm').hidden=false;dialog.querySelector('[data-log-keep]').focus();return;}
    if(event.target.closest('[data-log-keep]')){dialog.querySelector('.log-delete-confirm').hidden=true;dialog.querySelector('[data-log-delete]').focus();return;}
    if(event.target.closest('[data-log-delete-confirm]')){try{const id=view.id,back=view.back;write(entries().filter(e=>e.id!==id));if(back){view=back;renderList();}else dialog.close('deleted');}catch(e){dialog.querySelector('.log-detail-error').textContent='Could not delete the entry. Existing data has not been changed.';}}
  }
  document.addEventListener('click',event=>{
    if(dialog&&event.composedPath().includes(dialog))return;
    if(event.target.closest('[data-logbook-all]')){openList();return;}
    const add=event.target.closest('[data-logbook-add]');if(add){const lake=knownLakes.get(add.dataset.logbookAdd);if(lake){const root=add.closest('.lake-card')?.querySelector('[data-setup-context]');openEditor({lake,snapshot:window.LakeSetups?.snapshotFor(root?.dataset.setupContext)});}return;}
    const list=event.target.closest('[data-logbook-list]');if(list){openList(knownLakes.get(list.dataset.logbookList));return;}
    const entry=event.target.closest('[data-logbook-entry]');if(entry)openEntry(entry.dataset.logbookEntry);
  });
  document.addEventListener('error',event=>{if(event.target.matches?.('img[data-logbook-image]'))event.target.hidden=true;},true);
  window.addEventListener('storage',event=>{if(event.key===KEY||event.key===null)refresh();});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refresh,{once:true});else refresh();
  return {preview,openEditor,openList,entries,count};
})();
