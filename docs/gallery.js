/* thư viện 86 style: lọc theo nhóm, tìm kiếm, chép lệnh, chép thẻ */
(() => {
  const S = window.STYLES || [], gal = document.getElementById('gal'), q = document.getElementById('q'), cnt = document.getElementById('cnt'), more = document.getElementById('more');
  const RAW = 'https://raw.githubusercontent.com/andyluu98/slidemotion/main/styles/', GH = 'https://github.com/andyluu98/slidemotion/blob/main/styles/';
  const esc = t => String(t || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const groups = ['Tất cả', ...new Set(S.map(s => s.group))];
  let g = 'Tất cả', all = false;
  document.getElementById('fb').outerHTML = groups.map(x => `<button type="button" data-g="${x}" class="${x === g ? 'on' : ''}">${x}</button>`).join('');
  const tile = (st, i) => {
    const href = st.demo || GH + st.slug + '.md';
    const tags = (st.mood || '').split(',').map(t => t.trim()).filter(Boolean).slice(0, 4);
    return `<article class="st" data-i="${i}">
    <a class="th" href="${href}" target="_blank" rel="noopener">${st.shots ? `<img src="assets/styles/${st.slug}-1.jpg" alt="Slide mẫu style ${esc(st.name)}" loading="lazy" width="800" height="450">${st.shots > 1 ? `<img class="alt" src="assets/styles/${st.slug}-2.jpg" alt="" loading="lazy" width="800" height="450">` : ''}` : ''}<span class="play">Mở deck demo ↗</span></a>
    <div class="b"><div class="n"><small>${String(i + 1).padStart(2, '0')}</small>${esc(st.name)}</div><div class="s">${st.slug}</div>
      <div class="md">${esc(st.use)}</div>
      <div class="tg">${tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>
      <div class="f">${esc(st.fonts)}</div>
      <div class="act"><button type="button" class="p" data-a="prompt">Chép lệnh</button><button type="button" data-a="card">Chép thẻ</button><a href="${GH}${st.slug}.md" target="_blank" rel="noopener" title="Đọc thẻ style trên GitHub">Thẻ ↗</a></div></div></article>`;
  };
  const draw = () => {
    const k = q.value.trim().toLowerCase();
    const list = S.map((s, i) => [s, i]).filter(([s]) => (g === 'Tất cả' || s.group === g) && (!k || (s.name + s.slug + s.mood + s.use + s.fonts).toLowerCase().includes(k)));
    const show = all || k || g !== 'Tất cả' ? list : list.slice(0, 12);
    cnt.textContent = list.length + ' style';
    gal.innerHTML = show.map(([s, i]) => tile(s, i)).join('');
    more.style.display = show.length < list.length ? '' : 'none';
    window.reveal && window.reveal(gal.querySelectorAll('.st'));
  };
  gal.addEventListener('click', async e => {
    const b = e.target.closest('button[data-a]'); if (!b) return;
    const st = S[+b.closest('.st').dataset.i];
    if (b.dataset.a === 'prompt') {
      const ok = await window.copyText(`Dùng skill slidemotion làm slide về [chủ đề của bạn], khoảng [số] slide, style ${st.slug} (${st.name}).`);
      window.say(ok ? `Đã chép lệnh style ${st.name}. Dán vào Claude Code, thay phần trong ngoặc vuông.` : 'Trình duyệt chặn chép, hãy mở thẻ để chép tay.');
      return;
    }
    b.textContent = 'Đang lấy…';
    try {
      const md = await (await fetch(RAW + st.slug + '.md')).text();
      const ok = await window.copyText(`Làm slide HTML 16:9 về [chủ đề của bạn] theo thẻ style dưới đây. Giữ màu, phông, ngôn ngữ minh họa và chữ ký chuyển động; bố cục từng slide tự thiết kế.\n\n${md}`);
      window.say(ok ? `Đã chép thẻ style ${st.name}. Dán vào AI bất kỳ.` : 'Trình duyệt chặn chép, hãy mở thẻ để chép tay.');
    } catch (_) { window.say('Không tải được thẻ, hãy mở thẻ trên GitHub.'); }
    b.textContent = 'Chép thẻ';
  });
  document.querySelector('.filters').addEventListener('click', e => {
    const b = e.target.closest('button[data-g]'); if (!b) return;
    g = b.dataset.g; document.querySelectorAll('.filters button').forEach(x => x.classList.toggle('on', x === b)); draw();
  });
  more.querySelector('button').addEventListener('click', () => { all = true; draw(); });
  q.addEventListener('input', draw);
  draw();
})();
