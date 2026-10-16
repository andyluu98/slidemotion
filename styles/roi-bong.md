# Múa rối bóng (con rối da chạm thủng trên màn vải đèn dầu)

> Một tấm màn vải sáng cam, đèn dầu đặt sau: rối da gần như đen, ánh đèn xuyên qua từng lỗ chạm, mọi cử động chỉ là xoay quanh đinh khớp.

**Hợp:** thần thoại, di sản, lễ hội, kể chuyện văn hóa, bảo tàng, giáo dục lịch sử.
**Không hợp:** công nghệ hiện đại, số liệu kỹ thuật dày, sản phẩm trẻ trung bóng bẩy.
**Cảm xúc:** ấm áp, di sản, thủ công, kịch rối.

## Hình dung
Người xem ngồi trước sân khấu rối: màn vải cotton sáng cam, giữa màn là điểm nóng của ngọn đèn dầu, mép màn tối dần thành nâu. Khung gỗ sơn ôm quanh sân khấu. Các con rối (tướng cổ trang, hạc, mây, đình, thông) là da thuộc chạm thủng, gắn khớp bằng đinh tán, có que điều khiển chìa xuống mép dưới. Mỗi slide là một màn diễn ngắn.

## Bảng màu
```css
--bg: #f0a850;         /* màn vải sáng cam */
--ink: #26110a;        /* da đen: bóng, viền, khớp, chữ */
--ink-soft: #4a2410;   /* da mỏng hơn, chữ phụ */
--wood: #3a1608;       /* khung sân khấu gỗ */
--vermilion: #8a2410;  /* màu nhấn: điểm chốt, nhãn quan trọng */
--gold: #ffc268;       /* ánh đèn */
--cream: #ffe9b8;      /* chữ trên nền da tối */
/* thuốc nhuộm trong hình: son #c4341a, vàng nghệ #e0a52a, mặt vải sáng #ffe9a8 */
```
Màu là thuốc nhuộm trong suốt: chỉ vài mảng nhỏ (tay áo, lông chim, mái ngói, mặt trời) nhuộm son hoặc vàng nghệ, chồng lớp bằng `fill-opacity`. Mọi đường nét và khớp là da đen.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,600;0,700;0,800;1,600&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Alegreya 800, màu da đen trên màn cam. Có tiếng Việt (đã kiểm).
- Thân: Be Vietnam Pro 400 đến 500. Thẻ nội dung là tấm da tối, chữ kem.
- Nhãn trong hình: Be Vietnam Pro 700, IN HOA, giãn 0,12em; số trong đồng tiền dùng Alegreya 800.

## Bề mặt
Màn vải có thớ dệt mịn (lưới 10px mờ 7%), điểm nóng đèn dầu ở giữa và viền tối nâu ở mép. Khung gỗ dày 72 đến 80px luôn nằm trên cùng.
```css
/* điểm nóng đèn dầu, lấy theo actor "lamp" của bản gốc */
background: radial-gradient(55% 60% at 50% 38%, rgba(255,236,178,.95) 0%, rgba(255,214,128,.55) 30%, rgba(255,190,90,0) 68%), #f0a850;
```

## Ngôn ngữ minh họa
- **Lỗ là lỗ thật:** mỗi mảnh da là một `<path fill-rule="evenodd">` gộp viền ngoài và các lỗ, để màn vải lộ ra. Không giả lỗ bằng ô màu sáng.
- Hoa văn chạm: vảy giáp trăng khuyết so le, lưới thoi, đồng tiền lỗ vuông, xoắn mây hai vòng, lá nhọn trong tán thông, khe mảnh.
- **Đinh khớp** (vòng da, vòng sáng, nút tối) ở mọi chỗ nối; **que điều khiển** là nét thẳng 4px đi từ tay hoặc cổ xuống mép dưới, có tay cầm ngang.
- **Biển da** kể chuyện: tấm chữ nhật da đen, chữ là các khe cắt, treo bằng hai sợi dây. Số khe bằng số ý.
- Mảnh da chỉ xoay, trượt hoặc thay thế, không uốn cong, không bóp méo. Không gradient, không bóng đổ, không 3D.

## Chữ ký chuyển động
- **Xoay quanh đinh khớp:** tay rối, cánh hạc, nắp biển xoay một góc dứt khoát quanh tâm đinh (đặt `transform-origin` đúng tâm khớp), tư thế cũ để lại bóng nét đứt `9 8`.
- **Trượt theo que:** con rối vào sân khấu từ hai bên (`left` / `right`), thân giữ thẳng, que trượt theo; không bay, không xoay tự do.
- **Bóng áp sát màn:** hình chính hiện bằng `blur` từ nhòe sang nét, như người nghệ nhân đưa con rối từ gần đèn lại sát màn vải.
- **Đèn dầu chập chờn:** quầng sáng nền `data-loop="pulse"` rất nhẹ, chậm; đây là thứ lặp duy nhất trên slide.
- **Thuốc nhuộm ngấm dần:** mảng son hoặc vàng nghệ hiện từng lớp (`fade` + `data-stagger`), mỗi lớp đậm thêm.
- **Hạ màn, đổi cảnh:** sang chương mới bằng `data-transition="wipe"` như kéo tấm da che đèn; khung gỗ đứng yên.
- Nhịp: từng cử động rời, có quãng nghỉ giữa các động tác, như người điều khiển đổi tay cầm.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** mặt trời nhuộm vàng nghệ sau lưng, rối tướng trượt vào từ phải, hạc bay ngang và thả xuống một biển da mang tên deck.
- **Giải thích khái niệm:** cánh tay rối xoay qua ba tư thế, mỗi tư thế gắn một đồng tiền số chỉ một ý.
- **Dòng thời gian:** dải đồng tiền làm trục, mỗi trạm một đĩa son đậm dần, cung mực nối các trạm.
- **Kết:** đèn dầu tắt dần, chỉ còn bóng đình và cây thông trên màn, lời cảm ơn khắc trên biển da.

## Nên tránh
Màu ngoài bảng (xanh lam, tím, hồng), gradient, bóng mờ, glow, ánh kim, cảnh nhìn xa gần; lỗ vẽ giả bằng ô sáng; uốn cong mảnh da; chép con rối, kịch bản hay nhân vật có thật; chữ Hán hay chữ giả làm họa tiết; số liệu bịa trong hình.

## Họ hàng
`son-mai` (vàng lá trên sơn then đen, ánh phản chiếu chứ không xuyên qua), `cat-giay-do` (giấy đỏ cắt trên nền kem, phẳng, không có đèn sau), `den-long-giay` (cũng là ánh sáng qua lỗ cắt, nhưng là đèn giấy ấm giữa đêm xanh, không có khớp và que).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
