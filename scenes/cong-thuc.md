# Công thức cơ chế

Tệp này chỉ dạy **cơ chế**: những thứ khó làm đúng (bấm từng bước, lia nền, in, đo chữ). Nó cố ý **không có bố cục, màu, cỡ chữ, vị trí**. Hình dáng của từng slide là việc của bạn, theo ý tưởng lớn và thẻ style của deck.

**Chỉ mở tệp này sau khi đã viết xong kịch bản đạo diễn.** Kịch bản quyết định slide cần gì; công thức chỉ giúp làm cho chạy.

Mỗi công thức có ba phần: *dùng khi*, *cơ chế* (đoạn mã tối thiểu, tên lớp chỉ để minh họa), *biến tấu* (gợi ý để không slide nào giống slide nào).

---

## 1. Hiện dần theo lời giảng
**Dùng khi:** người nói muốn giải thích từng phần; khung định nghĩa, ví von, ví dụ; trước và sau.
**Cơ chế:** gắn `data-step="1"`, `"2"`... lên phần tử; kèm `data-anim` để chọn kiểu hiện. Bấm hết bước mới sang slide sau, lùi thì gỡ từng bước.
```html
<div data-step="1" data-anim="rise">...</div>
<div data-step="2" data-anim="rise">...</div>
```
**Biến tấu:** không phải lúc nào cũng ba cột cạnh nhau: có thể là ba tầng chồng, ba điểm trên một con đường, một hình lớn được chú thích dần.

## 2. Câu hỏi kiểm tra, bấm mới hiện đáp án
**Dùng khi:** chế độ giảng dạy, cuối mỗi khái niệm.
**Cơ chế:** đáp án là một phần tử có `data-step`; muốn tô phương án đúng khi đáp án hiện thì nghe sự kiện và kiểm lớp `sm-shown`:
```html
<section class="slide" data-quiz>
  ...các phương án, phương án đúng có lớp .right...
  <p data-step="1" data-anim="pop">Đúng là B, vì...</p>
</section>
<script>
const check = () => document.querySelectorAll('[data-quiz]').forEach(q =>
  q.classList.toggle('q-ok', !!q.querySelector('[data-step].sm-shown')));
document.querySelector('.sm-stage').addEventListener('sm:change', check);
addEventListener('click', () => setTimeout(check)); addEventListener('keydown', () => setTimeout(check));
</script>
```
CSS: `.q-ok .right { ...tô nổi... }`.
**Biến tấu:** câu hỏi đúng hay sai, kéo thả trong tưởng tượng (bấm hiện vị trí đúng), chọn trên một bức hình (bấm hiện vòng khoanh đúng chỗ).

## 3. Bản đồ buổi học
**Dùng khi:** đầu bài và đầu mỗi phần, để học viên biết đang ở đâu.
**Cơ chế:** cùng một bản đồ lặp lại ở nhiều slide, chỉ đổi trạng thái từng trạm bằng lớp (`done`, `now`). Muốn bản đồ trượt mượt giữa hai slide thì gắn cùng `data-morph="ban-do"` ở cả hai.
**Biến tấu:** trạm có thể là tầng nhà, ga tàu, giờ trong ngày, chương sách; hình của bản đồ lấy từ ý tưởng lớn, không mặc định là một hàng vòng tròn.

## 4. Con số có nguồn
**Dùng khi:** mọi con số, nhất là chế độ báo cáo.
**Cơ chế:** số là chữ HTML (để còn sửa và xuất PowerPoint); nguồn nằm ngay cạnh số, ghi file, sheet, ô hoặc trang. Muốn nhấn thì `data-count="86"` để số đếm lên.
```html
<span data-count="86">86</span>%  <small>Nguồn: tien-do.xlsx, sheet Tuan42, ô F12</small>
```
**Biến tấu:** một số khổng lồ cắt mép slide; số đặt trên vật thật (cột nhà, xe, máy); ba số so với nhau bằng kích thước. Không có nguồn thì không dùng số.

## 5. Biểu đồ một thông điệp
**Dùng khi:** báo cáo có số liệu so sánh.
**Cơ chế:** tiêu đề slide là **câu kết luận**; biểu đồ vẽ bằng HTML hoặc SVG (không dùng ảnh); phần đang nói tô màu nhấn, phần còn lại trung tính; cột mọc bằng `data-anim="rise-wipe"` kèm `data-stagger` trên khối cha. Nhãn có thể nằm ngoài khung cột (runtime không cắt).
**Biến tấu:** cột ngang, đường xu hướng vẽ dần (`draw`), các khối xếp chồng như tầng nhà, Isotype (lặp đúng số biểu tượng).

## 6. Toàn cảnh lia (máy quay đi qua một thế giới)
**Dùng khi:** chế độ sự kiện, hoặc bài giảng có câu chuyện đi qua không gian.
**Cơ chế:** các lớp nền đặt **ngoài** các slide, rộng hơn sân khấu; mỗi lớp có `data-parallax` (lớp xa nhỏ, lớp gần lớn); mỗi slide ghi `data-cam` là quãng đường máy quay đã đi.
```html
<svg data-parallax="0.3" style="position:absolute;left:0;bottom:0;width:3840px;height:1080px">...lớp xa...</svg>
<svg data-parallax="1"   style="position:absolute;left:0;bottom:0;width:3840px;height:1080px">...lớp gần...</svg>
<section class="slide" data-cam="0">...</section>
<section class="slide" data-cam="120">...</section>
```
Lớp rộng bao nhiêu: ít nhất `1920 + (data-cam lớn nhất) × data-parallax`.
**Biến tấu:** thế giới có thể là đường phố, đáy biển, một tờ bản vẽ khổng lồ, dòng thời gian lịch sử, bề mặt một con chip.

