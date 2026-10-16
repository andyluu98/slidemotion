# Sakura Chroma (vỏ băng cassette Nhật cổ)

> Bìa băng cassette Nhật thập niên tám mươi: giấy kem chấm hạt, mực nâu ấm, chữ cao hẹp đậm, dải cầu vồng năm màu chạy chéo, chùm cánh hoa tròn và con dấu răng cưa.

**Hợp:** ra mắt sản phẩm sáng tạo, nhãn nhạc, album, tạp chí, workshop trẻ trung, sự kiện văn hóa pop, thương hiệu hoài cổ vui.
**Không hợp:** báo cáo tài chính nghiêm, chính sách, y tế, nội dung buồn hoặc trang nghiêm.
**Cảm xúc:** hoài cổ, vui tươi, ấm áp, rực màu.

## Hình dung
Người xem cầm trên tay một vỏ băng cassette mua ở Tokyo năm 1984: giấy in đã ngả kem, chữ tên album cao vút, năm dải màu song song cắt chéo bìa, chùm hoa năm cánh tròn ở góc, con dấu 32 răng in chữ cái. Mỗi slide là một mặt của bìa gấp: mặt trước, gáy, danh sách bài hát, lời cảm ơn.

## Bảng màu
```css
--paper: #F1E6CB;    /* giấy kem */
--paper-dk: #E5D6B0; /* giấy sẫm, mảng phụ */
--ink: #3A2516;      /* mực nâu ấm: chữ, viền, con dấu */
--muted: #6B5440;
--red: #E5392A;      /* đỏ: dấu, nhãn, điểm nhấn chữ */
/* năm dải cầu vồng, theo đúng thứ tự từ trên xuống */
--pink: #E54489; --orange: #F09131; --yellow: #F0BC2A; --green: #3D9F47; --blue: #3F8BC4;
```
Luật màu: năm màu cầu vồng chỉ đi cùng nhau như một bộ (dải, chùm hoa), không tách lẻ làm màu chữ. Chữ luôn là mực nâu; đỏ là điểm nhấn đơn lẻ duy nhất.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Be+Vietnam+Pro:wght@400;500;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Big Shoulders Display 900, cao hẹp, giãn âm (-0,02em), dòng sát (1,02).
- Thân: Be Vietnam Pro 400 đến 500.
- Nhãn, mã, số bài: JetBrains Mono IN HOA giãn 0,2em, như mã catalogue "SIDE A", "CAT-084".
- Bản gốc dùng Albert Sans (không có tiếng Việt); SlideFly đổi sang Be Vietnam Pro.

## Bề mặt
Giấy kem phủ chấm hạt nâu 4px như bản in offset cũ; mọi mảng màu (kể cả dải cầu vồng) cũng mang lớp chấm này để trông như in thật.
```css
background-image: radial-gradient(circle at 1px 1px, rgba(58,37,22,.09) 1px, transparent 1.6px);
background-size: 4px 4px;
```

## Ngôn ngữ minh họa
- **Dải cầu vồng:** năm băng hồng, cam, vàng, xanh lá, xanh dương, khe kem mảnh giữa các băng, đặt chéo -22 độ hoặc +22 độ, có thể dựng đứng làm vạch chia cột, nằm ngang làm trục thời gian, thu thành sọc chân trang.
- **Chùm cánh hoa:** năm vòng tròn đỏ, cam, xanh dương, xanh lá, vàng chồng nhau thành bông hoa.
- **Con dấu 32 răng** nền nâu, một chữ cái kem ở giữa.
- **Thẻ catalogue:** nền kem, viền 1,5px nâu, bóng cứng 8px nâu, dải đỏ trên đầu.
- **Một cánh hoa tròn** hồng đơn lẻ, lớn, cắt mép trang.
- Hình gợi ý: cuộn băng cassette, đĩa than, sóng âm, núi Phú Sĩ phẳng, mặt trời sọc. Vẽ phẳng, không bóng.

## Chữ ký chuyển động
- **Dải cầu vồng quét chéo:** dải lướt vào theo đường chéo từ góc dưới (`wipe` trên lớp đã xoay; bọc lớp ngoài để giữ góc -22 độ).
- **Dải đổi tư thế:** giữa các slide, cùng một dải xoay từ -22 sang +22 độ, dựng đứng thành vạch chia, nằm xuống thành trục (`data-morph="ribbons"` trên lớp bọc).
- **Cuộn băng quay:** hai bánh cuộn quay đều khi slide đang "phát" (`spin`, `data-loop-dur` khoảng 4000).
- **Hoa bung:** năm cánh `pop` lần lượt theo thứ tự cầu vồng (`data-stagger="90"`), con dấu răng cưa xoay chậm (`spin` rất chậm).
- **Dấu đỏ in xuống** (`stamp`) trên nhãn "MỚI" hoặc "SIDE B".
- Nhịp: vui, có nhịp như nhạc pop, nảy nhẹ ở cánh hoa, mượt ở dải màu.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** mảng giấy sẫm bên phải, dải cầu vồng quét lên từ đáy, con dấu cưỡi trên dải; tên dự án Big Shoulders 124px bên trái.
- **Danh sách bài (mục lục):** mỗi mục một số "A1, A2, B1" mono, dải cầu vồng ngắn ở góc.
- **Mặt A và mặt B (so sánh):** dải cầu vồng dựng đứng làm gáy chia đôi trang.
- **Kết:** mực nâu tràn trang, dải cầu vồng tràn ra từ góc, hai bánh cuộn băng dừng quay.

## Nên tránh
Tách năm màu ra dùng lẻ, gradient mượt, neon, bóng mềm, chữ cầu vồng, nền trắng tinh, font tròn trẻ con.

## Họ hàng
`silkscreen-poster` (poster in lụa phẳng ấm, cùng chữ Big Shoulders, thiên du lịch), `risograph` (indie rực rỡ, in lệch màu), `cel-anime-80s` (hoài niệm thập niên tám mươi nhưng nền tối, hoàng hôn neon).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
