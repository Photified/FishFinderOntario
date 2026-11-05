/* Compact map key, sharing the symbols already documented in Help. */
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('mapLegendToggle');
  const panel = document.getElementById('mapLegend');
  const items = document.getElementById('mapLegendItems');
  const key = document.querySelector('#helpDialog .map-key-list');
  for (const symbol of key.querySelectorAll('dt')) {
    const item = document.createElement('li');
    item.innerHTML = symbol.innerHTML;
    const label = document.createElement('span');
    label.textContent = symbol.nextElementSibling.querySelector('strong').textContent;
    item.title = symbol.nextElementSibling.querySelector('span')?.textContent || label.textContent;
    item.append(label);
    items.append(item);
  }
  for (const [swatch, label] of [
    ['crown-swatch', 'Crown land'],
    ['crown-policy-swatch', 'Policy boundaries'],
    ['fisheries-zone-swatch', 'Fisheries Management Zones']
  ]) {
    const item = document.createElement('li');
    const icon = document.createElement('span');
    icon.className = swatch;
    icon.setAttribute('aria-hidden', 'true');
    item.append(icon, document.createTextNode(label));
    items.append(item);
  }
  function setOpen(open) {
    panel.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    if (open) items.focus({preventScroll: true});
    else button.focus({preventScroll: true});
  }
  button.addEventListener('click', () => setOpen(panel.hidden));
  panel.querySelector('button').addEventListener('click', () => setOpen(false));
  panel.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
    }
  });
  // Leave the basemap and active overlay attributions readable below the key.
  const attribution = document.querySelector('#map .leaflet-control-attribution');
  if (attribution) {
    new ResizeObserver(() => {
      panel.style.bottom = `${attribution.getBoundingClientRect().height + 5}px`;
    }).observe(attribution);
  }
});