## 7. Ánh sáng, bầu trời đổi theo cảnh
**Dùng khi:** muốn thời gian trôi (sáng tới tối), hoặc mỗi chương một bầu không khí.
**Cơ chế:** gradient không chuyển mượt được, nên xếp chồng vài lớp gradient rồi bật tắt `opacity`; mỗi slide ghi `data-scene`, runtime chép lên `.sm-stage`.
```css
.sky { position:absolute; inset:0; opacity:0; transition:opacity 1.8s; }
.sm-stage[data-scene=sang] .sky.sang, .sm-stage[data-scene=dem] .sky.dem { opacity:1; }
```
**Biến tấu:** mùa trong năm, nước lên xuống, đèn trong tòa nhà sáng dần, màu mực đậm dần.

## 8. Vật xuyên suốt (nhân vật)
**Dùng khi:** gần như mọi deck có ý tưởng lớn.
**Cơ chế:** vật đặt ngoài slide; mỗi slide ghi vị trí mong muốn (ví dụ `data-vat="x y tile do-mo"`); nghe `sm:change` để đặt `transform`. Lần đặt đầu tiên tắt `transition` để vật không bay từ góc trái trên; gắn hàm nghe xong thì gọi luôn nếu `deck.index >= 0`.
```js
let first = true; const vat = document.getElementById('vat');
const dat = s => { const [x, y, k, o] = s.dataset.vat.split(' ').map(Number);
  if (first) vat.style.transition = 'none';
  vat.style.transform = `translate(${x}px,${y}px) scale(${k})`; vat.style.opacity = o;
  if (first) { vat.getBoundingClientRect(); vat.style.transition = ''; first = false; } };
document.querySelector('.sm-stage').addEventListener('sm:change', e => dat(e.detail.slide));
if (window.deck && deck.index >= 0) dat(deck.slides[deck.index]);
```
**Biến tấu:** vật đổi vai (gạch chân, trục, con dấu), đổi trạng thái (đèn tắt, đèn sáng), để lại vết (đường đã đi).

## 9. Chữ trên nền nhiều chi tiết
**Dùng khi:** nền là cảnh, ảnh, toàn cảnh.
**Cơ chế:** phủ một dải tối (hoặc sáng) mềm phía bên có chữ bằng gradient; hoặc đặt chữ trong khung kính mờ `backdrop-filter: blur(16px)` có nền bán trong suốt. Soát kỹ chữ nằm trên vùng sáng (mặt trời, cửa sổ đèn).
**Biến tấu:** quầng tối hình elip sau khối chữ; chữ đặt vào khoảng trời trống của cảnh.

## 10. Giao diện phần mềm giả (chat, terminal, trình soạn mã)
**Dùng khi:** cần cho thấy AI hoặc phần mềm đang làm việc.
**Cơ chế:** một khối có thanh tiêu đề và vùng nội dung; dòng tin hoặc dòng lệnh hiện lần lượt bằng `data-stagger` trên khối cha; con trỏ nhấp nháy bằng `data-loop="blink"`. Chữ trong đó là HTML thật.
**Biến tấu:** cửa sổ nghiêng trong không gian, nằm trên màn hình điện thoại cầm tay, chiếu lên tường công trường; đừng lúc nào cũng là hộp đen giữa slide.

## 11. Con dấu, phán quyết
**Dùng khi:** duyệt, chốt, kết luận.
**Cơ chế:** `data-anim="stamp"` (phóng to và xoay rồi đập xuống); đặt sau cùng trong nhịp hiện.
**Biến tấu:** dấu son, dấu "CHỜ DUYỆT", dấu tích lớn, nam châm dập.

## 12. Khoanh hoặc gạch chân đúng chữ
**Dùng khi:** muốn chỉ vào một cụm từ trong câu.
**Cơ chế:** đừng đoán tọa độ (chữ xuống dòng là lệch). Đợi font tải xong (`document.fonts.ready`), đo vị trí chữ bằng `getBoundingClientRect`, chia cho tỉ lệ co khung (`chiều rộng sân khấu thật / 1920`), rồi vẽ đường SVG quanh đó. Xem hàm `around` trong `examples/02_ai-agent-xay-dung-whiteboard.html`.

## 13. Bản phát tay
**Dùng khi:** chế độ giảng dạy.
**Cơ chế:** có sẵn trong runtime: Ctrl+P, chọn "Lưu dưới dạng PDF". Mọi slide một trang, mọi bước đã hiện, không hiệu ứng. Nền riêng của slide phải đặt trên chính `<section>`; lớp rất rộng (toàn cảnh) bị cắt gọn khi in.

---

**Soát chống chép:** sau khi dựng xong, so từng slide với các deck trong `examples/`. Slide nào giống một slide mẫu về bố cục và hình thì đổi lại cho hợp câu chuyện của deck này.
