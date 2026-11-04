/* Optional first-visit welcome and an on-demand guide. */
(() => {
  const help = document.createElement('dialog');
  help.className = 'simple-dialog';
  help.setAttribute('aria-labelledby', 'helpTitle');
  help.innerHTML = `<div class="dialog-heading"><h2 id="helpTitle">Explore, choose a fish, go fishing</h2><button type="button" aria-label="Close help">✕</button></div>
    <ol class="help-steps"><li><strong>Explore the map.</strong> Move or zoom to an area, use My location, or search for a town or lake. Choose Waterbodies, Boat launches or Shore access. The fish strip appears while browsing waterbodies.</li>
    <li><strong>Open a waterbody.</strong> Tap a map pin or a name in the list. The pills under the name show key facts like the zone and last stocked year, when available. Open <strong>View recorded fish</strong> for the full list and <strong>Fishing information</strong> for rules. When available, <strong>View earlier years</strong> shows older records from the same Ontario stocking dataset.</li>
    <li><strong>Tap a fish inside its card.</strong> The main fish filter hides when a waterbody is open. Pictured fish inside its card open bait and tackle recommendations right there. Adjust conditions if you know them, or use the general suggestions.</li>
    <li><strong>Find access and save spots.</strong> Use Boat launches or Shore access above the results. The three browsing choices show one type of location at a time. Map layers contains overlays and the map symbols. Stars save spots on this device.</li></ol>
    <p class="record-note">Recorded fish and access information do not guarantee current conditions. Check the official fishing regulations before your trip.</p>
    <p class="record-note">The Fisheries Management Zones layer uses teal outlines and FMZ labels to show approximate zone boundaries.</p>
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
    <div class="help-dialog-actions"><button class="btn-secondary" type="button" data-help-settings>Settings</button></div>`;
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
    const settingsHelp = document.getElementById('openIntroBtn');
    const settingsModal = document.getElementById('settingsModal');
    const welcomeKey = 'ffo-welcome-seen';
    let helpOpenedFromSettings = false;

    function openHelp(fromSettings = false) {
      helpOpenedFromSettings = fromSettings;
      help.returnValue = '';
      if (fromSettings) settingsModal.classList.remove('open');
      help.showModal();
    }

    headerHelp.addEventListener('click', () => openHelp());
    settingsHelp.addEventListener('click', () => openHelp(true));
    help.querySelector('[data-help-settings]').addEventListener('click', () => help.close('settings'));
    help.addEventListener('close', () => {
      if (helpOpenedFromSettings || help.returnValue === 'settings') {
        settingsModal.classList.add('open');
        (helpOpenedFromSettings ? settingsHelp : document.getElementById('closeSettingsBtn')).focus();
      } else {
        headerHelp.focus();
      }
    });

    welcome.addEventListener('close', () => {
      try { localStorage.setItem(welcomeKey, '1'); } catch {}
      if (welcome.returnValue === 'guide') openHelp();
    });
    let seen = false;
    try { seen = localStorage.getItem(welcomeKey) === '1'; } catch {}
    if (!seen) welcome.showModal();
  });
})();
