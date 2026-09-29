/* Interactive first-visit guides. The spotlight leaves real app controls usable. */
(() => {
  const keys = {map:'ffMapGuideV2', advisor:'ffAdvisorGuideV2'};
  const $ = selector => document.querySelector(selector);
  let active = null, index = 0, frame = 0, token = 0, previousFocus = null;
  const root = document.createElement('div');
  root.id = 'guidedTour'; root.hidden = true;
  root.innerHTML = `<div class="tour-shade"></div><div class="tour-shade"></div><div class="tour-shade"></div><div class="tour-shade"></div><div class="tour-ring" aria-hidden="true"></div>
    <section class="tour-card" tabindex="-1" role="dialog" aria-labelledby="tourTitle" aria-describedby="tourCopy">
      <div class="tour-heading"><span id="tourProgress"></span><button id="tourExit" type="button">Skip tour</button></div>
      <div aria-live="polite" aria-atomic="true"><h2 id="tourTitle"></h2><p id="tourCopy"></p></div>
      <div class="tour-actions"><button id="tourPrevious" type="button" hidden>Previous step</button><button id="tourStep" type="button">Skip step</button></div>
    </section>`;
  document.body.append(root);
  const welcome = document.createElement('div');
  welcome.id = 'welcomeTour'; welcome.hidden = true;
  welcome.innerHTML = `<section class="welcome-card" role="dialog" aria-modal="true" aria-labelledby="welcomeTitle" aria-describedby="welcomeCopy">
    <h2 id="welcomeTitle">Welcome to Fish Finder Ontario</h2>
    <p id="welcomeCopy">Find waterbodies by fish, explore access points, and get fishing setup ideas.</p>
    <div class="welcome-actions"><button id="welcomeSkip" type="button">Skip</button><button id="welcomeStart" type="button">Take tutorial</button></div>
  </section>`;
  document.body.append(welcome);
  const card = root.querySelector('.tour-card'), ring = root.querySelector('.tour-ring');
  const shades = [...root.querySelectorAll('.tour-shade')];
  const stepButton = $('#tourStep'), previousButton = $('#tourPrevious');
  const mapNav = () => document.querySelectorAll('.nav-btn')[0];
  const advisorNav = () => document.querySelectorAll('.nav-btn')[1];
  const leaveSpot = () => {const b=$('#backResultsBtn');if(b && !b.hidden)b.click();};
  const guides = {
    map: [
      {title:'Find your area',copy:'Tap the pin to find nearby waterbodies, or enter a town or waterbody and tap the magnifying glass. The star shows saved spots; we’ll try it shortly.',target:'.search-container > button, .search-container > input',event:'area'},
      {title:'What do you want to catch?',copy:'Swipe and tap a fish. Choose All Fish to keep every species in view.',target:'#fishSlider',event:'map-fish'},
      {title:'Open a waterbody',copy:'Tap a map pin for details. Numbered circles zoom into nearby spots.',target:'#map',event:'spot'},
      {title:'Save this spot',copy:'Tap this star to save the waterbody on your device.',target:'#ff-results .lake-card.active-highlight .star-btn',event:'save'},
      {title:'Find your saved spots',copy:'Tap the star beside search to show only your saved spots. Tap again anytime to show all.',target:'#viewFavoritesBtn',event:'favorites',enter:leaveSpot},
      {title:'Add access points',copy:'Turn on Boat launches or Shore access when you need them. Waterbodies are shown by default.',target:'.map-layer-controls',event:'layers',next:'Continue'},
      {title:'Try Advisor',copy:'Tap Advisor for fishing setups based on your target fish and conditions.',target:()=>advisorNav(),event:'advisor-open',next:'Finish'}
    ],
    advisor: [
      {title:'Choose your target fish',copy:'Swipe and tap the species you want advice for. You can tap the current selection to keep it.',target:'#fish-selector',event:'advisor-fish'},
      {title:'Choose the weather',copy:'Tap the conditions you expect while fishing.',target:'#weather-selector',event:'advisor-weather'},
      {title:'How clear is the water?',copy:'Tap the clarity that best matches the water.',target:'#clarity-selector',event:'advisor-clarity'},
      {title:'Choose the temperature',copy:'Tap the water temperature that best matches your trip.',target:'#temp-selector',event:'advisor-temp'},
      {title:'Build your setup',copy:'Tap Find Your Bait to see your recommendations.',target:'#getRecommendation',event:'recommendation'},
      {title:'Explore your results',copy:'Setup shows lures, colours and gear. Tap Strategy for where and how to fish.',target:'#advisor-results .tab-bar',event:'strategy',next:'Finish'}
    ]
  };
  function seen(kind) {try{return localStorage.getItem(keys[kind]) === 'true';}catch(_){return false;}}
  function markSeen(kind) {try{localStorage.setItem(keys[kind],'true');}catch(_){}}
  function elements() {
    if(!active)return [];
    const target=guides[active][index].target;
    const result=typeof target==='function' ? [target()] : [...document.querySelectorAll(target)];
    return result.filter(el=>el && el.getClientRects().length);
  }
  function viewport() {
    const v=window.visualViewport;
    return {left:v?.offsetLeft||0,top:v?.offsetTop||0,width:v?.width||innerWidth,height:v?.height||innerHeight};
  }
  function bounds() {
    const rects=elements().map(el=>el.getBoundingClientRect());
    if(!rects.length)return null;
    return {left:Math.min(...rects.map(r=>r.left)),top:Math.min(...rects.map(r=>r.top)),right:Math.max(...rects.map(r=>r.right)),bottom:Math.max(...rects.map(r=>r.bottom))};
  }
  function rect(el,x,y,w,h) {Object.assign(el.style,{left:x+'px',top:y+'px',width:Math.max(0,w)+'px',height:Math.max(0,h)+'px'});}
  function position() {
    frame=0;if(!active)return;
    const v=viewport(), b=bounds(), edge=v.left+v.width, bottom=v.top+v.height;
    card.style.width=Math.min(350,v.width-24)+'px';
    if(!b || b.bottom<v.top || b.top>bottom) {
      rect(shades[0],v.left,v.top,v.width,v.height);shades.slice(1).forEach(s=>rect(s,0,0,0,0));ring.hidden=true;
      Object.assign(card.style,{left:(v.left+12)+'px',top:(v.top+12)+'px',maxHeight:(v.height-24)+'px'});
      return;
    }
    const l=Math.max(v.left,b.left-6),r=Math.min(edge,b.right+6),t=Math.max(v.top,b.top-6),bt=Math.min(bottom,b.bottom+6);
    rect(shades[0],v.left,v.top,v.width,t-v.top);
    rect(shades[1],v.left,t,l-v.left,bt-t);
    rect(shades[2],r,t,edge-r,bt-t);
    rect(shades[3],v.left,bt,v.width,bottom-bt);
    ring.hidden=false;rect(ring,l,t,r-l,bt-t);
    const above=t-v.top-20,below=bottom-bt-20;
    card.style.maxHeight=Math.max(80,Math.max(above,below))+'px';
    const h=card.getBoundingClientRect().height;
    const placeBelow=below>=h || below>=above;
    card.style.top=(placeBelow ? bt+10 : Math.max(v.top+10,t-h-10))+'px';
    card.style.left=Math.max(v.left+12,Math.min(edge-card.getBoundingClientRect().width-12,(l+r-card.getBoundingClientRect().width)/2))+'px';
  }
  function schedule() {if(active&&!frame)frame=requestAnimationFrame(position);}
  function focusables() {
    const candidates=[...elements().flatMap(el=>[el,...el.querySelectorAll('button,input,a[href],[tabindex]')]),...card.querySelectorAll('button')];
    return [...new Set(candidates)].filter(el=>el.matches('button,input,a[href],[tabindex]') && !el.disabled && el.tabIndex>=0 && el.getClientRects().length);
  }
  function showStep() {
    const stamp=++token,step=guides[active][index];
    step.enter?.();
    $('#tourTitle').textContent=step.title;$('#tourCopy').textContent=step.copy;
    $('#tourProgress').textContent=`${active==='map'?'Map':'Advisor'} · ${index+1} of ${guides[active].length}`;
    stepButton.textContent=step.next||'Skip step';
    previousButton.hidden=index===0;
    if(step.event==='save' && $('#ff-results .active-highlight .star-btn.active')) {
      $('#tourCopy').textContent='This spot is already saved. Its gold star means you can find it again using Saved Spots.';
      stepButton.textContent='Continue';
    }
    if(step.event==='save' && !elements().length) {
      $('#tourCopy').textContent='Open a waterbody and tap its star to save it. You can try this later.';
      stepButton.textContent='Continue';
    }
    requestAnimationFrame(()=>{
      if(!active||stamp!==token)return;
      const b=bounds(),v=viewport();
      if(b){
        const header=document.querySelector('header').getBoundingClientRect().height;
        const top=v.top+header+18;
        const desired=Math.max(top,v.top+(v.height-(b.bottom-b.top)-190)/2);
        window.scrollBy({top:b.top-desired,behavior:'instant'});
      }
      position();
      // Keep typing and touch interaction in the actual highlighted controls.
      card.focus({preventScroll:true});
    });
  }
  function stop(mark=true) {
    if(!active)return;
    if(mark)markSeen(active);
    active=null;token++;root.hidden=true;document.body.classList.remove('tour-running');
    if(frame){cancelAnimationFrame(frame);frame=0;}
    if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});
  }
  let welcomeOpen = false, welcomeFocus = null;
  function closeWelcome(skip=false) {
    if(!welcomeOpen)return;
    welcomeOpen=false;welcome.hidden=true;
    if(skip)markSeen('map');
    if(welcomeFocus?.isConnected)welcomeFocus.focus({preventScroll:true});
  }
  function showWelcome() {
    if(welcomeOpen)return;
    welcomeFocus=document.activeElement;welcomeOpen=true;welcome.hidden=false;
    welcome.querySelector('#welcomeStart').focus({preventScroll:true});
  }
  function start(kind,force=false) {
    if(!guides[kind]||(!force&&seen(kind))||(!force&&active===kind))return;
    if(kind==='map'&&!force){showWelcome();return;}
    if(active)stop(false);
    active=kind;index=0;previousFocus=document.activeElement;
    root.hidden=false;document.body.classList.add('tour-running');showStep();
  }
  function advance() {if(!active)return;if(index+1===guides[active].length)stop();else{index++;showStep();}}
  function action(name) {
    if(!active||guides[active][index].event!==name)return;
    const stamp=token;
    // Let the app finish rendering and scrolling before locating the next control.
    setTimeout(()=>{if(active&&stamp===token)advance();},100);
  }
  root.querySelector('#tourExit').addEventListener('click',()=>stop());
  welcome.querySelector('#welcomeStart').addEventListener('click',()=>{closeWelcome();start('map',true);});
  welcome.querySelector('#welcomeSkip').addEventListener('click',()=>closeWelcome(true));
  stepButton.addEventListener('click',advance);
  previousButton.addEventListener('click',()=>{if(active&&index>0){index--;if(active==='map'&&index<=2)leaveSpot();showStep();}});
  document.addEventListener('keydown',e=>{
    if(welcomeOpen){
      if(e.key==='Escape'){e.preventDefault();closeWelcome(true);return;}
      if(e.key==='Tab'){
        const buttons=[welcome.querySelector('#welcomeSkip'),welcome.querySelector('#welcomeStart')];
        const at=buttons.indexOf(document.activeElement);
        e.preventDefault();buttons[e.shiftKey?(at<=0?1:0):(at===0?1:0)].focus();
      }
      return;
    }
    if(!active)return;
    if(e.key==='Escape'){e.preventDefault();stop();return;}
    if(e.key==='Tab'){
      const list=focusables();if(!list.length)return;
      const at=list.indexOf(document.activeElement),next=e.shiftKey?(at<=0?list.length-1:at-1):(at+1)%list.length;
      e.preventDefault();list[next].focus();
    }
  });
  document.addEventListener('focusin',e=>{
    if(welcomeOpen&&!welcome.contains(e.target)){welcome.querySelector('#welcomeStart').focus({preventScroll:true});return;}
    if(active&&!card.contains(e.target)&&!elements().some(el=>el===e.target||el.contains(e.target)))$('#tourExit').focus({preventScroll:true});
  });
  // Delegated events run after the real controls have changed state.
  document.addEventListener('click',e=>{
    if(e.target.closest('#fishSlider .fish-btn'))action('map-fish');
    for(const kind of ['fish','weather','clarity','temp'])if(e.target.closest(`#${kind}-selector .fish-btn`))action('advisor-'+kind);
    if(e.target.closest('#viewFavoritesBtn'))action('favorites');
    if(e.target.closest('[data-map-layer]'))action('layers');
    if(e.target.closest('#strategyTab'))action('strategy');
  });
  window.addEventListener('ff-tour-action',e=>action(e.detail));
  window.addEventListener('ff-view-change',e=>{
    const kind=e.detail==='view-advisor'?'advisor':'map';
    if(active&&active!==kind)stop(active==='map'&&guides.map[index].event==='advisor-open');
    setTimeout(()=>{if($('#view-'+kind)?.classList.contains('active-view'))start(kind);},180);
  });
  window.addEventListener('resize',schedule);
  window.addEventListener('scroll',schedule,true);
  window.visualViewport?.addEventListener('resize',schedule);
  window.visualViewport?.addEventListener('scroll',schedule);
  new ResizeObserver(schedule).observe(card);
  document.getElementById('openIntroBtn').addEventListener('click',()=>{
    $('#settingsModal').classList.remove('open');leaveSpot();
    window.switchAppView('view-map',mapNav());showWelcome();
  });
  document.getElementById('openAdvisorIntroBtn').addEventListener('click',()=>{
    $('#settingsModal').classList.remove('open');
    window.switchAppView('view-advisor',advisorNav());start('advisor',true);
  });
  window.FFGuide={start,action,active:()=>active,feedback:(event,text)=>{if(active&&guides[active][index].event===event){$('#tourCopy').textContent=text;schedule();}}};
})();
