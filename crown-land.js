/* Ontario Crown land records and CLUPA policy areas are separate datasets.
   Live export images preserve polygon holes and avoid downloading province-wide geometry. */
window.CrownLand = {
  init(map) {
    const root = 'https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/';
    const landService = root + 'LIO_Open08/MapServer';
    const policyService = root + 'LIO_Open06/MapServer';
    const atlasURL = 'https://www.ontario.ca/page/crown-land-use-policy-atlas';
    const attribution = 'Crown / policy: <a href="https://www.ontario.ca/page/open-government-licence-ontario" target="_blank" rel="noopener noreferrer">Ontario</a>';
    const blankImage = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    let enabled = false, policies = true, refreshTimer, queryController, policyPopup;
    const pane = map.createPane('crownLandPane');
    pane.style.zIndex = '350';
    pane.style.pointerEvents = 'none';
    const policyPane = map.createPane('crownPolicyPane');
    policyPane.style.zIndex = '360'; policyPane.style.pointerEvents = 'none';
    const symbol = (policy) => ({type:'esriSFS',style:'esriSFSSolid',color:policy ? [0,0,0,0] : [82,132,65,75],
      outline:{type:'esriSLS',style:policy ? 'esriSLSDash' : 'esriSLSSolid',color:policy ? [119,62,146,220] : [57,103,43,150],width:policy ? 1.4 : .7}});
    const layers = [
      {name:'Crown land',service:landService,ids:[34,32],policy:false},
      {name:'Policy boundaries',service:policyService,ids:[5],policy:true}
    ].map(layer=>({...layer,state:'idle',image:null,timer:null,signature:'',generation:0}));
    const control = L.control({position:'topright'});
    control.onAdd = () => {
      const box = L.DomUtil.create('div','crown-control');
      box.innerHTML = '<button type="button" id="crownLandToggle" aria-pressed="false" title="Show Crown land overlay"><span class="crown-swatch" aria-hidden="true"></span>Crown land</button><button type="button" id="crownLandInfo" aria-label="Crown land information and policy boundaries" title="Crown land information"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v1"/></svg></button>';
      L.DomEvent.disableClickPropagation(box); L.DomEvent.disableScrollPropagation(box);
      return box;
    };
    control.addTo(map);
    const statusControl = L.control({position:'bottomleft'});
    let statusBox, statusText, retry;
    statusControl.onAdd = () => {
      statusBox = L.DomUtil.create('div','crown-status'); statusBox.hidden = true;
      statusBox.innerHTML = '<span class="crown-status-text" role="status" aria-live="polite"></span><button type="button" hidden>Retry</button>';
      statusText = statusBox.querySelector('span'); retry = statusBox.querySelector('button');
      L.DomEvent.disableClickPropagation(statusBox); L.DomEvent.disableScrollPropagation(statusBox);
      return statusBox;
    };
    statusControl.addTo(map);
    const toggle = document.getElementById('crownLandToggle');
    const dialog = document.getElementById('crownLandDialog');
    const policyCheckbox = document.getElementById('crownPolicyToggle');
    document.getElementById('crownLandInfo').addEventListener('click',()=>dialog.showModal());
    function showStatus() {
      statusBox.hidden = !enabled;
      if(!enabled) return;
      const active = layers.filter(layer=>!layer.policy || policies);
      retry.hidden = !active.some(layer=>layer.state==='error');
      const failed = active.filter(layer=>layer.state==='error').map(layer=>layer.name);
      statusText.textContent = map.getZoom()<7 ? 'Zoom in to see Crown land and policy areas.'
        : failed.length ? failed.join(' and ')+' unavailable. Check your connection or retry.'
        : active.some(layer=>layer.state==='loading') ? 'Loading Crown land'+(policies?' and policy boundaries':'')+'…'
        : 'Access not confirmed. '+(policies?'Tap the map for policy details.':'See ⓘ for land information.');
    }
    function clearLayer(layer) {
      layer.generation++;
      clearTimeout(layer.timer);
      if(layer.image) {
        layer.image.off('load').off('error');
        const img = layer.image.getElement();
        if(img) img.src = blankImage;
        layer.image.remove(); layer.image = null;
      }
      layer.state = 'idle'; layer.signature = '';
    }
    function loadLayer(layer) {
      const bounds = map.getBounds(), size = map.getSize();
      const sw = L.CRS.EPSG3857.project(bounds.getSouthWest());
      const ne = L.CRS.EPSG3857.project(bounds.getNorthEast());
      const factor = Math.min(1,2048/size.x,2048/size.y);
      const width = Math.max(1,Math.round(size.x*factor)), height = Math.max(1,Math.round(size.y*factor));
      // Match the export image aspect ratio exactly so the server cannot shift the extent.
      ne.x = sw.x + (ne.y-sw.y)*width/height;
      const imageBounds = L.latLngBounds(L.CRS.EPSG3857.unproject(sw),L.CRS.EPSG3857.unproject(ne));
      const params = new URLSearchParams({f:'image',bbox:[sw.x,sw.y,ne.x,ne.y].join(','),bboxSR:'3857',imageSR:'3857',
        size:width+','+height,format:'png32',transparent:'true',layers:'show:'+layer.ids.join(','),
        dynamicLayers:JSON.stringify(layer.ids.map(id=>({id,source:{type:'mapLayer',mapLayerId:id},drawingInfo:{renderer:{type:'simple',symbol:symbol(layer.policy)}}}))) });
      const url = layer.service+'/export?'+params;
      if(layer.signature===url && layer.state!=='error') return;
      clearLayer(layer); layer.signature = url; layer.state = 'loading';
      const generation = layer.generation;
      const image = L.imageOverlay(url,imageBounds,{pane:layer.policy?'crownPolicyPane':'crownLandPane',opacity:0,interactive:false,alt:layer.name+' overlay',className:layer.policy?'crown-policy-image':'crown-land-image'});
      layer.image = image;
      function fail() {
        if(generation!==layer.generation || !enabled) return;
        clearLayer(layer); layer.state = 'error'; showStatus();
      }
      image.once('load',()=>{
        if(generation!==layer.generation || !enabled) return;
        clearTimeout(layer.timer); layer.state='ready'; image.setOpacity(1); showStatus();
      });
      image.once('error',fail);
      layer.timer = setTimeout(fail,25000);
      image.addTo(map);
    }
    function refresh() {
      if(!enabled) return;
      layers.forEach(layer=>{
        if(map.getZoom()<7 || (layer.policy && !policies)) clearLayer(layer);
        else loadLayer(layer);
      });
      showStatus();
    }
    function scheduleRefresh() {
      if(!enabled) return;
      clearTimeout(refreshTimer); refreshTimer = setTimeout(refresh,250);
    }
    function stopQuery() {
      queryController?.abort(); queryController = null;
      if(policyPopup) {map.closePopup(policyPopup);policyPopup=null;}
    }
    toggle.addEventListener('click',()=>{
      enabled = !enabled;
      toggle.setAttribute('aria-pressed',String(enabled));
      toggle.title = enabled ? 'Hide Crown land overlay' : 'Show Crown land overlay';
      clearTimeout(refreshTimer); stopQuery();
      if(enabled) {map.attributionControl.addAttribution(attribution);refresh();}
      else {layers.forEach(clearLayer);map.attributionControl.removeAttribution(attribution);showStatus();}
    });
    policyCheckbox.addEventListener('change',()=>{
      policies = policyCheckbox.checked; stopQuery(); refresh();
    });
    retry.addEventListener('click',refresh);
    map.on('moveend resize',scheduleRefresh);
    window.addEventListener('online',scheduleRefresh);
    map.on('click',async event=>{
      if(!enabled || !policies || map.getZoom()<7) return;
      stopQuery();
      const controller = new AbortController(); queryController = controller;
      const content = document.createElement('div'); content.className='crown-policy-popup';
      const heading = document.createElement('strong'); heading.textContent='Policy at this location';
      const detail = document.createElement('div'); detail.textContent='Looking up policy areas…';
      const caution = document.createElement('p'); caution.textContent='Policy areas do not confirm Crown ownership or public access. Check the official report and local restrictions.';
      const link = document.createElement('a');link.href=atlasURL;link.target='_blank';link.rel='noopener noreferrer';link.textContent='Open Ontario’s policy atlas';
      content.append(heading,detail,caution,link);
      policyPopup=L.popup({maxWidth:290}).setLatLng(event.latlng).setContent(content).openOn(map);
      const timer = setTimeout(()=>controller.abort(),12000);
      try {
        const params = new URLSearchParams({f:'json',geometry:event.latlng.lng+','+event.latlng.lat,geometryType:'esriGeometryPoint',inSR:'4326',spatialRel:'esriSpatialRelIntersects',
          outFields:'NAME_ENG,POLICY_IDENT,DESIGNATION_ENG',returnGeometry:'false',resultRecordCount:'20'});
        const response = await fetch(policyService+'/5/query?'+params,{signal:controller.signal});
        if(!response.ok) throw new Error('Policy lookup unavailable');
        const data = await response.json();if(data.error || !Array.isArray(data.features)) throw new Error('Invalid policy response');
        if(controller!==queryController) return;
        detail.replaceChildren();
        if(!data.features.length) detail.textContent='No policy area was returned here. This does not establish land ownership or permission to enter.';
        data.features.forEach(({attributes:a})=>{
          const p=document.createElement('p');p.textContent=[a.POLICY_IDENT,a.NAME_ENG,a.DESIGNATION_ENG].filter(Boolean).join(' · ');detail.append(p);
        });
        if(data.exceededTransferLimit) {const p=document.createElement('p');p.textContent='Additional overlapping areas may apply. Check the official atlas.';detail.append(p);}
        if(data.features.length) {const p=document.createElement('p');p.textContent='Use the policy ID above to find its report in the atlas.';detail.append(p);}
      } catch(error) {
        if(controller===queryController) detail.textContent='Policy details could not load. Use the official atlas to check this location.';
      } finally {clearTimeout(timer);}
    });
    map.on('popupclose',event=>{
      if(event.popup===policyPopup) {queryController?.abort();queryController=null;policyPopup=null;}
    });
  }
};
