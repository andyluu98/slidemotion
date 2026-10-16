# Hội An (phố cổ lúc chạng vạng)

> Một bức tường vàng, cánh cửa gỗ xanh ngọc, mái ngói âm dương và ba chiếc đèn lồng lụa đỏ: người xem được mời bước vào phố cổ.

**Hợp:** du lịch, ẩm thực, khách sạn, homestay, giới thiệu địa phương, sự kiện văn hóa ấm cúng.
**Không hợp:** công nghệ, số liệu kỹ thuật dày, chủ đề lạnh hoặc khẩn cấp.
**Cảm xúc:** ấm áp, hoài niệm, mến khách.

## Hình dung
Cả deck là một buổi dạo phố lúc trời vừa tắt nắng. Mỗi slide là một mặt tiền nhà cổ nhìn thẳng: tường vôi vàng loang nắng, cửa gỗ xanh lúc khép lúc mở, xà gỗ nâu chạy ngang, dải ngói vảy cá trên cùng. Đèn lồng treo trên sợi dây dài từ mép trên xuống, mỗi slide treo ở độ cao khác. Người xem thấy mình là khách, được đón vào từng gian.

## Bảng màu
```css
--pale: #F4E3B0;     /* vôi nhạt, nền sân khấu */
--yellow: #E8B647;   /* tường vàng, tấm nền lớn */
--jade: #3F8B7E;     /* cửa gỗ xanh ngọc */
--jade-d: #2E6B60;   /* khung cửa, nan cửa */
--red: #C0392B;      /* lụa đèn lồng */
--red-l: #E2563F;    /* quầng sáng đèn */
--wood: #5C3A21;     /* xà gỗ, ngói, dây treo */
--ink: #3A2412;      /* chữ chính */
--muted: #6A4A2C;    /* chữ phụ */
--accent: #A5301F;   /* chữ nhấn, đường gạch câu chốt */
```
- Đỏ thuộc về đèn lồng. Chữ nhấn dùng đỏ sẫm `#A5301F` để đọc rõ trên vàng; đừng tô đỏ cả mảng lớn.
- Xanh ngọc chỉ cho cửa và các vật bằng gỗ sơn, giữ cho nó là "cánh cửa" trong mắt người xem.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Fraunces 600 (có tiếng Việt), `opsz` 96 cho dáng chữ to mềm, giãn âm nhẹ -0,01em, như chữ trên biển hiệu sơn tay.
- Thân: Be Vietnam Pro 400 đến 500.
- Nhãn nhỏ: Be Vietnam Pro 600 IN HOA, giãn 0,24em.

## Bề mặt
Nền vôi nhạt phẳng. Tường vàng có hai vệt loang: sáng ở góc trên trái như nắng chiều, sẫm nâu ở góc dưới phải như rêu ẩm. Cửa có nan ngang đều và đường giữa hai cánh. Ngói là dải lặp hình vòm âm dương màu gỗ.
```css
background-color: #E8B647;
background-image: radial-gradient(ellipse at 30% 20%, rgba(255,236,170,.55), transparent 60%),
  radial-gradient(ellipse at 80% 90%, rgba(176,120,40,.22), transparent 55%);
```

## Ngôn ngữ minh họa
- **Kiến trúc mặt tiền nhìn thẳng:** tường, cửa, xà, mái; không phối cảnh xiên.
- **Đèn lồng:** thân bầu đỏ có sọc nan mờ, nắp gỗ trên dưới, tua đỏ, dây treo mảnh; quầng sáng ấm bao quanh.
- Hình mẫu lặp lại: ngói âm dương, nan cửa, lá thư pháp nhỏ, chiếc thuyền gỗ, bánh mì, cao lầu, chùa Cầu vẽ dạng phẳng như bưu thiếp.
- Đồ vật mang thông tin (bảng giá, lộ trình) đặt lên tường vàng như tấm biển gỗ treo.

## Chữ ký chuyển động
- **Cửa mở đón khách:** cánh cửa xanh thu hẹp hoặc mở rộng giữa các slide (`data-morph="cua"`), mở rộng khi vào chương mới, khép thành nan mỏng khi cần chỗ cho chữ.
- **Đèn lồng đổi độ cao:** ba đèn hạ xuống chỗ mới sau mỗi lần chuyển (`drop` trễ dần 120ms), rồi đung đưa lệch pha nhau (`data-loop="sway"` trên lớp con).
- **Đèn lên dần:** quầng sáng quanh đèn `pulse` thật chậm, như ngọn nến bên trong.
- **Tường vàng trượt** thành tấm biển dưới nội dung (`data-morph="tuong"`), mềm và êm.
- **Phố lên đèn:** ở slide kết, đèn hiện thêm và phóng to (`zoom`), cả mặt tiền phủ vàng.
- Nhịp: thong thả, ấm, như bước chân dạo phố.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tường vàng giữ tên bài bên trái, cửa đóng bên phải, ba đèn treo phía trên cửa.
- **Thực đơn hay lộ trình:** các món, các điểm dừng là tấm biển gỗ treo dọc xà, đèn lần lượt sáng lên ở từng điểm.
- **Câu trích:** cửa mở rộng bên trái, đèn hạ thấp phía trước, câu nói nằm trên tường vàng.
- **Kết:** cả phố lên đèn, lời cảm ơn giữa hai chùm đèn lồng.

## Nên tránh
Màu lạnh hiện đại, neon, kính mờ, icon phẳng công nghệ, nhiều hơn ba đèn trong một khung (rối), đèn đè lên chữ, chữ đỏ tươi trên nền vàng.

## Họ hàng
`den-long-giay` (đêm lễ hội nền tối, đèn là nguồn sáng chính), `silkscreen-poster` (poster du lịch in lụa, phẳng và đồ họa hơn), `urban-sketch` (ký họa phố phường bằng nét bút, phóng khoáng hơn).

*Style gốc của SlideFly.*
