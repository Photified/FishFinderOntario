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
  function getRecommendation(fish, conditions = {}) {
    const matches = matchingRecommendations(fish, conditions);
    if (matches.length === 1) return {...matches[0], specific:true};
    const baits = new Map();
    for (const rec of matches) {
      for (const lure of rec.lures) {
        if (!baits.has(lure.name)) baits.set(lure.name, {count:0, techniques:new Map()});
        const item = baits.get(lure.name);
        item.count++;
        item.techniques.set(lure.technique, (item.techniques.get(lure.technique) || 0) + 1);
      }
    }
    const lures = [...baits].sort((a,b) => b[1].count-a[1].count).slice(0,3).map(([name,item]) => ({
      name, technique:[...item.techniques].sort((a,b) => b[1]-a[1])[0]?.[0] || ''
    }));
    return {lures, gear:gearMap[fish], specific:false};
  }

  function lureHTML(lure) {
    const image = lureMap[lure.name]?.image || 'images/icon.png';
    return `<article class="setup-lure"><img src="${escape(image)}" alt="" loading="lazy"><div><h5>${escape(lure.name)}</h5><p>${escape(lure.technique)}</p>${lure.reason ? `<p>${escape(lure.reason)}</p>` : ''}</div></article>`;
  }

  function content(state) {
    if (!state.fish || !state.allowed[state.fish]) return '';
    const rec = getRecommendation(state.fish, state.conditions);
    const selected = Object.entries(state.conditions).filter(([,value]) => value).map(([key,value]) => groups[key][value].name);
    const intro = rec.specific ? `For ${selected.join(' · ').toLowerCase()}.` :
      selected.length ? `Starting suggestions for ${selected.join(' · ').toLowerCase()}. Unspecified conditions remain open.` :
      'General starting suggestions for this species. Adjust conditions for more tailored advice.';
    const conditionFields = [['weather','Weather'],['clarity','Water clarity'],['temp','Water temperature']].map(([key,label]) =>
      `<label>${label}<select name="${key}"><option value="">Not sure / any</option>${Object.entries(groups[key]).map(([value,item]) => `<option value="${value}"${state.conditions[key] === value ? ' selected' : ''}>${escape(item.name)}</option>`).join('')}</select></label>`).join('');
    return `<div class="setup-content"><div class="setup-heading"><h4>${escape(state.allowed[state.fish].name)} bait suggestions</h4><button type="button" data-setup-action="close" aria-label="Close bait suggestions">✕</button></div>
      <p class="setup-intro">${escape(intro)}</p>
      ${rec.lures.map(lureHTML).join('') || '<p class="record-note">Suggestions are unavailable for these selections.</p>'}
      <details class="setup-refine"><summary>Adjust conditions</summary><form class="setup-conditions">${conditionFields}<button type="submit">Update suggestions</button></form></details>
      <details class="setup-extra"><summary>Gear${rec.specific ? ', colours & fishing tips' : ' suggestions'}</summary>
      <h5>Rod</h5><p>${escape(rec.gear?.rod || 'Not specified')}</p><h5>Line</h5><p>${escape(rec.gear?.line || 'Not specified')}</p>
      ${rec.colors ? `<h5>Colours</h5><div class="setup-colors">${rec.colors.map(color => `<span><i style="background:${escape(colorMap[color]?.hex || '#ccc')}"></i>${escape(color)}</span>`).join('')}</div>` : ''}
      ${rec.location ? `<h5>${escape(rec.location.title)}</h5><p>${escape(rec.location.description)}</p>` : ''}
      ${(rec.tips || []).map(tip => `<h5>${escape(tip.title)}</h5><p>${escape(tip.description)}</p>`).join('')}</details>
      <a class="setup-regulations" href="https://www.ontario.ca/document/ontario-fishing-regulations-summary" target="_blank" rel="noopener noreferrer">Check fishing seasons and bait rules</a>
      <p class="record-note">Suggestions depend on the species and conditions you choose. Check rules for your waterbody before fishing.</p></div>`;
  }

  function render(id, allowed) {
    if (!Object.keys(allowed).length) return '<p class="record-note">Bait suggestions are not available for these species records.</p>';
    let state = contexts.get(id);
    if (!state) {state={fish:null, conditions:{weather:'',clarity:'',temp:''}, allowed};contexts.set(id,state);}
    state.allowed = allowed;
    if (!allowed[state.fish]) state.fish = null;
    return `<div class="lake-setups" data-setup-context="${escape(id)}"><h5 class="setup-choice-heading">Choose a fish for bait suggestions</h5>
      <div class="setup-fish-grid">${Object.entries(allowed).map(([key,fish]) => `<button type="button" class="setup-fish" data-setup-fish="${escape(key)}" aria-pressed="${state.fish === key}"><img src="${escape(fish.imageSrc)}" alt="" loading="lazy"><span>${escape(fish.name)}</span></button>`).join('')}</div>
      <div class="setup-output">${content(state)}</div></div>`;
  }

  document.addEventListener('click', event => {
    const root = event.target.closest('.lake-setups');
    if (!root) return;
    const state = contexts.get(root.dataset.setupContext);
    const fishButton = event.target.closest('[data-setup-fish]');
    if (fishButton && state.allowed[fishButton.dataset.setupFish]) {
      state.fish = fishButton.dataset.setupFish;
      root.querySelectorAll('[data-setup-fish]').forEach(button => button.setAttribute('aria-pressed', button.dataset.setupFish === state.fish));
      root.querySelector('.setup-output').innerHTML = content(state);
      root.querySelector('.setup-content').scrollIntoView({behavior:'smooth',block:'nearest'});
    }
    if (event.target.closest('[data-setup-action="close"]')) {
      const previousFish = state.fish;
      state.fish = null;
      root.querySelector('.setup-output').innerHTML = '';
      root.querySelectorAll('[data-setup-fish]').forEach(button => {
        button.setAttribute('aria-pressed','false');
        if (button.dataset.setupFish === previousFish) button.focus({preventScroll:true});
      });
    }
  });
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
  return {render, escape, getRecommendation, speciesName: id => speciesLabels[id.replace(/[^a-z]/g, '')] || id};
})();
