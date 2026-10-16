# Pixel RPG (màn hình game nhập vai 16-bit)

> Cả deck là một chuyến phiêu lưu trên bản đồ ô gạch: hộp thoại viền vát, thanh HP, rương báu, và một người hùng áo xanh khăn đỏ đi qua từng màn.

**Hợp:** trailer game, tổng kết hành trình, đào tạo theo cấp độ, lộ trình học, gamification, nội dung hoài niệm 16-bit.
**Không hợp:** báo cáo trang trọng, thương hiệu cao cấp, chủ đề cần ảnh thật hay cảm xúc tinh tế.
**Cảm xúc:** hoài niệm, phiêu lưu, pixel, game nhập vai.

## Hình dung
Người xem đang cầm tay cầm chơi game: bản đồ cỏ xanh cuộn từng ô, con đường cát làm trục thời gian, lâu đài đá ở cuối đường. Chữ nằm trong cửa sổ hộp thoại xanh viền vát, tiêu đề đứng trên bản đồ với bóng cứng. Mỗi slide là một "màn" hoặc một khoảnh khắc trong game: đi tới, gặp quái, mở rương, chọn lệnh.

## Bảng màu
```css
--bg: #1f5a44;      /* bản đồ cỏ tối */
--fg: #f4f4f4;      /* chữ */
--accent: #ffcd75;  /* vàng: điểm sáng, con trỏ, vật phẩm */
--muted: #c9d6f0;
--card-bg: #29366f; /* cửa sổ hộp thoại */
--ink: #1a1c2c;     /* mực: viền một ô quanh mọi vật */
--sil: #94b0c2;     /* viền sáng cửa sổ */
--dk: #1b2350;      /* viền tối cửa sổ */
/* bảng chỉ số (khoảng 20 màu): cỏ #38b764 #a7f070 #1f7a46 #257179; đường #f2c27a mép #c98f4e;
   đá #7d93a8; gỗ #8b5a2f; cam #ef7d57; đỏ #b13e53; xanh #3b5dc9 #41a6f6; cyan #73eff7;
   tím #5d275d; cửa sổ tím #3a2a5e; ô HP rỗng #333c57 */
```
Cảnh bên trong cửa sổ sáng và tươi (cỏ, đường cát), khung giao diện bên ngoài tối. Vàng là màu nhấn: con trỏ, đồng xu, vật phẩm quý. Không chuyển màu giữa hai ô.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
```
- Một font duy nhất: VT323 cho tiêu đề, thân, số. Có tiếng Việt (đã kiểm, có khối vietnamese).
- Dùng cỡ lớn hơn bình thường cho mọi chữ (nhãn trong hình 32 đến 40px theo bản gốc) vì nét pixel mảnh; dấu tiếng Việt ở cỡ nhỏ dễ dính, nên chạy thử.
- Tiêu đề IN HOA, giãn 0,03em, bóng cứng một bậc. Tên mục IN HOA, ghi chú chữ thường.

## Bề mặt
Bản đồ ô 8px: cỏ xanh tối với vài ô cỏ sáng rải đều, mép slide có thể là sàn đá lâu đài. Mọi thứ khớp lưới, bật `image-rendering: pixelated` và `shape-rendering="crispEdges"` cho SVG.
```css
background: conic-gradient(#1f5a44 25%, #1f7a46 0 50%, #1f5a44 0 75%, #1f7a46 0) 0 0 / 16px 16px;
```

## Ngôn ngữ minh họa
- **Mọi thứ trên lưới pixel:** tọa độ, kích thước là bội của 4; không đường cong thật, không nét mảnh hơn một ô, xoay chỉ theo bội 90 độ. Vòng tròn là đĩa pixel ghép từng hàng.
- **Cửa sổ vát:** viền mực ngoài, vạch sáng trên và trái, vạch tối dưới và phải, ruột phẳng.
- **Sprite 16 x 16** viết bằng lưới chữ, vẽ 5 đến 6px một ô. Ba nhân vật lặp lại: người hùng (áo xanh, khăn đỏ), rương, quái nhầy xanh lá.
- Hình mẫu: thanh HP từng ô, biển chỉ đường gỗ, hộp thoại có chân dung, cây hai đĩa xanh, lâu đài mái đỏ, dấu "!" vàng trên đầu quái.
- Mỗi hình chọn đúng một hệ thống game (bản đồ, bảng lệnh, túi đồ, thanh trạng thái hoặc hộp thoại), không trộn ba thứ trong một khung.

## Chữ ký chuyển động
- **Chữ hộp thoại gõ từng ký tự:** dòng thoại hiện như máy chữ (`wipe` chia bậc bằng `steps()`, hoặc hiện từng từ với `data-stagger`), xong thì mũi tên ▼ vàng nhấp nháy (`data-loop="blink"`) chờ cú bấm.
- **Bản đồ cuộn theo nguyên ô:** lớp bản đồ cố định xuyên deck (`data-scene`), chuyển slide thì trượt đúng bội số 16px, theo bậc chứ không mượt.
- **Người hùng bước hai khung:** sprite đi dọc con đường bằng chuyển động có bậc, đổi qua lại hai khung chân; đến trạm thì dừng hẳn.
- **Mở rương:** rương `pop`, nắp bật, vật phẩm `rise` lên trên đầu người hùng kèm nhãn tên vật.
- **Thanh HP nạp từng ô:** các ô xanh hiện lần lượt (`fade` + `data-stagger="80"`), hợp tiến độ, cấp độ.
- **Chuyển màn:** sang chương mới bằng `data-transition="cut"` qua một màn đen ngắn, như vào bản đồ mới.
- Nhịp: theo bậc, giật đều kiểu 16-bit; không easing mềm, không mờ.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** bản đồ cuộn vào, người hùng bước tới giữa, hộp thoại gõ tên deck, ▼ nhấp nháy "nhấn để bắt đầu".
- **Lộ trình:** con đường cát với các biển chỉ đường, mỗi biển một chặng, người hùng đi tới chặng hiện tại.
- **Bài học, kỹ năng mới:** mở rương, vật phẩm bay lên với nhãn "NHẬN ĐƯỢC: ...".
- **Kết:** cổng lâu đài mở, thanh HP đầy, hộp thoại "HOÀN THÀNH NHIỆM VỤ".

## Nên tránh
Làm mờ, gradient mịn, bóng mờ, 3D, hiệu ứng CRT hay đường quét; pha pixel nhiều cỡ trong một hình; ảnh bitmap nhúng; tên, nhân vật, khung giao diện, nhạc của game có thật; số HP, số điểm bịa; câu dài trong hình.

## Họ hàng
`hd-2d` (cũng là sprite pixel, nhưng đứng trong diorama có ánh sáng và sương, chậm và huyền ảo hơn), `8-bit-orbit` (arcade neon nền tối, năng lượng hơn, không có hộp thoại nhập vai), `retro-windows` (cũng VT323 và hoài cổ, nhưng là cửa sổ máy tính cũ chứ không phải game).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
