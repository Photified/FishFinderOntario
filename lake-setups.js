/* Fishing recommendations share the waterbody's context and existing recommendation data. */
window.LakeSetups = (() => {
  const contexts = new Map();
  const speciesLabels = {"rainbowtrout": "Rainbow Trout", "brooktrout": "Brook Trout", "cisco": "Cisco", "whitesucker": "White Sucker", "yellowperch": "Yellow Perch", "fatheadminnow": "Fathead Minnow", "finescaledace": "Finescale Dace", "northernpearldace": "Northern Pearl Dace", "redsidedace": "Redside Dace", "shortheadredhorse": "Shorthead Redhorse", "brookstickleback": "Brook Stickleback", "lakechub": "Lake Chub", "northernredbellydace": "Northern Redbelly Dace", "slimysculpin": "Slimy Sculpin", "blacknoseshiner": "Blacknose Shiner", "laketrout": "Lake Trout", "lakewhitefish": "Lake Whitefish", "northernpike": "Northern Pike", "spottailshiner": "Spottail Shiner", "burbot": "Burbot", "commonshiner": "Common Shiner", "iowadarter": "Iowa Darter", "mottledsculpin": "Mottled Sculpin", "bluntnoseminnow": "Bluntnose Minnow", "brownbullhead": "Brown Bullhead", "creekchub": "Creek Chub", "goldenshiner": "Golden Shiner", "pumpkinseed": "Pumpkinseed", "largemouthbass": "Largemouth Bass", "smallmouthbass": "Smallmouth Bass", "americaneel": "American Eel", "blackcrappie": "Black Crappie", "channelcatfish": "Channel Catfish", "logperch": "Logperch", "rockbass": "Rock Bass", "silverredhorse": "Silver Redhorse", "troutperch": "Trout-Perch", "walleye": "Walleye", "longnosesucker": "Longnose Sucker", "roundwhitefish": "Round Whitefish", "brassyminnow": "Brassy Minnow", "fallfish": "Fallfish", "blacknosedace": "Blacknose Dace", "longnosedace": "Longnose Dace", "bluegill": "Bluegill", "herrings": "Herrings", "muskellunge": "Muskellunge", "rainbowsmelt": "Rainbow Smelt", "sculpins": "Sculpins", "browntrout": "Brown Trout", "carpsandminnows": "Carps And Minnows", "blackchinshiner": "Blackchin Shiner", "bandedkillifish": "Banded Killifish", "centralmudminnow": "Central Mudminnow", "emeraldshiner": "Emerald Shiner", "commoncarp": "Common Carp", "johnnydarterxtesselateddarter": "Johnny Darter X Tesselated Darter", "mimicshiner": "Mimic Shiner", "moxostomasp": "Moxostoma Sp.", "rosyfaceshiner": "Rosyface Shiner", "ninespinestickleback": "Ninespine Stickleback", "cottussp": "Cottus Sp.", "sauger": "Sauger", "pikes": "Pikes", "greaterredhorse": "Greater Redhorse", "deepwatersculpin": "Deepwater Sculpin", "lakesturgeon": "Lake Sturgeon", "mooneye": "Mooneye", "northernsunfish": "Northern Sunfish", "riverdarter": "River Darter", "splake": "Splake", "cohosalmon": "Coho Salmon", "americanbrooklamprey": "American Brook Lamprey", "pinksalmon": "Pink Salmon", "sticklebacks": "Sticklebacks", "johnnydarter": "Johnny Darter", "stonecat": "Stonecat", "longnosegar": "Longnose Gar", "riverchub": "River Chub", "riverredhorse": "River Redhorse", "sunfishes": "Sunfishes", "blacksidedarter": "Blackside Darter", "whitefishsubfamily": "Whitefish Subfamily", "marginedmadtom": "Margined Madtom", "spotfinshiner": "Spotfin Shiner", "blackbullhead": "Black Bullhead", "brindledmadtom": "Brindled Madtom", "brooksilverside": "Brook Silverside", "fantaildarter": "Fantail Darter", "gizzardshad": "Gizzard Shad", "goldenredhorse": "Golden Redhorse", "goldfish": "Goldfish", "greensunfish": "Green Sunfish", "greensidedarter": "Greenside Darter", "hornyheadchub": "Hornyhead Chub", "ictalurussp": "Ictalurus Sp.", "leastdarter": "Least Darter", "northernhogsucker": "Northern Hog Sucker", "rainbowdarter": "Rainbow Darter", "redfinshiner": "Redfin Shiner", "spottedgar": "Spotted Gar", "suckers": "Suckers", "tadpolemadtom": "Tadpole Madtom", "troutperches": "Trout-Perches", "whitebass": "White Bass", "whitecrappie": "White Crappie", "whiteperch": "White Perch", "yellowbullhead": "Yellow Bullhead", "alewife": "Alewife", "roundgoby": "Round Goby", "bowfin": "Bowfin", "chinooksalmon": "Chinook Salmon", "freshwaterdrum": "Freshwater Drum", "lampreys": "Lampreys", "perches": "Perches", "sandshiner": "Sand Shiner", "blackredhorse": "Black Redhorse", "centralstoneroller": "Central Stoneroller", "etheostomasp": "Etheostoma Sp.", "notropissp": "Notropis Sp.", "quillback": "Quillback", "silvershiner": "Silver Shiner", "stripedshiner": "Striped Shiner", "northernbrooklamprey": "Northern Brook Lamprey", "easternsilveryminnow": "Eastern Silvery Minnow", "spoonheadsculpin": "Spoonhead Sculpin", "sealamprey": "Sea Lamprey", "stripedbass": "Striped Bass", "threespinestickleback": "Threespine Stickleback", "sockeyesalmon": "Sockeye Salmon", "atlanticsalmon": "Atlantic Salmon", "salmonandtroutsubfamily": "Salmon And Trout Subfamily", "nocomissp": "Nocomis Sp.", "grasspickerel": "Grass Pickerel", "goldfishxcarp": "Goldfish X Carp", "lepomissp": "Lepomis Sp.", "lumpfish": "Lumpfish", "northernmadtom": "Northern Madtom", "catostomussp": "Catostomus Sp.", "northamericancatfishes": "North American Catfishes", "northernredbellydacexfinescaledace": "Northern Redbelly Dace X Finescale Dace", "pimephalessp": "Pimephales Sp.", "cyprinidaehybrids": "Cyprinidae Hybrids", "chumsalmon": "Chum Salmon", "rhinichthyssp": "Rhinichthys Sp.", "salmonidaehybrids": "Salmonidae Hybrids", "smelts": "Smelts", "drums": "Drums", "fourhornsculpin": "Fourhorn Sculpin", "goldeye": "Goldeye", "blackfincisco": "Blackfin Cisco", "shortjawcisco": "Shortjaw Cisco", "lakechubsucker": "Lake Chubsucker", "silverlamprey": "Silver Lamprey", "fatheadminnowxbluntnoseminnow": "Fathead Minnow X Bluntnose Minnow", "bloater": "Bloater", "nipigoncisco": "Nipigon Cisco", "rivershiner": "River Shiner", "chub": "Chub", "fourspinestickleback": "Fourspine Stickleback", "spottedsucker": "Spotted Sucker", "auroratrout": "Aurora Trout", "bluepike": "Blue Pike", "logperchxchanneldarter": "Logperch X Channel Darter", "notropishybrids": "Notropis Hybrids", "chrosomussp": "Chrosomus Sp.", "finescaledacexnorthernpearldace": "Finescale Dace X Northern Pearl Dace", "northernredbellydacexnorthernpearldace": "Northern Redbelly Dace X Northern Pearl Dace", "micropterussp": "Micropterus Sp.", "ichthyomyzonsp": "Ichthyomyzon Sp.", "channeldarter": "Channel Darter", "tessellateddarter": "Tessellated Darter", "alosasp": "Alosa Sp.", "ameiurussp": "Ameiurus Sp.", "centrarchidaehybrids": "Centrarchidae Hybrids", "bridleshiner": "Bridle Shiner", "arcticchar": "Arctic Char", "percinasp": "Percina Sp.", "pugnoseshiner": "Pugnose Shiner", "cods": "Cods", "tigermuskellunge": "Tiger Muskellunge", "semotilussp": "Semotilus Sp.", "mottledsculpinxslimysculpin": "Mottled Sculpin X Slimy Sculpin", "blackbullheadxbrownbullhead": "Black Bullhead X Brown Bullhead", "noturussp": "Noturus Sp.", "salmosp": "Salmo Sp.", "orangespottedsunfish": "Orangespotted Sunfish", "lepomishybrids": "Lepomis Hybrids", "topminnows": "Topminnows", "coregonussp": "Coregonus Sp.", "pugnoseminnow": "Pugnose Minnow", "pumpkinseedxbluegill": "Pumpkinseed X Bluegill", "esoxsp": "Esox Sp.", "cutlipminnow": "Cutlip Minnow", "chrosomushybrids": "Chrosomus Hybrids", "luxilussp": "Luxilus Sp.", "ghostshiner": "Ghost Shiner", "arcticgrayling": "Arctic Grayling", "baitfish": "Baitfish", "bigmouthbuffalo": "Bigmouth Buffalo", "blackbuffalo": "Black Buffalo", "bowfins": "Bowfins", "chainpickerel": "Chain Pickerel", "commonshinerxcreekchub": "Common Shiner x Creek Chub", "deepwatercisco": "Deepwater Cisco", "easternsanddarter": "Eastern Sand Darter", "flatheadcatfish": "Flathead Catfish", "freshwatertubenosegoby": "Freshwater Tubenose Goby", "grasscarp": "Grass Carp", "gravelchub": "Gravel Chub", "kiyi": "Kiyi", "pygmywhitefish": "Pygmy Whitefish", "rudd": "Rudd", "silverchub": "Silver Chub", "unidentifiable": "Unidentifiable", "warmouth": "Warmouth"};
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const groups = {weather:weatherTypes, clarity:clarityTypes, temp:tempTypes};

  function matchingRecommendations(fish, conditions) {
    const matches = [];
    for (const [weather, clarities] of Object.entries(recommendations[fish] || {})) {
      if (conditions.weather && weather !== conditions.weather) continue;
      for (const [clarity, temperatures] of Object.entries(clarities)) {
        if (conditions.clarity && clarity !== conditions.clarity) continue;
        for (const [temp, recommendation] of Object.entries(temperatures)) {
          if (!conditions.temp || temp === conditions.temp) matches.push(recommendation);
        }
      }
    }
    return matches;
  }

  // Unknown conditions draw from all matching entries instead of assuming weather or temperature.
  function getRecommendation(fish, conditions = {}, allow = () => true) {
    const matches = matchingRecommendations(fish, conditions);
    if (matches.length === 1) return {...matches[0], lures:matches[0].lures.filter(allow), specific:true};
    const baits = new Map();
    const colorCounts = new Map();
    for (const rec of matches) {
      for (const color of rec.colors || []) colorCounts.set(color, (colorCounts.get(color) || 0) + 1);
      for (const lure of rec.lures) {
        if (!allow(lure)) continue;
        if (!baits.has(lure.name)) baits.set(lure.name, {count:0, techniques:new Map()});
        const item = baits.get(lure.name);
        item.count++;
        item.techniques.set(lure.technique, (item.techniques.get(lure.technique) || 0) + 1);
      }
    }
    const lures = [...baits].sort((a,b) => b[1].count-a[1].count).slice(0,3).map(([name,item]) => {
      const technique = [...item.techniques].sort((a,b) => b[1]-a[1])[0]?.[0] || '';
      return {name, technique};
    });
    const colors = [...colorCounts].sort((a,b) => b[1]-a[1]).slice(0,3).map(([color]) => color);
    return {lures, colors, gear:gearMap[fish], specific:false};
  }

  function icon(name) {
    const paths = {
      retrieve:'<path d="M3 7h18M17 3l4 4-4 4M21 17H3m4-4-4 4 4 4"/>',
      depth:'<path d="M5 4v16m-3-3 3 3 3-3M12 5h9m-9 7h6m-6 7h9"/>',
      size:'<path d="M3 8h18v9H3zM7 8v4m5-4v6m5-6v4"/>',
      position:'<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
      setup:'<path d="M4 6h16M4 18h16M8 3v6m8 6v6"/>',
      chevron:'<path d="m7 10 5 5 5-5"/>',
      reason:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>',
      rod:'<path d="M4 20 19 4M16 7l3-3 1 5M7 16l3 3"/><circle cx="10" cy="16" r="2"/>',
      line:'<path d="M3 8c3-7 6 7 9 0s6 7 9 0M3 16c3-7 6 7 9 0s6 7 9 0"/>'
    };
    return `<svg class="setup-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.setup}</svg>`;
  }

  function detailBox(title, symbol, body, extraClass = '') {
    return `<section class="setup-detail-box ${extraClass}"><h6>${icon(symbol)}<span>${escape(title)}</span></h6>${body}</section>`;
  }

  const diagramControllers = new WeakMap();
  const observedDiagrams = new Set();
  let playingDiagram = null;
  const reduceMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;

  function controllerFor(figure) {
    if (!diagramControllers.has(figure)) {
      const controller = window.TackleAnimation?.mount(figure);
      if (controller) diagramControllers.set(figure,controller);
    }
    return diagramControllers.get(figure);
  }

  function paintDiagram(figure, controller) {
    const phase = controller.draw(controller.elapsed);
    if (figure.dataset.demoPhase === String(phase)) return;
    figure.dataset.demoPhase = String(phase);
    figure.querySelectorAll('.setup-animation-step').forEach((step,index)=>step.classList.toggle('is-active',index === phase));
    figure.querySelector('.setup-animation-cue').textContent = JSON.parse(figure.dataset.demoCues)[phase];
  }

  function stopDiagram(reset = false) {
    const current = playingDiagram;
    if (!current) return;
    playingDiagram = null;
    cancelAnimationFrame(current.frame);
    current.button.textContent = 'Play';
    current.button.setAttribute('aria-pressed','false');
    current.button.setAttribute('aria-label',`Play ${current.figure.dataset.demoTitle} animation`);
    if (reset) {current.controller.elapsed=1.8;current.controller.fresh=true;paintDiagram(current.figure,current.controller);}
  }

  function playDiagram(figure, retry = false) {
    if (playingDiagram?.figure === figure) return;
    if (conditionsDialog?.open||document.getElementById('fishingLogbookDialog')?.open) return;
    stopDiagram();
    if (!figure.isConnected || !figure.closest('.setup-lure')?.open) return;
    const controller = controllerFor(figure);
    if (!controller) return;
    if (figure.dataset.animationError === 'true') {if (!retry) return;controller.retry();}
    if (controller.fresh) {controller.elapsed=0;controller.fresh=false;}
    const button = figure.querySelector('[data-demo-toggle]');
    const current = {figure,controller,button,frame:null,last:performance.now(),drawn:0};
    playingDiagram = current;
    button.textContent = 'Pause';
    button.setAttribute('aria-pressed','true');
    button.setAttribute('aria-label',`Pause ${figure.dataset.demoTitle} animation`);
    paintDiagram(figure,controller);
    const tick = now => {
      if (playingDiagram !== current) return;
      if (!figure.isConnected || !figure.closest('.setup-lure')?.open || document.hidden || figure.dataset.animationError === 'true') {stopDiagram();return;}
      controller.elapsed = (controller.elapsed + Math.min((now-current.last)/1000,.1)) % 4.8;
      current.last = now;
      // One visible scene, capped at 30 updates/second. The source image node is reused.
      if (now-current.drawn >= 1000/30) {paintDiagram(figure,controller);current.drawn=now;}
      current.frame = requestAnimationFrame(tick);
    };
    current.frame = requestAnimationFrame(tick);
  }

  const diagramVisibility = window.IntersectionObserver ? new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      const figure = entry.target;
      if (!entry.isIntersecting) {
        if (playingDiagram?.figure === figure) stopDiagram();
      } else if (figure.closest('.setup-lure')?.open && figure.dataset.userPaused !== 'true' && !reduceMotion()) playDiagram(figure);
    });
  },{threshold:.15}) : null;

  function watchDiagram(lure) {
    const figure = lure.querySelector('.setup-animation');
    if (!figure) return;
    if (lure.open) {
      const controller = controllerFor(figure);
      if (controller) paintDiagram(figure,controller);
      if (diagramVisibility) {observedDiagrams.add(figure);diagramVisibility.observe(figure);}
      else if (figure.dataset.userPaused !== 'true' && !reduceMotion()) playDiagram(figure);
    } else {
      diagramVisibility?.unobserve(figure);
      observedDiagrams.delete(figure);
      if (playingDiagram?.figure === figure) stopDiagram(true);
      const controller = diagramControllers.get(figure);
      if (controller) {controller.elapsed=1.8;controller.fresh=true;paintDiagram(figure,controller);}
    }
  }

  if (window.MutationObserver && document.body) new MutationObserver(()=>{
    if (playingDiagram && !playingDiagram.figure.isConnected) stopDiagram();
    observedDiagrams.forEach(figure=>{
      if (!figure.isConnected) {diagramVisibility.unobserve(figure);observedDiagrams.delete(figure);}
    });
  }).observe(document.body,{childList:true,subtree:true});
  document.addEventListener('visibilitychange',()=>{if (document.hidden) stopDiagram();});
  window.matchMedia?.('(prefers-reduced-motion: reduce)').addEventListener?.('change',event=>{if(event.matches)stopDiagram();});

  function diagramHTML(diagram, profile, name) {
    if (!diagram) return '';
    const scene = window.TackleAnimation?.markup(diagram,profile,name);
    if (!scene) return '';
    return `<figure class="setup-animation" data-technique="${escape(diagram.id)}" data-demo-title="${escape(diagram.title)}" data-demo-cues="${escape(JSON.stringify(diagram.cues))}">
      <figcaption class="setup-animation-toolbar"><span>${escape(diagram.title)} example${['walk-the-dog','glide-and-pause'].includes(diagram.id) ? ' · top view' : ''}</span><button type="button" data-demo-toggle aria-pressed="false" aria-label="Play ${escape(diagram.title)} animation">Play</button></figcaption>
      <div class="setup-animation-scene">${scene}</div>
      <ol class="setup-animation-steps" aria-label="Technique steps">${diagram.steps.map((step,index)=>`<li class="setup-animation-step"><span>${index+1}</span>${escape(step)}</li>`).join('')}</ol>
      <p class="setup-animation-cue">${escape(diagram.cues[0])}</p><span class="setup-animation-status" role="status"></span>
    </figure>`;
  }

  function lureHTML(lure, index, state, rec) {
    const profile = TackleCoach.profileFor(lure, state.fish);
    const tips = TackleCoach.fishingTipsFor(lure, state.fish, rec);
    const diagram = TackleCoach.diagramFor(lure, state.fish);
    const image = profile.image;
    const explanation = TackleCoach.reasonDetailsFor(lure, state.fish, state.conditions);
    const gear = rec.gear || gearMap[state.fish] || {};
    return `<details class="setup-lure" data-setup-lure="${index}" data-lure-name="${escape(lure.name)}" name="setup-lures-${escape(state.id)}"${state.openLure === lure.name ? ' open' : ''}>
      <summary><span class="setup-lure-thumb">${image ? `<img src="${escape(image)}" alt="" loading="lazy">` : icon('setup')}</span><span class="setup-lure-summary"><span class="setup-lure-name">${escape(lure.name)}</span><span class="setup-lure-technique">${escape(lure.technique)}</span></span>${icon('chevron')}</summary>
      <div class="setup-lure-body setup-detail-stack">
        <div class="setup-quick-facts">
          ${detailBox('Size & weight','size',`<p>${escape(profile.size)}</p>`,'setup-detail-size')}
          ${detailBox('Rigging','setup',`<p>${escape(profile.rigging)}</p>`,'setup-detail-rigging')}
          ${detailBox('Rod','rod',`<p>${escape(gear.rod || 'Not specified')}</p>`,'setup-detail-rod')}
          ${detailBox('Line','line',`<p>${escape(gear.line || 'Not specified')}</p>`,'setup-detail-line')}
        </div>
        ${detailBox('How to fish it','retrieve',`<div class="setup-method-layout${diagram ? ' has-animation' : ''}">${diagramHTML(diagram,profile,lure.name)}<div class="setup-method-copy">${tips.map(tip=>`<section class="setup-fishing-tip"><h6>${escape(tip.title)}</h6>${tip.lead ? `<p class="setup-detail-lead">${escape(tip.lead)}</p>` : ''}${tip.description ? `<p>${escape(tip.description)}</p>` : ''}</section>`).join('')}</div></div>`,'setup-detail-method')}
        ${explanation.length ? detailBox('Why this lure','reason',explanation.map(paragraph=>`<p>${escape(paragraph)}</p>`).join(''),'setup-detail-reason') : ''}
        ${state.lake&&state.id!=='tour-example' ? `<button type="button" class="setup-log-setup" data-log-setup="${escape(lure.name)}">Log this setup</button>` : ''}
      </div></details>`;
  }

  function snapshotFor(id, lureName = null) {
    const state=contexts.get(id);
    if(!state)return null;
    const fish=state.allowed[state.fish];
    const allow=fish ? window.FishingRules?.forSpecies(state.lake,state.fish).allow || (()=>true) : (()=>true);
    const rec=fish ? getRecommendation(state.fish,state.conditions,allow) : {};
    const lure=(rec.lures||[]).find(item=>item.name===(lureName||state.openLure));
    const profile=lure ? TackleCoach.profileFor(lure,state.fish) : null;
    const gear=lure ? rec.gear||gearMap[state.fish]||{} : {};
    return {speciesId:fish?state.fish:'',species:fish?.name||'',lure:lure?.name||'',image:profile?.image||'',size:profile?.size||'',retrieve:lure?.technique||'',rod:gear.rod||'',line:gear.line||'',suggestedColors:lure?[...(rec.colors||[])]:[],conditions:{...state.conditions}};
  }

  function speciesInformation(state) {
    if (!state.fish || !state.allowed[state.fish]) return window.FishingRules?.zonePills(state.lake) || '';
    const html = window.FishingRules?.forSpecies(state.lake, state.fish).html || '';
    return html ? `<h5 class="lake-season-heading">${escape(state.allowed[state.fish].name)}</h5>${html}` : '';
  }

  function lakeInformation(state) {
    if (!state.lake && !state.records) return '';
    const records = state.records || {};
    return `<section class="setup-lake-information" aria-label="Lake information"><h4>Lake information</h4>
      ${records.factsHTML || ''}${records.overviewHTML || ''}<div class="setup-lake-season">${speciesInformation(state)}</div></section>`;
  }

  let recordsDialog = null, recordsTrigger = null;
  function openRecordDialog(state, trigger) {
    if (!recordsDialog) {
      recordsDialog = document.createElement('dialog');
      recordsDialog.id = 'lakeRecordsDialog';
      recordsDialog.className = 'simple-dialog lake-records-dialog';
      recordsDialog.setAttribute('aria-labelledby', 'lakeRecordsTitle');
      recordsDialog.setAttribute('aria-describedby', 'lakeRecordsLake');
      recordsDialog.innerHTML = '<div class="rules-dialog-header"><div class="dialog-heading"><h2 id="lakeRecordsTitle"></h2><button type="button" data-records-close aria-label="Close records">✕</button></div><p id="lakeRecordsLake" class="rules-dialog-meta"></p></div><div class="lake-records-content"></div>';
      recordsDialog.addEventListener('click', event => {if (event.target.closest('[data-records-close]')) recordsDialog.close();});
      recordsDialog.addEventListener('keydown', event => {
        if (event.key !== 'Tab') return;
        const controls = [...recordsDialog.querySelectorAll('button,a[href],input,select,textarea,[tabindex]')].filter(node => !node.disabled && node.tabIndex >= 0 && node.getClientRects().length);
        const first = controls[0], last = controls[controls.length - 1];
        if (first && ((!event.shiftKey && document.activeElement === last) || (event.shiftKey && document.activeElement === first))) {
          event.preventDefault();
          (event.shiftKey ? last : first).focus();
        }
      });
      recordsDialog.addEventListener('close', () => {if (recordsTrigger?.isConnected) recordsTrigger.focus({preventScroll:true});});
      document.body.append(recordsDialog);
    }
    const stocking = trigger.dataset.lakeRecords === 'stocking';
    recordsDialog.querySelector('#lakeRecordsTitle').textContent = stocking ? 'Stocking records' : 'Recorded fish';
    recordsDialog.querySelector('#lakeRecordsLake').textContent = state.lake?.name || 'Waterbody records';
    const body = recordsDialog.querySelector('.lake-records-content');
    body.innerHTML = stocking
      ? state.records?.stockingHTML || '<p class="record-note">No stocking record in the current Ontario recreational stocking dataset.</p>'
      : state.records?.recordedFishHTML || '<p class="record-note">Species records unavailable.</p>';
    // The modal has room for the complete history, so earlier years need no disclosure.
    body.querySelectorAll('.lake-disclosure').forEach(details => details.replaceWith(...[...details.children].filter(child => child.tagName !== 'SUMMARY')));
    recordsTrigger = trigger;
    recordsDialog.showModal();
    recordsDialog.scrollTop = 0;
    recordsDialog.querySelector('[data-records-close]').focus({preventScroll:true});
  }

  function update(root, state) {
    root.querySelector('.setup-output').innerHTML = content(state);
    const season = root.querySelector('.setup-lake-season');
    if (season) season.innerHTML = speciesInformation(state);
    const summary = root.querySelector('[data-conditions-summary]');
    if (summary) summary.textContent = conditionSummary(state);
  }

  const conditionLabels = {weather:'Weather',clarity:'Water clarity',temp:'Water temperature'};
  let conditionsDialog = null, conditionsContext = null, conditionsResume = null;
  function conditionSummary(state) {
    return Object.entries(state.conditions).filter(([key,value])=>groups[key]?.[value]).map(([key,value])=>groups[key][value].name).join(' · ') || 'Not specified';
  }
  function conditionIcon(name) {
    const shapes = {
      unknown:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 .5c0 2-2.5 2-2.5 4m0 3v.1"/>',
      sunny:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
      cloudy:'<path d="M6 18a4 4 0 1 1 .5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1 0 9Z"/>',
      rainy:'<path d="M6 14a3.5 3.5 0 1 1 .5-7A5.5 5.5 0 0 1 17 6a4 4 0 0 1 1 8H6Zm1 3-1 3m6-3-1 3m6-3-1 3"/>',
      windy:'<path d="M3 8h12a3 3 0 1 0-3-3M3 12h16a2.5 2.5 0 1 1-2.5 2.5M3 16h7a3 3 0 1 1-3 3"/>',
      water:'<path d="M2 7c3-4 5 4 8 0s5 4 8 0 4 0 4 0M2 12c3-4 5 4 8 0s5 4 8 0 4 0 4 0M2 17c3-4 5 4 8 0s5 4 8 0 4 0 4 0"/>',
      cool:'<path d="M10 14.5V5a2 2 0 0 1 4 0v9.5a4 4 0 1 1-4 0ZM12 11v7m-1 0h2M18 5h3m-1.5-1.5v3"/>',
      warm:'<path d="M10 14.5V5a2 2 0 0 1 4 0v9.5a4 4 0 1 1-4 0ZM12 8v10m-1 0h2m7-14c-2 2 2 3 0 5m3-5c-2 2 2 3 0 5"/>'
    };
    return `<svg class="condition-choice-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name] || shapes.unknown}</svg>`;
  }
  function conditionsButton(state) {
    return `<button type="button" class="setup-conditions-open" data-open-conditions aria-haspopup="dialog" aria-controls="tackleConditionsDialog">${icon('setup')}<span><span class="setup-conditions-label">Conditions</span><span class="setup-conditions-summary" data-conditions-summary>${escape(conditionSummary(state))}</span></span></button>`;
  }
  function conditionFields(state) {
    return Object.entries(conditionLabels).map(([key,label])=>`<fieldset class="condition-fieldset"><legend>${label}</legend><div class="condition-choice-grid${key==='weather' ? ' condition-weather-grid' : ''}">${[...Object.entries(groups[key]),['',{name:'Not sure'}]].map(([value,item])=>{
      const visual = key==='clarity'&&value ? `<span class="condition-water-swatch condition-water-${value}">${conditionIcon('water')}</span>` : conditionIcon(value || 'unknown');
      return `<label class="condition-option${!value ? ' is-unknown' : ''}"><input type="radio" name="${key}" value="${escape(value)}"${state.conditions[key]===value ? ' checked' : ''}><span class="condition-tile${value ? ' condition-'+value : ''}">${visual}<span>${escape(item.name)}</span><span class="condition-choice-check" aria-hidden="true">✓</span></span></label>`;
    }).join('')}</div></fieldset>`).join('');
  }
  function openConditions(root,state,trigger) {
    if (!conditionsDialog) {
      conditionsDialog=document.createElement('dialog');
      conditionsDialog.id='tackleConditionsDialog';
      conditionsDialog.className='simple-dialog tackle-conditions-dialog';
      conditionsDialog.setAttribute('aria-labelledby','tackleConditionsTitle');
      conditionsDialog.setAttribute('aria-describedby','tackleConditionsHelp');
      conditionsDialog.innerHTML='<div class="rules-dialog-header"><div class="dialog-heading"><h2 id="tackleConditionsTitle">Conditions</h2><button type="button" data-conditions-cancel aria-label="Close conditions">✕</button></div><p class="rules-dialog-meta" data-conditions-lake></p><p id="tackleConditionsHelp">Choose what you know. Leave the rest as Not sure.</p></div><form class="setup-conditions-form"><div class="condition-fields"></div><div class="condition-dialog-actions"><button type="button" data-conditions-cancel>Cancel</button><button type="submit" class="condition-apply">Apply conditions</button></div></form>';
      conditionsDialog.addEventListener('click',event=>{if(event.target.closest('[data-conditions-cancel]'))conditionsDialog.close('cancel');});
      conditionsDialog.addEventListener('keydown',event=>{
        if(event.key!=='Tab')return;
        const controls=[...conditionsDialog.querySelectorAll('button,input')].filter(node=>!node.disabled&&node.getClientRects().length);
        const first=controls[0],last=controls[controls.length-1];
        if((event.shiftKey&&document.activeElement===first)||(!event.shiftKey&&document.activeElement===last)){event.preventDefault();(event.shiftKey?last:first).focus();}
      });
      conditionsDialog.addEventListener('submit',event=>{
        event.preventDefault();
        const active=conditionsContext;
        if(!active?.root.isConnected||contexts.get(active.state.id)!==active.state){conditionsDialog.close('cancel');return;}
        const values=new FormData(conditionsDialog.querySelector('form'));
        const next=Object.fromEntries(Object.keys(groups).map(key=>{const value=values.get(key)||'';return [key,Object.hasOwn(groups[key],value)?value:''];}));
        if(Object.keys(groups).some(key=>next[key]!==active.state.conditions[key])){
          active.state.conditions=next;
          conditionsResume=null;
          update(active.root,active.state);
        }
        conditionsDialog.close('apply');
      });
      conditionsDialog.addEventListener('close',()=>{
        if(conditionsContext?.trigger.isConnected)conditionsContext.trigger.focus({preventScroll:true});
        const figure=conditionsResume;conditionsResume=null;conditionsContext=null;
        if(figure?.isConnected&&!reduceMotion()&&figure.dataset.userPaused!=='true'){
          const rect=figure.getBoundingClientRect();
          if(rect.bottom>0&&rect.top<window.innerHeight)playDiagram(figure);
        }
      });
      document.body.append(conditionsDialog);
    }
    conditionsContext={root,state,trigger};
    conditionsResume=playingDiagram?.figure || null;
    stopDiagram();
    conditionsDialog.querySelector('[data-conditions-lake]').textContent=state.lake?.name || 'Bait and tackle recommendations';
    conditionsDialog.querySelector('.condition-fields').innerHTML=conditionFields(state);
    conditionsDialog.showModal();conditionsDialog.scrollTop=0;
    conditionsDialog.querySelector('[data-conditions-cancel]').focus({preventScroll:true});
  }

  function content(state) {
    if (!state.fish || !state.allowed[state.fish]) return '';
    const rule = window.FishingRules?.forSpecies(state.lake, state.fish) || {html:'',blocked:false,allow:()=>true};
    if(rule.blocked) return `<div class="setup-content"><div class="setup-heading"><h4>${escape(state.allowed[state.fish].name)}</h4><button type="button" data-setup-action="close" aria-label="Close recommendations">✕</button></div><p class="record-note">Bait and tackle suggestions are hidden for this date. Check the season and limits above.</p></div>`;
    const rec = getRecommendation(state.fish, state.conditions, rule.allow);
    if (!rec.lures.some(lure => lure.name === state.openLure)) state.openLure = null;
    const selected = Object.entries(state.conditions).filter(([,value]) => value).map(([key,value]) => groups[key][value].name);
    const intro = rec.specific ? `For ${selected.join(' · ').toLowerCase()}.` :
      selected.length ? `Starting suggestions for ${selected.join(' · ').toLowerCase()}. Unspecified conditions remain open.` :
      'General starting suggestions for this species. Adjust conditions for more tailored advice.';
    return `<div class="setup-content"><div class="setup-heading"><h4>${escape(state.allowed[state.fish].name)} bait and tackle recommendations</h4><button type="button" data-setup-action="close" aria-label="Close bait and tackle recommendations">✕</button></div>
      <p class="setup-intro">${escape(intro)}</p>
      ${rec.colors?.length ? `<div class="setup-color-section"><h5>Suggested colours</h5><div class="setup-colors">${rec.colors.map(color => `<span><i style="background:${escape(colorMap[color]?.hex || '#ccc')}" aria-hidden="true"></i>${escape(color)}</span>`).join('')}</div></div>` : '<div class="setup-color-section"><h5>Suggested colours</h5><p class="record-note">No colour preference specified for these recommendations.</p></div>'}
      <div class="setup-lure-options">${rec.lures.map((lure, index)=>lureHTML(lure,index,state,rec)).join('') || '<p class="record-note">Suggestions are unavailable for these selections.</p>'}</div>
      <p class="record-note">Suggestions depend on the species and conditions you choose. Check rules for your waterbody before fishing.</p></div>`;
  }

  function render(id, allowed, lake = null, preferredFish = null, records = null) {
    let state = contexts.get(id);
    if (!state) {state={id, fish:null, openLure:null, conditions:{weather:'',clarity:'',temp:''}, allowed};contexts.set(id,state);}
    state.allowed = allowed;
    state.lake = lake;
    state.records = records;
    if (preferredFish && Object.hasOwn(allowed, preferredFish)) state.fish = preferredFish;
    if (!allowed[state.fish]) state.fish = null;
    return `<div class="lake-setups" data-setup-context="${escape(id)}">${lakeInformation(state)}<section class="setup-tackle-section" aria-label="Smart Tackle Box"><div class="setup-tackle-toolbar"><h4 class="setup-tackle-title">Smart Tackle Box</h4>${Object.keys(allowed).length ? conditionsButton(state) : ''}</div>${Object.keys(allowed).length ? `<h5 class="setup-choice-heading">Choose a fish for bait and tackle recommendations</h5>
      <div class="setup-fish-grid">${Object.entries(allowed).map(([key,fish]) => `<button type="button" class="setup-fish" data-setup-fish="${escape(key)}" aria-pressed="${state.fish === key}"><img src="${escape(fish.imageSrc)}" alt="" loading="lazy"><span>${escape(fish.name)}</span></button>`).join('')}</div>
      <div class="setup-output">${content(state)}</div>` : '<p class="record-note">Bait and tackle recommendations are not available for these species records.</p><div class="setup-output"></div>'}</section></div>`;
  }

  document.addEventListener('click', event => {
    const root = event.target.closest('.lake-setups');
    if (!root) return;
    const state = contexts.get(root.dataset.setupContext);
    if (!state) return;
    const logButton=event.target.closest('[data-log-setup]');
    if(logButton&&state.lake&&state.id!=='tour-example'){
      window.FFOLogbook?.openEditor({lake:{id:state.id,name:state.lake.name,town:state.lake.town},snapshot:snapshotFor(state.id,logButton.dataset.logSetup)});
      return;
    }
    const conditionsTrigger=event.target.closest('[data-open-conditions]');
    if(conditionsTrigger){openConditions(root,state,conditionsTrigger);return;}
    const recordButton = event.target.closest('[data-lake-records]');
    if (recordButton) {openRecordDialog(state, recordButton);return;}
    const demoButton = event.target.closest('[data-demo-toggle]');
    if (demoButton) {
      const figure = demoButton.closest('.setup-animation');
      if (playingDiagram?.figure === figure) {figure.dataset.userPaused = 'true';stopDiagram();}
      else {figure.dataset.userPaused = 'false';playDiagram(figure,true);}
      return;
    }
    const fishButton = event.target.closest('[data-setup-fish]');
    if (fishButton && state.allowed[fishButton.dataset.setupFish]) {
      if (state.fish !== fishButton.dataset.setupFish) state.openLure = null;
      state.fish = fishButton.dataset.setupFish;
      root.querySelectorAll('[data-setup-fish]').forEach(button => button.setAttribute('aria-pressed', button.dataset.setupFish === state.fish));
      update(root, state);
      if (root.dataset.setupContext !== 'tour-example') root.querySelector('.setup-content').scrollIntoView({behavior:'smooth',block:'nearest'});
    }
    if (event.target.closest('[data-setup-action="close"]')) {
      const previousFish = state.fish;
      state.fish = null;
      state.openLure = null;
      update(root, state);
      root.querySelectorAll('[data-setup-fish]').forEach(button => {
        button.setAttribute('aria-pressed','false');
        if (button.dataset.setupFish === previousFish) button.focus({preventScroll:true});
      });
    }
  });
  // Native details/summary supports keyboard and touch. Capture also supports browsers
  // that do not implement exclusive details groups through the name attribute.
  document.addEventListener('toggle', event => {
    const lure = event.target;
    if (!lure.matches?.('.setup-lure')) return;
    const root = lure.closest('.lake-setups');
    if (!root || !lure.isConnected) return;
    const state = contexts.get(root.dataset.setupContext);
    if (!state) return;
    if (lure.open) root.querySelectorAll('.setup-lure[open]').forEach(other => {if (other !== lure) other.open = false;});
    state.openLure = root.querySelector('.setup-lure[open]')?.dataset.lureName || null;
    watchDiagram(lure);
  }, true);
  function refresh() { document.querySelectorAll('.lake-setups').forEach(root=>{ const state=contexts.get(root.dataset.setupContext);if(state) update(root,state); }); }
  return {render, refresh, escape, getRecommendation, snapshotFor, pauseAnimations:()=>stopDiagram(), conditionIcon, conditionFieldsFor:conditions=>conditionFields({conditions}), speciesName: id => speciesLabels[id.replace(/[^a-z]/g, '')] || id};
})();
