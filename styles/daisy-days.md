# Daisy Days (trang truyện tranh hoa cúc)

> Trang sách truyện màu kem đổi dần sang bạc hà, ngọc lam, đào, xanh trời, hồng, oải hương. Một tấm thẻ trắng viền than chì đi xuyên deck, quanh nó là mặt trời cười, cầu vồng, mây, hoa cúc và ngôi sao vẽ tay.

**Hợp:** đào tạo thân thiện, gia đình và trẻ em, workshop cộng đồng, kickoff vui, giới thiệu trường mầm non, sự kiện hè.
**Không hợp:** báo cáo tài chính, B2B nghiêm túc, công nghệ cao cấp, chủ đề nặng nề.
**Cảm xúc:** vui tươi, ấm áp, hồn nhiên, nhẹ nhàng.

## Hình dung
Như lật một cuốn truyện tranh thiếu nhi: mỗi trang một màu nền pastel, nhân vật chính là tấm thẻ trắng viền đen có bóng lệch, nó thay hình qua từng trang (thẻ lớn, bảng danh sách, đĩa tròn mặt trời, khung nổi bật, viên kẹo, trục thời gian, thẻ nghiêng). Sticker vẽ tay tụ ở các góc rồi lăn sang góc khác. Người xem thấy an toàn, được chào đón, muốn tham gia.

## Bảng màu
```css
--bg: #f5f0e6;       /* kem: bìa */
--mint: #a8e6cf;     /* nền mục lục */
--turq: #7ecdc0;     /* nền chương, nhấn phụ */
--peach: #ffcba4;    /* nền nội dung chẵn */
--sky: #a8d8f0;      /* nền số liệu */
--pink: #f7c8d4;     /* nền trích dẫn */
--lav: #d4a5e8;      /* nền kết */
--butter: #fde68a;   /* nhãn, viên kẹo kết luận */
--ink: #2d2d2d;      /* viền than chì 3px, chữ */
--accent: #f8635f;   /* san hô: điểm nhấn chính */
```
Luật màu: nền đổi màu theo slide, nhưng mỗi slide chỉ một màu nền. San hô dành cho điều quan trọng nhất. Chữ trắng lớn luôn có bóng than chì lệch 4px để đọc được trên pastel.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Baloo 2 800, tròn và mập; tiêu đề trên nền màu đậm dùng chữ trắng bóng than chì.
- Thân: Quicksand 500 đến 600.
- Nhãn: Baloo 2 trong viên kẹo vàng bơ viền 3px, bóng lệch 4px.
- Bản gốc dùng Baloo 2 thay Fredoka One vì Fredoka One không có tiếng Việt. Baloo 2 và Quicksand đều có tiếng Việt (đã kiểm Google Fonts, 16/10/2026).

## Bề mặt
Nền phẳng pastel, không hạt. Thẻ trắng viền `3px solid #2d2d2d`, bo 28px, bóng `6px 6px 0 #2d2d2d`.

## Ngôn ngữ minh họa
- Sticker vẽ tay nét than chì 3px, tô màu phẳng: mặt trời có mặt cười (vàng bơ), cầu vồng, đám mây, hai bông cúc cánh trắng nhụy vàng, hai ngôi sao.
- Sticker tụ ở góc, hơi tràn ra ngoài mép, như dán vội.
- Dấu đầu dòng là chấm tròn xoay vòng vàng bơ, bạc hà, oải hương, viền than chì.
- Thẻ hai cột có đầu thẻ màu (bạc hà và oải hương) ngăn bằng vạch than chì.
- Dấu ngoặc kép to, tròn, như vẽ bằng bút dạ.

## Chữ ký chuyển động
- **Trang đổi màu:** nền chuyển mượt từ kem sang bạc hà, ngọc lam, đào theo slide (lớp nền theo `data-scene`, transition 700ms), như lật sang trang truyện mới.
- **Thẻ trắng biến hình:** cùng một thẻ đổi từ hình chữ nhật thành đĩa tròn, viên kẹo, trục ngang (`data-morph="card"`, đổi `border-radius` và kích thước).
- **Dán sticker:** sticker vào bằng `pop` kèm xoay nhẹ 8 độ về 0, như được dán bằng ngón tay.
- **Hoa cúc lắc, mây trôi:** cúc `sway`, mây `float`; mặt trời quay rất chậm (`spin`, `data-loop-dur` dài). Tối đa hai thứ lặp mỗi slide.
- **Ngôi sao lấp lánh** bằng `pulse` khi có tin vui hoặc thành tích.
- Nhịp: mềm, nảy nhẹ, không giật.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** thẻ trắng lớn giữa trang kem, mặt trời cười ló góc trên trái rồi quay chậm, cầu vồng dán góc dưới phải, mây trôi.
- **Chương mới:** nền chuyển ngọc lam, thẻ cuộn thành đĩa tròn như mặt trời, số chương chữ trắng bóng đen nằm giữa.
- **Lộ trình:** thẻ duỗi thành trục ngang, sticker lấp các khoảng trống zigzag, mỗi mốc `pop` lần lượt.
- **Kết:** nền oải hương, thẻ nghiêng dưới cầu vồng, sao lấp lánh.

## Nên tránh
Nét mảnh hoặc không viền, bóng mờ, gradient, màu bão hòa mạnh, sticker tả thực hoặc icon phẳng công nghiệp, chữ trắng không bóng trên pastel, nhiều sticker che chữ.

## Họ hàng
`clay-3d` (mềm mại vui tươi nhưng khối 3D đất sét, hợp edtech), `crayon-book` (sáp màu ngây thơ, hợp truyện kể trẻ nhỏ), `playful` (thủ công indie cho người lớn, ít chất thiếu nhi).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
