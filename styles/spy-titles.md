# Điệp viên 60s (phần mở đầu phim điệp viên bằng giấy cắt)

> Phần danh đề của một bộ phim điệp viên chưa từng có: bốn màu mực phẳng, mảnh giấy cắt kéo đổ bóng lệch, một hình bóng đen chạy trước mặt trăng khổng lồ, và chiếc chìa khóa đồng bị săn đuổi qua mọi cảnh.

**Hợp:** mở màn sự kiện, trailer, ra mắt sản phẩm kiểu bí mật, bài thuyết trình cần kịch tính, công bố kết quả, teaser chiến dịch.
**Không hợp:** báo cáo dày số liệu, đào tạo kỹ thuật chi tiết, nội dung nhẹ nhàng chữa lành.
**Cảm xúc:** hoài cổ, kịch tính, giấy cắt, tương phản.

## Hình dung
Đèn trong rạp vừa tắt, nhạc kèn đồng nổi lên. Mỗi slide là một "địa điểm" mang một màu nền (đêm đen, giấy kem, đỏ báo động, vàng mù tạt). Một bóng người mũ phớt, áo khoác dài, khăn đỏ bay, chạy qua những mảnh giấy cắt xếp lớp. Chìa khóa đồng xuất hiện ở đâu đó trong mỗi cảnh, như một manh mối. Người xem tò mò muốn biết cảnh sau.

## Bảng màu
```css
--ink: #1b1714;    /* mực: hình bóng, dải danh đề, nền đêm */
--cream: #efe4c9;  /* giấy: nền sáng, chữ trên nền tối */
--red: #d23a22;    /* đỏ điệp viên: khăn, một vật nhấn mỗi hình */
--must: #e2a52a;   /* vàng mù tạt: vật bị săn, ô nhỏ */
--paper-shadow: rgba(0, 0, 0, 0.28);  /* bóng giấy lệch (7, 9), không mờ */
```
Chỉ bốn mực phẳng, đục, không trong suốt (trừ bóng giấy). Mỗi địa điểm một màu nền: bìa đen; nội dung, dòng thời gian, kết kem; mở phần đỏ đậm `#c4301b`; so sánh và trích dẫn đen; số liệu vàng. Vật đen trên nền đen thì mất hình: hình bóng luôn đứng trước mặt trăng sáng hoặc trên nền kem. Đỏ chỉ cho một vật mỗi hình.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=League+Gothic&family=League+Spartan:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề, dòng danh đề: League Gothic, IN HOA, giãn 0,03 đến 0,08em, cao và hẹp như chữ áp phích phim.
- Thân, nhãn kỹ thuật: League Spartan 400 đến 700; nhãn nhỏ 700 IN HOA giãn 0,16em.
Cả hai font có tiếng Việt (đã kiểm ngày 16/10/2026). League Gothic hẹp, dấu tiếng Việt nằm sát; nên thử chữ có dấu chồng (Ẫ, Ộ) ở cỡ lớn trước khi chốt.

## Bề mặt
Nền màu phẳng của địa điểm, phủ một lớp nhiễu giấy rất nhẹ như phim in cũ. Mọi mảnh có mép cắt kéo: cạnh chia đoạn khoảng 11px, mỗi điểm lệch tối đa 1,6px, góc vẫn nhọn. Mảnh nào cũng có bóng giấy phẳng lệch xuống phải.

## Ngôn ngữ minh họa
- **Mặt trăng khổng lồ:** đĩa lớn có hai vòng mảnh, đổi màu theo địa điểm; hình ảnh chủ đạo "bóng đen trước vòng tròn lớn".
- **Hình bóng chạy:** mảng đen một khối (mũ phớt, áo khoác dài, tay chân là thanh thuôn, giày là nêm), khăn đỏ bay. Không mặt, không chi tiết; diễn xuất nằm ở dáng chạy.
- **Dải chéo cắt khung:** hai dải giấy dài chém chéo qua slide, màu theo địa điểm.
- **Thành phố:** dải mái nhà ở đáy, ô cửa sáng vàng.
- **Tờ giấy là slide:** chữ nhật 16:9 xoay vài độ, vạch kem làm "dòng chữ", một đĩa nhỏ làm hình.
- **Dải danh đề:** băng đen dài, đĩa đỏ mang số kem ở đầu, vạch kem ở giữa, ô vàng ở cuối.
- **Mảnh nêm chuyển động:** ba tam giác đen nhỏ dần chỉ hướng bay. **Chìa khóa đồng** trên đĩa đen cắt tay.
- Không súng, nòng súng, đồ chơi gián điệp, cảnh bạo lực.

## Chữ ký chuyển động
- **Cắt cảnh đổi địa điểm:** chuyển slide bằng `data-transition="cut"`, nền đổi màu một nhát, không hòa dần; như phim cắt cảnh.
- **Dán giấy từng mảnh, dừng gắt:** mảnh sau, mảnh trước, mảnh nêm, nhãn lần lượt `pop` không nảy (hoặc `left`, `right` rất nhanh), mỗi mảnh dừng đột ngột, khoảng cách đều như nhịp trống.
- **Dải chéo chém qua:** hai dải chéo `wipe` vào theo hướng ngược nhau, lệch nhau một nhịp.
- **Bóng người chạy xuyên cảnh:** hình bóng là lớp `data-morph` đổi vị trí qua mỗi slide, như đang băng qua từng địa điểm; khăn đỏ `sway` nhẹ.
- **Chìa khóa săn đuổi:** chìa khóa `data-morph` từ góc này sang góc khác qua các slide, slide cuối `stamp` xuống trạm đích.
- Nhịp: giật, theo phách, mọi thứ dừng đột ngột; không trôi mượt, không rung.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** nền đen, mặt trăng kem lớn bên phải, bóng người chạy trước trăng, ba tờ giấy đỏ, vàng, đen bị ném ra sau lưng, dải nhà ở đáy; tiêu đề League Gothic dồn trái.
- **Danh sách mục tiêu (mục lục):** các dải danh đề đen đánh số dán lần lượt theo phách.
- **Quy trình:** trục là dải đen cắt tay, mỗi bước một đĩa trạm; bóng người nhỏ chạy dọc trục, chìa khóa đáp xuống trạm cuối.
- **Tiết lộ:** nền đỏ, dải chéo chém qua, một câu ngắn hiện giữa hai dải, như dòng danh đề quan trọng nhất phim.

## Nên tránh
Màu ngoài bốn mực, gradient, glow, blur, độ trong suốt (trừ bóng giấy), viền mảnh quanh hình; súng và bạo lực; bắt chước chữ, nhân vật, cảnh của phim có thật; tên người thật làm danh đề; chữ nằm trên hình bóng; tờ giấy đen trên nền đen; số liệu bịa trên hình.

## Họ hàng
`bold-poster` (áp phích chỉ có chữ, táo bạo; điệp viên có hình bóng, mặt trăng, kể chuyện), `art-deco` (đối xứng vàng sang trọng, gala; điệp viên lệch, giật, giấy cắt), `silent-film` (phim câm đen trắng có khung chữ thoại; điệp viên bốn mực, nhịp nhạc kèn).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
