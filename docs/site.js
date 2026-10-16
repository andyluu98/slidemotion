/* landing: máy chiếu GSAP ở hero, hiện dần khi cuộn, tab, chép lệnh */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  gsap.registerPlugin(SplitText, DrawSVGPlugin, ScrambleTextPlugin);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* tiện ích dùng chung với gallery.js */
  const toast = document.createElement('div'); toast.className = 'toast'; document.body.append(toast);
  window.say = t => { toast.textContent = t; toast.classList.add('on'); clearTimeout(toast._t); toast._t = setTimeout(() => toast.classList.remove('on'), 2600); };
  window.copyText = async t => {
    try { await navigator.clipboard.writeText(t); return true; }
    catch (_) { const a = document.createElement('textarea'); a.value = t; document.body.append(a); a.select(); const ok = document.execCommand('copy'); a.remove(); return ok; }
  };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    gsap.to(e.target, { opacity: 1, y: 0, duration: .8, ease: 'power3.out', delay: (+e.target.dataset.d || 0) * .08 });
  }), { rootMargin: '0px 0px -8% 0px' });
  window.reveal = nodes => [...nodes].forEach((n, i) => { if (reduce) return; n.classList.add('rv'); n.dataset.d = i % 4; io.observe(n); });
  window.reveal($$('section h2, section .sub, .box, .demo, .step, .tabs, .inst .i, .how div'));

  /* tiêu đề hero */
  if (!reduce) {
    const h = new SplitText('h1', { type: 'words,chars' });
    gsap.from(h.chars, { yPercent: 110, opacity: 0, rotate: 8, duration: .9, ease: 'expo.out', stagger: .03 });
    gsap.from('.hero .kick, .lead, .cta, .checks', { y: 20, opacity: 0, duration: .8, ease: 'power3.out', stagger: .1, delay: .3 });
    gsap.from('.player', { y: 50, opacity: 0, scale: .96, duration: 1.1, ease: 'expo.out', delay: .2 });
  }

  /* máy chiếu: 4 cảnh, mỗi vòng một style lấy từ styles.js */
  const S = Object.fromEntries((window.STYLES || []).map(s => [s.slug, s]));
  const PICK = ['claude-ivory', 'terminal-green', '8-bit-orbit', 'son-mai', 'crayon-book', 'blueprint', 'neon-cyber', 'pink-script'].filter(k => S[k]);
  const stage = $('.stage'), chipsBox = $('.schips'), loaded = new Set();
  const font = f => {
    if (!f || loaded.has(f)) return; loaded.add(f);
    const add = spec => { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = `https://fonts.googleapis.com/css2?family=${spec}&display=swap`; document.head.append(l); return l; };
    const name = encodeURIComponent(f).replace(/%20/g, '+');
    add(name + ':wght@400;700').onerror = () => add(name);
  };
  const apply = st => {
    const v = { '--s-bg': st.bg, '--s-fg': st.fg, '--s-ac': st.accent, '--s-ac2': st.accent2 === st.bg ? st.accent : st.accent2, '--s-display': `'${st.display}',serif`, '--s-body': `'${st.body}',sans-serif` };
    Object.entries(v).forEach(([k, x]) => stage.style.setProperty(k, x));
    font(st.display); font(st.body);
    $('#sname').textContent = st.name;
    $('#scard').href = 'https://github.com/andyluu98/slidemotion/blob/main/styles/' + st.slug + '.md';
    $$('button', chipsBox).forEach(b => b.classList.toggle('on', b.dataset.s === st.slug));
  };
  chipsBox.innerHTML = PICK.map(k => `<button type="button" data-s="${k}"><i style="background:${S[k].accent}"></i>${S[k].name}</button>`).join('');
  PICK.forEach(k => { font(S[k].display); font(S[k].body); });

  const sc = $$('.sc', stage), t1 = new SplitText('.sc1 .t', { type: 'words,chars' }), t4 = new SplitText('.sc4 .t', { type: 'words,chars' });
  const chips = $$('.sc2 .chip'), bars = $$('.sc3 .bars i'), num = $('.sc3 .num'), prog = $('.prog'), sn = $('#sn');
  const K1 = $('.sc1 .k').textContent, N = num.textContent;
  const parts = [t1.chars, t4.chars, chips, bars, '.sc1 .orb', '.sc1 .orb2', '.sc1 .b', '.sc2 .t2', '.sc2 .tk', '.sc3 .k', '.sc3 .b', '.sc4 .k'];
  const show = (tl, i, at) => {
    tl.set(sc, { autoAlpha: 0 }, at).set(sc[i], { autoAlpha: 1 }, at).call(() => { sn.textContent = i + 1; }, null, at);
  };
  const leave = (tl, i, at) => tl.to(sc[i], { autoAlpha: 0, y: -18, filter: 'blur(6px)', duration: .45, ease: 'power2.in' }, at).set(sc[i], { y: 0, filter: 'none' });
  const loop = () => {
    const tl = gsap.timeline();
    tl.fromTo(prog, { width: '0%' }, { width: '100%', duration: 14, ease: 'none' }, 0);
    // cảnh 1: bìa
    show(tl, 0, 0);
    tl.to('.sc1 .k', { duration: .9, scrambleText: { text: K1, chars: 'upperCase', speed: .6 } }, .1)
      .from(t1.chars, { yPercent: 120, opacity: 0, duration: .8, ease: 'expo.out', stagger: .025 }, .2)
      .from('.sc1 .b', { opacity: 0, y: 14, duration: .6 }, .9)
      .from('.sc1 .orb', { scale: 0, duration: 1.1, ease: 'back.out(1.6)' }, .3)
      .from('.sc1 .orb2', { scale: 0, rotate: -120, duration: .9, ease: 'back.out(2)' }, .7);
    leave(tl, 0, 3.1);
    // cảnh 2: cắt câu thành token
    show(tl, 1, 3.6);
    tl.from('.sc2 .t2', { opacity: 0, y: 20, duration: .6, ease: 'power3.out' }, 3.6)
      .from(chips, { opacity: 0, scale: .6, duration: .5, ease: 'back.out(2)', stagger: .07 }, 4)
      .fromTo('.sc2 .cut', { drawSVG: '0%' }, { drawSVG: '100%', duration: .7, ease: 'power2.inOut' }, 4.6)
      .from(chips, { x: i => (i - 2) * -14, duration: .8, ease: 'expo.out' }, 5.1)
      .from('.sc2 .tk', { opacity: 0, y: 12, duration: .5 }, 5.3)
      .to(chips, { y: i => (i % 2 ? 1 : -1) * 8, duration: .5, yoyo: true, repeat: 1, ease: 'sine.inOut', stagger: .05 }, 5.4);
    leave(tl, 1, 6.6);
    // cảnh 3: con số
    show(tl, 2, 7.1);
    tl.from(bars, { scaleY: 0, duration: .9, ease: 'expo.out', stagger: .06 }, 7.2)
      .from(num, { textContent: 0, duration: 1.4, ease: 'power2.out', snap: { textContent: 1 } }, 7.2)
      .from('.sc3 .k, .sc3 .b', { opacity: 0, y: 12, duration: .5, stagger: .1 }, 7.3);
    leave(tl, 2, 10);
    // cảnh 4: kết
    show(tl, 3, 10.5);
    tl.from(t4.chars, { opacity: 0, y: 30, rotateX: -80, duration: .7, ease: 'back.out(1.8)', stagger: .02 }, 10.6)
      .fromTo('.sc4 .ul', { drawSVG: '0%' }, { drawSVG: '100%', duration: .9, ease: 'power3.inOut' }, 11.6)
      .from('.sc4 .k', { opacity: 0, duration: .5 }, 11.8);
    leave(tl, 3, 13.55);
    return tl;
  };
  let cur = 0, run;
  const play = i => {
    cur = (i + PICK.length) % PICK.length; apply(S[PICK[cur]]);
    run && run.kill(); gsap.set([sc, ...parts], { clearProps: 'transform,opacity,visibility,filter' }); num.textContent = N; $('.sc1 .k').textContent = K1;
    if (reduce) { gsap.set(sc[0], { autoAlpha: 1 }); return; }
    run = loop().eventCallback('onComplete', () => play(cur + 1));
  };
  chipsBox.addEventListener('click', e => { const b = e.target.closest('button'); if (b) play(PICK.indexOf(b.dataset.s)); });
  // ?seek=giây: tua máy chiếu tới đúng khoảnh khắc để chụp kiểm tra
  const sk = new URLSearchParams(location.search).get('seek');
  document.fonts.ready.then(() => {
    play(0);
    if (sk === null) return;
    document.documentElement.classList.add('seek');
    gsap.globalTimeline.getChildren(false, true, true).forEach(t => t !== run && t.progress(1));
    run.pause().seek(+sk);
  });

  /* tab chế độ, tab hệ điều hành, nút chép lệnh cài đặt */
  $('.tabs').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('.tabs button').forEach(x => x.classList.toggle('on', x === b));
    $$('.mode').forEach(m => m.classList.toggle('on', m.id === b.dataset.m));
    reduce || gsap.from('#' + b.dataset.m + ' > *', { opacity: 0, y: 14, duration: .45, stagger: .08 });
  });
  const inst = $('#cai-dat');
  inst.dataset.os = /Win/.test(navigator.platform) ? 'win' : 'mac';
  $$('.os button').forEach(b => { b.classList.toggle('on', b.dataset.os === inst.dataset.os); b.onclick = () => { inst.dataset.os = b.dataset.os; $$('.os button').forEach(x => x.classList.toggle('on', x === b)); }; });
  $$('.cmd').forEach(c => { const b = document.createElement('button'); b.className = 'cp'; b.textContent = 'Sao chép'; c.append(b); b.onclick = async () => { const ok = await window.copyText(c.firstChild.textContent.trim()); b.textContent = ok ? 'Đã chép' : 'Lỗi'; setTimeout(() => b.textContent = 'Sao chép', 1500); }; });
})();
