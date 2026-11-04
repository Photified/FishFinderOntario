/* Optional first-visit welcome and an on-demand guide. */
(() => {
  const help = document.createElement('dialog');
  help.id = 'helpDialog';
  help.className = 'simple-dialog';
  help.setAttribute('aria-labelledby', 'helpTitle');
  help.innerHTML = `<div class="dialog-heading"><h2 id="helpTitle">Explore, choose a fish, go fishing</h2><button type="button" aria-label="Close help">✕</button></div>
    <details id="quickGuide">
      <summary>Quick guide</summary>
      <ol class="help-steps"><li><strong>Explore the map.</strong> Move or zoom to an area, use My location, or search for a town or lake. Choose Waterbodies, Boat launches or Shore access. The fish strip appears while browsing waterbodies.</li>
      <li><strong>Open a waterbody.</strong> Tap a map pin or a name in the list. The pills under the name show key facts like the zone and last stocked year, when available. Open <strong>View recorded fish</strong> for the full list and <strong>Fishing information</strong> for rules. When available, <strong>View earlier years</strong> shows older records from the same Ontario stocking dataset.</li>
      <li><strong>Tap a fish inside its card.</strong> The main fish filter hides when a waterbody is open. Pictured fish inside its card open bait and tackle recommendations right there. Adjust conditions if you know them, or use the general suggestions.</li>
      <li><strong>Find access and save spots.</strong> Use Boat launches or Shore access above the results. The three browsing choices show one type of location at a time. Use Map layers to turn overlays on or off. Stars save spots on this device.</li></ol>
      <p class="record-note">Recorded fish and access information do not guarantee current conditions. Check the official fishing regulations before your trip.</p>
    </details>
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

  document.addEventListener('DOMContentLoaded', () => {
    const headerHelp = document.getElementById('openHelpBtn');
    const welcomeKey = 'ffo-welcome-seen';
    const quickGuide = help.querySelector('#quickGuide');
    headerHelp.addEventListener('click', () => help.showModal());
    help.addEventListener('close', () => headerHelp.focus());

    welcome.addEventListener('close', () => {
      try { localStorage.setItem(welcomeKey, '1'); } catch {}
      if (welcome.returnValue === 'guide') {
        quickGuide.open = true;
        help.showModal();
      }
    });
    let seen = false;
    try { seen = localStorage.getItem(welcomeKey) === '1'; } catch {}
    if (!seen) welcome.showModal();
  });
})();
