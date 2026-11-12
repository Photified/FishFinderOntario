/* Reusable technique scenes. Original lure PNGs stay unchanged on disk. */
window.TackleAnimation = (() => {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const sprites = {"dropshot":{"width":512,"height":512,"box":[207,32,229,448],"ax":0.07,"ay":0.42},"frog":{"width":512,"height":512,"box":[32,109,441,276],"ax":0.07,"ay":0.42},"flippingjig":{"width":512,"height":512,"box":[32,183,448,183],"ax":0.12,"ay":0.2},"spoon":{"width":512,"height":512,"box":[32,150,433,163],"ax":0.035,"ay":0.6},"bladebait":{"width":512,"height":512,"box":[41,120,415,272],"ax":0.45,"ay":0.08},"powerbait":{"width":512,"height":512,"box":[32,110,448,287],"ax":0.07,"ay":0.42},"jigwithworm":{"width":512,"height":512,"box":[39,186,437,138],"ax":0.1,"ay":0.32},"jerkbait":{"width":512,"height":512,"box":[38,182,437,137],"ax":0.07,"ay":0.42},"squarebillcrankbait":{"width":512,"height":512,"box":[33,143,447,226],"ax":0.07,"ay":0.34},"zigrig":{"width":512,"height":512,"box":[33,107,434,295],"ax":0.07,"ay":0.42},"cutbait":{"width":512,"height":512,"box":[44,127,410,267],"ax":0.07,"ay":0.42},"creaturebait":{"width":512,"height":512,"box":[43,145,431,206],"ax":0.07,"ay":0.42},"liplesscrank":{"width":512,"height":512,"box":[47,128,431,268],"ax":0.45,"ay":0.08},"swimbait":{"width":512,"height":512,"box":[44,181,428,150],"ax":0.07,"ay":0.42},"packbait":{"width":512,"height":512,"box":[32,53,448,400],"ax":0.07,"ay":0.42},"boilies":{"width":512,"height":512,"box":[38,111,436,289],"ax":0.07,"ay":0.42},"plopper":{"width":512,"height":512,"box":[32,146,448,222],"ax":0.07,"ay":0.34},"lindyrig":{"width":512,"height":512,"box":[32,160,448,187],"ax":0.07,"ay":0.42},"jigwithminnow":{"width":512,"height":512,"box":[32,184,446,146],"ax":0.1,"ay":0.32},"inlinespinner":{"width":512,"height":512,"box":[32,183,448,148],"ax":0.07,"ay":0.42},"flutterspoon":{"width":512,"height":512,"box":[32,187,442,142],"ax":0.035,"ay":0.6},"footballjig":{"width":512,"height":512,"box":[32,152,448,246],"ax":0.12,"ay":0.2},"tube":{"width":512,"height":512,"box":[46,169,417,180],"ax":0.07,"ay":0.42},"rippinrap":{"width":512,"height":512,"box":[34,117,432,284],"ax":0.45,"ay":0.08},"jiggingspoon":{"width":512,"height":512,"box":[55,34,381,443],"ax":0.12,"ay":0.2},"creeper":{"width":512,"height":512,"box":[49,119,419,268],"ax":0.07,"ay":0.42},"bucktail":{"width":512,"height":512,"box":[34,160,441,192],"ax":0.07,"ay":0.42},"nedrig":{"width":512,"height":512,"box":[65,195,406,120],"ax":0.1,"ay":0.32},"spinnerbait":{"width":512,"height":512,"box":[32,107,447,298],"ax":0.12,"ay":0.2},"jiggingrap":{"width":512,"height":512,"box":[32,164,448,187],"ax":0.07,"ay":0.42},"arig":{"width":512,"height":512,"box":[32,119,437,276],"ax":0.07,"ay":0.42},"senko":{"width":512,"height":512,"box":[32,186,445,135],"ax":0.07,"ay":0.42},"bondybait":{"width":512,"height":512,"box":[36,146,444,217],"ax":0.07,"ay":0.42},"glidebait":{"width":512,"height":512,"box":[32,170,447,173],"ax":0.07,"ay":0.42},"spawnsacs":{"width":512,"height":512,"box":[92,110,347,290],"ax":0.07,"ay":0.42},"popper":{"width":512,"height":512,"box":[42,142,429,222],"ax":0.07,"ay":0.34},"crankbait":{"width":512,"height":512,"box":[32,158,446,199],"ax":0.07,"ay":0.34},"bread":{"width":512,"height":512,"box":[32,110,418,296],"ax":0.07,"ay":0.42},"doughball":{"width":512,"height":512,"box":[56,108,417,270],"ax":0.07,"ay":0.42},"jig":{"width":512,"height":512,"box":[45,164,434,198],"ax":0.1,"ay":0.32},"fluke":{"width":512,"height":512,"box":[34,189,438,134],"ax":0.07,"ay":0.42},"beetlespin":{"width":512,"height":512,"box":[55,124,394,266],"ax":0.12,"ay":0.2},"noisytopwater":{"width":512,"height":512,"box":[32,151,448,214],"ax":0.07,"ay":0.42},"dodgerfly":{"width":512,"height":512,"box":[32,102,448,300],"ax":0.07,"ay":0.42},"minnow":{"width":512,"height":512,"box":[32,181,437,146],"ax":0.07,"ay":0.42},"slipbobber":{"width":512,"height":512,"box":[116,32,282,445],"ax":0.07,"ay":0.42},"stinkbait":{"width":512,"height":512,"box":[32,104,430,298],"ax":0.07,"ay":0.42},"chickenliver":{"width":512,"height":512,"box":[59,122,404,274],"ax":0.07,"ay":0.42},"livebait":{"width":512,"height":512,"box":[45,143,435,225],"ax":0.07,"ay":0.42},"worm":{"width":512,"height":512,"box":[44,189,431,124],"ax":0.07,"ay":0.42},"chatterbait":{"width":512,"height":512,"box":[34,146,442,201],"ax":0.035,"ay":0.47},"largebucktail":{"width":512,"height":512,"box":[32,162,446,184],"ax":0.07,"ay":0.42},"minnowlure":{"width":512,"height":512,"box":[32,183,448,147],"ax":0.07,"ay":0.42},"spook":{"width":512,"height":512,"box":[32,179,448,148],"ax":0.07,"ay":0.34},"kastmaster":{"width":512,"height":512,"box":[40,173,431,160],"ax":0.035,"ay":0.6},"bulldawg":{"width":512,"height":512,"box":[32,147,448,216],"ax":0.07,"ay":0.42},"methodfeeder":{"width":512,"height":512,"box":[39,148,438,202],"ax":0.07,"ay":0.42},"bottombouncer":{"width":512,"height":512,"box":[32,103,446,305],"ax":0.07,"ay":0.42},"popupcorn":{"width":512,"height":512,"box":[56,105,390,292],"ax":0.07,"ay":0.42}};
  const ids = new Set(['steady-retrieve','lift-and-drop','twitch-and-pause','bottom-drag','weightless-fall','walk-the-dog','pop-and-pause','surface-retrieve','float-fishing','natural-drift','bottom-bait','trolling','drop-shot','pull-and-pause','glide-and-pause','suspended-hookbait','surface-bait','diving-retrieve']);
  const E = t => Math.max(0, Math.min(1, t));
  const ease = t => {t=E(t);return t*t*(3-2*t);};
  const lerp = (a,b,t) => a+(b-a)*t;
  const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let serial = 0;

  function markup(diagram, profile, name) {
    if (!ids.has(diagram.id) || !sprites[profile.key]) return '';
    const uid = `tackle-scene-${++serial}`;
    const top = ['walk-the-dog','glide-and-pause'].includes(diagram.id);
    return `<svg class="setup-animation-svg" viewBox="24 110 912 535" role="img" aria-labelledby="${uid}-title ${uid}-desc" data-sprite="${esc(profile.key)}" data-source="${esc(profile.image)}">
      <title id="${uid}-title">${esc(name)}: ${esc(diagram.title)}</title><desc id="${uid}-desc">An illustrative technique using the selected tackle image. Follow the written instructions for rigging and retrieve details.</desc>
      <defs><linearGradient id="${uid}-water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1f9fd"/><stop offset="1" stop-color="#d9eaf4"/></linearGradient><marker id="${uid}-arrow" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="4" markerHeight="4" orient="auto"><path d="M1 1 10 6 1 11" fill="none" stroke="#315f9b" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
      <rect x="24" y="110" width="912" height="535" fill="#fbfcfd"/>
      ${top ? `<rect x="24" y="110" width="912" height="535" fill="url(#${uid}-water)"/>` : `<rect x="24" y="300" width="912" height="345" fill="url(#${uid}-water)"/><path d="M24 300 Q52 292 80 300 T136 300 T192 300 T248 300 T304 300 T360 300 T416 300 T472 300 T528 300 T584 300 T640 300 T696 300 T752 300 T808 300 T864 300 T936 300" fill="none" stroke="#a2c6db" stroke-width="2"/><path d="M24 612 Q140 600 260 611 T500 610 T740 609 T936 610 V645 H24Z" fill="#e7dfce"/><path d="M24 612 Q140 600 260 611 T500 610 T740 609 T936 610" fill="none" stroke="#c8bfa8" stroke-width="2"/><ellipse cx="170" cy="622" rx="28" ry="10" fill="#c9c6bc"/><ellipse cx="780" cy="621" rx="18" ry="7" fill="#d0cabd"/>`}
      <g class="setup-animation-dynamic" data-arrow="${uid}-arrow"></g></svg>`;
  }

  function mount(figure) {
    const svg = figure.querySelector('.setup-animation-svg');
    if (!svg) return null;
    const root = svg.querySelector('.setup-animation-dynamic');
    const key = svg.dataset.sprite, meta = sprites[key];
    const nodes = new Map();
    const arrowId = root.dataset.arrow;
    let active = new Set(), image = null;
    const set = (node, attrs) => Object.entries(attrs).forEach(([name,value]) => {
      const text = typeof value === 'number' ? String(Math.round(value*100)/100) : String(value);
      if (node.getAttribute(name) !== text) node.setAttribute(name,text);
    });
    function put(id, tag, attrs) {
      let node = nodes.get(id);
      if (!node) {node=document.createElementNS(NS,tag);node.dataset.part=id;root.append(node);nodes.set(id,node);}
      active.add(id);set(node,attrs);return node;
    }
    const path = (id,d,attrs={}) => put(id,'path',{d,fill:'none',stroke:'#5a7587','stroke-width':2.5,...attrs});
    const line = (id,p,x,y,{slack=0,opacity=1}={}) => path(id,`M${p.x} ${p.y} ${slack?`Q${(p.x+x)/2-slack} ${(p.y+y)/2+slack} ${x} ${y}`:`L${x} ${y}`}`,{opacity});
    const arrow = (id,x1,y1,x2,y2,opacity=1) => path(id,`M${x1} ${y1}L${x2} ${y2}`,{stroke:'#315f9b','stroke-width':6,'stroke-linecap':'round','marker-end':`url(#${arrowId})`,opacity});
    const pause = (x=790,y=480) => path('pause',`M${x-8} ${y-16}v32m18-32v32`,{stroke:'#315f9b','stroke-width':9,'stroke-linecap':'round'});
    const ring = (id,x,y,r,opacity=.6) => put(id,'ellipse',{cx:x,cy:y,rx:r,ry:r*.24,fill:'none',stroke:'#8fb9d1','stroke-width':2,opacity});
    const sinker = (x,y,opacity=1) => path('sinker',`M${x-6} ${y-20}Q${x-13} ${y-4} ${x-9} ${y}L${x+9} ${y}Q${x+13} ${y-4} ${x+6} ${y-20}Z`,{fill:'#72828b',stroke:'#4c606c','stroke-width':2,opacity});
    const hook = (x,y,opacity=1) => path('hook',`M${x} ${y-4}v12q0 13 9 13q9 0 8-11l-4 4`,{stroke:'#425867','stroke-width':2.3,opacity});
    function rod(angle=-4,{x=80,y=270,length=300,crank=0}={}) {
      const a=angle*Math.PI/180,tip={x:x+length*Math.cos(a),y:y+length*Math.sin(a)};
      const gx=x+50*Math.cos(a),gy=y+50*Math.sin(a),rx=x+40*Math.cos(a)-21*Math.sin(a),ry=y+40*Math.sin(a)+21*Math.cos(a);
      path('rod',`M${x} ${y}Q${x+(tip.x-x)*.6} ${y+(tip.y-y)*.6-4} ${tip.x} ${tip.y}`,{stroke:'#253b4c','stroke-width':5,'stroke-linecap':'round'});
      path('handle',`M${x} ${y}L${gx} ${gy}`,{stroke:'#3b4a52','stroke-width':12,'stroke-linecap':'round'});
      put('reel','circle',{cx:rx,cy:ry,r:12,fill:'#e2e8ec',stroke:'#3b4a52','stroke-width':3});
      path('crank',`M${rx+7*Math.cos(crank)} ${ry+7*Math.sin(crank)}l${10*Math.cos(crank)} ${10*Math.sin(crank)}`,{stroke:'#3b4a52','stroke-width':3,'stroke-linecap':'round'});
      return tip;
    }
    function sprite(x,y,{width=165,maxHeight=90,angle=0,opacity=1,flip=false,ax=meta.ax,ay=meta.ay}={}) {
      const [bx,by,bw,bh]=meta.box;
      let w=width,h=w*bh/bw;if(h>maxHeight){w*=maxHeight/h;h=maxHeight;}
      const group=put('lure','g',{transform:`translate(${x} ${y}) rotate(${angle}) scale(${flip?-1:1} 1)`,opacity});
      if (!image) {
        const crop=document.createElementNS(NS,'svg');set(crop,{viewBox:`${bx} ${by} ${bw} ${bh}`,overflow:'visible'});
        image=document.createElementNS(NS,'image');set(image,{width:meta.width,height:meta.height,href:svg.dataset.source});
        image.addEventListener('error',()=>{figure.dataset.animationError='true';figure.querySelector('.setup-animation-status').textContent='The lure image could not load. You can still use the instructions below.';});
        crop.append(image);group.append(crop);
      }
      set(image.parentNode,{x:-ax*w,y:-ay*h,width:w,height:h});
    }
    function bobber(x,y,opacity=1) {
      path('bobber-stem',`M${x} ${y-31}v66`,{stroke:'#536d7c','stroke-width':3,opacity});
      put('bobber-body','ellipse',{cx:x,cy:y-4,rx:13,ry:24,fill:'#f9fafc',stroke:'#657c8b','stroke-width':2,opacity});
      path('bobber-cap',`M${x-13} ${y-4}a13 24 0 0 1 26 0Z`,{fill:'#cf4e47',stroke:'#657c8b','stroke-width':1,opacity});
    }
    const bodyAction = t => ['spoon','kastmaster','flutterspoon','jiggingspoon'].includes(key) ? Math.sin(t*7)*4 : key==='chatterbait' ? Math.sin(t*30)*.8 : 0;
    function draw(seconds) {
      const t=((seconds%4.8)+4.8)%4.8,id=figure.dataset.technique;
      const phase=window.TackleCoach.diagramPhase(id,t);
      active=new Set();
      const cast=t<3.8?{p:t/3.8,opacity:1}:{p:t<4.3?1:0,opacity:t<4.3?1-(t-3.8)*2:(t-4.3)*2};
      const fade=Math.min(1,t/.25,(4.8-t)/.3);
      let x=600,y=460,tip,p;
      switch(id) {
        case 'steady-retrieve':case 'surface-retrieve':case 'diving-retrieve': {
          x=lerp(735,435,cast.p);y=id==='surface-retrieve'?300:id==='diving-retrieve'?lerp(335,500,ease(Math.min(t,2)/2)):450;
          tip=rod(-4,{crank:t*9});line('main-line',tip,x,y,{opacity:cast.opacity});sprite(x,y,{angle:id==='surface-retrieve'?Math.sin(t*8)*1.5:bodyAction(t),opacity:cast.opacity});
          if(id==='surface-retrieve')path('wake',`M${x+145} 300l55-18m-55 18 55 18`,{stroke:'#9ac2d7','stroke-width':2,opacity:cast.opacity});
          arrow('direction',690,id==='surface-retrieve'?370:535,540,id==='surface-retrieve'?370:535);break;
        }
        case 'lift-and-drop': {
          const up=phase===0?ease(t/1.5):phase===1?1-ease((t-1.5)/1.5):0;
          const rodUp=phase===0?up:phase===1?1-ease((t-1.5)/1.2):0;
          tip=rod(-4-22*rodUp);x=520;
          // Constant line length during the lift keeps rod and lure movement connected.
          const base={x:80+300*Math.cos(-4*Math.PI/180),y:270+300*Math.sin(-4*Math.PI/180)};
          const raised={x:80+300*Math.cos(-26*Math.PI/180),y:270+300*Math.sin(-26*Math.PI/180)};
          const length=Math.hypot(x-base.x,555-base.y),height=q=>q.y+Math.sqrt(length*length-(x-q.x)**2);
          const low=height(base),high=height(raised);y=phase===0?height(tip):lerp(low,high,up);
          line('main-line',tip,x,y,{slack:phase===1?16*Math.sin(Math.PI*(t-1.5)/1.5):0});sprite(x,y,{width:165,angle:phase===0?-3:phase===1?5:0});
          if(phase===0)arrow('direction',765,low-8,765,high+15);else if(phase===1)arrow('direction',765,high+8,765,low-15);else pause(765,470);break;
        }
        case 'twitch-and-pause':case 'pop-and-pause': {
          const pop=id==='pop-and-pause',n=t<1.5?0:1,z=t<1.5?t:t-1.5;
          p=t>=3.8?cast.p:Math.min(1,n*.5+.5*ease(z/.38));x=lerp(735,550,p);y=pop?300:435;
          tip=rod(-4-10*Math.sin(Math.PI*E(z/.38)),{crank:phase===0?t*8:0});
          line('main-line',tip,x,y,{slack:phase===1?12:0,opacity:t>=3.8?cast.opacity:1});sprite(x,y,{angle:phase===0?-5*Math.sin(Math.PI*E(z/.38)):0,opacity:t>=3.8?cast.opacity:1});
          if(pop&&z>=.38&&z<1.58)ring('pop-ripple',x,y,18+(z-.38)*44,1-(z-.38)/1.2);
          if(phase===0)arrow('direction',720,pop?380:520,630,pop?380:520);else if(phase===1)pause(775,pop?410:520);break;
        }
        case 'bottom-drag': {
          p=t<3.8?ease(Math.min(t,2.1)/2.1):cast.p;x=lerp(720,540,p);y=565;
          tip=rod(-4-12*(phase===0?p:0),{crank:phase===1?t*7:0});line('main-line',tip,x,y,{slack:phase===1?8:0,opacity:t>=3.8?cast.opacity:1});sprite(x,y,{width:155,maxHeight:72,opacity:t>=3.8?cast.opacity:1});
          if(phase===0)arrow('direction',710,510,590,510);else if(phase===1)pause(775,490);break;
        }
        case 'weightless-fall': {
          p=phase===0?ease(t/2.1):phase===1?1:1-ease((t-3.2)/1.6);y=lerp(355,560,p);x=540;
          tip=rod(-4-19*(1-p));line('main-line',tip,x,y,{slack:22});sprite(x,y,{width:180,angle:Math.sin(t*3)*3});
          if(phase===0)arrow('direction',790,390,790,525);else if(phase===1)pause(790,465);else arrow('direction',790,525,790,390);break;
        }
        case 'walk-the-dog':case 'glide-and-pause': {
          const walk=id==='walk-the-dog',cycles=walk?6:3,segment=cast.p*cycles,local=segment%1,zig=Math.floor(segment)%2===0?1:-1,amplitude=walk?50:80;
          x=lerp(735,435,cast.p);y=390+amplitude*Math.sin(segment*Math.PI);
          tip=rod(zig*(phase===0?7:1),{x:60,y:390,length:230,crank:t*5});
          const angle=Math.atan2(amplitude*Math.PI*cycles*Math.cos(segment*Math.PI),-300)*180/Math.PI-180;
          line('main-line',tip,x,y,{slack:phase===1?12:0,opacity:cast.opacity});sprite(x,y,{angle:Math.max(-35,Math.min(35,((angle+540)%360)-180)),opacity:cast.opacity});
          ring('glide-ripple',x+70,y,24,.35*cast.opacity);break;
        }
        case 'float-fishing': {
          p=ease(t/1.4);const bob=phase===2?Math.sin(t*4)*2:0,fy=lerp(278,300,p)+bob;x=610;y=lerp(430,505,p)+bob;tip=rod();
          line('main-line',tip,x,fy,{slack:24,opacity:fade});
          if(key==='slipbobber') {
            sprite(x,fy,{width:40,maxHeight:104,ax:.5,ay:.5,opacity:fade});
            line('float-leader',{x,y:fy+46},x,y,{opacity:fade});hook(x,y,fade);
          } else {
            bobber(x,fy,fade);line('float-leader',{x,y:fy+25},x,y,{opacity:fade});sprite(x,y,{width:115,maxHeight:65,opacity:fade});
          }
          ring('float-ripple',x,300,30,.5*fade);if(phase===2)pause(790,460);else arrow('direction',790,385,790,485);break;
        }
        case 'natural-drift': {
          x=lerp(410,720,cast.p);y=485+Math.sin(cast.p*Math.PI)*10;tip=rod(-4+cast.p*7);
          for(let n=0;n<3;n++)arrow('current-'+n,460+n*130,375,520+n*130,375,.4);
          line('main-line',tip,x,y,{slack:24,opacity:cast.opacity});sprite(x,y,{width:130,opacity:cast.opacity});arrow('direction',520,560,680,560);break;
        }
        case 'bottom-bait': {
          const sy=lerp(440,603,ease(t/1.5));x=690;y=sy-35;tip=rod();
          const composite=['methodfeeder','lindyrig'].includes(key);
          if(composite){line('main-line',tip,620,sy-20,{slack:phase===0?30:0,opacity:fade});sprite(620,sy-20,{width:190,maxHeight:74,ax:.03,ay:.65,opacity:fade});}
          else {line('main-line',tip,600,sy,{slack:phase===0?30:phase===1?30*(1-E(t-1.5)):0,opacity:fade});sinker(600,sy,fade);line('leader',{x:600,y:sy-12},x,y,{slack:18,opacity:fade});sprite(x,y,{width:120,maxHeight:64,opacity:fade});hook(x,y,fade);}
          if(phase===0)arrow('direction',820,455,820,555);else if(phase===2)pause(820,480);break;
        }
        case 'trolling': {
          const bx=lerp(450,640,cast.p);x=bx-180;y=465;
          path('boat',`M${bx-65} 276h170l-24 30h-118Z`,{fill:'#315f9b',stroke:'#253b4c','stroke-width':2});put('cabin','rect',{x:bx-5,y:246,width:55,height:30,rx:4,fill:'#e2e8ec',stroke:'#667e8b','stroke-width':2});
          tip=rod(-140,{x:bx,y:265,length:150});line('main-line',tip,x,y,{opacity:cast.opacity});sprite(x,y,{flip:true,angle:bodyAction(t),width:170,maxHeight:110,opacity:cast.opacity});arrow('direction',700,360,840,360);break;
        }
        case 'drop-shot': {
          const shake=phase===1?Math.sin((t-1.1)*22)*4:0;tip=rod(-4+shake*.3);x=620;
          if(key==='dropshot') {
            // This PNG already contains the hook, leader and weight. Keep its weight fixed.
            const h=200,w=h*meta.box[2]/meta.box[3];y=407;
            line('main-line',tip,x,y);sprite(x,y,{width:w,maxHeight:h,ax:.04,ay:0});
          } else {
            y=475+shake;line('main-line',tip,x,y);line('weight-line',{x,y},620,586);sinker(620,607);path('bait-link',`M620 ${y}h18`);sprite(638,y,{width:125,maxHeight:75,angle:shake*.7});
          }
          if(phase===1)path('shake',`M805 455v38m-9-29 9-9 9 9m-18 20 9 9 9-9`,{stroke:'#315f9b','stroke-width':4});else if(phase===2)pause(805,470);break;
        }
        case 'pull-and-pause': {
          p=phase===0?ease(t/1.5):1;x=lerp(735,540,t>=3.8?cast.p:p);y=t>=3.8?460:phase===0?lerp(470,435,p):lerp(435,505,ease((t-1.5)/2.3));
          tip=rod(-4-20*(phase===0?p:1-ease((t-1.5))),{crank:phase===1?t*5:0});line('main-line',tip,x,y,{slack:phase===1?14:0,opacity:t>=3.8?cast.opacity:1});sprite(x,y,{width:180,angle:phase===0?-3:4,opacity:t>=3.8?cast.opacity:1});
          if(phase===0)arrow('direction',735,550,590,550);else if(phase===1)arrow('direction',805,445,805,520);break;
        }
        case 'suspended-hookbait': {
          const sy=lerp(475,600,ease(t/1.1));tip=rod();
          // The selected zig-rig PNG already shows its buoyant bait and hooklink.
          x=620;y=sy-8;line('main-line',tip,x,y,{opacity:fade});sprite(x,y,{width:200,maxHeight:155,ax:.08,ay:.8,opacity:fade});
          if(phase===1)arrow('direction',840,560,840,445);else if(phase===2)pause(840,475);break;
        }
        case 'surface-bait': {
          x=620+8*Math.sin(t*Math.PI*2/4.8);y=300+2*Math.sin(t*Math.PI*4/4.8);tip=rod();line('main-line',tip,x,y,{slack:40});sprite(x,y,{width:100,maxHeight:64,ay:.6});ring('bait-ripple',x+35,302,55,.45);if(phase===2)pause(790,455);break;
        }
      }
      nodes.forEach((node,id)=>set(node,{display:active.has(id)?'inline':'none'}));
      return phase;
    }
    const retry = () => {
      delete figure.dataset.animationError;
      figure.querySelector('.setup-animation-status').textContent='';
      if (image) {image.removeAttribute('href');image.setAttribute('href',svg.dataset.source);}
    };
    const controller={elapsed:1.8,fresh:true,draw,svg,retry};draw(controller.elapsed);
    return controller;
  }
  return {markup,mount};
})();
