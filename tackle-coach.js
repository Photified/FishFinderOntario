/* Shared lure profiles and detailed fishing instructions. No location, depth or weather is inferred.
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

  // Presentation and depth guidance supplement the selected recommendation;
  // no fish position, measured depth or current weather is assumed.
  const methods = {
    moving: {
      presentation:'Cast beyond the area you want to cover and reel at a controlled pace. Keep the rod tip steady so the lure swims straight and its tail or blade works freely.',
      depth:'With a sinking model, allow it to settle before retrieving. More sink time works deeper; a quicker retrieve generally keeps it higher above cover.'
    },
    spinner: {
      presentation:'Start the retrieve promptly and use enough speed to keep the blade rotating. Keep the rod tip steady and check the blade for weeds if the vibration stops.',
      depth:'Let a sinking spinner settle before starting a deeper pass. Retrieve above weeds rather than pulling the blade through thick vegetation.'
    },
    crank: {
      presentation:'Reel until the lure reaches its working depth, then maintain the pace described above. A brief pause lets a floating model rise away from an obstacle before you continue.',
      depth:'Choose the model’s diving range for the depth you want to fish. A deeper-running lure, line diameter and casting distance all affect where it travels.'
    },
    jerk: {
      presentation:'Reel the lure down, then use short rod twitches followed by a pause. Recover loose line between movements while leaving enough slack for the lure to dart freely.',
      depth:'Watch your model beside you first: floating, suspending and sinking jerkbaits behave differently during a pause. Keep the pause short enough to avoid sinking into snags.'
    },
    sinking: {
      presentation:'Let the lure sink, lift the rod to make it rise and vibrate, then follow it down while recovering loose line. Pause briefly before the next lift.',
      depth:'Control depth with sink time and the height of each lift. Watch the line during the fall and lift clear of bottom rather than repeatedly dragging the hooks through it.'
    },
    bottom: {
      presentation:'Let the rig settle, then work it with small lifts or short drags separated by pauses. Recover loose line so you can feel contact without pulling the bait continuously.',
      depth:'Use enough weight to stay in touch with the rig at the depth and current you are fishing. Keep movements small around rock and vegetation to reduce snagging.'
    },
    finesse: {
      presentation:'Let the bait settle and move it with small rod-tip shakes or a gentle drag. Pause between movements; avoid constantly hopping it away from the area you want to fish.',
      depth:'Use the lightest head that still lets you track the bait. A lighter head falls more slowly, while more weight helps maintain contact in deeper water or current.'
    },
    dropshot: {
      presentation:'Let the sinker reach bottom, then hold the bait in place with small rod-tip shakes. Pause with gentle line tension instead of repeatedly lifting the weight.',
      depth:'The distance between hook and sinker sets how far the bait sits above bottom when the line is near vertical. A longer cast lowers that height because the line angles away.'
    },
    fall: {
      presentation:'Let the bait fall on its own with a small amount of slack, watching the line for a jump or sideways movement. Lift or twitch gently, then allow another free fall.',
      depth:'Allow more time for a deeper presentation. Adding weight increases the fall rate and changes the action, so choose the rig for the depth and cover you are fishing.'
    },
    spoon: {
      presentation:'Cast and retrieve at a pace that produces a regular side-to-side wobble. Check the spoon beside you; if it rolls or spins continuously, ease off the speed.',
      depth:'With a sinking casting spoon, vary the sink time before retrieving. Keep it clear of vegetation and use a swivel to help limit line twist.'
    },
    vertical: {
      presentation:'Lower the lure to your chosen depth, lift the rod, then follow the lure down without pulling against its fall. Let it finish moving before the next lift.',
      depth:'Keep the line close to vertical for better depth control. If fishing near bottom, lift clear of it and watch the line for an unexpected stop during the fall.'
    },
    pull: {
      presentation:'Let the lure sink, then use a deliberate rod sweep followed by a pause. Recover loose line before the next sweep while leaving the tail free to work on the fall.',
      depth:'Longer pauses let a sinking lure work deeper. Start above snags and check how quickly your particular model sinks before making a long cast.'
    },
    glide: {
      presentation:'Use short rod taps or brief turns of the reel, recovering slack between movements. Leave enough freedom in the line for the bait to glide sideways rather than pulling it straight.',
      depth:'Check whether the model floats, suspends or sinks. Pause length changes the depth of a sinking glide bait, so keep it clear of bottom and cover.'
    },
    surface: {
      presentation:'Work the lure with short rod-tip movements and pauses, keeping enough slack for the intended surface action. Let it settle after splashdown before starting the retrieve.',
      depth:'Keep the lure on the surface. Use controlled rod movements rather than pulling the nose under, and clear any weeds that stop its action.'
    },
    surfaceSteady: {
      presentation:'Retrieve at a consistent pace that keeps the tail or wings working and the body upright. Watch the lure beside you to find a speed that produces a clean surface action.',
      depth:'Run the lure across the surface beside openings or along cover edges. Remove any vegetation caught in the moving parts before the next cast.'
    },
    float: {
      presentation:'Set the stop or float position for the depth you want to test, then let the bait settle beneath it. Manage loose line so you can respond without repeatedly dragging the float.',
      depth:'Start with the bait clear of weeds and bottom snags. Moving the stop up the line fishes deeper; moving it toward the hook fishes shallower.'
    },
    bait: {
      presentation:'Place the bait at the intended depth and keep enough contact to notice a bite. Check it after a missed bite or retrieve so it stays attached with the hook point clear.',
      depth:'For a bottom rig, use enough weight to hold position without burying the bait in debris. For a float presentation, set the float to suspend it above cover.'
    },
    drift: {
      presentation:'Let the rig move naturally with the current or a controlled boat drift. Follow the line with the rod and recover slack so you can notice a change in the drift.',
      depth:'Adjust the weight for occasional bottom contact rather than a continuous drag. Excess weight can pin the rig in place or pull it into snags.'
    },
    troll: {
      presentation:'Check the lure or rig beside the boat at your intended speed. Once it works cleanly, let it out under control and keep the speed consistent with the recommended presentation.',
      depth:'Use the model’s dive information or a controlled weight system to set depth. Line length alone does not tell you the lure’s actual running depth.'
    },
    carp: {
      presentation:'Place the rig so the hookbait sits freely beside the feed or feeder. Take up loose line without moving the rig and check that the bait remains attached after casting.',
      depth:'For a bottom presentation, keep the hookbait clear of deep weed or soft debris. Balance buoyant bait so it sits at the intended height rather than lifting the whole rig.'
    },
    suspended: {
      presentation:'Cast the balanced rig carefully so the hooklink can straighten without tangling. Take up slack without dragging the weight from its position.',
      depth:'The hooklink length and hookbait buoyancy set the suspension height. Test the rig close to you before casting it out to a chosen depth.'
    },
    general: {
      presentation:'Use the presentation described above and check the lure close to you before casting. Keep the rig free of tangles so the bait or lure can move as intended.',
      depth:'Choose a working depth for the model and control it with the appropriate sink time, weight or float setting.'
    }
  };
  const lurePresentation = {
    chatterbait:'Begin reeling until you feel the blade pulsing, then maintain the retrieve described above. Hold the rod steadily and thread the trailer straight so the lure tracks cleanly; clear the blade if it catches weeds.',
    spinnerbait:'Reel at a controlled pace with the blades turning throughout the retrieve. Follow the edge of cover and let the skirt and trailer move freely rather than repeatedly jerking the lure.',
    swimbait:'Let the bait settle, then swim it at a pace that keeps the tail moving. Use the reel for most of the movement and keep the body tracking upright instead of rolling.',
    arig:'Cast smoothly and keep the arms and swimbaits separated. Retrieve as a small school, checking each bait for straight rigging or tangled hooks before the next cast.',
    frog:'Use short twitches across openings and pauses beside cover. Let the frog settle after splashdown; when a fish strikes, wait until you feel its weight before setting the hook.',
    popper:'Use a short rod twitch to make the cupped face spit or pop, then let the lure rest. Recover slack before the next twitch without pulling it continuously across the surface.',
    spook:'Use short, repeated rod-tip twitches with slack between them so the lure walks from side to side. Recover line with the reel while keeping that alternating action.',
    senko:'Let the worm fall on slack line and watch for the line to jump or move sideways. Lift it gently after the fall, then give it time to sink again without constant shaking.',
    fluke:'Use short twitches to dart the bait, followed by a pause that lets it glide and fall. Recover slack between twitches so the bait moves freely instead of being pulled straight.',
    tube:'Let the tube settle, then drag or hop it with small rod movements. Pause to let the tentacles relax, keeping enough line contact to notice a bite during the fall.',
    footballjig:'Drag the jig with slow rod sweeps across suitable hard bottom, pausing between movements. Recover slack with the reel and avoid wedging the head into cracks.',
    flippingjig:'Pitch to a specific opening in cover and let the jig fall under control. Pause, make a few small lifts, then retrieve and place the next cast accurately.',
    jiggingrap:'Use a lift, fall and pause sequence. Let the lure swim out and settle without holding the line tight through its circular glide, then recover slack before the next lift.',
    methodfeeder:'Mould the feed around the feeder and keep the hookbait beside it. Cast smoothly to keep the bait together, then tighten the line gently without shifting the feeder.',
    packbait:'Mould the pack bait securely around the chosen feeder or weight with the hookbait close by. Place the rig carefully and allow the feed to break down around the hookbait.',
    zigrig:'Check the hookbait floats and the hooklink straightens before casting. After the rig settles, tighten the line gently while allowing the hookbait to remain suspended.',
    powerbait:'Check whether your bait floats or sinks before casting. For a floating-dough bottom rig, let the sinker settle and take up slack without moving it; leave the bait free to lift on its leader.',
    cutbait:'Present the bait on the bottom rig and leave the hook gap clear. With a circle hook, tighten steadily into a bite rather than making a sharp strike.',
    chickenliver:'Secure the soft bait so it stays attached during the cast while leaving the hook gap clear. Use a smooth cast and check the bait after each missed bite.',
    stinkbait:'Load a suitable bait holder without clogging the hook point or gap. Place the rig under control and check that the bait has not washed away before recasting.',
    bottombouncer:'Troll slowly enough to keep the bouncer near bottom and the harness working. Maintain controlled line tension and lift through snags rather than dragging the wire continuously.'
  };

  function fishingDetailsFor(lure, fish) {
    const profile = profileFor(lure, fish);
    const technique = (lure.technique || '').toLowerCase();
    let kind = profile.kind;
    if (kind !== 'float' && /drift/.test(technique)) kind = 'drift';
    const method = methods[kind] || methods.general;
    const baseKind = profiles[profile.key]?.kind;
    let presentation = kind === baseKind ? lurePresentation[profile.key] || method.presentation : method.presentation;
    let depth = method.depth;
    if (kind === 'sinking' && /steady|straight|swim/.test(technique) && !/yo.yo|hop|rip|lift/.test(technique)) {
      presentation = 'Let the lure settle to the chosen depth, then reel at the described pace while keeping it vibrating. Recover line steadily and clear the hooks if the action changes after contacting weeds.';
    }
    if (kind === 'bottom' && /drag|crawl/.test(technique) && !lurePresentation[profile.key]) {
      presentation = 'Let the rig settle, then move it with a short, slow rod sweep. Recover slack, pause, and repeat while keeping enough contact to distinguish bottom from a bite.';
    }
    if (profile.key === 'chatterbait' && kind === baseKind) {
      depth = /bottom|drag|crawl/.test(technique)
        ? 'Allow the lure to sink before starting and use controlled rod movements to follow bottom without continually snagging. Keep enough speed for the blade to pulse.'
        : 'Allow more sink time for a deeper pass or start reeling sooner to run above vegetation. Retrieve speed, head weight and the trailer affect how high it swims.';
    }
    if (kind === 'troll' && profile.key === 'bottombouncer') {
      presentation = lurePresentation.bottombouncer;
      depth = 'Use enough weight to touch bottom at a controlled speed, keeping the line at a manageable angle. The leader and harness should trail freely behind the bouncer.';
    }
    return {presentation, depth};
  }
  const techniqueDiagrams = {"steady-retrieve":{"id":"steady-retrieve","title":"Steady retrieve","steps":["Retrieve","Keep pace","Next cast"],"cues":["Reel steadily and keep the rod still.","Keep enough speed for the lure to work cleanly.","Repeat with another controlled cast."]},"lift-and-drop":{"id":"lift-and-drop","title":"Lift and drop","steps":["Lift","Let fall","Pause"],"cues":["Lift the rod and keep contact with the jig.","Lower the rod and let the jig fall.","Let the jig settle before repeating."]},"twitch-and-pause":{"id":"twitch-and-pause","title":"Twitch and pause","steps":["Twitch","Pause","Next cast"],"cues":["Use a short rod twitch, then recover loose line.","Give the lure time between movements.","Repeat the same twitch-and-pause rhythm."]},"bottom-drag":{"id":"bottom-drag","title":"Bottom drag","steps":["Drag","Pause","Next cast"],"cues":["Move the bait with a short, slow rod sweep.","Pause, then recover loose line without moving the bait.","Repeat the drag-and-pause presentation."]},"weightless-fall":{"id":"weightless-fall","title":"Weightless fall","steps":["Let fall","Pause","Lift gently"],"cues":["Let the bait sink on lightly slack line.","Watch the line while the bait settles.","Lift gently and allow another free fall."]},"walk-the-dog":{"id":"walk-the-dog","title":"Walk the dog","steps":["Tap","Let glide","Next cast"],"cues":["Use short rod-tip taps and recover loose line.","Let the lure walk from side to side.","Repeat the alternating surface path."]},"pop-and-pause":{"id":"pop-and-pause","title":"Pop and pause","steps":["Pop","Pause","Next cast"],"cues":["Use a short twitch to make one surface pop.","Let the lure rest before the next pop.","Repeat with another short pop and pause."]},"surface-retrieve":{"id":"surface-retrieve","title":"Steady surface retrieve","steps":["Reel steadily","Stay on top","Next cast"],"cues":["Reel at a consistent surface-working pace.","Keep the lure upright at the surface.","Repeat along another suitable surface path."]},"float-fishing":{"id":"float-fishing","title":"Float fishing","steps":["Let settle","Hold depth","Watch float"],"cues":["Let the bait and weight settle below the float.","The float setting controls the bait depth.","Watch the float and manage loose line."]},"natural-drift":{"id":"natural-drift","title":"Natural drift","steps":["Let drift","Follow line","Next drift"],"cues":["Let the current carry the bait naturally.","Follow the drift and recover excess loose line.","Reset for another controlled drift."]},"bottom-bait":{"id":"bottom-bait","title":"Stationary bottom bait","steps":["Let sink","Take up slack","Hold position"],"cues":["Allow the bottom rig to settle in position.","Recover loose line without dragging the weight.","Keep the bait presented while watching for a bite."]},"trolling":{"id":"trolling","title":"Trolling","steps":["Troll steadily","Hold speed","Next pass"],"cues":["Pull the lure behind the moving boat.","Maintain a speed that keeps the lure working cleanly.","Repeat the controlled trolling presentation."]},"drop-shot":{"id":"drop-shot","title":"Drop-shot presentation","steps":["Hold weight","Small shakes","Pause"],"cues":["Keep the weight resting on bottom.","Use small rod movements to work the bait above it.","Pause while keeping the rig in position."]},"pull-and-pause":{"id":"pull-and-pause","title":"Pull and pause","steps":["Pull","Let sink","Next cast"],"cues":["Use a deliberate rod sweep to pull the lure forward.","Recover loose line and allow the sinking lure to fall.","Repeat the pull-and-fall sequence."]},"glide-and-pause":{"id":"glide-and-pause","title":"Glide and pause","steps":["Tap","Let glide","Next cast"],"cues":["Use a short tap rather than a continuous pull.","Let the lure finish its sideways glide.","Repeat the broad gliding path."]},"suspended-hookbait":{"id":"suspended-hookbait","title":"Suspended hookbait","steps":["Set weight","Bait rises","Hold depth"],"cues":["Let the weight settle on the lakebed.","A buoyant hookbait lifts on its hooklink.","The hooklink length sets the suspension height."]},"surface-bait":{"id":"surface-bait","title":"Floating surface bait","steps":["Let float","Leave slack","Watch bait"],"cues":["Let a buoyant bait rest on the surface.","Avoid pulling it under with a tight line.","Watch the bait as it moves gently on the surface."]},"diving-retrieve":{"id":"diving-retrieve","title":"Diving-lure retrieve","steps":["Reel down","Hold depth","Next cast"],"cues":["Reel to bring a diving model down.","Maintain its working action at the chosen depth.","Repeat with a model suited to the depth you need."]}};

  function diagramFor(lure, fish) {
    const profile = profileFor(lure, fish);
    const key = profile.key;
    // Where the recommendation offers alternatives, illustrate the first method.
    const text = String(lure.technique || '').toLowerCase().split(/\bor\b|alternatively/)[0];
    let id;
    const floatRig = /under (?:a |the )?(?:slip )?(?:float|bobber)|slip (?:float|bobber)|beneath.*(?:float|bobber)|float rig/.test(text);
    const surface = /surface|floating bread|bread crust/.test(text);
    if (key === 'slipbobber' || floatRig || /bobber/.test(lure.name.toLowerCase())) id = 'float-fishing';
    else if (key === 'dropshot') id = 'drop-shot';
    else if (key === 'zigrig') id = 'suspended-hookbait';
    else if ((/\btroll(?:ing|ed|s)?\b|downrigger|planer board/.test(text) || (/trolling/i.test(lure.name) && !/^\s*cast\b/.test(text))) || ['dodgerfly','bottombouncer'].includes(key)) id = 'trolling';
    else if (profile.kind === 'drift' || /\bdrift(?:ing)?\b|dead[- ]drift|free[- ]line/.test(text)) id = 'natural-drift';
    else if (surface && (profile.natural || ['bread','popupcorn','boilies'].includes(key))) id = 'surface-bait';
    else if (key === 'spook' || /walk[ -](?:the[ -])?dog/.test(text)) id = 'walk-the-dog';
    else if (key === 'popper') id = 'pop-and-pause';
    else if (key === 'frog') id = /pop/.test(text) ? 'pop-and-pause' : /walk|twitch|side.to.side/.test(text) ? 'walk-the-dog' : 'surface-retrieve';
    else if (['plopper','noisytopwater','creeper'].includes(key)) id = 'surface-retrieve';
    else if (profile.natural || ['carp','bait'].includes(profile.kind)) id = 'bottom-bait';
    else if (key === 'glidebait') id = 'glide-and-pause';
    else if (key === 'bulldawg') id = /drag|crawl/.test(text) ? 'bottom-drag' : 'pull-and-pause';
    else if (key === 'jerkbait' || /twitch|\bdart\b|jerk.and.pause|jerk-and-pause/.test(text)) id = 'twitch-and-pause';
    else if (['crankbait','squarebillcrankbait','minnowlure'].includes(key)) id = surface ? 'surface-retrieve' : 'diving-retrieve';
    else if (['senko','fluke'].includes(key) || /weightless|free[- ]fall/.test(text)) id = 'weightless-fall';
    else {
      const drag = text.search(/drag|crawl/);
      const lift = text.search(/yo[ -]?yo|\bhop|\blift|\bjigging\b|\bjig (?:it|them|vertically|slowly|aggressively|near|off|above|along|up)\b|vertical|\brip(?:ping)?\b|flutter.*fall/);
      if (drag >= 0 && (lift < 0 || drag < lift)) id = 'bottom-drag';
      else if (lift >= 0 || profile.kind === 'vertical') id = 'lift-and-drop';
      else if (['bottom','finesse'].includes(profile.kind) && !/swim|steady|straight/.test(text)) id = 'bottom-drag';
      else id = 'steady-retrieve';
    }
    return techniqueDiagrams[id] || null;
  }

  function diagramPhase(id, seconds) {
    const t = ((seconds % 4.8) + 4.8) % 4.8;
    if (['twitch-and-pause','pop-and-pause'].includes(id)) {
      if (t >= 3.8) return 2;
      return (t < 1.5 ? t : t - 1.5) < .38 ? 0 : 1;
    }
    if (['walk-the-dog','glide-and-pause'].includes(id)) {
      if (t >= 3.8) return 2;
      return ((t / 3.8 * (id === 'walk-the-dog' ? 6 : 3)) % 1) < .25 ? 0 : 1;
    }
    const bounds = {
      'lift-and-drop':[1.5,3], 'bottom-drag':[2.1,3.8],
      'weightless-fall':[2.1,3.2], 'float-fishing':[1.4,2.8],
      'bottom-bait':[1.5,2.5], 'drop-shot':[1.1,3],
      'suspended-hookbait':[1.1,2.6], 'surface-bait':[1.4,2.8]
    }[id] || [1.5,3.8];
    return t < bounds[0] ? 0 : t < bounds[1] ? 1 : 2;
  }
  return {profileFor, imageFor, fishingDetailsFor, diagramFor, diagramPhase};
})();
