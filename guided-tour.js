/* Optional first-visit welcome and an on-demand guide. */
(() => {
  const help = document.createElement('dialog');
  help.id = 'helpDialog';
  help.className = 'simple-dialog';
  help.setAttribute('aria-labelledby', 'helpTitle');
  help.innerHTML = `<div class="dialog-heading"><h2 id="helpTitle">Explore, choose a fish, go fishing</h2><button type="button" aria-label="Close help">✕</button></div>
    <button class="btn-primary" id="startGuidedTour" type="button">Start guided tour</button>
    <details>
      <summary>Map symbols</summary>
      <dl class="map-key-list">
      <dt><i class="legend-dot pin-blue" aria-hidden="true"></i></dt><dd><strong>Waterbodies</strong><span>Recorded waterbody location, not an access point.</span></dd>
      <dt><span class="legend-icon access-launch"><svg viewBox="0 0 24 26" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h16l-3 5H7zM8 14V7h7l3 7M11 7V4M3 22l3-2 3 2 3-2 3 2 3-2 3 2"/></svg></span></dt><dd><strong>Boat launches</strong><span>Recorded places to launch a boat.</span></dd>
      <dt><span class="legend-icon access-shore"><svg viewBox="0 0 24 26" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16M6 17l4-6 3 3 5-10M15 4h5v5M3 23l3-2 3 2 3-2 3 2 3-2 3 2"/></svg></span></dt><dd><strong>Shore access</strong><span>Recorded shoreline fishing access.</span></dd>
      <dt><span class="legend-icon access-pier"><svg viewBox="0 0 24 26" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10h18M5 6v14M12 6v14M19 6v14M3 23l3-2 3 2 3-2 3 2 3-2 3 2"/></svg></span></dt><dd><strong>Docks and piers</strong><span>Enhanced shoreline access, such as a dock or pier.</span></dd>
      <dt><i class="legend-dot pin-green" aria-hidden="true"></i></dt><dd><strong>Stocking record</strong><span>Matches the selected fish where applicable. Check the stocking year.</span></dd>
      <dt><span style="color:#fbbf24" aria-hidden="true">★</span></dt><dd><strong>Saved spot</strong><span>A waterbody or access point saved on this device.</span></dd>
      <dt><i class="legend-dot pin-user" aria-hidden="true"></i></dt><dd><strong>Starting location</strong><span>Your chosen starting point for straight-line distances.</span></dd>
      <dt><i class="legend-dot pin-search" aria-hidden="true"></i></dt><dd><strong>Searched place</strong><span>Red pin marking the city or waterbody you searched for.</span></dd>
      <dt><span class="legend-cluster" aria-hidden="true">3</span></dt><dd><strong>Grouped waterbodies</strong><span>The number counts nearby waterbodies. Tap to zoom in.</span></dd>
      <dt><span class="legend-cluster access" aria-hidden="true">3</span></dt><dd><strong>Grouped boat launches</strong><span>The number counts nearby boat launches. Tap to zoom in.</span></dd>
      <dt><span class="legend-cluster access shore" aria-hidden="true">3</span></dt><dd><strong>Grouped shore access</strong><span>The number counts nearby shore access points, docks and piers. Tap to zoom in.</span></dd>
      </dl>
      <p class="record-note">The Fisheries Management Zones layer uses teal outlines and FMZ labels to show approximate zone boundaries.</p>
    </details>
    <details id="crownLandDetails">
      <summary>Crown land sources and access cautions</summary>
      <p>Green shading shows Crown land records, including some lakebeds. Dashed purple outlines show land use policy areas. Tap the map to look up a policy ID when that layer is on.</p>
      <ul>
        <li>Mapping is approximate and may be incomplete or out of date. Do not use it as a legal survey or navigation guide. Unshaded land is not necessarily private land.</li>
        <li>Shading does not confirm a public route, a usable shoreline, parking or permission to enter. Check private property, leases, posted signs and road closures.</li>
        <li>Local rules may restrict vehicles, camping or other activities. Parks, conservation reserves and Far North community land use plans may have separate requirements.</li>
        <li>Check the official policy report and current fishing regulations before visiting. The overlay requires an internet connection.</li>
      </ul>
      <p><a href="https://www.ontario.ca/page/crown-land-use-policy-atlas" target="_blank" rel="noopener noreferrer">Ontario Crown Land Use Policy Atlas and reports</a><br>
      <a href="https://www.ontario.ca/page/recreational-activities-on-crown-land" target="_blank" rel="noopener noreferrer">Official recreation and access guidance</a></p>
      <p>Source: Government of Ontario. Contains information licensed under the <a href="https://www.ontario.ca/page/open-government-licence-ontario" target="_blank" rel="noopener noreferrer">Open Government Licence – Ontario</a>. Fish Finder Ontario is not endorsed by the Government of Ontario.</p>
    </details>
    <div class="help-dialog-actions">
      <button class="btn-secondary" id="openGeneralAdviceBtn" type="button">General fishing advice</button>
      <button class="btn-secondary" id="openDataInfoBtn" type="button">About the data</button>
      <a class="btn-secondary" href="https://www.ontario.ca/document/ontario-fishing-regulations-summary" target="_blank" rel="noopener noreferrer">Ontario fishing regulations</a>
      <button class="btn-secondary" id="openFeedbackBtn" type="button">Leave feedback</button>
    </div>`;
  document.body.append(help);
  help.querySelector('button').addEventListener('click', () => help.close());
  const welcome = document.createElement('dialog');
  welcome.className = 'simple-dialog';
  welcome.setAttribute('aria-labelledby', 'welcomeTitle');
  welcome.setAttribute('aria-describedby', 'welcomeDescription');
  welcome.innerHTML = `<div class="dialog-heading"><h2 id="welcomeTitle">Welcome to Fish Finder Ontario</h2></div>
    <p id="welcomeDescription">Find waterbodies, check fishing information, and choose a setup. Take a quick look at how it works or jump straight to the map.</p>
    <form method="dialog" class="help-dialog-actions">
      <button class="btn-primary" value="guide">Show me around</button>
      <button class="btn-secondary" value="explore" autofocus>Start exploring</button>
    </form>`;
  document.body.append(welcome);

  const tour = document.createElement('dialog');
  tour.id = 'guidedTour';
  tour.setAttribute('aria-labelledby', 'tourTitle');
  tour.innerHTML = `<div class="tour-ring" aria-hidden="true" hidden></div>
    <button class="tour-target" type="button" tabindex="-1" aria-hidden="true" hidden></button>
    <section class="tour-card">
      <div class="tour-heading"><span id="tourProgress"></span><button id="tourExit" type="button">Skip</button></div>
      <div aria-live="polite"><h2 id="tourTitle"></h2><p id="tourDescription"></p></div>
      <div class="tour-actions"><button id="tourStep" type="button">Next</button></div>
    </section>`;
  document.body.append(tour);

  const steps = [
    ['Filter by fish species', 'Tap Perch to show waterbodies with recorded perch.'],
    ['Open a waterbody', 'Tap the Lake Simcoe pin to open its card.'],
    ['Choose a fish in the card', 'Tap Perch again to see bait and tackle recommendations for that fish.'],
    ['Explore the recommendations', 'Start with the suggested baits and tackle. Adjust the conditions if you want more specific ideas.']
  ];
  const ring = tour.querySelector('.tour-ring');
  const hitArea = tour.querySelector('.tour-target');
  const card = tour.querySelector('.tour-card');
  const next = tour.querySelector('#tourStep');
  const skip = tour.querySelector('#tourExit');
  const title = tour.querySelector('#tourTitle');
  const description = tour.querySelector('#tourDescription');
  const progress = tour.querySelector('#tourProgress');
  let connection, demo, target, step, run = 0;
  window.FFGuide = {connect(ready, prepare) { connection = {ready, prepare}; }};

  function position() {
    if (!tour.open) return;
    const margin = 12;
    const width = tour.clientWidth;
    const height = tour.clientHeight - (parseFloat(getComputedStyle(document.body).paddingBottom) || 0);
    const bounds = target?.getBoundingClientRect();
    const left = bounds ? Math.max(0, bounds.left - 5) : 0;
    const top = bounds ? Math.max(0, bounds.top - 5) : 0;
    const right = bounds ? Math.min(width, bounds.right + 5) : 0;
    const bottom = bounds ? Math.min(height, bounds.bottom + 5) : 0;
    const visible = !!bounds && bounds.width > 0 && bounds.height > 0 && right > left && bottom > top;
    ring.hidden = !visible;
    hitArea.hidden = !visible || step === steps.length - 1;
    for (const element of [ring, hitArea]) {
      Object.assign(element.style, {left:`${left}px`, top:`${top}px`, width:`${right-left}px`, height:`${bottom-top}px`});
    }

    const cardWidth = Math.min(320, width - margin * 2);
    const above = top - margin * 2;
    const below = height - bottom - margin * 2;
    card.style.width = `${cardWidth}px`;
    card.style.maxHeight = `${Math.max(105, visible ? Math.max(above, below) : height - margin * 2)}px`;
    const cardHeight = card.offsetHeight;
    const cardLeft = visible ? (left + right - cardWidth) / 2 : (width - cardWidth) / 2;
    const cardTop = !visible ? (height - cardHeight) / 2 : below >= cardHeight || below >= above
      ? bottom + margin : top - cardHeight - margin;
    card.style.left = `${Math.max(margin, Math.min(cardLeft, width - cardWidth - margin))}px`;
    card.style.top = `${Math.max(margin, Math.min(cardTop, height - cardHeight - margin))}px`;
  }

  function showStep(index) {
    step = index;
    const [heading, instruction] = steps[index];
    title.textContent = heading;
    description.textContent = instruction;
    progress.textContent = `Step ${index + 1} of ${steps.length}`;
    next.textContent = index === steps.length - 1 ? 'Finish' : 'Next';
    next.disabled = false;
    target = demo.show(index);
    const scrollTarget = target?.closest('#map') || target;
    scrollTarget?.scrollIntoView({behavior:'instant', block:'center', inline:'center'});
    position();
    requestAnimationFrame(position);
    next.focus({preventScroll:true});
  }

  async function start() {
    if (tour.open) return;
    const currentRun = ++run;
    step = 0;
    title.textContent = 'Loading the guided tour';
    description.textContent = 'Getting the example waterbody ready…';
    progress.textContent = '';
    next.textContent = 'Next';
    next.disabled = true;
    tour.showModal();
    position();
    await connection?.ready;
    if (!tour.open || currentRun !== run) return;
    demo = connection?.prepare();
    if (demo) showStep(0);
    else {
      title.textContent = 'Guided tour unavailable';
      description.textContent = 'Reload the app to load the waterbody data, then try again from Help.';
      position();
    }
  }

  function advance() {
    if (step + 1 === steps.length) tour.close();
    else showStep(step + 1);
  }
  next.addEventListener('click', advance);
  hitArea.addEventListener('click', advance);
  skip.addEventListener('click', () => tour.close());
  window.addEventListener('resize', position);
  window.addEventListener('scroll', position, {passive:true});
  tour.addEventListener('close', () => {
    run++;
    demo?.restore();
    demo = target = null;
    document.getElementById('openHelpBtn').focus({preventScroll:true});
  });

  document.addEventListener('DOMContentLoaded', () => {
    const headerHelp = document.getElementById('openHelpBtn');
    const welcomeKey = 'ffo-welcome-seen';
    headerHelp.addEventListener('click', () => help.showModal());
    help.addEventListener('close', () => {
      if (!tour.open) headerHelp.focus();
    });
    help.querySelector('#startGuidedTour').addEventListener('click', () => {
      help.close();
      start();
    });

    welcome.addEventListener('close', () => {
      try { localStorage.setItem(welcomeKey, '1'); } catch {}
      if (welcome.returnValue === 'guide') start();
    });
    let seen = false;
    try { seen = localStorage.getItem(welcomeKey) === '1'; } catch {}
    if (!seen) welcome.showModal();
  });
})();
