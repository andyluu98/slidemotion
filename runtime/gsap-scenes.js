/* SlideMotion x GSAP: one timeline per slide, clicks move between labels. Load AFTER gsap (+ plugins) and deck.js.
   scene('#s-cat', (s, tl, k) => {
     tl.from(...)                       // intro: plays on entry
     tl.addLabel('step1').to(...)       // click 1 plays from 'step1' to 'step2' (or to the end)
     tl.addLabel('step2').to(...)
     k.loop(gsap.to(...))               // optional ambient tweens, killed when the slide leaves
   });
   The slide must declare data-steps="2" (number of step labels) so deck.js knows how many clicks it owns.
   Clicking back plays the segment in reverse. HTML is the FINAL state; use from()/fromTo() for entrances,
   so print (Ctrl+P) and a missing GSAP both show a complete slide.
   k.px(el) gives an element's box in stage pixels (1920x1080), for "fly from that word to here" moves. */
(() => {
  const deck = window.deck, G = window.gsap;
  if (!deck || !G) return;
  G.registerPlugin(...['SplitText', 'DrawSVGPlugin', 'MorphSVGPlugin', 'MotionPathPlugin', 'Flip', 'CustomEase', 'CustomBounce', 'ScrambleTextPlugin'].map(n => window[n]).filter(Boolean));
  const stage = deck.stage, builds = new Map(), dying = new Map();
  let live = null;

  const px = el => {
    const k = stage.getBoundingClientRect().width / 1920, r = el.getBoundingClientRect(), o = stage.getBoundingClientRect();
    return { x: (r.left - o.left) / k, y: (r.top - o.top) / k, w: r.width / k, h: r.height / k };
  };
  window.scene = (target, build) => {
    const s = typeof target === 'string' ? document.querySelector(target) : target;
    if (!s) return console.warn('scene: not found', target);
    builds.set(s, build);
  };

  const endOf = (tl, n) => tl.labels['step' + (n + 1)] ?? tl.duration();
  function retire(s, ctx) {   // revert after the fade-out, so nothing snaps while still visible
    clearTimeout(dying.get(s)?.t);
    dying.set(s, { ctx, t: setTimeout(() => { ctx.revert(); dying.delete(s); }, 650) });
  }
  function enter(s, step, full) {
    if (live) { live.tw && live.tw.kill(); retire(live.s, live.ctx); live = null; }
    const b = builds.get(s);
    if (!b) return;
    const d = dying.get(s); if (d) { clearTimeout(d.t); d.ctx.revert(); dying.delete(s); }
    const tl = G.timeline({ paused: true }), loops = [];
    const k = { px, loop: t => (loops.push(t), t) };
    const ctx = G.context(() => b(s, tl, k), s);
    const n = Object.keys(tl.labels).filter(l => /^step\d+$/.test(l)).length;
    if (n !== +(s.dataset.steps || 0)) console.warn(`scene: ${n} step labels but data-steps="${s.dataset.steps || 0}"`, s);
    live = { s, ctx, tl, tw: null };
    if (full) tl.progress(1); else go(step);
  }
  function go(step) {
    const { tl } = live, from = tl.time(), to = endOf(tl, step);
    live.tw && live.tw.kill();
    live.tw = tl.tweenTo(to);
    if (to < from) live.tw.timeScale(1.8);   // rewind a little faster than it played
  }

  stage.addEventListener('sm:change', e => enter(e.detail.slide, e.detail.step, e.detail.full));
  stage.addEventListener('sm:step', e => live && live.s === e.detail.slide && go(e.detail.step));
  if (deck.index >= 0) enter(deck.slides[deck.index], 0, false);
  addEventListener('beforeprint', () => { live && live.ctx.revert(); dying.forEach(d => d.ctx.revert()); });
  addEventListener('afterprint', () => { if (live) { const s = live.s; live = null; enter(s, 0, true); } });
  window.scenes = { px, get live() { return live; } };
})();
