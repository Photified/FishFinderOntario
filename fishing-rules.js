/* Rules are dated source records. Unknown scope or wording never becomes permission. */
window.FishingRules = (() => {
  let data=null, date=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Toronto',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const contexts=new Map();
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const norm=v=>String(v||'').toLowerCase().replace(/[^a-z0-9]/g,'');
  const link='<a href="https://www.ontario.ca/document/ontario-fishing-regulations-summary" target="_blank" rel="noopener noreferrer">Official fishing rules ↗</a>';
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
  function overview(l) {
    const available=data&&current(data), local=records(l.regulationIds), sanct=notices(l), bmz=l.bmz||[], z=zones(l);
    const label=!available?'Rules need checking':closedWater(l)?'No fishing on this date':sanct.length?'Sanctuary notices to check':local.length?'Waterbody exceptions listed':'Choose a fish to check its season';
    return `<div class="rules-summary"><strong class="rule-status ${available&&closedWater(l)?'closed':'check'}">${label}</strong><label class="fishing-date-label">Fishing date<input type="date" class="fishing-date" value="${esc(date)}" aria-label="Fishing date"></label></div>
    <p class="rules-zones">${z.length?z.map(zone => zoneLink(zone) || esc('Fisheries zone '+zone)).join(' / '):'Fisheries zone not confirmed'} · ${bmz.length?esc(bmz.join(' / ')):'Bait zone not confirmed at this point'}</p>
    ${!available?'<p class="rule-caution">'+(data?'Included rules cover 2026. Check the current official guide for this date.':'Rules could not be loaded. Check the official guide before fishing.')+'</p>':''}
    <details class="rules-details"><summary>Fishing rules &amp; bait information${sanct.length?' · sanctuary notices':''}</summary>
    <p>Zones refer to the mapped waterbody location. Large waters can cross boundaries. A season being open does not confirm public access.</p>
    <p>Bait zones control movement and use of baitfish and leeches. Live or dead baitfish and leeches generally cannot cross bait zone boundaries, with limited exceptions. Receipt and personal harvest rules also apply. <a href="https://www.ontario.ca/document/ontario-fishing-regulations-summary/bait" target="_blank" rel="noopener noreferrer">Bait rules ↗</a></p>
    ${bmz.some(s=>/no use/i.test(s))?'<p class="rule-caution">No use or possession of live baitfish at the mapped point.</p>':''}
    ${sanct.length?'<h5>Sanctuary notices</h5><p>Matched by waterbody name and nearby official location. Read the exact area and dates below. A notice can apply to only part of a waterbody or to a neighbouring water.</p>'+detailList(sanct):'<p>No sanctuary notice was matched. This is not confirmation that fishing is permitted everywhere.</p>'}
    ${local.length?'<h5>Waterbody exceptions</h5>'+detailList(local):''}${base(l).length?'<h5>Zone rules</h5>'+detailList(base(l)):''}
    <p>2026 regulations, source file dated ${esc(data?.sourceDate||'unavailable')}. S = Sport licence; C = Conservation licence. Limits and residency conditions still apply.</p>${link} · <a href="https://www.ontario.ca/page/fishing-notices-and-updates" target="_blank" rel="noopener noreferrer">Notices &amp; updates ↗</a></details>`;
  }
  function forSpecies(l,fish) {
    if(!l)return {html:'',blocked:false,allow:()=>true};
    if(!data||!current(data))return {html:'<div class="species-rules"><strong>Check the official rules for this date.</strong><p>Current fishing status and bait restrictions cannot be confirmed from the included data.</p>'+link+'</div>',blocked:false,allow:()=>true};
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
    return {blocked,allow,html:`<div class="species-rules"><strong class="rule-status ${blocked?'closed':open?'open':'check'}">${title}</strong><p>${esc(date)} · ${zones(l).map(zone => zoneLink(zone)).filter(Boolean).join(' / ') || link}</p>${open?'<p>Check limits, local notices and access before fishing.</p>':''}${blocked?'<p>Bait and tackle suggestions are hidden for this date. Choose another date to plan a trip.</p>':''}<details><summary>Seasons, limits &amp; restrictions</summary>${detailList(zr)}${detailList(local)}${detailList(base(l))}${detailList(baitRows.filter(r=>!local.includes(r)&&r.kind!=='zone'))}${notices(l).length?'<p class="rule-caution">See the sanctuary notices above for exact areas and closure dates.</p>':''}</details>${anyBaitRestriction?'<p class="rule-caution">Bait restrictions are listed. Natural bait suggestions are hidden conservatively, including where the rule covers only a section, season, species or method. Check the wording above before choosing your tackle.</p>':liveBan?'<p>Live baitfish suggestions are hidden for this mapped location.</p>':''}${baitRows.some(r=>r.gear)?'<p class="rule-caution">Gear restrictions apply. Check hook and method requirements above.</p>':''}</div>`};
  }
  function render(id,l){contexts.set(id,l);return `<section class="lake-section lake-rules" data-rules-context="${esc(id)}"><h4>Fishing information</h4><div class="rules-body">${overview(l)}</div></section>`;}
  document.addEventListener('change',e=>{if(!e.target.matches('.fishing-date'))return;if(!/^\d{4}-\d{2}-\d{2}$/.test(e.target.value))return;date=e.target.value;document.querySelectorAll('[data-rules-context]').forEach(root=>{const lake=contexts.get(root.dataset.rulesContext);root.querySelector('.rules-body').innerHTML=overview(lake);const flag=root.closest('.lake-card')?.querySelector('.fishing-badge');if(flag)flag.innerHTML=badge(lake);});window.LakeSetups?.refresh();});
  function badge(l) { return data && current(data) && closedWater(l) ? '<span class="lake-closure-badge">No fishing · '+esc(date)+'</span>' : ''; }
  return {init:d=>{data=d;},badge,render,forSpecies,seasonStatus,whole,matches,closedWater};
})();
