# Block Frame (khối viền đen kiểu neobrutalism)

> Viền đen 4px, bóng đổ cứng 8px, góc vuông, và nền đổi màu kẹo mỗi slide. Mọi thứ to, thẳng thắn, như dán bằng tay lên bảng.

**Hợp:** ra mắt sản phẩm, agency, review sáng tạo, đổi thương hiệu, startup trẻ, nội dung mạng xã hội.
**Không hợp:** ngân hàng truyền thống, y tế, lễ nghi trang trọng, nội dung buồn.
**Cảm xúc:** táo bạo, vui nhộn, pop, tươi.

## Hình dung
Như một bảng ý tưởng của studio thiết kế trẻ: thẻ giấy trắng viền đen dày dán chồng lên các khối màu kẹo, mỗi thẻ đổ bóng đen đặc lệch xuống góc phải như được cắt từ bìa cứng. Sticker ngôi sao, nhãn chéo, dải sọc chéo kiểu băng công trường. Mỗi slide một màu nền khác (kem, xanh nhạt, xanh lá, vàng, hồng), và slide cuối đảo sang nền đen. Người xem cảm thấy tự tin và được mời tham gia, không bị lên lớp.

## Bảng màu
```css
--bg: #FFFDF5;        /* nền kem mặc định */
--fg: #000000;        /* chữ, viền, bóng: màu đen duy nhất */
--pink: #FE90E8;      /* hồng kẹo */
--blue: #C0F7FE;      /* xanh nhạt */
--green: #99E885;     /* xanh lá */
--yellow: #F7CB46;    /* vàng */
--cream: #FFDC8B;     /* kem đậm */
--sh: 8px 8px 0 #000; /* bóng đổ cứng chuẩn */
```
Luật màu nhấn: màu kẹo làm NỀN cả slide hoặc làm mặt khối, đen làm mọi đường viền và bóng. Mỗi slide một màu nền, đổi theo vai trò (mục lục xanh nhạt, chương xanh lá, hai cột vàng, số liệu hồng, kết đen). Không trộn hai màu kẹo cạnh nhau mà thiếu viền đen ngăn cách.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Inter 900, IN HOA, giãn -0,025em, đặc và chắc.
- Thân: Inter 500 đến 700.
- Nhãn, sticker, số thứ tự: Space Grotesk 600 đến 700.
- Đã kiểm: cả hai font có bộ chữ tiếng Việt. Chữ IN HOA có dấu cần chừa khoảng dòng đủ cho dấu mũ và dấu nặng.

## Bề mặt
Nền màu phẳng, phủ lưới chấm đen rất mờ (chấm 1,6px, ô 28px), như giấy chấm của sổ thiết kế.
```css
background-image: radial-gradient(circle, rgba(0,0,0,.22) 1.6px, transparent 2.2px);
background-size: 28px 28px;
```

## Ngôn ngữ minh họa
- **Thẻ trắng** viền đen 4px, bóng 8px; **khối màu** cùng kiểu, nằm lệch phía sau thẻ.
- **Dải sọc chéo** 45 độ đen xen màu, dùng làm trục thời gian hoặc vạch cảnh báo.
- **Ngôi sao 5 cánh** viền đen lõi màu, như sticker; **chấm tròn** viền đen 3px.
- **Nhãn nghiêng** (sticker chéo vài độ) cho chữ "MỚI", "HOT", số phiên bản.
- **Thanh đen** đặc làm gạch chân tiêu đề hoặc dải chốt ý.
- Icon nét đen dày, hình đơn giản, không gradient.

## Chữ ký chuyển động
- **Đập xuống bàn:** thẻ `drop` có nảy rõ, bóng đổ hiện sau cùng như thẻ vừa chạm mặt bàn.
- **Nhấn nút:** khi chốt ý, thẻ dịch xuống phải đúng 8px và bóng biến mất (trạng thái "được bấm"), rồi bật lại.
- **Sticker đập:** ngôi sao hoặc nhãn chéo `stamp` vào góc thẻ, hơi xoay.
- **Nền đổi màu cắt gọn:** sang slide là đổi màu nền ngay (`data-transition="cut"`), không hòa dần.
- **Sọc chạy:** dải sọc chéo trượt ngang liên tục rất chậm như băng chuyền (`scan`).
- Nhịp: nhanh, nảy, có tiếng "cộp"; mọi chuyển động dừng hẳn, không trôi.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** thẻ trắng lớn giữ tên deck IN HOA, chồng sticker màu kẹo lệch bên phải, một ngôi sao đóng góc.
- **Sang chương:** nền xanh lá, số chương khổng lồ trong thẻ viền đen, khối vàng và ngôi sao bên phải.
- **Mốc thời gian:** dải sọc chéo làm trục, mỗi mốc là một thẻ nhỏ đập xuống, ngôi sao ở cuối trục.
- **Kết:** nền đen, khung trắng đảo màu với bóng vàng, lời kêu gọi chữ trắng.

## Nên tránh
Bóng mờ, bo góc, gradient, viền mảnh hoặc xám, chữ mảnh, nhiều màu kẹo trên một slide không có viền đen ngăn, hiệu ứng mờ dần chậm.

## Họ hàng
`neo-grid-bold` (cũng tự tin, mạnh nhưng là lưới biên tập, ít đồ chơi), `raw-grid` (thô mộc dứt khoát, ít màu kẹo), `game-show` (màu kẹo sôi động nhưng là sân khấu truyền hình bóng bẩy).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
