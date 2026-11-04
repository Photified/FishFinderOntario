/* Ontario Fishing Access Point snapshot. Waterbody species are not assigned to access sites. */
window.FishingAccess = {
  init(ctx) {
    const { map, waterLayer } = ctx;
    const $ = id => document.getElementById(id);
    const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const labels = { launch: 'Boat launch', shore: 'Shore access', pier: 'Dock / pier access' };
    const icons = {
      launch: '<path d="M4 14h16l-3 5H7zM8 14V7h7l3 7M11 7V4M3 22l3-2 3 2 3-2 3 2 3-2 3 2"/>',
      shore: '<path d="M4 20h16M6 17l4-6 3 3 5-10M15 4h5v5M3 23l3-2 3 2 3-2 3 2 3-2 3 2"/>',
      pier: '<path d="M3 10h18M5 6v14M12 6v14M19 6v14M3 23l3-2 3 2 3-2 3 2 3-2 3 2"/>'
    };
    const svg = type => `<svg viewBox="0 0 24 26" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[type]}</svg>`;
    let points = [], visible = [], selected = null, listLimit = 20, mode = 'waters';
    let status = 'loading', dataDate = '', errorMessage = '';
    let pendingNearby = null, nearbyLake = null, accessKind = 'launch';
    const contextLayer = L.layerGroup().addTo(map);
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem('savedAccessPointsData')) || {}; } catch (_) {}
    const layer = L.layerGroup().addTo(map);
    const enabled = { waters: true, launch: false, shore: false };
    const host = $('accessResults');
    const typeEnabled = p => p.type === 'launch' ? enabled.launch : enabled.shore;
    const title = p => p.name || labels[p.type];
    const distance = p => {
      const s = ctx.state(), center = map.getCenter(), origin = s.origin || {lat:center.lat,lon:center.lng};
      return ctx.distance(origin.lat,origin.lon,p.lat,p.lon);
    };
    const distanceText = p => {
      const miles = ctx.state().units.distance === 'imperial';
      return `${(distance(p) * (miles ? 0.621371 : 1)).toFixed(1)} ${miles ? 'mi' : 'km'}`;
    };
    function matchPoints(term) {
      term = term.trim().toLowerCase();
      return term ? points.filter(p => `${p.name} ${p.comments}`.toLowerCase().includes(term)) : points;
    }
    function clearNearby() {
      pendingNearby = null;
      nearbyLake = null;
      contextLayer.clearLayers();
    }
    function setMode(kind, clearLake = true) {
      const center = map.getCenter(), zoom = map.getZoom();
      mode = kind === 'waters' ? 'waters' : 'access';
      if (mode === 'access') accessKind = kind;
      enabled.waters = mode === 'waters';
      enabled.launch = kind === 'launch';
      enabled.shore = kind === 'shore';
      selected = null;
      listLimit = 20;
      if (mode === 'waters') clearNearby();
      if (clearLake) ctx.clearLake();
      $('ff-results').hidden = mode === 'access';
      host.hidden = mode !== 'access';
      $('searchContext').hidden = mode === 'access';
      $('view-map').classList.toggle('access-view', mode === 'access');
      syncControls();
      map.invalidateSize({pan:false});
      map.setView(center, zoom, {animate:false});
      refresh();
    }
    function syncControls() {
      document.querySelectorAll('[data-map-layer]').forEach(button => button.setAttribute('aria-pressed', enabled[button.dataset.mapLayer]));
      if (enabled.waters && !map.hasLayer(waterLayer)) map.addLayer(waterLayer);
      if (!enabled.waters && map.hasLayer(waterLayer)) map.removeLayer(waterLayer);
      ctx.setWaterSearchVisible(enabled.waters);
    }
    document.querySelectorAll('[data-map-layer]').forEach(button => {
      const kind = button.dataset.mapLayer;
      if (kind !== 'waters') button.querySelector('.access-layer-icon').innerHTML = svg(kind);
      button.addEventListener('click', () => {
        if (enabled[kind]) return;
        setMode(kind);
      });
    });
    function select(p, scroll = true) {
      setMode(accessKind); selected = p.id; render();
      if (scroll) host.scrollIntoView({behavior:'smooth',block:'start'});
    }
    function refresh() {
      syncControls();
      const s = ctx.state(), bounds = map.getBounds();
      // A town/waterbody search establishes the area. Do not infer species at nearby access points.
      let matches = s.term && !s.waterMatches ? matchPoints(s.term) : points;
      matches = matches.filter(p => typeEnabled(p) && (!s.favoritesOnly || saved[p.id]));
      visible = matches.filter(p => bounds.contains([p.lat,p.lon])).sort((a,b) => distance(a)-distance(b));
      layer.clearLayers();
      const groups = new Map();
      matches.filter(p => bounds.pad(.1).contains([p.lat,p.lon])).forEach(p => {
        const xy = map.project([p.lat,p.lon],map.getZoom());
        const key = `${Math.floor(xy.x/48)}:${Math.floor(xy.y/48)}`;
        if (!groups.has(key)) groups.set(key,[]);
        groups.get(key).push(p);
      });
      groups.forEach(group => {
        const p = group[0];
        if (group.length > 1 && map.getZoom() < 18) {
          const lat = group.reduce((v,p) => v+p.lat,0)/group.length;
          const lon = group.reduce((v,p) => v+p.lon,0)/group.length;
          L.marker([lat,lon], {title:`${group.length} access points. Zoom to explore.`,icon:L.divIcon({className:accessKind === 'shore' ? 'access-cluster access-cluster-shore' : 'access-cluster',html:`${group.length}`,iconSize:[34,34]})})
            .on('click', () => {setMode(accessKind); selected=null; map.setView([lat,lon],Math.min(18,map.getZoom()+2));}).addTo(layer);
        } else {
          // At maximum zoom the list keeps coincident sites separately selectable.
          group.forEach(p => L.marker([p.lat,p.lon], {title:`${title(p)}: ${labels[p.type]}`,icon:L.divIcon({className:'',html:`<span class="access-pin access-${p.type}${saved[p.id] ? ' access-saved' : ''}">${svg(p.type)}</span>`,iconSize:[30,34],iconAnchor:[15,34]})})
            .on('click', () => select(p)).addTo(layer));
        }
      });
      render();
    }
    function safeUrl(url) {
      try {const u = new URL(url); return ['http:','https:'].includes(u.protocol) ? escape(u.href) : '';} catch (_) {return '';}
    }
    function fact(label, value) { return `<div><dt>${label}</dt><dd>${escape(value || 'Unknown')}</dd></div>`; }
    function card(p, expanded) {
      const directions = `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lon}`;
      const infoUrl = safeUrl(p.url);
      const verification = p.verified ? new Date(p.verified+'T12:00:00Z').toLocaleDateString('en-CA',{year:'numeric',month:'short',day:'numeric',timeZone:'UTC'}) : 'Not recorded';
      return `<article class="access-card${expanded ? ' access-expanded' : ''}" data-access-id="${escape(p.id)}">
        <div class="access-card-heading"><button type="button" class="access-open" data-access-action="open" aria-expanded="${expanded}"><span class="access-type access-${p.type}">${svg(p.type)} ${labels[p.type]}</span><strong>${escape(title(p))}</strong><span class="access-distance">${distanceText(p)} · straight-line</span></button><button type="button" class="access-save" data-access-action="save" aria-pressed="${!!saved[p.id]}" aria-label="${saved[p.id] ? 'Unsave' : 'Save'} ${escape(title(p))}">${saved[p.id] ? '★' : '☆'}</button></div>
        ${expanded ? `<dl class="access-facts">${fact('Parking',p.parking)}${fact('Fee applies',p.fee)}${fact('Ownership',p.ownership)}${fact('Accessible (source)',p.accessible)}${p.type === 'launch' ? fact('Launch surface',p.surface) : ''}${fact('Last site verification',verification)}</dl>
        ${p.comments ? `<p class="access-comment">${escape(p.comments)}</p>` : ''}
        <div class="access-actions"><a class="access-primary" href="${directions}" target="_blank" rel="noopener noreferrer">Get directions</a><button type="button" data-access-action="map">Show on map</button>${infoUrl ? `<a href="${infoUrl}" target="_blank" rel="noopener noreferrer">Site information</a>` : ''}</div>
        <p class="access-note">Check current access, posted signs and fishing rules before visiting. Nearby waterbody records do not confirm species at this exact spot.</p>
        <label class="access-note-label">Your private note<textarea rows="2" maxlength="1000" placeholder="Parking, route to the water, or a reminder…">${escape(saved[p.id]?.note || '')}</textarea></label><button type="button" class="access-note-save" data-access-action="note">Save point &amp; note</button><span class="access-note-feedback" role="status"></span>
        <p class="access-source">Source: <a href="https://data.ontario.ca/dataset/fishing-access-points" target="_blank" rel="noopener noreferrer">Government of Ontario</a> · Imported ${escape(dataDate)}</p>` : ''}
      </article>`;
    }
    function render() {
      if (mode !== 'access') return;
      const back = nearbyLake ? '<button type="button" class="access-back" data-access-action="lake">← Back to waterbody</button>' : '';
      if (status === 'loading') {host.innerHTML=back+'<p class="status-msg">Loading Ontario access points…</p>';return;}
      if (status === 'error') {host.innerHTML=back+`<p class="status-msg">${escape(errorMessage)}</p><button type="button" class="btn-secondary" data-access-action="retry">Retry access points</button>`;return;}
      const s = ctx.state(), point = points.find(p => p.id === selected);
      const intro = `<p class="access-summary">${visible.length.toLocaleString()} ${accessKind === 'launch' ? 'boat launches' : 'shore access points'} in view${s.favoritesOnly ? ' · Saved spots only' : ''}${nearbyLake ? ' · Near ' + escape(nearbyLake.name) : ''}. Distances from ${s.origin ? 'your starting location' : 'map centre'}.</p>`;
      if (point) {
        host.innerHTML=back+'<button type="button" class="access-back" data-access-action="back">← Back to access points</button>'+card(point,true);
      } else {
        host.innerHTML=back+intro+(visible.length ? visible.slice(0,listLimit).map(p => card(p,false)).join('') : `<p class="status-msg">${s.favoritesOnly ? 'No saved access points in this view. Move the map or turn off Saved Spots.' : 'No access points recorded in this view with these filters. Move or zoom out, or clear your search. This does not mean access is unavailable.'}</p>`);
        if (visible.length > listLimit) host.innerHTML+=`<button type="button" class="btn-secondary" data-access-action="more">Show more (${Math.min(listLimit,visible.length)} of ${visible.length})</button>`;
        host.innerHTML+='<p class="access-source">Recorded access locations. Shore access includes docks and piers.</p>';
      }
    }
    function persist() {
      try {localStorage.setItem('savedAccessPointsData',JSON.stringify(saved));return true;}
      catch (_) {AppPopups.notice('Could not save this point', 'Check your available storage or browser settings.');return false;}
    }
    host.addEventListener('click', event => {
      const button = event.target.closest('[data-access-action]'); if (!button) return;
      const action = button.dataset.accessAction, article = button.closest('[data-access-id]');
      const p = article && points.find(p => p.id === article.dataset.accessId);
      if (action === 'lake') {clearNearby();ctx.backToLake();return;}
      if (action === 'retry') {load();return;}
      if (action === 'more') {listLimit+=20;render();return;}
      if (action === 'back') {selected=null;render();return;}
      if (!p) return;
      if (action === 'open') {selected=selected===p.id?null:p.id;render();return;}
      if (action === 'save' || action === 'note') {
        const previous = {...saved};
        if (action === 'save' && saved[p.id]) delete saved[p.id];
        else saved[p.id] = {note:action === 'note' ? article.querySelector('textarea').value.trim() : ''};
        if (!persist()) {saved=previous;return;}
        if (ctx.state().favoritesOnly && !saved[p.id]) selected=null;
        refresh();
        if (action === 'note') host.querySelector('.access-note-feedback').textContent='Saved on this device.';
      }
      if (action === 'map') {map.setView([p.lat,p.lon],16);$('map').scrollIntoView({behavior:'smooth',block:'center'});}
    });
    function frameNearbyAccess(lake) {
      const nearest = points.filter(typeEnabled).map(point => ({point,
        distance:ctx.distance(lake.lat,lake.lon,point.lat,point.lon)
      })).sort((a,b) => a.distance-b.distance).slice(0,3);
      map.invalidateSize({pan:false});
      if(nearest.length) {
        map.fitBounds([[lake.lat,lake.lon],...nearest.map(({point}) => [point.lat,point.lon])], {
          padding:[40,40],maxZoom:10,animate:false
        });
      }
      refresh();
    }
    function preview(lake) {
      if (status === 'loading') return '<p class="record-note">Loading nearby access…</p>';
      if (status === 'error') return '<p class="record-note">Access points could not load.</p><button type="button" class="nearby-access-btn" data-nearby-retry>Retry access points</button>';
      const candidates = points.map(point => ({
        point, km:ctx.distance(lake.lat,lake.lon,point.lat,point.lon)
      })).filter(item => item.km <= 25).sort((a,b) => a.km-b.km);
      const nearest = [
        candidates.find(({point}) => point.type === 'launch'),
        candidates.find(({point}) => point.type !== 'launch')
      ].filter(Boolean);
      const miles = ctx.state().units.distance === 'imperial';
      const rows = nearest.map(({point,km}) => `<li><div><strong>${escape(title(point))}</strong>
        <small>${labels[point.type]} · ${(km * (miles ? 0.621371 : 1)).toFixed(1)} ${miles ? 'mi' : 'km'}</small></div>
        <button type="button" class="nearby-access-btn" data-nearby-point="${escape(point.id)}" aria-label="Show ${escape(title(point))} on map">Show on map</button></li>`);
      return (rows.length ? '<ul class="nearby-preview">'+rows.join('')+'</ul><p class="record-note">Straight-line distances from the waterbody pin. Nearby sites may serve a different waterbody.</p>'
        : '<p class="record-note">No access points recorded within '+(miles ? '15.5 mi' : '25 km')+' of this waterbody pin.</p>')
        + '<button type="button" class="nearby-access-btn" data-nearby-browse>Browse access points</button>';
    }
    async function load() {
      status='loading';render();ctx.refreshPreview?.();
      try {
        const response=await fetch('accessPoints.json'); if (!response.ok) throw new Error('Fetch failed');
        const data=await response.json();
        if (!Array.isArray(data.points) || data.points.length!==data.count) throw new Error('Invalid access data');
        points=data.points.filter(p => labels[p.type] && Number.isFinite(p.lat) && Number.isFinite(p.lon));
        dataDate=data.retrievedAt;status='ready';
        if(pendingNearby && mode === 'access') {const lake=pendingNearby;pendingNearby=null;frameNearbyAccess(lake);}
        else refresh();
      } catch (_) {status='error';errorMessage='Could not load access points. Check your connection and try again. Waterbody search is still available.';render();}
      finally {ctx.refreshPreview?.();}
    }
    syncControls();
    map.on('moveend', () => {listLimit=20;refresh();});
    load();
    return {
      refresh, preview, retry:load,
      showWaters() {setMode('waters',false);},
      isAccess() {return mode === 'access';},
      exploreArea(origin) {
        clearNearby(); selected=null;
        if (status === 'ready') frameNearbyAccess(origin);
        else {pendingNearby=origin;map.setView([origin.lat,origin.lon],10);render();}
      },
      searchMatches: matchPoints,
      nearby(lake, pointId) {
        const point = points.find(p => p.id === pointId);
        const favoritesButton = $('viewFavoritesBtn');
        if(ctx.state().favoritesOnly) favoritesButton.click();
        ctx.clearSearch();
        clearNearby();
        nearbyLake = lake;
        setMode(point && point.type !== 'launch' ? 'shore' : 'launch');
        const label = document.createElement('span');
        label.textContent = lake.name;
        L.marker([lake.lat,lake.lon], {
          title:lake.name,
          icon:L.divIcon({className:'',html:'<div class="custom-pin pin-blue pin-active nearby-waterbody-pin"></div>',iconSize:[24,24],iconAnchor:[12,24]})
        }).bindTooltip(label,{permanent:true,direction:'top',offset:[0,-24],className:'app-map-tooltip'})
          .on('click', () => ctx.backToLake()).addTo(contextLayer);
        if(point) {
          map.setView([point.lat,point.lon],18,{animate:false});
          selected=point.id;
          render();
          $('map').scrollIntoView({behavior:'smooth',block:'center'});
        } else {
          if(status === 'ready') frameNearbyAccess(lake);
          else {pendingNearby=lake;render();}
          host.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    };
  }
};
