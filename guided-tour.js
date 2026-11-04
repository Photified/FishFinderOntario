/* Optional, concise help. Exploration starts immediately. */
(() => {
  const help = document.createElement('dialog');
  help.className = 'simple-dialog';
  help.setAttribute('aria-labelledby', 'helpTitle');
  help.innerHTML = `<div class="dialog-heading"><h2 id="helpTitle">Explore, choose a fish, go fishing</h2><button type="button" aria-label="Close help">✕</button></div>
    <ol class="help-steps"><li><strong>Explore the map.</strong> Move or zoom to an area, use My location, or search for a town or lake. Choose Waterbodies, Boat launches or Shore access. The fish strip appears while browsing waterbodies.</li>
    <li><strong>Open a waterbody.</strong> Tap a map pin or a name in the list to see recorded species, stocking history and waterbody details.</li>
    <li><strong>Tap a fish inside its card.</strong> The main fish filter hides when a waterbody is open. Pictured fish inside its card open bait and tackle recommendations right there. Adjust conditions if you know them, or use the general suggestions.</li>
    <li><strong>Find access and save spots.</strong> Explore nearby access from the card. The three browsing choices show one type of location at a time. Map key explains the symbols. Stars save spots on this device.</li></ol>
    <p class="record-note">Recorded fish and access information do not guarantee current conditions. Check the official fishing regulations before your trip.</p>`;
  document.body.append(help);
  help.querySelector('button').addEventListener('click', () => help.close());
  document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('openIntroBtn');
    trigger.addEventListener('click', () => {
      document.getElementById('settingsModal').classList.remove('open');
      help.showModal();
    });
    help.addEventListener('close', () => {
      document.getElementById('settingsModal').classList.add('open');
      trigger.focus();
    });
  });
})();
