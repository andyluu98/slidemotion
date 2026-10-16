# Pastel Geometry (hình học màu phấn)

> Sân khấu xanh phấn, một tấm thẻ trắng ngà bo tròn, và năm viên nhộng màu kẹo xếp cao thấp như nhịp nhạc. Mọi thứ mềm, gọn, dễ thở.

**Hợp:** đào tạo nội bộ, giới thiệu sản phẩm, onboarding nhân sự mới, giáo dục, hướng dẫn sử dụng.
**Không hợp:** chủ đề nghiêm trọng, khủng hoảng, công nghệ hầm hố, sự kiện sang trọng ban đêm.
**Cảm xúc:** thân thiện, gọn gàng, nhẹ nhàng, hiện đại.

## Hình dung
Như giao diện một ứng dụng học tập được thiết kế kỹ: thẻ trắng nổi nhẹ trên nền xanh phấn, bóng mềm. Bên cạnh là năm viên nhộng đứng thành hàng với chiều cao ngắn, vừa, cao, vừa, ngắn, như một biểu đồ âm thanh đang thở. Năm viên nhộng là nhân vật: chúng làm tab, làm cột, làm vạch chia, làm trục thời gian, thậm chí làm dấu ngoặc kép. Người xem thấy mọi thứ được đặt đúng chỗ và không có gì làm mình căng thẳng.

## Bảng màu
```css
--bg: #c8d9e6;        /* sân khấu xanh phấn */
--paper: #faf9f7;     /* thẻ trắng ngà */
--fg: #1f2a37;        /* chữ chính */
--muted: #4f5a6b;     /* chữ phụ */
--pink: #f0b4d4;      /* viên nhộng 1 */
--mint: #a8d4c4;      /* viên nhộng 2 */
--sage: #5a7c6a;      /* viên nhộng 3, xanh xô thơm đậm */
--lavender: #9b8dc4;  /* viên nhộng 4 */
--violet: #7c6aad;    /* viên nhộng 5, nút hành động */
--accent: #6c5aa3;    /* chữ nhấn */
```
Luật màu nhấn: năm màu viên nhộng luôn đi theo bộ và theo đúng thứ tự hồng, bạc hà, xô thơm, oải hương, tím. Màu tím đậm dành cho nút hành động và một điểm nhấn chữ mỗi slide.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```
- Tiêu đề: Plus Jakarta Sans 800, giãn -0,02em, tròn trịa và gần gũi.
- Thân: Plus Jakarta Sans 400 đến 500.
- Nhãn, nút: Plus Jakarta Sans 700.
- Một họ chữ cho cả deck. Đã kiểm: có bộ chữ tiếng Việt.

## Bề mặt
Nền xanh phấn phẳng. Thẻ trắng ngà bo 44px, bóng hai lớp xanh xám rất mềm (một lớp rộng 80px, một lớp gần 18px), như tờ giấy nổi lên vài milimet.
```css
box-shadow: 0 30px 80px rgba(52,76,104,.18), 0 6px 18px rgba(52,76,104,.08);
```

## Ngôn ngữ minh họa
- **Viên nhộng:** chữ nhật bo tròn hoàn toàn, rộng khoảng 56px, cao thay đổi. Luôn dựng đứng hoặc nằm ngang, không xoay lệch (trừ khi làm dấu ngoặc kép).
- **Nút hành động:** vòng tròn tím với mũi tên tải xuống màu trắng, bóng tím nhẹ.
- Icon nét tròn đầu, dày vừa, một màu.
- Biểu đồ dùng chính viên nhộng làm cột; sơ đồ dùng thẻ trắng nhỏ nối bằng đường mảnh màu chữ phụ.

## Chữ ký chuyển động
- **Hàng nhộng thở:** năm viên nhộng `rise` lần lượt (`data-stagger="80"`), sau đó viên giữa `float` nhẹ như đang thở.
- **Nhộng đổi vai:** cùng năm viên đi xuyên deck bằng `data-morph` (p1 đến p5): từ tab mép phải thành cột khổng lồ, thành vạch chia cột, thành trục thời gian nằm ngang.
- **Thẻ nở ra:** thẻ trắng `zoom` mềm từ giữa, nội dung trong thẻ `fade` sau.
- **Nút nhún:** nút hành động `pop` rồi `pulse` chậm, mời bấm.
- Nhịp: mềm, có độ nảy nhỏ, không có gì đột ngột.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** thẻ trắng lớn giữa sân khấu, tên deck chữ đậm, hàng nhộng đứng ở mép phải như năm tab, nút tím ở góc thẻ.
- **Sang chương:** thẻ thu về bên trái, năm viên nhộng vươn thành năm cột lớn, số chương trên cột cao nhất.
- **Lộ trình học:** năm viên nhộng nằm nối đuôi thành trục nhiều màu, mỗi đoạn là một tuần hoặc một bước.
- **Trích dẫn:** hai viên nhộng nghiêng làm dấu ngoặc kép lớn, câu nói nằm giữa.

## Nên tránh
Đổi thứ tự hoặc thêm màu ngoài bộ năm màu, góc vuông sắc, bóng đổ đậm, nền trắng tinh, chữ serif, ảnh tối và nặng.

## Họ hàng
`split-pastel` (cùng họ màu phấn nhưng nền đào, panel lưới trượt và huy hiệu có icon, vui hơn), `capsule` (cũng hình viên nhộng, ấm và trẻ hơn), `bento-light` (gọn sạch như ứng dụng nhưng dùng lưới ô, không có màu kẹo).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
