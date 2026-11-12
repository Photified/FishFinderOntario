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
      reason:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>'
    };
    return `<svg class="setup-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.setup}</svg>`;
  }

  function explanationFor(lure, state, rec) {
    if (rec.specific) return lure.reason || '';
    if (!Object.values(state.conditions).some(Boolean)) return '';
    // Unspecified conditions must not introduce a contradictory explanation.
    const examples = matchingRecommendations(state.fish, state.conditions)
      .flatMap(item => item.lures || [])
      .filter(item => item.name === lure.name && item.technique === lure.technique);
    const reasons = new Set(examples.map(item => item.reason || ''));
    return examples.length && reasons.size === 1 ? [...reasons][0] : '';
  }

  function detailBox(title, symbol, body, extraClass = '') {
    return `<section class="setup-detail-box ${extraClass}"><h6>${icon(symbol)}<span>${escape(title)}</span></h6>${body}</section>`;
  }

  function lureHTML(lure, index, state, rec) {
    const profile = TackleCoach.profileFor(lure, state.fish);
    const fishing = TackleCoach.fishingDetailsFor(lure, state.fish);
    const image = profile.image;
    const explanation = explanationFor(lure, state, rec);
    return `<details class="setup-lure" data-setup-lure="${index}" data-lure-name="${escape(lure.name)}" name="setup-lures-${escape(state.id)}"${state.openLure === lure.name ? ' open' : ''}>
      <summary><span class="setup-lure-thumb">${image ? `<img src="${escape(image)}" alt="" loading="lazy">` : icon('setup')}</span><span class="setup-lure-summary"><span class="setup-lure-name">${escape(lure.name)}</span><span class="setup-lure-technique">${escape(lure.technique)}</span></span>${icon('chevron')}</summary>
      <div class="setup-lure-body setup-detail-stack">
        ${detailBox('Size & weight','size',`<p>${escape(profile.size)}</p>`)}
        ${detailBox('Rigging','setup',`<p>${escape(profile.rigging)}</p>`)}
        ${detailBox('How to fish it','retrieve',`${lure.technique ? `<p class="setup-detail-lead">${escape(lure.technique)}</p>` : ''}<p>${escape(fishing.presentation)}</p><p>${escape(fishing.depth)}</p>`,'setup-detail-method')}
        ${explanation ? detailBox('Why this lure','reason',`<p>${escape(explanation)}</p>`,'setup-detail-reason') : ''}
      </div></details>`;
  }

  function content(state) {
    if (!state.fish || !state.allowed[state.fish]) return '';
    const rule = window.FishingRules?.forSpecies(state.lake, state.fish) || {html:'',blocked:false,allow:()=>true};
    if(rule.blocked) return `<div class="setup-content"><div class="setup-heading"><h4>${escape(state.allowed[state.fish].name)}</h4><button type="button" data-setup-action="close" aria-label="Close recommendations">✕</button></div>${rule.html}</div>`;
    const rec = getRecommendation(state.fish, state.conditions, rule.allow);
    if (!rec.lures.some(lure => lure.name === state.openLure)) state.openLure = null;
    const selected = Object.entries(state.conditions).filter(([,value]) => value).map(([key,value]) => groups[key][value].name);
    const intro = rec.specific ? `For ${selected.join(' · ').toLowerCase()}.` :
      selected.length ? `Starting suggestions for ${selected.join(' · ').toLowerCase()}. Unspecified conditions remain open.` :
      'General starting suggestions for this species. Adjust conditions for more tailored advice.';
    const conditionFields = [['weather','Weather'],['clarity','Water clarity'],['temp','Water temperature']].map(([key,label]) =>
      `<label>${label}<select name="${key}"><option value="">Not sure / any</option>${Object.entries(groups[key]).map(([value,item]) => `<option value="${value}"${state.conditions[key] === value ? ' selected' : ''}>${escape(item.name)}</option>`).join('')}</select></label>`).join('');
    return `<div class="setup-content"><div class="setup-heading"><h4>${escape(state.allowed[state.fish].name)} bait and tackle recommendations</h4><button type="button" data-setup-action="close" aria-label="Close bait and tackle recommendations">✕</button></div>
      ${rule.html}
      <p class="setup-intro">${escape(intro)}</p>
      ${rec.colors?.length ? `<div class="setup-color-section"><h5>Suggested colours</h5><div class="setup-colors">${rec.colors.map(color => `<span><i style="background:${escape(colorMap[color]?.hex || '#ccc')}" aria-hidden="true"></i>${escape(color)}</span>`).join('')}</div></div>` : '<div class="setup-color-section"><h5>Suggested colours</h5><p class="record-note">No colour preference specified for these recommendations.</p></div>'}
      <div class="setup-lure-options">${rec.lures.map((lure, index)=>lureHTML(lure,index,state,rec)).join('') || '<p class="record-note">Suggestions are unavailable for these selections.</p>'}</div>
      <details class="setup-refine"><summary>Adjust conditions</summary><form class="setup-conditions">${conditionFields}<button type="submit">Update recommendations</button></form></details>
      <details class="setup-extra"><summary>Gear${rec.specific ? ' & fishing tips' : ' recommendations'}</summary>
      <h5>Rod</h5><p>${escape(rec.gear?.rod || 'Not specified')}</p><h5>Line</h5><p>${escape(rec.gear?.line || 'Not specified')}</p>
      ${rec.location ? `<h5>${escape(rec.location.title)}</h5><p>${escape(rec.location.description)}</p>` : ''}
      ${(rec.tips || []).map(tip => `<h5>${escape(tip.title)}</h5><p>${escape(tip.description)}</p>`).join('')}</details>
      <p class="record-note">Suggestions depend on the species and conditions you choose. Check rules for your waterbody before fishing.</p></div>`;
  }

  function render(id, allowed, lake = null, preferredFish = null) {
    if (!Object.keys(allowed).length) return '<p class="record-note">Bait and tackle recommendations are not available for these species records.</p>';
    let state = contexts.get(id);
    if (!state) {state={id, fish:null, openLure:null, conditions:{weather:'',clarity:'',temp:''}, allowed};contexts.set(id,state);}
    state.allowed = allowed;
    state.lake = lake;
    if (preferredFish && Object.hasOwn(allowed, preferredFish)) state.fish = preferredFish;
    if (!allowed[state.fish]) state.fish = null;
    return `<div class="lake-setups" data-setup-context="${escape(id)}"><h5 class="setup-choice-heading">Choose a fish for bait and tackle recommendations</h5>
      <div class="setup-fish-grid">${Object.entries(allowed).map(([key,fish]) => `<button type="button" class="setup-fish" data-setup-fish="${escape(key)}" aria-pressed="${state.fish === key}"><img src="${escape(fish.imageSrc)}" alt="" loading="lazy"><span>${escape(fish.name)}</span></button>`).join('')}</div>
      <div class="setup-output">${content(state)}</div></div>`;
  }

  document.addEventListener('click', event => {
    const root = event.target.closest('.lake-setups');
    if (!root) return;
    const state = contexts.get(root.dataset.setupContext);
    if (!state) return;
    const fishButton = event.target.closest('[data-setup-fish]');
    if (fishButton && state.allowed[fishButton.dataset.setupFish]) {
      if (state.fish !== fishButton.dataset.setupFish) state.openLure = null;
      state.fish = fishButton.dataset.setupFish;
      root.querySelectorAll('[data-setup-fish]').forEach(button => button.setAttribute('aria-pressed', button.dataset.setupFish === state.fish));
      root.querySelector('.setup-output').innerHTML = content(state);
      if (root.dataset.setupContext !== 'tour-example') root.querySelector('.setup-content').scrollIntoView({behavior:'smooth',block:'nearest'});
    }
    if (event.target.closest('[data-setup-action="close"]')) {
      const previousFish = state.fish;
      state.fish = null;
      state.openLure = null;
      root.querySelector('.setup-output').innerHTML = '';
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
  }, true);
  document.addEventListener('submit', event => {
    if (!event.target.matches('.setup-conditions')) return;
    event.preventDefault();
    const root = event.target.closest('.lake-setups');
    const state = contexts.get(root.dataset.setupContext);
    state.conditions = Object.fromEntries(new FormData(event.target));
    root.querySelector('.setup-output').innerHTML = content(state);
    const heading = root.querySelector('.setup-heading h4');
    heading.tabIndex = -1;
    heading.focus({preventScroll:true});
    heading.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
  function refresh() { document.querySelectorAll('.lake-setups').forEach(root=>{ const state=contexts.get(root.dataset.setupContext);if(state) root.querySelector('.setup-output').innerHTML=content(state); }); }
  return {render, refresh, escape, getRecommendation, speciesName: id => speciesLabels[id.replace(/[^a-z]/g, '')] || id};
})();
