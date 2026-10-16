/* SlideMotion cinema layer: optional, load AFTER deck.js. Web Animations API only, no dependency, works offline.
   - data-trans on a slide (how it ARRIVES): iris | shutter | zoom | push | flash
       data-origin="30% 60%" for iris, data-trans-color="#000" for shutter / flash
   - data-fx on any element: chars | words | scramble | spring | curtain | glow | flip | kenburns
       data-delay, data-dur (ms), data-stagger (ms per char / word), data-from="x,y" (spring), --fx-bar (curtain color)
       works with data-step: plays when the step is shown, resets when stepped back
   - data-depth="0.03" on layers: follows the mouse (3D depth); data-particles="#ffb347,60" on a box: drifting sparks
   - print (Ctrl+P): everything finished, visible, still. */
(() => {
  const deck = window.deck, stage = deck && deck.stage;
  if (!stage || !Element.prototype.animate || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const SPRING = CSS.supports('animation-timing-function', 'linear(0,1)')
    ? 'linear(0,.009,.035 2.1%,.141,.281 6.7%,.723 12.9%,.938 16.7%,1.017,1.077,1.121,1.149 24.3%,1.159,1.163,1.161,1.154 29.9%,1.129 32.8%,1.051 39.6%,1.017 43.1%,.991,.977 51%,.974 53.8%,.975 57.1%,.997 69.8%,1.003 76.9%,1)'
    : 'cubic-bezier(.3,1.6,.5,1)';
  const EXPO = 'cubic-bezier(.16,1,.3,1)', INOUT = 'cubic-bezier(.76,0,.24,1)';
  document.head.insertAdjacentHTML('beforeend', `<style id="sm-cinema">
.sm-stage>.slide.sm-leaving{visibility:visible!important;opacity:1!important;z-index:0!important;transition:none!important}
.sm-stage>.slide.on.sm-entering{transition:none!important;opacity:1!important;z-index:2}
.sm-w{display:inline-block;white-space:nowrap}.sm-c{display:inline-block}
.sm-bar{position:absolute;inset:0;transform:scaleX(0);pointer-events:none;background:var(--fx-bar,currentColor)}
.sm-shut{position:absolute;inset:0;z-index:50;display:flex;pointer-events:none}.sm-shut i{flex:1;transform:scaleY(0)}
[data-depth]{transition:translate .9s cubic-bezier(.2,.8,.2,1)}
.sm-sparks{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
@media print{.sm-shut,.sm-sparks,.sm-bar{display:none!important}[data-depth]{translate:none!important}}</style>`);

  // split text into words and chars once, keeping inner markup (b, em, span...)
  function split(el) {
    if (el.dataset.smSplit) return; el.dataset.smSplit = 1;
    const walk = n => [...n.childNodes].forEach(c => {
      if (c.nodeType === 1) return walk(c);
      if (c.nodeType !== 3 || !c.data.trim()) return;
      const f = document.createDocumentFragment();
      c.data.normalize('NFC').split(/(\s+)/).forEach(t => {
        if (!t) return;
        if (/^\s+$/.test(t)) return f.append(t);
        const w = document.createElement('span'); w.className = 'sm-w';
        Array.from(t).forEach(ch => { const s = document.createElement('span'); s.className = 'sm-c'; s.textContent = ch; w.append(s); });
        f.append(w);
      });
      c.replaceWith(f);
    });
    walk(el);
  }

  const num = (el, k, d) => +(el.dataset[k] || d);
  const FX = {
    chars(el, d) {
      split(el);
      const st = num(el, 'stagger', 28);
      el.querySelectorAll('.sm-c').forEach((c, i) => c.animate([
        { opacity: 0, transform: 'perspective(700px) translateY(.55em) rotateX(-85deg)', filter: 'blur(8px)' },
        { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: num(el, 'dur', 900), delay: d + i * st, easing: EXPO, fill: 'both' }));
    },
    words(el, d) {
      split(el);
      const st = num(el, 'stagger', 70);
      el.querySelectorAll('.sm-w').forEach((w, i) => w.animate([
        { opacity: 0, transform: 'translateY(.8em) scale(.96)', filter: 'blur(10px)' },
        { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: num(el, 'dur', 1000), delay: d + i * st, easing: EXPO, fill: 'both' }));
    },
    scramble(el, d) {
      const fin = el.dataset.smText || (el.dataset.smText = el.textContent), pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@$';
      const dur = num(el, 'dur', 1200), t0 = performance.now() + d;
      clearInterval(el._smT);
      el._smT = setInterval(() => {
        const k = (performance.now() - t0) / dur;
        if (k < 0) return;
        if (k >= 1) { el.textContent = fin; return clearInterval(el._smT); }
        el.textContent = [...fin].map((ch, i) => ch === ' ' || i < k * fin.length ? ch : pool[Math.random() * pool.length | 0]).join('');
      }, 40);
      el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, delay: d, fill: 'both' });
    },
    spring(el, d) {
      const [x, y] = (el.dataset.from || '0,140').split(',').map(Number);
      el.animate([{ opacity: 0, transform: `translate(${x}px,${y}px) scale(.6)` }, { opacity: 1, transform: 'none' }],
        { duration: num(el, 'dur', 1300), delay: d, easing: SPRING, fill: 'both' });
    },
    curtain(el, d) {
      if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
      let bar = el.querySelector(':scope>.sm-bar');
      if (!bar) { bar = document.createElement('i'); bar.className = 'sm-bar'; el.append(bar); }
      const dur = num(el, 'dur', 1100);
      bar.animate([{ transform: 'scaleX(0)', transformOrigin: 'left' }, { transform: 'scaleX(1)', transformOrigin: 'left', offset: .5 },
        { transform: 'scaleX(1)', transformOrigin: 'right', offset: .5 }, { transform: 'scaleX(0)', transformOrigin: 'right' }],
        { duration: dur, delay: d, easing: INOUT, fill: 'both' });
      [...el.children].filter(c => c !== bar).forEach(c => c.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1, delay: d + dur / 2, fill: 'both' }));
      if (!el.children.length || el.childNodes.length > el.children.length)
        el.animate([{ color: 'transparent' }, { color: 'transparent', offset: .5 }, { color: getComputedStyle(el).color, offset: .5 }, {}], { duration: dur, delay: d, fill: 'both' });
    },
    glow(el, d) {
      el.animate([{ opacity: 0, filter: 'brightness(3) blur(14px)', transform: 'scale(1.06)' }, { opacity: 1, filter: 'none', transform: 'none' }],
        { duration: num(el, 'dur', 1400), delay: d, easing: EXPO, fill: 'both' });
    },
    flip(el, d) {
      el.animate([{ opacity: 0, transform: 'perspective(1400px) rotateY(-75deg) translateZ(-200px)' }, { opacity: 1, transform: 'none' }],
        { duration: num(el, 'dur', 1200), delay: d, easing: SPRING, fill: 'both' });
    },
    kenburns(el, d) {
      const [x, y] = (el.dataset.from || '-3,2').split(',').map(Number);
      el.animate([{ transform: `scale(1.18) translate(${x}%,${y}%)` }, { transform: 'scale(1.03)' }],
        { duration: num(el, 'dur', 12000), delay: d, easing: 'cubic-bezier(.2,.6,.3,1)', fill: 'both' });
    }
  };

  const fxIn = el => el.querySelectorAll('*').length ? [el, ...el.querySelectorAll('*')] : [el];
  const cancel = root => fxIn(root).forEach(n => { n.getAnimations().forEach(a => a.cancel()); clearInterval(n._smT); if (n._smT && n.dataset.smText) n.textContent = n.dataset.smText; });
  function play(el, lead = 0) { const f = FX[el.dataset.fx]; if (f) { cancel(el); f(el, lead + num(el, 'delay', 0)); } }
  const pending = s => { const st = s.closest('[data-step]'); return st && !st.classList.contains('sm-shown'); };

  // steps: deck.js toggles .sm-shown; play / reset the fx inside
  new MutationObserver(ms => ms.forEach(m => {
    const el = m.target, s = el.closest('.slide');
    if (!s || !s.classList.contains('on')) return;
    const list = [el, ...el.querySelectorAll('[data-fx]')].filter(n => n.dataset.fx);
    el.classList.contains('sm-shown') ? list.filter(n => !pending(n)).forEach(n => play(n)) : list.forEach(cancel);
  })).observe(stage, { subtree: true, attributes: true, attributeFilter: ['class'] });

  // slide transitions
  let last = null;
  function arrive(prev, next, back) {
    const t = next.dataset.trans;
    stage.querySelectorAll('.sm-leaving').forEach(s => s.classList.remove('sm-leaving'));
    stage.querySelectorAll('.sm-shut').forEach(s => s.remove());
    if (!t || !prev) return 0;
    prev.classList.add('sm-leaving'); next.classList.add('sm-entering');
    const done = (ms, also) => setTimeout(() => { prev.classList.remove('sm-leaving'); next.classList.remove('sm-entering'); also && also(); }, ms);
    const o = next.dataset.origin || '50% 50%';
    if (t === 'iris') { next.animate([{ clipPath: `circle(0% at ${o})` }, { clipPath: `circle(150% at ${o})` }], { duration: 1100, easing: INOUT }); done(1100); return 450; }
    if (t === 'zoom') {
      prev.animate([{ transform: 'none', opacity: 1, filter: 'blur(0)' }, { transform: 'scale(1.7)', opacity: 0, filter: 'blur(12px)' }], { duration: 900, easing: INOUT, fill: 'forwards' });
      next.animate([{ transform: 'scale(.6)', opacity: 0, filter: 'blur(14px)' }, { transform: 'none', opacity: 1, filter: 'blur(0)' }], { duration: 1000, easing: EXPO });
      done(1000, () => prev.getAnimations().forEach(a => a.cancel())); return 350;
    }
    if (t === 'push') {
      const k = back ? -1 : 1;
      prev.animate([{ transform: 'none' }, { transform: `translateX(${-k * 100}%)` }], { duration: 1000, easing: INOUT, fill: 'forwards' });
      next.animate([{ transform: `translateX(${k * 100}%)` }, { transform: 'none' }], { duration: 1000, easing: INOUT });
      done(1000, () => prev.getAnimations().forEach(a => a.cancel())); return 600;
    }
    const sh = document.createElement('div'); sh.className = 'sm-shut';
    const col = next.dataset.transColor || (t === 'flash' ? '#fff' : '#000');
    if (t === 'flash') {
      sh.style.background = col; stage.append(sh);
      sh.animate([{ opacity: 0 }, { opacity: 1, offset: .25 }, { opacity: 0 }], { duration: 900, easing: 'ease-out' });
      done(250); setTimeout(() => sh.remove(), 900); return 250;
    }
    sh.innerHTML = '<i></i>'.repeat(8); stage.append(sh);   // shutter
    [...sh.children].forEach((b, i) => { b.style.background = col; b.animate([
      { transform: 'scaleY(0)', transformOrigin: 'top' }, { transform: 'scaleY(1)', transformOrigin: 'top', offset: .45 },
      { transform: 'scaleY(1)', transformOrigin: 'bottom', offset: .55 }, { transform: 'scaleY(0)', transformOrigin: 'bottom' }],
      { duration: 1300, delay: i * 45, easing: INOUT, fill: 'both' }); });
    done(650); setTimeout(() => sh.remove(), 1700); return 750;
  }

  function onChange() {
    const next = deck.slides[deck.index]; if (!next) return;
    const back = last && deck.slides.indexOf(last) > deck.index;
    if (last && last !== next) setTimeout(((s) => () => s.classList.contains('on') || s.querySelectorAll('[data-fx]').forEach(cancel))(last), 1200);
    const lead = arrive(last !== next ? last : null, next, back);
    next.querySelectorAll('[data-fx]').forEach(el => pending(el) || play(el, lead));
    last = next;
  }
  stage.addEventListener('sm:change', onChange);
  if (deck.index >= 0) onChange();

  // depth: layers follow the mouse
  addEventListener('mousemove', e => {
    const s = deck.slides[deck.index]; if (!s) return;
    const dx = e.clientX / innerWidth - .5, dy = e.clientY / innerHeight - .5;
    s.querySelectorAll('[data-depth]').forEach(l => { const k = +l.dataset.depth * 1920; l.style.translate = `${-dx * k}px ${-dy * k * .6}px`; });
  });

  // sparks
  stage.querySelectorAll('[data-particles]').forEach(box => {
    const [col, n] = box.dataset.particles.split(','), cv = document.createElement('canvas'), g = cv.getContext('2d');
    cv.className = 'sm-sparks'; cv.width = 1920; cv.height = 1080; box.append(cv);
    // glow drawn once into a sprite: shadowBlur per spark per frame is far too slow
    const sp = document.createElement('canvas'), sg = sp.getContext('2d'); sp.width = sp.height = 32;
    const gr = sg.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, '#fff'); gr.addColorStop(.18, col || '#ffb347'); gr.addColorStop(1, 'transparent');
    sg.fillStyle = gr; sg.fillRect(0, 0, 32, 32);
    const P = Array.from({ length: +n || 60 }, () => ({ x: Math.random() * 1920, y: Math.random() * 1080, r: 6 + Math.random() * 14, v: .2 + Math.random() * .9, p: Math.random() * 6 }));
    const tick = t => {
      const s = box.closest('.slide');
      if (!s || s.classList.contains('on') || s.classList.contains('sm-leaving')) {
        g.clearRect(0, 0, 1920, 1080);
        P.forEach(q => { q.y -= q.v; q.x += Math.sin(t / 1400 + q.p) * .35; if (q.y < -10) { q.y = 1090; q.x = Math.random() * 1920; }
          g.globalAlpha = .35 + .5 * Math.sin(t / 500 + q.p * 3) ** 2; g.drawImage(sp, q.x - q.r, q.y - q.r, q.r * 2, q.r * 2); });
      }
    requestAnimationFrame(tick);
  });

  addEventListener('beforeprint', () => document.getAnimations().forEach(a => { try { a.finish(); } catch (_) { a.cancel(); } }));
  window.cinema = { play, cancel };
})();
