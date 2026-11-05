/* Rules are dated source records. Unknown scope or wording never becomes permission. */
window.FishingRules = (() => {
  let data=null, date=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Toronto',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const contexts=new Map();
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const norm=v=>String(v||'').toLowerCase().replace(/[^a-z0-9]/g,'');
  const zones=l=>[...new Set(String(l?.fmz||'').match(/\d+/g)||[])];
  const records=ids=>(ids||[]).map(id=>data?.records[id]).filter(Boolean);
  const current=r=>date>=(r?.effective||data?.effective||'9999') && date<=(r?.expiry||data?.expiry||'0000');
  const names=l=>[l.name,l.aliasName,...(l.searchAliases||[])].filter(Boolean).map(norm);
  function whole(l,r) {
    // Accept a single named waterbody, optionally followed only by its township/district.
    const desc=String(r.description||'').replace(/\(\s*\d[^)]*[NW][^)]*\)/gi,'').trim().replace(/\.$/,'');
    const parts=desc.split(/\s+[-–]\s+/);
    return names(l).includes(norm(parts[0])) && (parts.length===1 || (parts.length===2 && /^[\p{L}\s,.'&-]+\s(?:Townships?|Twps?|District)\.?$/u.test(parts[1])));
  }
  const months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  const weekdays=['sun','mon','tue','wed','thu','fri','sat'];
  function endpoint(text,year) {
    let s=text.toLowerCase().replace(/\./g,'').replace(/\bthe\b/g,'').replace(/\s+/g,' ').trim();
    for(const [a,b] of Object.entries({first:'1st',second:'2nd',third:'3rd',fourth:'4th',fifth:'5th'}))s=s.replaceAll(a,b);
    const make=(m,d)=>new Date(Date.UTC(year,m,d));
    let m=s.match(/^(day|sunday|sun|monday|mon|tuesday|tues|tue|wednesday|wed|thursday|thurs|thu|friday|fri|saturday|sat) (before|after) (.+)$/);
    if(m){const d=endpoint(m[3],year);if(!d)return null;let step=m[2]==='before'?-1:1;d.setUTCDate(d.getUTCDate()+step);if(m[1]!=='day'){const day=weekdays.indexOf(m[1].slice(0,3));while(d.getUTCDay()!==day)d.setUTCDate(d.getUTCDate()+step);}return d;}
    if(s==='labour day')return endpoint('1st mon in sep',year);
    if(s==='family day (ontario)'||s==='family day')return endpoint('3rd mon in feb',year);
    m=s.match(/^last day in ([a-z]+)$/);if(m){const mo=months.indexOf(m[1].slice(0,3));return mo<0?null:make(mo+1,0);}
    m=s.match(/^([1-5])(?:st|nd|rd|th) ([a-z]+) in ([a-z]+)$/);
    if(m){const mo=months.indexOf(m[3].slice(0,3)),day=weekdays.indexOf(m[2].slice(0,3));if(mo<0||day<0)return null;const d=make(mo,1);d.setUTCDate(1+(day-d.getUTCDay()+7)%7+7*(Number(m[1])-1));return d;}
    m=s.match(/^([a-z]+)\s*(\d{1,2})$/);if(m){const mo=months.indexOf(m[1].slice(0,3)),day=Number(m[2]);if(mo<0)return null;const d=make(mo,day);return d.getUTCMonth()===mo?d:null;}
    return null;
  }
  function seasonStatus(text,when=date) {
    if(!text || !/^\d{4}-\d{2}-\d{2}$/.test(when))return null;
    let s=text.toLowerCase().trim();if(/night|refer to/.test(s))return null;
    if(/closed (?:to angling )?all year|closed to angling all year/.test(s))return false;
    if(/^open all year\.?$/.test(s))return true;
    const closed=/no fishing|closed to all species/.test(s);
    s=s.replace(/^fish sanctuary\s*[-–]\s*/,'').replace(/^no fishing\s*[-–]?\s*/,'').replace(/^closed to all species\s*/,'').replace(/^extended fall season\s*\((.*)\)$/,'$1').replace(/^(?:open\s+)?(?:from\s+)?/,'').replace(/[–]/g,'-').replace(/\.$/,'').replace(/\bfrom\s+/g,'');
    const chunks=s.split(/\s*&\s*|,\s*(?:and\s+)?|\s+and\s+/).filter(Boolean);let found=false;
    for(const chunk of chunks){const ends=chunk.split(/\s+-\s+|\s+to\s+/);if(ends.length!==2)return null;const a=endpoint(ends[0],+when.slice(0,4)),b=endpoint(ends[1],+when.slice(0,4));if(!a||!b)return null;const t=Date.parse(when+'T00:00:00Z');found ||= a<=b ? t>=a&&t<=b : t>=a||t<=b;}
    return chunks.length ? (closed?!found:found):null;
  }
  function matches(label,fish) {
    const s=norm(label);if(!s||s==='allspecies')return true;
    const terms={largemouth:['largemouth','basslargemouthandsmallmouth'],smallmouth:['smallmouth'],pike:['northernpike'],muskie:['muskellunge','muskie'],perch:['yellowperch'],crappie:['crappie'],bluegill:['sunfish','bluegill'],catfish:['channelcatfish'],carp:['commoncarp'],chinooksalmon:['chinook','pacificsalmon'],cohosalmon:['coho','pacificsalmon']};
    return (terms[fish]||[fish]).some(t=>s.includes(t));
  }
  function base(l){return zones(l).flatMap(z=>records(data?.zoneRules[z]));}
  function notices(l){return records(l.sanctuaryIds);}
  function confirmedSanctuaries(l){return records(l.wholeSanctuaryIds);}
  function closedWater(l){return confirmedSanctuaries(l).some(r=>current(r)&&seasonStatus(r.sanctuary)===false);}
  function zoneLink(zone, label = 'Fisheries zone ' + zone) {
    if(!/^(?:[1-9]|1[0-9]|20)$/.test(zone)) return '';
    return `<a href="https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-${zone}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`;
  }
  function ruleHTML(r){
    const fields=[['Species',r.species],['Season',r.season||r.sanctuary],['Limits',r.limit],['Licence / residency',r.limitType],['Size',r.sizeLimit],['Bait',r.bait],['Gear',r.gear],['Other rules',r.general],['Time',r.timeOfDay],['Impounding',r.impounding],['Tag',r.tag]];
    const partial = /\b(?:portion of|part of|part that|part thereof|upstream (?:of|from|to)|downstream (?:of|from|to)|between .+ and .+|extending from .+ to .+|excluding)\b/i.test(r.description || '');
    return `<div class="rule-record">${partial ? '<p class="rule-caution">Applies to the area described below. Check the exact boundaries.</p>' : ''}${r.description?`<p><strong>${esc(r.description)}</strong></p>`:''}${r.kind==='nonCanadian'?'<p><strong>Non-Canadian resident rules</strong></p>':''}${fields.filter(([,v])=>v).map(([k,v])=>`<p><b>${k}:</b> ${esc(v)}</p>`).join('')}${r.aggregate==='Yes'?'<p>Counts toward the aggregate trout and salmon limit. Check the official guide.</p>':''}${r.description && r.zone ? `<p>${zoneLink(r.zone, 'Official zone ' + r.zone + ' wording')}</p>` : ''}${r.description?.length>=250?'<p class="rule-caution">The source description may be shortened. Read the complete area description in the official guide.</p>':''}</div>`;
  }
  function detailList(rows){const seen=new Set();return rows.filter(r=>{const k=JSON.stringify(r);if(seen.has(k))return false;seen.add(k);return true;}).map(ruleHTML).join('');}
  const officialGuide = '<a href="https://www.ontario.ca/document/ontario-fishing-regulations-summary" target="_blank" rel="noopener noreferrer">Official Ontario fishing regulations ↗</a>';

  function limitEntry(rule) {
    if (!rule.limit || /^refer to\b/i.test(rule.limit)) return null;
    const type = rule.limitType || '';
    const wording = rule.limit.replace(/^Possession limit\s+/i, '');
    const code = wording.match(/^([SC])\s*[-–—]\s*/i);
    const licence = /conservation/i.test(type) ? 'C' : /sport/i.test(type) ? 'S' : code?.[1].toUpperCase();
    if (!licence) return null;
    const label = /catch.*possession/i.test(type) ? 'Daily catch and possession'
      : /possession/i.test(type) ? 'Possession'
      : /catch/i.test(type) || /\bin one day\b/i.test(wording) ? 'Daily catch'
      : 'Limit';
    const value = code ? wording.slice(code[0].length) : wording;
    return {licence, label, wording:label === 'Daily catch' ? value.replace(/^(\d+) in one day$/i, '$1') : value};
  }

  function limitGroups(rules, local = false) {
    const groups = new Map();
    for (const rule of rules) {
      const entry = limitEntry(rule);
      if (!entry) continue;
      const key = JSON.stringify([rule.zone, rule.species, rule.description, rule.kind]);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push({rule, ...entry});
    }
    return Array.from(groups.values(), entries => {
      const {rule} = entries[0];
      const variedSeasons = new Set(entries.map(({rule:r}) => r.season)).size > 1;
      const commonSize = entries.every(({rule:r}) => r.sizeLimit === rule.sizeLimit) ? rule.sizeLimit : '';
      const columns = [['S','Sport licence'], ['C','Conservation licence']].map(([code,name]) => {
        const rows = new Set();
        const licenceEntries = entries.filter(item => item.licence === code)
          .sort((a,b) => Number(a.label === 'Possession') - Number(b.label === 'Possession'));
        for (const entry of licenceEntries) {
          const {rule:r, label, wording} = entry;
          const season = r.season && !/^refer to\b/i.test(r.season) && (local || variedSeasons) ? r.season : '';
          const conditions = [season, !commonSize && r.sizeLimit, r.general].filter(Boolean);
          rows.add(`<div><strong>${label}:</strong> ${esc(wording)}${conditions.map(text => `<small>${esc(text)}</small>`).join('')}</div>`);
        }
        return `<div><dt>${name}</dt><dd>${Array.from(rows).join('') || 'See official rules'}</dd></div>`;
      }).join('');
      return `<div class="catch-limit-group"><p><strong>${esc(rule.species || 'All species')}</strong> · FMZ ${esc(rule.zone)}${rule.kind === 'nonCanadian' ? ' · Non-Canadian residents' : ''}</p>
        ${local && rule.description ? '<p class="rule-caution">Applies only to the listed area. <button type="button" class="rules-text-button" data-rules-open="local">View exact area</button></p>' : ''}
        <dl class="catch-limit-licences">${columns}</dl>${commonSize ? `<p>${esc(commonSize)}</p>` : ''}</div>`;
    }).join('');
  }

  function catchLimits(zoneRules, local, blocked, uncertain) {
    const title = '<h5>Catch and possession limits</h5>';
    if (blocked) return `<section class="catch-limits">${title}<p>Fishing is closed for this selection on the chosen date.</p></section>`;
    const standard = limitGroups(zoneRules);
    const exceptions = limitGroups(local, true);
    const localChanges = local.some(r => r.limit && !/^refer to\b/i.test(r.limit) || r.sizeLimit || r.general || r.tag || r.season && !/^refer to\b/i.test(r.season));
    const reference = localChanges || uncertain;
    const baseline = standard ? (reference ? `<details><summary>Zone-wide limits for reference</summary>${standard}</details>` : standard)
      : '<p>No zone-wide limit is listed for this species in the app’s data. Check the official regulations.</p>';
    return `<section class="catch-limits">${title}
      ${localChanges ? '<p><strong>Local rules may change these limits.</strong> Confirm the exact area and dates in the official regulations.</p>' : ''}
      ${!localChanges && uncertain ? '<p>Check the exact zone and any local closures for where you plan to fish.</p>' : ''}
      ${exceptions}${baseline}
      ${zoneRules.some(r => r.aggregate === 'Yes') ? '<p>Also counts toward the combined trout and salmon limit.</p>' : ''}
      </section>`;
  }

  const ruleButtons = '<button type="button" data-rules-open="local">Lake-specific rules</button><button type="button" data-rules-open="fishing">Fishing rules</button><button type="button" data-rules-open="bait">Bait rules</button>';
  function overview(l) {
    const available=data&&current(data), sanct=notices(l), bmz=l.bmz||[], z=zones(l);
    const warning=!available?'Rules need checking':closedWater(l)?'No fishing on this date':sanct.length?'Sanctuary notices to check':'';
    return `${warning?`<p><strong class="rule-status ${available&&closedWater(l)?'closed':'check'}">${warning}</strong></p>`:''}
      <div class="rules-actions" role="group" aria-label="Waterbody rules">${ruleButtons.replaceAll('data-rules-open', 'aria-haspopup="dialog" data-rules-open')}</div>
      <div class="rules-summary"><label class="fishing-date-label">Fishing date<input type="date" class="fishing-date" value="${esc(date)}" aria-label="Fishing date"></label>
      <p class="rules-zones">${z.length?z.map(zone=>zoneLink(zone)||esc('Fisheries zone '+zone)).join(' / '):'Fisheries zone not confirmed'} · ${bmz.length?esc(bmz.join(' / ')):'Bait zone not confirmed'}</p></div>
      ${!available?'<p class="rule-caution">'+(data?'Included rules cover 2026. Check the current official guide for this date.':'Rules could not be loaded. Check the official guide before fishing.')+'</p>':''}
      ${bmz.some(s=>/no use/i.test(s))?'<p class="rule-caution">No use or possession of live baitfish at the mapped point.</p>':''}`;
  }

  let rulesDialog, activeRules, rulesTrigger;
  function renderDialog() {
    const {lake:l, fish, fishName, section, all}=activeRules;
    const filter=rows=>fish&&!all?rows.filter(r=>matches(r.species,fish)):rows;
    const local=filter(records(l.regulationIds)), sanct=notices(l), z=zones(l);
    const seasons=filter(z.flatMap(zone=>records(data?.zoneSeasons[zone])));
    const general=base(l);
    const bait=[...base(l),...records(l.regulationIds)].filter(r=>r.bait||r.gear);
    const warning=!data||!current(data)?'<p class="rule-caution">The included rules are unavailable for the chosen date. Check the current official regulations.</p>':'';
    let content='';
    if(section==='local') content=`${sanct.length?'<h3>Sanctuary notices</h3><p class="rule-caution">Read the exact areas and dates. A notice may cover only part of a waterbody or a neighbouring water.</p>'+detailList(sanct):''}<h3>Lake-specific rules${fish&&!all?' for '+esc(fishName):''}</h3>${local.length?detailList(local):'<p>No lake-specific record is matched for this selection. This does not confirm that fishing is permitted everywhere.</p>'}`;
    if(section==='fishing') content=`${fish&&!all?'<h3>'+esc(fishName)+'</h3>':'<h3>Species seasons and limits</h3>'}${detailList(seasons)||'<p>No species season or limit is available for this selection in the app’s data.</p>'}${local.length?'<h3>Lake-specific rules</h3>'+detailList(local):''}${general.length?'<h3>Other zone rules</h3>'+detailList(general):''}${sanct.length?'<h3>Sanctuary notices</h3><p class="rule-caution">Check the exact areas and closure dates.</p>'+detailList(sanct):''}`;
    if(section==='bait') content=`<h3>Bait and gear</h3><p>${esc((l.bmz||[]).join(' / ')||'Bait zone not confirmed at this point')}</p>${(l.bmz||[]).some(s=>/no use/i.test(s))?'<p class="rule-caution">No use or possession of live baitfish at the mapped point.</p>':''}<p>Listed restrictions may depend on the area, season, species or method. Check each record’s scope.</p>${detailList(bait)||'<p>No additional bait or gear record was matched. General Ontario bait rules still apply.</p>'}<p><a href="https://www.ontario.ca/document/ontario-fishing-regulations-summary/bait" target="_blank" rel="noopener noreferrer">Official Ontario bait rules ↗</a></p>`;
    rulesDialog.querySelector('#lakeRulesTitle').textContent=l.name+' rules';
    rulesDialog.querySelector('.rules-dialog-meta').innerHTML=`${esc(date)} · ${z.length?z.map(zone=>zoneLink(zone)).join(' / '):'Zone not confirmed'}`;
    rulesDialog.querySelectorAll('[data-rules-open]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.rulesOpen===section)));
    rulesDialog.querySelector('.rules-species-filter').innerHTML=fish&&section!=='bait'?`<span>${all?'Showing all species':'Selected fish: '+esc(fishName)}</span><button type="button" class="rules-text-button" data-rules-scope>${all?'Show selected fish':'Show all species'}</button>`:'';
    rulesDialog.querySelector('.rules-dialog-content').innerHTML=warning+content+`<p class="record-note">2026 regulations, source file dated ${esc(data?.sourceDate||'unavailable')}. S = Sport licence; C = Conservation licence. Limits and residency conditions still apply.</p><p>${officialGuide} · <a href="https://www.ontario.ca/page/fishing-notices-and-updates" target="_blank" rel="noopener noreferrer">Notices &amp; updates ↗</a></p>`;
    rulesDialog.scrollTop=0;
  }
  function openRules(trigger) {
    const card=trigger.closest('.lake-card');
    const root=card?.querySelector('[data-rules-context]');
    const lake=contexts.get(root?.dataset.rulesContext);
    if(!lake)return;
    const selected=card.querySelector('[data-setup-fish][aria-pressed="true"]');
    activeRules={lake,fish:selected?.dataset.setupFish,fishName:selected?.textContent.trim(),section:trigger.dataset.rulesOpen,all:false};
    rulesTrigger=trigger;
    if(!rulesDialog){
      rulesDialog=document.createElement('dialog');
      rulesDialog.className='simple-dialog lake-rules-dialog';
      rulesDialog.id='lakeRulesDialog';
      rulesDialog.setAttribute('aria-labelledby','lakeRulesTitle');
      rulesDialog.innerHTML=`<div class="rules-dialog-header"><div class="dialog-heading"><h2 id="lakeRulesTitle"></h2><button type="button" data-rules-close aria-label="Close rules">✕</button></div><p class="rules-dialog-meta"></p><div class="rules-actions" role="group" aria-label="Choose rule details">${ruleButtons}</div><div class="rules-species-filter"></div></div><div class="rules-dialog-content"></div>`;
      document.body.append(rulesDialog);
      rulesDialog.addEventListener('click',event=>{
        if(event.target.closest('[data-rules-close]'))rulesDialog.close();
        const button=event.target.closest('[data-rules-open]');
        if(button){activeRules.section=button.dataset.rulesOpen;renderDialog();}
        if(event.target.closest('[data-rules-scope]')){activeRules.all=!activeRules.all;renderDialog();}
      });
      rulesDialog.addEventListener('close',()=>{if(rulesTrigger?.isConnected)rulesTrigger.focus({preventScroll:true});});
    }
    renderDialog();
    rulesDialog.showModal();
    rulesDialog.querySelector('[data-rules-close]').focus({preventScroll:true});
  }
  document.addEventListener('click',event=>{
    const trigger=event.target.closest('[data-rules-open]');
    if(trigger&&!trigger.closest('#lakeRulesDialog'))openRules(trigger);
  });
  function forSpecies(l,fish) {
    if(!l)return {html:'',blocked:false,allow:()=>true};
    if(!data||!current(data))return {html:`<div class="species-rules"><strong>Check the official rules for this date.</strong><p>Catch limits, seasons and bait restrictions are unavailable for this date in the app’s data.</p><p>${officialGuide}</p></div>`,blocked:false,allow:()=>true};
    const zr=zones(l).flatMap(z=>records(data.zoneSeasons[z])).filter(r=>current(r)&&matches(r.species,fish));
    const local=records(l.regulationIds).filter(r=>current(r)&&matches(r.species,fish));
    const scoped=local.filter(r=>r.kind!=='nonCanadian'&&r.season&&!/refer to/i.test(r.season));
    const wholeRules=scoped.filter(r=>whole(l,r));
    const uncertain=scoped.some(r=>!whole(l,r)) || notices(l).some(r=>current(r)&&!confirmedSanctuaries(l).includes(r)) || zones(l).length!==1;
    const selected=wholeRules.length?wholeRules:zr;
    const states=selected.map(r=>seasonStatus(r.season));
    const blocked=closedWater(l)||(!uncertain && states.length>0 && states.every(x=>x===false));
    const open=!uncertain && states.length>0 && states.every(x=>x===true);
    const title=closedWater(l)?'No fishing on this date':blocked?'Species season closed':open?(wholeRules.length?'Species season open':'Zone season open'):'Check local season and area';
    const baitRows=[...base(l),...records(l.regulationIds)].filter(r=>current(r)&&(r.bait||r.gear)&&(!/while angling for lake trout/i.test(r.bait||'')||fish==='laketrout'));
    // For partial/conditional bait rules, show artificial options conservatively and retain exact wording.
    const text=baitRows.map(r=>(r.bait||'')+' '+(r.gear||'')).join(' ').toLowerCase();
    const natural=/\b(live|dead|cut bait|nightcrawler|night crawler|leech|roe|spawn sac|salmon egg|chicken liver|chicken livers|cutbait|minnow|minnows|worms|dough|corn|bread|maggot|waxworm|mealworm|earthworm)s?\b/i;
    const fishbait=/\b(live|dead|cut bait|roe|spawn sac|salmon egg|smelt|shad|herring|sucker)\b/i;
    const naturalWorm=s=>/worm/i.test(s)&&!/plastic|rubber|soft|rig|wacky|senko|stickbait/i.test(s);
    const anyBaitRestriction=baitRows.some(r=>r.bait&&!/^(dead (rainbow )?smelt may)/i.test(r.bait));
    const liveBan=(l.bmz||[]).some(s=>/no use/i.test(s))||/live fish may not/.test(text);
    const allow=lure=>{const s=lure.name+' '+lure.technique;
      if(/only artificial flies/.test(text)&&!/fly|flies|nymph|streamer/i.test(lure.name))return false;
      if(anyBaitRestriction&&(natural.test(s)||naturalWorm(lure.name)||fishbait.test(s)||/powerbait|scented bait|pack bait|stink bait|with bait|boilie/i.test(s)))return false;
      if(liveBan&&/\blive\b/i.test(s))return false;
      return true;};
    return {blocked,allow,html:`<div class="species-rules"><strong class="rule-status ${blocked?'closed':open?'open':'check'}">${title}</strong><p>${esc(date)}${zones(l).map(zone => zoneLink(zone)).filter(Boolean).map((link, i) => (i ? ' / ' : ' · ') + link).join('')}</p>${catchLimits(zr,local,blocked,uncertain)}${Array.from(new Set(local.filter(r=>r.sizeLimit&&!limitEntry(r)).map(r=>r.sizeLimit))).map(size=>`<p class="rule-caution"><strong>Size:</strong> ${esc(size)} · <button type="button" class="rules-text-button" data-rules-open="local">Check area</button></p>`).join('')}${blocked?'<p>Bait and tackle suggestions are hidden for this date. Choose another date to plan a trip.</p>':''}<p><button type="button" class="rules-text-button" data-rules-open="fishing">View full rules</button></p>${anyBaitRestriction?'<p class="rule-caution">Bait restrictions are listed. Natural bait suggestions are hidden conservatively, including where the rule covers only a section, season, species or method. <button type="button" class="rules-text-button" data-rules-open="bait">View bait rules</button> before choosing your tackle.</p>':liveBan?'<p>Live baitfish suggestions are hidden for this mapped location.</p>':''}${baitRows.some(r=>r.gear)?'<p class="rule-caution">Gear restrictions are listed. <button type="button" class="rules-text-button" data-rules-open="bait">View bait and gear rules</button>.</p>':''}</div>`};
  }
  function render(id,l){contexts.set(id,l);return `<section class="lake-section lake-rules" data-rules-context="${esc(id)}"><div class="rules-body">${overview(l)}</div></section>`;}
  document.addEventListener('change',e=>{if(!e.target.matches('.fishing-date'))return;if(!/^\d{4}-\d{2}-\d{2}$/.test(e.target.value))return;date=e.target.value;document.querySelectorAll('[data-rules-context]').forEach(root=>{const lake=contexts.get(root.dataset.rulesContext);const body=root.querySelector('.rules-body');body.innerHTML=overview(lake);const flag=root.closest('.lake-card')?.querySelector('.fishing-badge');if(flag)flag.innerHTML=badge(lake);});window.LakeSetups?.refresh();});
  function badge(l) { return data && current(data) && closedWater(l) ? '<span class="lake-closure-badge">No fishing · '+esc(date)+'</span>' : ''; }
  return {init:d=>{data=d;},badge,render,forSpecies,seasonStatus,whole,matches,closedWater};
})();
