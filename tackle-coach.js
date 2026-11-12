/* Shared lure profiles and optional coaching. No location, depth or weather is inferred.
 * Starting sizes are broad options, not requirements. See TACKLE-COACH-NOTES.md.
 */
window.TackleCoach = (() => {
  const profiles = {};
  const sizes = {
    jig: {panfish:'1/32–1/8 oz jig head', trout:'1/16–1/4 oz jig head', bass:'1/8–1/2 oz jig', walleye:'1/8–3/8 oz jig head', lake:'1/2–1 1/2 oz jig', pike:'1/4–3/4 oz jig', muskie:'Use a muskie-sized jig within your rod’s lure rating'},
    soft: {panfish:'1–2 in soft plastic', trout:'2–3 in soft plastic', bass:'3–5 in soft plastic', walleye:'3–4 in soft plastic', lake:'4–6 in soft plastic', pike:'4–6 in soft plastic', muskie:'6–9 in soft plastic; check total rigged weight'},
    plug: {panfish:'1 1/2–2 in body', trout:'1 1/2–3 in body', bass:'2–4 in body', walleye:'2 1/2–4 in body', lake:'3–5 in body', pike:'4–6 in body', muskie:'6–9 in body; check the rod’s lure rating'},
    spoon: {panfish:'1/16–1/8 oz casting spoon', trout:'1/8–1/4 oz casting spoon', bass:'1/4–1/2 oz casting spoon', walleye:'1/4–1/2 oz spoon', lake:'3–5 in spoon; weight depends on casting, jigging or trolling', pike:'1/2–1 oz casting spoon', muskie:'Large casting spoon within the rod’s lure rating'},
    spinner: {panfish:'1/16–1/8 oz', trout:'1/16–1/4 oz', bass:'1/4–1/2 oz', walleye:'1/8–1/4 oz', lake:'1/4–1/2 oz', pike:'1/2–1 oz', muskie:'Large bucktail or spinner within your rod’s lure rating'},
    skirt: {bass:'1/4–1/2 oz', walleye:'1/4–3/8 oz', pike:'1/2–3/4 oz', muskie:'Muskie-sized model; check the rod’s lure rating'},
    vibration: {panfish:'1/16–1/8 oz small blade bait or lipless lure', trout:'1/8–1/4 oz', bass:'1/4–3/4 oz', walleye:'1/4–1/2 oz', lake:'1/2–1 oz; match weight to depth and rod rating', pike:'1/2–3/4 oz', muskie:'A larger model within the rod’s lure rating'},
    float: {panfish:'Small float with a size 6–10 bait hook', trout:'Small float with a size 6–10 bait hook', walleye:'Slip float with a size 4–8 bait hook', bass:'Float and hook matched to the bait'},
    bait: {panfish:'Small bait portion on a size 6–10 hook', trout:'Small bait portion on a size 6–10 hook', walleye:'Hook sized to the bait; leave the point exposed', catfish:'Match a circle hook’s gap to your bait; keep the point clear', carp:'Match hook and hair length to the bait'},
    topwater: {bass:'2–4 in body', pike:'3–5 in body', muskie:'Muskie-sized surface lure within the rod’s lure rating'}
  };
  function add(files, kind, size, rigging, natural = false) {
    files.split(' ').forEach(file => { profiles[file] = {kind, size, rigging, natural}; });
  }
  add('chatterbait', 'moving', 'skirt', 'Thread a soft-plastic trailer straight onto the hook. Tie to the blade’s line clip; keep the blade clear.');
  add('spinnerbait', 'moving', 'skirt', 'Tie to the wire line-tie. Keep the skirt and blades clear; use a trailer that does not foul the hook.');
  add('inlinespinner beetlespin bucktail largebucktail', 'spinner', 'spinner', 'Keep the blade turning freely. Use a small swivel ahead of an inline spinner to help limit line twist.');
  add('crankbait squarebillcrankbait minnowlure', 'crank', 'plug', 'Use the lure’s line-tie or a suitable snap. Choose its printed diving range for the water you intend to fish.');
  add('jerkbait', 'jerk', 'plug', 'Use the factory line-tie or a small suitable snap. Test whether your model floats, suspends or sinks before choosing pause length.');
  add('liplesscrank rippinrap bladebait', 'sinking', 'vibration', 'Use the specified line-tie; on a blade bait, use the manufacturer’s clip position. Keep hooks clear of the line.');
  add('jig jigwithminnow jigwithworm', 'bottom', 'jig', 'Thread the plastic or permitted bait straight onto the jig hook. Use enough weight to maintain contact without constantly snagging.');
  add('flippingjig footballjig', 'bottom', 'jig', 'Thread a craw or creature trailer straight onto the hook. Match the jig head to vegetation or rock and keep the hook gap clear.');
  add('tube', 'bottom', 'soft', 'Insert a tube jig head into the hollow body or rig weedless with a suitable hook. Keep the tube straight.');
  add('nedrig', 'finesse', '2–3 in plastic on a 1/16–1/8 oz mushroom head', 'Thread the plastic straight onto a mushroom head. Use a lighter head when conditions let you keep contact.');
  add('dropshot', 'dropshot', 'soft', 'Tie a drop-shot hook above a sinker, with the point facing up. Start with the hook about 12–18 in above the weight and adjust.');
  add('senko', 'fall', '4–5 in stick worm for bass', 'Rig weightless on a suitable wide-gap hook or wacky rig through an O-ring. Keep the bait straight and balanced.');
  add('fluke', 'fall', 'soft', 'Rig the soft jerkbait straight on a suitable wide-gap hook. Add only the weight needed for the intended depth.');
  add('creaturebait', 'bottom', '3–4 in plastic for bass', 'Texas rig on a suitable wide-gap hook with a sliding bullet weight. Skin-hook the point for cover.');
  add('swimbait', 'moving', 'soft', 'Match the jig head or weighted swimbait hook to the body. Rig straight so the tail works without the lure rolling.');
  add('spoon', 'spoon', 'spoon', 'Use an appropriately sized snap swivel to help prevent line twist. Test the spoon beside you for a clean wobble.');
  add('flutterspoon', 'vertical', '3–5 in flutter spoon; match weight to the intended depth', 'Use the factory attachment point and suitable snap or swivel. Allow space for the spoon’s wide fall.');
  add('jiggingspoon', 'vertical', 'spoon', 'Attach to the designated line-tie. Choose enough weight to keep the line close to vertical at your fishing depth.');
  add('jiggingrap', 'vertical', 'A smaller model for panfish; a mid-sized model for walleye', 'Use the top line-tie and a small suitable snap or loop knot. Keep added hardware light so the lure can glide.');
  add('bondybait', 'vertical', 'Choose the weight for depth and current; use a rod rated for it', 'Use a heavy-duty leader and hardware matched to the lure. Check the lure’s full weight against the rod rating.');
  add('bulldawg', 'pull', 'Choose a pike or muskie model within your rod’s lure rating', 'Use a bite-resistant leader and strong snap. Check total lure weight before casting large soft plastics.');
  add('glidebait', 'glide', 'plug', 'Use a strong snap or the manufacturer’s attachment. For pike and muskie, use a bite-resistant leader matched to the lure.');
  add('arig', 'moving', 'Small swimbaits on light heads; check the total rigged weight', 'Keep the arms spaced and plastics straight. Match the assembled rig to the rod and check local hook and gear restrictions.');
  add('frog', 'surface', '2–3 in hollow-body frog for bass', 'Use a hollow-body frog on suitable braid. Check that the body compresses and the hooks remain clear of debris.');
  add('popper spook', 'surface', 'topwater', 'Use a light line connection that allows the lure to move freely. Avoid a heavy swivel that pulls the nose down.');
  add('plopper noisytopwater creeper', 'surfaceSteady', 'topwater', 'Use a connection that leaves the moving tail or wings free. Check that the lure tracks upright at the surface.');
  add('slipbobber', 'float', 'float', 'Thread a bobber stop, bead and slip float above the weight and hook. Adjust the stop to set bait depth.');
  add('minnow worm livebait', 'bait', 'bait', 'Use permitted bait on a hook sized to keep the point exposed. Add only enough weight or float to present it at the intended depth.', true);
  add('spawnsacs', 'drift', 'Small, securely tied sac on a matching bait hook', 'Hook through the mesh without crushing the eggs. Use a float or light drift rig and enough weight for a controlled drift.', true);
  add('powerbait', 'bait', 'Small portion that leaves the hook point clear', 'Mould bait onto an appropriate bait hook. For floating dough, use a light leader and enough sinker weight to hold the rig.', true);
  add('cutbait chickenliver stinkbait', 'bait', 'bait', 'Use a bottom rig and hook matched to the bait. Keep the hook point and gap clear; with a circle hook, reel into pressure.', true);
  add('bottombouncer', 'troll', 'Choose enough weight to touch bottom at a controlled trolling speed', 'Attach the bouncer and a suitable leader or harness. Keep the weight near bottom without dragging it through snags.');
  add('lindyrig', 'drift', 'Use the lightest walking sinker that maintains bottom contact', 'Run the line through a sliding sinker to a swivel, then add a leader and bait hook. Keep the bait moving naturally.', true);
  add('dodgerfly', 'troll', 'Match the attractor and fly or spoon as a system', 'Run the fly or spoon behind the attractor on the maker’s recommended leader length. Check its action at the boat.');
  add('boilies popupcorn', 'carp', '10–15 mm boilie, or a small corn-sized hookbait', 'Mount the bait on a hair beside the hook, leaving the point and gap clear. Balance any buoyant bait with the rig.');
  add('methodfeeder packbait', 'carp', 'Use a feeder weight that holds position and suits the rod', 'Mould pack bait around the feeder and place the hookbait close to the feed. Keep the hook point free.', true);
  add('doughball bread', 'carp', 'Small hookbait with the hook point left clear', 'Use a hook or hair rig suited to the bait. Check that it stays attached when wet without hiding the hook point.', true);
  add('zigrig', 'suspended', 'Small buoyant foam or artificial hookbait', 'Use a buoyant hookbait on a zig-rig hooklink. Set the hooklink length to suspend the bait at the depth you want to test.');

  function imageFor(lure) {
    const direct = lureMap[lure.name]?.image || lureMap[lureBaseMap[lure.name]]?.image;
    if (direct) return direct;
    const norm = value => value.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/s$/, '');
    const match = Object.keys(lureMap).find(name => norm(name) === norm(lure.name));
    return match ? lureMap[match].image : null;
  }
  function groupFor(fish) {
    if (['perch','crappie','bluegill'].includes(fish)) return 'panfish';
    if (['rainbowtrout','brooktrout','browntrout','splake'].includes(fish)) return 'trout';
    if (['largemouth','smallmouth'].includes(fish)) return 'bass';
    if (fish === 'laketrout') return 'lake';
    if (/salmon$/.test(fish)) return 'salmon';
    return fish;
  }
  function profileFor(lure, fish) {
    const image = imageFor(lure);
    const key = image?.split('/').pop().replace('.png', '');
    const base = profiles[key] || {kind:'general',size:'Match the size to your target fish and your rod’s lure rating',rigging:'Follow the lure maker’s rigging instructions and keep the hook point clear.'};
    const group = groupFor(fish);
    const range = sizes[base.size];
    let size = range ? range[group] || (group === 'salmon' ? range.lake : null) || 'Match size and weight to the target fish, depth and rod rating' : base.size;
    if (key === 'jiggingrap' && !['panfish','walleye'].includes(group)) size = 'Choose a model suited to your target fish and rod’s lure rating';
    let kind = base.kind;
    const method = `${lure.name} ${lure.technique || ''}`.toLowerCase();
    if (/bobber|slip float/.test(method)) kind = 'float';
    else if (/troll/.test(method)) kind = 'troll';
    else if (/vertical/.test(method) && !base.natural) kind = 'vertical';
    let rigging = base.rigging;
    if (kind === 'float' && key !== 'slipbobber') rigging += ' Use a float and bobber stop to control depth.';
    if (['pike','muskie'].includes(fish) && !/leader/.test(rigging)) rigging += ' Use a bite-resistant leader for this species.';
    return {...base, image, key, kind, size, rigging};
  }

  const tip = (icon, title, text, why) => ({icon,title,text,why});
  function adviceFor(lure, fish, conditions = {}) {
    const profile = profileFor(lure, fish);
    const technique = (lure.technique || '').toLowerCase();
    const cool = conditions.temp === 'cool';
    const advice = [];
    switch (profile.kind) {
      case 'float':
        advice.push(tip('depth','Adjust the bait depth','Move the bobber stop a little and test the same area again. Keep the bait clear of weeds and snags.','This tests another part of the water column while keeping the same bait.'));
        break;
      case 'bait': case 'carp':
        advice.push(tip('setup','Check the bait and hook','Check that the bait is still attached and the hook point and gap are clear. Refresh or rebalance the bait if needed.','An intact bait and unobstructed hook keep the rig fishing as intended.'));
        break;
      case 'suspended':
        advice.push(tip('depth','Test another suspension depth','Change the hooklink length to suspend the bait a little higher or lower, then test that depth.','Fish may be using a different layer of water. The adjustment keeps your hookbait the same.'));
        break;
      case 'troll':
        advice.push(tip('retrieve','Check the lure’s working speed','Watch the lure or rig beside the boat at a controlled speed. Adjust until it works cleanly without spinning or tangling.','The lure’s action matters more than choosing one speed for every model.'));
        break;
      case 'vertical':
        advice.push(tip('retrieve','Shorten the lift','Try a smaller lift and a controlled fall. Keep enough contact to notice a bite without stopping the lure’s action.','This tests a less aggressive jigging action using the same lure.'));
        break;
      case 'surface':
        advice.push(tip('retrieve','Change the pause','Try a longer pause between small twitches. For walking baits, keep a short walking sequence before the pause.','A different cadence tests how fish respond without changing the surface lure.'));
        break;
      case 'surfaceSteady':
        advice.push(tip('retrieve','Find a clean surface action','Adjust the retrieve until the tail or wings work consistently. Keep the lure upright rather than pulling it under.','These lures need their moving parts working freely to produce their intended action.'));
        break;
      case 'jerk': case 'glide': case 'pull':
        advice.push(tip('retrieve',cool?'Lengthen the pause':'Vary the pull and pause',cool?'With cool water selected, try a longer pause between shorter movements. Watch whether your model floats, suspends or sinks.':'Test a different pull-and-pause cadence. Watch whether your model floats, suspends or sinks during the pause.','Changing the cadence gives you another presentation with the lure you already have.'));
        break;
      case 'bottom': case 'finesse': case 'dropshot': case 'fall':
        advice.push(tip('retrieve','Use less rod movement',profile.kind === 'fall'?'Let the bait fall on its own with just enough line control to notice a bite. Pause before working it again.':'Try smaller movements with a longer pause. Keep enough contact to feel the rig without constantly moving it.','This tests a subtler presentation before changing your lure or rig.'));
        break;
      case 'drift':
        advice.push(tip('depth','Fine-tune the drift','Adjust the weight so the rig drifts under control without continually hanging on bottom.','Weight changes how naturally the bait travels and how well you can keep contact.'));
        break;
      case 'crank':
        advice.push(tip('depth','Check the running depth','Check your model’s diving range. Try another casting angle or retrieve speed to work the intended water without constantly snagging.','A diving lure’s working depth depends on its design, line and how it is fished.'));
        break;
      default:
        advice.push(tip('retrieve',cool && !/slow/.test(technique)?'Try a slower retrieve':'Vary the retrieve speed',cool && !/slow/.test(technique)?'With cool water selected, test a slower pass. Keep enough speed for the blade to turn or the spoon to wobble.':'Test a slightly different pace while keeping the lure working cleanly. For blades and spoons, avoid a speed that stops the action or makes the lure spin.','Changing pace tests another presentation without needing another lure.'));
    }
    if (['moving','spinner','spoon','sinking'].includes(profile.kind)) {
      advice.push(tip('depth','Test a different depth','For a sinking lure, vary the sink time before retrieving. Start with small changes and avoid dragging through snags.','Sink time lets you test another layer of water using the same lure.'));
    } else if (!['surface','surfaceSteady','troll','suspended'].includes(profile.kind)) {
      advice.push(tip('position','Work another angle',profile.natural || ['carp','bait'].includes(profile.kind)?'Try a nearby position or recast beside a different piece of cover, where access and fishing are permitted.':'Make a few casts from another angle to the same feature, then try adjacent cover.','A different angle or position changes where the offering passes without requiring a different setup.'));
    }
    if (!profile.natural && !['carp','troll','suspended'].includes(profile.kind) && conditions.clarity !== 'muddy') {
      advice.push(tip('size','Try a smaller profile','If you have a smaller version, test it with suitable hooks and weight. Stay within your rod’s lure rating.','This changes the size of the offering while keeping a familiar lure type.'));
    } else {
      advice.push(tip('setup','Check the whole rig','Inspect the line, knots, leader and hook. Remove any weeds and make sure the rig is not tangled.','A fouled or tangled rig may not present the bait or lure the way you intend.'));
    }
    if (conditions.weather === 'windy' && ['bottom','finesse','dropshot','vertical'].includes(profile.kind)) {
      advice.unshift(tip('depth','Keep contact in the wind','If wind bows the line, change your casting angle or position. For a weighted rig, use enough weight to regain control within your rod’s rating.','Better line control makes it easier to track the lure and notice a bite.'));
    }
    if (conditions.clarity === 'muddy' && ['chatterbait','spinnerbait','inlinespinner','bucktail','largebucktail'].includes(profile.key) && !['troll','float'].includes(profile.kind)) {
      advice.unshift(tip('retrieve','Keep the blade working','In muddy water, try a steady pass close to suitable cover. Reel just fast enough to keep the blade working and check it for weeds.','The blade’s vibration can help fish locate the lure when visibility is limited.'));
    }
    return advice;
  }
  return {profileFor, imageFor, adviceFor};
})();
