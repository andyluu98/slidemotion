# Retro Zine (tập san in risograph)

> Giấy kaki, xanh lá rừng và mực đen. Thẻ giấy kem dán chồng lên giấy, băng keo giấy giữ góc, con dấu xoay lệch và hạt in phủ khắp trang.

**Hợp:** ấn phẩm độc lập, nghệ thuật, cộng đồng, câu lạc bộ, sự kiện nhỏ, quán cà phê, thương hiệu thủ công, chuyện hậu trường.
**Không hợp:** báo cáo doanh nghiệp trang trọng, công nghệ lạnh, sản phẩm cao cấp bóng bẩy.
**Cảm xúc:** thủ công, mộc mạc, hoài cổ, bụi bặm.

## Hình dung
Như một tập san photo tự làm, in hai màu bằng máy risograph rồi đóng ghim: thẻ kem viền đen dán lên trang kaki, mảng xanh lá phía sau lệch đi một chút vì in hai lần không khớp, mẩu băng keo giấy trong suốt chéo góc, con dấu ba ngôi sao đóng nghiêng. Người xem ngửi thấy mùi mực và giấy.

## Bảng màu
```css
--bg: #c8b99a;       /* giấy kaki */
--khaki-d: #b8a98a;  /* kaki sẫm, mảng giấy thứ hai */
--cream: #f4efe6;    /* thẻ dán */
--ink: #1a1a1a;      /* mực đen: viền, chữ thân, mảng đen */
--muted: #4a4232;
--green: #008f4d; --green-l: #00a85d;  /* xanh rừng: mảng in lệch, nhãn, chấm lưới */
--accent: #005c33;   /* xanh sẫm cho tiêu đề */
```
Luật màu: chỉ hai "trống mực" là xanh lá và đen, như máy riso hai màu. Kaki và kem là giấy. Tiêu đề xanh sẫm, mảng nhấn xanh lá, không thêm màu thứ ba.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Patrick+Hand&display=swap" rel="stylesheet">
```
- Tiêu đề: Oswald 600, IN HOA, giãn 0,02em, màu xanh sẫm.
- Thân: Space Grotesk 400 đến 500.
- Ghi chú tay, nguồn, chữ ký: Patrick Hand.
- Nhãn: Oswald 500 giãn 0,22em, chữ kem trên dải xanh lá.
- Bản gốc dùng Bebas Neue và Caveat; SlideFly đổi sang Oswald và Patrick Hand vì có tiếng Việt.

## Bề mặt
Giấy kaki phủ hạt in (nhiễu fractal 11%) lên trên mọi thứ, như bản photo.
```css
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
opacity: .11;
```

## Ngôn ngữ minh họa
- **Thẻ kem viền đen 3px,** xoay lệch vài độ, phía sau là mảng xanh lá cùng cỡ xoay lệch hơn (bản in thứ hai trượt).
- **Chấm lưới halftone** xanh lá 18px mờ dần từ đáy thẻ lên.
- **Băng keo giấy:** dải trắng trong 42%, viền mờ, dán chéo 14 đến 32 độ ở góc thẻ.
- **Con dấu chữ nhật** nền đen viền xanh, ba ngôi sao trong khung nét đứt, xoay -8 độ.
- **Đường kẻ mực 3px** dưới tiêu đề như cột báo.
- Ảnh (nếu có): đen trắng tương phản cao hoặc phủ một màu xanh, cắt mép như cắt bằng kéo.

## Chữ ký chuyển động
- **Dán thẻ:** thẻ rơi xuống trang và xoay nắn về góc lệch (`drop`, bọc lớp ngoài giữ góc xoay), băng keo `pop` vào hai góc sau đó 200ms.
- **In lệch khớp:** mảng xanh lá trượt vào chỗ lệch của nó sau khi thẻ đã nằm yên (`right` hoặc `left` trễ 300ms).
- **Chớp máy photo:** sang chương mới, một dải sáng quét ngang trang như đèn máy photocopy (`scan` một lượt).
- **Chấm lưới loang:** lớp halftone hiện dần từ dưới lên (`rise-wipe`).
- **Con dấu đóng xéo** (`stamp`) cho kết luận hoặc ngày phát hành.
- Nhịp: tay làm, hơi lệch, có nảy nhẹ khi dán. Không mượt kiểu máy.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** mảng kaki sẫm bên phải, thẻ kem dán chéo có mảng xanh in lệch phía sau, băng keo hai góc, tên tập san Oswald khổng lồ, "Số 01" viết tay.
- **Mục lục:** dải đầu trang như măng-sét, gáy xanh lá dọc mép trái, nhãn dán băng keo.
- **Trích lời:** xanh lá tràn trang, mảnh giấy ghi chú dán tạm, con dấu đen đóng góc.
- **Kết:** mực đen tràn trang, thẻ kem với mảng xanh lệch, con dấu xanh "HẾT SỐ".

## Nên tránh
Màu thứ ba, gradient mượt, bóng mềm, bo góc tròn, mọi thứ thẳng hàng tuyệt đối, ảnh màu bóng bẩy, icon phẳng.

## Họ hàng
`risograph` (cùng chất riso nhưng rực nhiều màu, trẻ hơn), `halftone-dossier` (truyện tranh halftone, hài và bí mật), `stencil-tablet` (lưu trữ, poster dày dặn, chữ stencil).

*Ý tưởng gốc: frontend-slides (MIT), mẫu "retro-zine", qua SlideFly.*
