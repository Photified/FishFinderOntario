window.FisheriesZones = {
  init(map) {
    const toggle = document.getElementById('fisheriesZonesToggle');
    const status = document.getElementById('fisheriesZonesStatus');
    const paneName = 'fisheriesZonesPane';
    const pane = map.createPane(paneName);
    pane.style.zIndex = '380';
    pane.style.pointerEvents = 'none';
    toggle.checked = false;

    const labels = L.layerGroup();
    const attribution = 'FMZ: <a href="https://data.ontario.ca/en/dataset/fisheries-management-zone" target="_blank" rel="noopener noreferrer">Ontario</a>';
    const overlay = L.layerGroup([], { attribution });
    let boundaries, loading;

    function ringContains(ring, point) {
      let inside = false;
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const [x1, y1] = ring[i];
        const [x2, y2] = ring[j];
        if ((y1 > point.lat) !== (y2 > point.lat)
            && point.lng < x1 + (x2 - x1) * (point.lat - y1) / (y2 - y1)) inside = !inside;
      }
      return inside;
    }

    function refreshLabels() {
      if (!map.hasLayer(overlay)) return;
      labels.clearLayers();
      const bounds = map.getBounds().pad(-0.08);
      const center = map.getCenter();
      const candidates = [];
      boundaries.eachLayer(zone => {
        const { label, zone: number } = zone.feature.properties;
        if (bounds.contains(label)) {
          candidates.push({ point: label, number });
        } else if (zone.getBounds().contains(center)) {
          const geometry = zone.feature.geometry;
          const polygons = geometry.type === 'MultiPolygon' ? geometry.coordinates : [geometry.coordinates];
          if (polygons.some(([outer, ...holes]) => ringContains(outer, center)
              && !holes.some(hole => ringContains(hole, center)))) {
            candidates.unshift({ point: center, number });
          }
        }
      });
      const placed = [];
      for (const { point, number } of candidates) {
        const pixel = map.latLngToContainerPoint(point);
        if (placed.some(other => Math.abs(other.x - pixel.x) < 60 && Math.abs(other.y - pixel.y) < 24)) continue;
        placed.push(pixel);
        const icon = L.divIcon({ className: 'fisheries-zone-label', html: `FMZ ${number}`, iconSize: [56, 22] });
        L.marker(point, { icon, pane: paneName, interactive: false, keyboard: false }).addTo(labels);
      }
    }

    toggle.addEventListener('change', async () => {
      status.hidden = true;
      if (!toggle.checked) {
        overlay.remove();
        return;
      }
      try {
        if (!boundaries) {
          status.textContent = 'Loading zone boundaries…';
          status.hidden = false;
          loading ??= fetch('fisheries-zones.geojson').then(async response => {
            if (!response.ok) throw new Error('Zone boundaries unavailable');
            const data = await response.json();
            boundaries = L.geoJSON(data, {
              pane: paneName, interactive: false, fill: false, color: '#08656d', weight: 2, opacity: 1
            });
            overlay.addLayer(boundaries).addLayer(labels);
          }).finally(() => { loading = null; });
          await loading;
        }
        if (!toggle.checked) return;
        status.hidden = true;
        overlay.addTo(map);
        refreshLabels();
      } catch {
        if (!toggle.checked) return;
        toggle.checked = false;
        toggle.dispatchEvent(new Event('change', { bubbles: true }));
        status.textContent = 'Zone boundaries could not load. Turn the layer on to retry.';
        status.hidden = false;
      }
    });
    map.on('moveend', refreshLabels);
  }
};
