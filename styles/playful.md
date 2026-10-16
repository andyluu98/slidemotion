# Playful (sổ phác thảo của studio nhỏ)

> Nền đất sét màu đào, mực than là màu duy nhất. Một tấm thẻ viền tay với đường viền kép lệch, một khối mực tròn méo, và những nét vẽ nguệch ngoạc 2px rải ở góc trang.

**Hợp:** ra mắt sản phẩm nhỏ, cộng đồng, giới thiệu sáng tạo, studio indie, workshop, thương hiệu thủ công, kể chuyện người sáng lập.
**Không hợp:** báo cáo trang trọng, tài chính, y tế, chính sách, nội dung cần độ chính xác cao.
**Cảm xúc:** ấm áp, thân thiện, thủ công, indie.

## Hình dung
Người xem đang lật cuốn sổ phác thảo trên bàn của một studio nhỏ: giấy màu đào, bút lông than, những cái hộp vẽ hơi nghiêng, ngôi sao có tia lóe, mũi tên cong vội. Không có gì thẳng tắp tuyệt đối; mọi thứ được đặt bằng tay, xoay lệch vài độ. Cảm giác là có một con người thật đứng sau deck này.

## Bảng màu
```css
--peach: #f0c8a0;   /* nền đất sét đào */
--light: #f7dec6;   /* mặt thẻ */
--alt: #e8b88e;     /* đào sẫm cho mảng phụ */
--ink: #1a1a1a;     /* mực than: chữ, nét, khối */
--muted: #4a3a2e;   /* chữ phụ nâu than */
```
Luật màu: chỉ có mực than trên các tông đào. Nhấn bằng cách đảo màu (khối mực đặc, chữ đào bên trong), không thêm màu mới. Trang trích lời có thể lật ngược hẳn: nền mực, nét đào.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600..800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Bricolage Grotesque 800, giãn âm (-0,025em), số chương xoay -2 độ.
- Thân: Space Grotesk 400 đến 500.
- Nhãn: Space Grotesk 600 IN HOA giãn 0,15em, trong khối mực chữ đào.
- Bản gốc dùng Syne (không có tiếng Việt); SlideFly đổi sang Bricolage Grotesque 800.

## Bề mặt
Nền đào phẳng. Một khối mực mờ 8% hình méo nằm ở góc như vết tay lem. Không lưới, không hạt.
```css
border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;  /* dáng hữu cơ cho khối mờ */
```

## Ngôn ngữ minh họa
- **Thẻ viền tay:** nền `--light`, viền 3px, thêm một viền 2,5px thứ hai lệch 9px xuống phải như vẽ hai lần.
- **Khối mực** bo góc bất đối xứng (`60% 40% 30% 70% / 60% 30% 70% 40%`), có thể lớn dần thành một mảng.
- **Viên sỏi:** khung viền 3px bo kiểu `255px 15px 225px 15px / 15px 225px 15px 255px`, như hộp vẽ tay.
- **Ba nét nguệch ngoạc 2 đến 3px:** dòng sóng, ngôi sao có ba tia lóe, mũi tên cong đầu mở.
- **Vòng tròn viền 3px** làm điểm nhấn nhỏ.
- Mọi hình đặt nghiêng 2 đến 12 độ, không cái nào song song tuyệt đối với cái nào.

## Chữ ký chuyển động
- **Khối mực lớn dần:** cùng một khối mực đi xuyên deck (`data-morph="blob"`), góc nhỏ ở mục lục, phình thành khối lớn ở trang chương, tràn kín trang trích lời.
- **Thẻ được thả xuống bàn:** thẻ `drop` rồi xoay nắn lại góc nghiêng (bọc lớp ngoài để giữ góc xoay riêng).
- **Nguệch ngoạc tự vẽ:** dòng sóng, sao, mũi tên hiện bằng `draw` sau khi nội dung đã đứng yên.
- **Sao lấp lánh:** ngôi sao lắc nhẹ (`sway`), ba tia lóe `blink` chậm.
- **Viền thứ hai trượt vào chỗ lệch:** viền kép của thẻ hiện sau, trượt 9px vào vị trí như bản in thứ hai.
- Nhịp: tưng tửng, có nảy nhẹ, như đồ vật được đặt bằng tay.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** thẻ poster nghiêng 2 độ bên phải, trong đó viên sỏi ôm khối mực; sao ở góc trên, mũi tên cong chỉ vào tên dự án.
- **Mở chương:** khối mực phình to chiếm nửa phải trong viên sỏi, số chương đào xoay nghiêng.
- **Trích lời:** khối mực tràn kín trang, chữ và nét nguệch ngoạc đổi sang màu đào.
- **Kết:** tấm thẻ lớn xoay nghiêng, sao, vòng tròn và mũi tên ghim vào bốn góc.

## Nên tránh
Màu thứ hai, gradient, bóng mềm kiểu app, đường thẳng tắp như máy, icon phẳng nhiều màu, bố cục đối xứng hoàn hảo.

## Họ hàng
`scatterbrain` (bừa có chủ ý, nhiều màu và chữ Lobster), `risograph` (indie, rực rỡ, in lệch nhiều màu), `split-pastel` (vui tươi nhưng gọn, mảng pastel chia đôi).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
