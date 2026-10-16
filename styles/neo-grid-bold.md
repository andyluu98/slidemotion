# Neo-Grid Bold (lưới biên tập tân thô mộc)

> Một lưới 12 x 8 ô in trên giấy xám nhạt, các tấm giấy, mực đen và vàng chanh khớp đúng vào ô, đổi chỗ, đổi màu, đổi khổ theo từng slide.

**Hợp:** pitch thiên thiết kế, keynote, slide số liệu và so sánh, giới thiệu studio, báo cáo sản phẩm có tính biên tập.
**Không hợp:** văn hóa truyền thống, nội dung cảm xúc mềm, trẻ em, lễ hội.
**Cảm xúc:** tự tin, mạnh, biên tập, hiện đại.

## Hình dung
Như bàn dàn trang của một tạp chí thiết kế: tờ lưới căn sẵn, nhà thiết kế cắt các mảng giấy trắng, mảng đen, mảng vàng chanh rồi ghim vào đúng ô. Sang slide mới, các mảng không biến mất mà trượt sang ô khác, giãn ra hoặc co lại. Người xem cảm thấy mọi thứ có trật tự, chắc tay và rất "đã căn".

## Bảng màu
```css
--stage-bg: #1a1a1a;  /* nền ngoài sân khấu */
--bg: #ecece8;        /* giấy xám ấm, viền passe-partout */
--paper: #f5f4ef;     /* mảng giấy sáng */
--ink: #0a0a0a;       /* mảng đen, chữ */
--muted: #4f4f4b;
--lemon: #e6ff3d;     /* vàng chanh: một mảng mỗi slide */
```
Luật màu: ba mảng giấy, mực, chanh chia nhau các ô. Vàng chanh chỉ một mảng trên một slide, thường là nhãn, kết luận hoặc con số thắng.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```
- Tiêu đề: Space Grotesk 700, IN HOA, giãn âm (-0,02em). Số chương 300px giãn -0,05em.
- Thân: Space Grotesk 400 đến 500.
- Nhãn, nguồn, mã: JetBrains Mono 500 IN HOA, giãn 0,1em; nhãn chính nằm trong ô chanh.

## Bề mặt
Khung giấy xám lùi vào 40px quanh sân khấu, bên trong là lưới 12 cột x 8 hàng, khe 12px, nét lưới đen 13% hòa trộn `multiply`. Các mảng không bo góc, không bóng.
```css
background-image:
  linear-gradient(to right, rgba(10,10,10,.13) 0 1px, transparent 1px 141.33px, rgba(10,10,10,.13) 141.33px 142.33px, transparent 142.33px),
  linear-gradient(to bottom, rgba(10,10,10,.13) 0 1px, transparent 1px 113.5px, rgba(10,10,10,.13) 113.5px 114.5px, transparent 114.5px);
background-size: 154.333px 100%, 100% 126.5px;
```

## Ngôn ngữ minh họa
- **Mọi thứ khớp ô:** vị trí và kích thước là bội số của ô lưới; không có gì lơ lửng giữa khe.
- **Ba mảng:** giấy (chứa chữ), mực (chứa điểm nhấn, chữ trắng), chanh (nhãn, kết luận).
- **Ô mã 5 x 5:** ô vuông nhỏ ghép từ ô đen và ô chanh như mã QR giả, làm "con dấu" thị giác.
- **Dấu 2 x 2:** hai ô vuông đặc chéo góc, làm logo góc trang.
- Biểu đồ: cột đặc vuông vức đứng trên lưới, mỗi cột một ô rộng; so sánh bằng ba mảng ba màu.

## Chữ ký chuyển động
- **Tái dàn trang:** giữa hai slide, các mảng giấy, mực, chanh trượt và co giãn sang ô mới (`data-morph` cho từng mảng: `paper`, `ink`, `lemon`), nhanh và dừng khựng, như kéo khung trong phần mềm dàn trang.
- **Lưới chớp:** khi slide vào, lưới đậm lên một nhịp rồi lùi về 40% (lớp lưới cố định đổi độ mờ theo `data-scene`).
- **Mảng nở từ cạnh ô:** mảng mới mở ra theo một chiều (`wipe` hoặc `rise-wipe`), không mờ dần.
- **Ô mã ghép pixel:** 25 ô của mã 5 x 5 hiện lần lượt (`pop` với `data-stagger="30"`).
- **Chanh chốt:** mảng chanh vào cuối cùng, như dán nhãn kết luận.
- Nhịp: cắt gọn (`data-transition="cut"` khi đổi chương), không nảy, không trôi.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** mảng giấy lớn bên trái mang tên deck, cột phải xếp mực, giấy, chanh chồng lên nhau; dấu 2 x 2 ở góc.
- **Mở chương:** mảng chanh chiếm nửa trang mang số chương khổng lồ, mực và giấy dồn sang phải.
- **So sánh ba phương án:** ba mảng giấy, chanh, mực đứng cạnh nhau, mỗi mảng một con số; phương án thắng nằm trên chanh.
- **Kết:** các mảng gom lại thành một trang chanh lớn bên trái, chữ đen 180px.

## Nên tránh
Bo góc, bóng đổ, gradient, màu thứ tư, phần tử lệch khỏi lưới, xoay nghiêng, nhiều mảng chanh trên một slide.

## Họ hàng
`raw-grid` (cũng thô mộc nhưng viền 3px và bóng cứng, màu hồng và xanh lá phấn), `bento-light` (ô bo tròn mềm, sạch kiểu app), `swiss-modern` (lưới Thụy Sĩ tối giản, ít mảng màu hơn).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
