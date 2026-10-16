# Clay 3D (đồ chơi đất nặn phồng mềm)

> Nền oải hương nhạt, những món đồ chơi đất nặn màu pastel phồng mềm được rọi đèn từ góc trên trái, nảy nhẹ vào chỗ mới mỗi slide.

**Hợp:** giáo dục trẻ em, edtech, app tiêu dùng, workshop vui, onboarding thân thiện, giới thiệu tính năng dễ thương.
**Không hợp:** báo cáo tài chính, chủ đề nghiêm trọng, văn hóa truyền thống, sự kiện trang trọng.
**Cảm xúc:** vui tươi, thân thiện, trẻ trung, mềm mại.

## Hình dung
Một bàn chơi đất nặn: viên bi vàng bơ, chiếc kẹo dẻo hồng, khối vuông bạc hà bo tròn, đĩa tím, chiếc bánh vòng tím đậm. Tất cả trông bóp được, ấn vào là lún. Nội dung nằm trên một tấm đất nặn tím nhạt lớn như cái khay. Người xem thấy dễ chịu, muốn chạm vào.

## Bảng màu
```css
--bg: #EDE9FE;      /* oải hương nhạt, nền */
--panel: #DDD6FE;   /* khay đất nặn chứa nội dung */
--fg: #2E2257;      /* tím than: chữ */
--muted: #5B4F86;   /* chữ phụ */
--violet: #7C3AED;  /* tím đậm: màu nhấn, bánh vòng */
--lilac: #C4B5FD;   /* tím nhạt: đĩa */
--pink: #FDA4AF;    /* hồng kẹo: viên thuốc dài */
--mint: #86EFAC;    /* bạc hà: khối vuông */
--butter: #FDE68A;  /* vàng bơ: viên bi */
```
- Màu nhấn là tím đậm. Các màu pastel là đồ chơi, có thể dùng để chia nhóm (mỗi nhóm một màu đất).

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
```
- Tiêu đề: Baloo 2 700 đến 800 (có tiếng Việt), tròn mập, giãn âm nhẹ -0,01em, dòng 1,15.
- Thân: Nunito 400 đến 600 (có tiếng Việt), đầu nét tròn.
- Kicker: Nunito 800, giãn 0,16em. Số lớn: Baloo 2 800.

## Bề mặt
Nền phẳng. Chất "đất nặn" tạo bằng ba lớp bóng: viền sáng trong ở trên trái, vùng tối trong ở dưới phải, bóng đổ mềm dưới vật.
```css
--clay: inset -8px -10px 0 rgba(46,34,87,.16), inset 8px 8px 0 rgba(255,255,255,.55), 0 22px 40px rgba(46,34,87,.18);
```
Thẻ trắng trong mờ `rgba(255,255,255,.6)` bo 40px; khay lớn bo 56px.

## Ngôn ngữ minh họa
- **Bộ đồ chơi:** viên bi, viên thuốc (pill), khối vuông bo 30%, đĩa dẹt, bánh vòng (donut), tất cả mang bóng `--clay`.
- Mọi hình bo tròn tối đa; không cạnh sắc, không nét viền.
- Biểu tượng và nhân vật: nặn từ khối cơ bản (mặt cười là viên bi có hai chấm mắt), không chi tiết nhỏ.
- Biểu đồ: cột là thanh đất bo tròn đầu, mỗi cột một màu pastel; con số đặt trên viên bi.
- Nút bấm, nhãn: viên thuốc pastel có chữ tím than.

## Chữ ký chuyển động
- **Nảy vượt đà:** đồ chơi bay vào chỗ mới với đường cong vượt rồi lùi (`cubic-bezier(.34,1.56,.64,1)`), như bóng cao su dừng lại.
- **Bẹp khi tiếp đất:** vật `drop` xuống rồi bẹp ngang một chút và phồng lại (bọc lớp con để thêm `scaleX/scaleY` ngắn), chất đất nặn rõ nhất ở đây.
- **Ấn nút:** khi chọn một mục, thẻ lún xuống (bóng trong đổi chiều) rồi bật lên, dùng cho `data-step`.
- **Lơ lửng lệch pha:** một hai món đồ chơi `float` nhẹ, mỗi món chu kỳ khác nhau.
- **Khay phồng ra:** tấm khay tím nhạt to dần từ tâm (`zoom` có nảy) trước khi chữ `pop` vào.
- Nhịp: vui, nảy, nhanh vừa; tránh lắc liên tục gây chóng mặt.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tiêu đề Baloo to giữa khay tím, năm món đồ chơi lần lượt nảy vào bốn phía.
- **Ba bước học:** ba viên thuốc pastel xếp bậc thang, mỗi viên bật lên khi bấm, viên bi vàng nhảy từ bậc này sang bậc kia.
- **Chọn đáp án:** bốn thẻ đất nặn, thẻ đúng lún xuống rồi phát sáng tím, các thẻ khác nhạt đi.
- **Kết:** mọi đồ chơi dồn lại thành một đống vui quanh lời cảm ơn, bánh vòng xoay một vòng.

## Nên tránh
Góc vuông, viền nét đen, màu bão hòa đậm, bóng đổ cứng, chữ chân mảnh, chi tiết nhỏ li ti, ảnh chụp thật không bo góc, chuyển động thẳng tắp không nảy.

## Họ hàng
`brick-toy` (đồ chơi lắp ghép, cạnh vuông và màu cơ bản), `daisy-days` (vui tươi, hoa cúc, phẳng không khối), `paper-popup` (sách giấy bật lên, chất giấy thay vì đất nặn).

*Style gốc của SlideFly.*
