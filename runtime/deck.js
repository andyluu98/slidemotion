/* SlideMotion runtime: the smallest thing a free-form deck needs.
   - scales a 1920x1080 .sm-stage to the window
   - keys / click / swipe / F fullscreen / #hash
   - data-anim (enter effects), data-loop (ambient loops), data-step (click reveals)
   - data-morph="id": same id on consecutive slides glides between positions (Morph by name)
   - data-count="1234": number counts up on entry
   - copies the slide's data-scene onto the stage, so persistent layers can morph with plain CSS
   - data-cam on a slide + data-parallax="0.3..1" on background layers: camera pan with depth
   - print (Ctrl+P): every slide on its own page, every step shown, no motion: a handout
   No layouts, no frames: every slide is designed by the author. */
(() => {
  const W = 1920, H = 1080;
  const css = `
html,body{margin:0;height:100%;background:#000;overflow:hidden}
.sm-stage{position:absolute;width:${W}px;height:${H}px;transform-origin:0 0;overflow:hidden;--sm-ease:cubic-bezier(.2,.8,.2,1)}
.sm-stage>.slide{position:absolute;inset:0;visibility:hidden;opacity:0;transition:opacity var(--sm-tr,.5s) ease,visibility 0s var(--sm-tr,.5s)}
.sm-stage>.slide.on{visibility:visible;opacity:1;z-index:1;transition:opacity var(--sm-tr,.5s) ease}
.slide[data-transition=cut]{--sm-tr:0s}
.slide[data-transition=wipe].on{animation:sm-wipe .7s var(--sm-ease)}
.slide[data-transition=zoom].on{animation:sm-zoomin .7s var(--sm-ease)}
svg [data-anim],svg [data-loop]{transform-box:fill-box;transform-origin:center}
[data-anim]{transition:opacity .3s,transform .3s,filter .3s,clip-path .3s,stroke-dashoffset .3s}
[data-anim=fade]{opacity:0}
[data-anim=rise]{opacity:0;transform:translateY(40px)}
[data-anim=drop]{opacity:0;transform:translateY(-140px)}
[data-anim=left]{opacity:0;transform:translateX(-90px)}
[data-anim=right]{opacity:0;transform:translateX(90px)}
[data-anim=zoom]{opacity:0;transform:scale(.82)}
[data-anim=pop]{opacity:0;transform:scale(.4)}
[data-anim=blur]{opacity:0;filter:blur(14px)}
[data-anim=wipe]{clip-path:inset(0 100% 0 0)}
[data-anim=rise-wipe]{clip-path:inset(100% 0 0 0)}
[data-anim=stamp]{opacity:0;transform:scale(2.4) rotate(-14deg)}
[data-anim=draw]{stroke-dasharray:1;stroke-dashoffset:1}
.on [data-anim]:not([data-step]),.on [data-anim].sm-shown{opacity:1;transform:none;filter:none;clip-path:inset(-400px -400px -400px -400px);stroke-dashoffset:0;
  transition:opacity var(--sm-t,800ms) var(--sm-ease) var(--sm-d,0ms),transform var(--sm-t,800ms) var(--sm-ease) var(--sm-d,0ms),
  filter var(--sm-t,800ms) var(--sm-ease) var(--sm-d,0ms),clip-path var(--sm-t,900ms) var(--sm-ease) var(--sm-d,0ms),
  stroke-dashoffset var(--sm-t,1400ms) var(--sm-ease) var(--sm-d,0ms)}
.on :is([data-anim=pop],[data-anim=drop],[data-anim=stamp]):is(:not([data-step]),.sm-shown){transition-timing-function:cubic-bezier(.3,1.6,.5,1)}
[data-step]:not([data-anim]){opacity:0;transition:opacity .4s}
[data-step].sm-shown:not([data-anim]){opacity:1}
[data-loop=pulse]{animation:sm-pulse 1.6s ease-in-out infinite}
[data-loop=float]{animation:sm-float 5s ease-in-out infinite}
[data-loop=spin]{animation:sm-spin var(--sm-loop,20s) linear infinite}
[data-loop=sway]{animation:sm-sway 4s ease-in-out infinite}
[data-loop=blink]{animation:sm-blink 1s steps(1) infinite}
[data-loop=scan]{animation:sm-scan var(--sm-loop,2.6s) linear infinite}
.slide:not(.on) [data-loop]{animation-play-state:paused}
@keyframes sm-pulse{50%{opacity:.4;transform:scale(.88)}}
@keyframes sm-float{50%{transform:translateY(-14px)}}
@keyframes sm-spin{to{transform:rotate(360deg)}}
@keyframes sm-sway{50%{transform:rotate(3deg)}}
@keyframes sm-blink{50%{opacity:0}}
@keyframes sm-scan{from{transform:translateY(0)}to{transform:translateY(var(--sm-scan,400px))}}
@keyframes sm-wipe{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}
@keyframes sm-zoomin{from{transform:scale(1.08);filter:blur(6px)}to{transform:none;filter:none}}
[data-parallax]{transition:transform 1.6s cubic-bezier(.65,0,.25,1)}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
@media print{@page{size:16in 9in;margin:0}
 html,body{height:auto;overflow:visible;overflow-x:hidden;background:#fff}
 .sm-stage{position:relative!important;transform:none!important;left:0!important;top:0!important;height:auto!important;overflow:hidden!important;zoom:.8}
 .sm-stage>.slide{position:relative!important;visibility:visible!important;opacity:1!important;height:1080px;overflow:hidden;break-after:page}
 [data-anim],[data-step]{opacity:1!important;transform:none!important;filter:none!important;clip-path:none!important;stroke-dashoffset:0!important}
 *{animation:none!important;transition:none!important}}`;
  document.head.insertAdjacentHTML('beforeend', `<style id="sm-base">${css}</style>`);

  const stage = document.querySelector('.sm-stage');
  const slides = [...stage.querySelectorAll(':scope > .slide')];
  const SHAPES = 'path,line,polyline,polygon,rect,circle,ellipse';
  let cur = -1, step = 0, scale = 1;

  // prepare: draw on groups, pathLength, stagger, delays and durations
  stage.querySelectorAll('g[data-anim=draw]').forEach(g => {
    g.querySelectorAll(SHAPES).forEach((s, i) => {
      s.dataset.anim = 'draw';
      s.dataset.delay = s.dataset.delay || (+(g.dataset.delay || 0) + i * +(g.dataset.stagger || 120));
    });
    g.removeAttribute('data-anim');
  });
  stage.querySelectorAll('[data-anim=draw]').forEach(s => s.hasAttribute('pathLength') || s.setAttribute('pathLength', 1));
  stage.querySelectorAll('[data-stagger]:not(g)').forEach(p => [...p.children].forEach((c, i) => {
    if (!c.dataset.delay) c.dataset.delay = +(p.dataset.delay || 0) + i * +p.dataset.stagger;
  }));
  stage.querySelectorAll('[data-delay],[data-dur],[data-loop-dur]').forEach(e => {
    if (e.dataset.delay) e.style.setProperty('--sm-d', e.dataset.delay + 'ms');
    if (e.dataset.dur) e.style.setProperty('--sm-t', e.dataset.dur + 'ms');
    if (e.dataset.loopDur) e.style.setProperty('--sm-loop', e.dataset.loopDur + 'ms');
  });

  const maxStep = s => Math.max(0, ...[...s.querySelectorAll('[data-step]')].map(e => +e.dataset.step));
  const showSteps = (s, n) => s.querySelectorAll('[data-step]').forEach(e => e.classList.toggle('sm-shown', +e.dataset.step <= n));

  function fit() {
    scale = Math.min(innerWidth / W, innerHeight / H);
    Object.assign(stage.style, { transform: `scale(${scale})`, left: (innerWidth - W * scale) / 2 + 'px', top: (innerHeight - H * scale) / 2 + 'px' });
  }

  function morph(from, to) {
    to.querySelectorAll('[data-morph]').forEach(n => {
      const o = from.querySelector(`[data-morph="${n.dataset.morph}"]`);
      if (!o) return;
      const a = o.getBoundingClientRect(), b = n.getBoundingClientRect();
      if (!b.width || !b.height) return;
      n.style.transition = 'none';
      n.style.transformOrigin = '0 0';
      n.style.transform = `translate(${(a.left - b.left) / scale}px,${(a.top - b.top) / scale}px) scale(${a.width / b.width},${a.height / b.height})`;
      o.style.visibility = 'hidden';
      n.getBoundingClientRect();
      n.style.transition = 'transform var(--sm-t,1000ms) cubic-bezier(.7,0,.2,1)';
      n.style.transform = '';
      setTimeout(() => { o.style.visibility = ''; }, 1100);
    });
  }

  function count(s) {
    s.querySelectorAll('[data-count]').forEach(e => {
      const to = +e.dataset.count, t0 = performance.now(), dur = +(e.dataset.dur || 1400), d = +(e.dataset.delay || 0);
      const fmt = v => Math.round(v).toLocaleString('vi-VN');
      e.textContent = fmt(0);
      const tick = t => {
        const k = Math.min(1, Math.max(0, (t - t0 - d) / dur));
        e.textContent = fmt(to * (1 - Math.pow(1 - k, 3)));
        if (k < 1 && s.classList.contains('on')) requestAnimationFrame(tick);
        else e.textContent = fmt(to);
      };
      requestAnimationFrame(tick);
    });
  }

  function go(n, full = false) {
    n = Math.max(0, Math.min(slides.length - 1, n));
    if (n === cur) return;
    const prev = slides[cur], next = slides[n];
    if (prev) { morph(prev, next); prev.classList.remove('on'); }
    cur = n; step = full ? maxStep(next) : 0;
    showSteps(next, step);
    next.classList.add('on');
    stage.dataset.slide = n + 1;
    stage.dataset.scene = next.dataset.scene || n + 1;
    stage.style.setProperty('--sm-progress', slides.length > 1 ? n / (slides.length - 1) : 1);
    if (next.dataset.cam !== undefined) stage.querySelectorAll('[data-parallax]').forEach(l => {
      l.style.transform = `translateX(${-(+next.dataset.cam) * +l.dataset.parallax}px)`;
    });
    count(next);
    history.replaceState(null, '', '#' + (n + 1));
    stage.dispatchEvent(new CustomEvent('sm:change', { detail: { index: n, slide: next } }));
  }
  const nextStep = () => cur < 0 ? go(0) : step < maxStep(slides[cur]) ? showSteps(slides[cur], ++step) : go(cur + 1);
  const prevStep = () => cur < 0 ? go(0) : step > 0 ? showSteps(slides[cur], --step) : go(cur - 1, true);

  addEventListener('keydown', e => {
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); nextStep(); }
    else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); prevStep(); }
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(slides.length - 1, true);
    else if (e.key === 'f' || e.key === 'F') document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
  });
  addEventListener('click', e => {
    if (e.target.closest('a,button,input,textarea,select,[contenteditable]') || String(getSelection())) return;
    e.clientX > innerWidth / 3 ? nextStep() : prevStep();
  });
  let tx = null;
  addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  addEventListener('touchend', e => {
    if (tx === null) return;
    const d = e.changedTouches[0].clientX - tx;
    if (Math.abs(d) > 40) d < 0 ? nextStep() : prevStep();
    tx = null;
  });
  addEventListener('resize', fit);
  fit();
  window.deck = { go: i => go(i, true), next: nextStep, prev: prevStep, get index() { return cur; }, count: slides.length, stage, slides };
  // start after the whole page is parsed, so listeners on 'sm:change' in later scripts catch the first slide;
  // setTimeout, not requestAnimationFrame: rAF never fires while the tab is hidden
  const start = () => setTimeout(() => cur < 0 && go((parseInt(location.hash.slice(1)) || 1) - 1), 0);
  document.readyState === 'loading' ? addEventListener('DOMContentLoaded', start) : start();
})();
