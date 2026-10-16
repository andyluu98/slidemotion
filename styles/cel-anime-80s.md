# Anime 80s (cel anime thành phố đêm, phát lại trên băng video)

> Nền phun sơn hoàng hôn, mặt trời vằn, thành phố đêm; phía trước là cel màu phẳng hai tông và ánh neon xuyên qua. Chuyển động là ánh sáng quét, không phải vẽ lại.

**Hợp:** deck hoài niệm, trailer, MV, giới thiệu sản phẩm công nghệ phong cách retro, sự kiện âm nhạc, đêm tiệc công ty.
**Không hợp:** tài liệu in, báo cáo nghiêm túc, văn hóa truyền thống, nội dung trẻ nhỏ.
**Cảm xúc:** hoài niệm, neon, hoàng hôn, thành phố đêm.

## Hình dung
Một cảnh OVA cuối thập niên 80 phát lại từ băng VHS: trời chàm chuyển tím mận, mặt trời sọc ngang chìm sau hai lớp đường chân trời, mây có bụng sáng, đường ướt phản chiếu biển neon. Đồ vật thời đó là nhân vật: tivi CRT, băng VHS, cassette, bộ đèn equalizer, biển neon, vệt đèn xe. Không có người.

## Bảng màu
```css
--bg: #1a0d40;      /* chàm đêm */
--ink: #1d0f3d;     /* viền vật thể: không bao giờ đen tuyền */
--fg: #fff0d9;      /* kem: chữ, giấy */
--muted: #d8c6f0;
--pink: #ff4fa3;    /* neon hồng */
--cyan: #5ee7ff;    /* neon cyan: viền sáng, UI */
--gold: #ffc857;    /* vàng: màu nhấn, mặt trời */
--accent-2: #ff7ab8;
--card-bg: rgba(18,7,48,.78);
/* trong hình: thân tivi #5a3a9c bóng #3b2575, màn hình #13093a, tím #7a3fd1,
   menu rgba(12,5,40,.8) viền cyan; cel trong suốt hồng, cyan, vàng mờ 0,14 đến 0,18 */
```
Ba màu neon: hồng, cyan, vàng. Không thêm màu neon thứ tư (ngoại lệ: đèn báo đỏ cho slide "quá tải"). Mỗi hình đúng hai tông: mảng sáng và một mảng bóng cứng.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@1,600;1,700;1,800&family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Barlow Condensed nghiêng 800, giãn 0,01em, như chữ tựa phim chạy ngang. Có tiếng Việt (đã kiểm).
- Thân: Barlow 400 đến 600. Có tiếng Việt.
- Nhãn OSD đầu băng trong hình: Barlow Condensed nghiêng 700, kem hoặc cyan, 26 đến 40px.

## Bề mặt
Tấm nền vẽ tay: gradient phun sơn từ chàm sâu sang tím mận, vài ngôi sao, quầng sáng chân trời. Thành phố hai lớp và đường ướt nằm ở đáy.
```css
background: radial-gradient(70% 45% at 50% 85%, rgba(255,79,163,.28), transparent 70%),
            linear-gradient(#1a0d40, #1d0f3d 55%, #5a3a9c);
```

## Ngôn ngữ minh họa
- **Cel hai tông:** tô màu chính, thêm một mảng bóng cứng đậm hơn một bậc ở phía xa nguồn sáng, rồi một nét sáng mảnh ở mép gần nguồn sáng. Không bóng mềm, không gradient trong hình.
- **Viền có màu:** vật thể viền `--ink`, nét neon viền hồng, cyan hoặc vàng. Vật cứng (tivi, cassette) được viền mực đậm.
- **Ánh sáng sau lưng:** nét sáng đậm chồng lên nét to hơn cùng màu mờ 0,2 đến 0,3; không `filter`.
- Hình mẫu: tivi CRT có râu ăng ten bi vàng, băng cassette nghiêng -13 độ, ba tấm cel trong suốt xếp chéo (multiplane), menu OSD (`MENU`, `CH 04`, dòng chọn nền hồng), trạm neon cho mốc thời gian, bộ LED equalizer cho số liệu, sao lóe bốn cánh.
- Chọn vật theo ý: màn hình là "hiển thị", băng là "lưu, quay lại", equalizer là "mức độ", biển neon là "địa điểm", vệt đèn xe là "tiến độ".

## Chữ ký chuyển động
- **Dải sáng quét qua:** một vệt sáng chéo lướt ngang hình đang đứng yên (`data-loop="scan"` hoặc một lần `wipe` của lớp sáng), hình không vẽ lại. Đây là động tác gốc.
- **Neon bật chập chờn:** biển neon và trạm neon hiện bằng vài nhịp `blink` ngắn rồi sáng hẳn, như bóng đèn khởi động.
- **Lóe ống kính:** khi chốt ý chính, một vệt lóe ngang kèm sao bốn cánh `pop` rồi tắt (`fade`).
- **Thành phố trôi:** hai lớp skyline là lớp cố định xuyên deck (`data-scene`), chuyển slide thì lớp gần trượt xa hơn lớp xa, như máy quay đặt trên xe chạy đêm.
- **OSD hiện tức thì:** menu và nhãn đầu băng xuất hiện không chuyển tiếp (`data-transition="cut"` hoặc hiện ngay không anim), dòng chọn nhảy từng dòng theo cú bấm.
- **Equalizer nảy:** các cột LED dâng lên (`rise-wipe` + `data-stagger`), chiều cao cột chỉ là ký hiệu hoặc số có nguồn.
- Nhịp: nền chậm và điện ảnh, giao diện tức thì; tương phản giữa hai nhịp tạo chất băng video.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** mặt trời vằn chìm dần, thành phố trôi ngang, chữ tựa nghiêng hiện bằng dải sáng quét; một biển neon bật chập chờn.
- **Mục lục:** tivi CRT chiếu menu OSD, mỗi cú bấm con trỏ nhảy xuống một dòng.
- **Ba lớp của một hệ thống:** ba tấm cel trong suốt trượt chồng chéo lên nhau, mỗi tấm một bóng số hồng.
- **Kết:** đường ướt phản chiếu lời cảm ơn bằng neon, lóe ống kính cuối cùng, dòng `▶ PLAY` trên OSD.

## Nên tránh
Nhân vật, xe, mecha, địa danh, tên, logo của phim có thật; nhân vật mắt to kiểu hiện đại; nét đen tuyền đều tăm tắp; gradient trong hình, `filter` blur, `mix-blend-mode`; gate weave hay xước phim (đây là băng video, không phải phim nhựa); màu neon thứ tư; hình quá đông; số liệu bịa.

## Họ hàng
`neon-cyber` (công nghệ tương lai, neon lạnh, không hoài niệm và không có nền vẽ tay), `8-bit-orbit` (hoài cổ arcade neon, pixel chứ không phải cel), `aurora` (nền tối mơ màng bằng dải sáng mềm, hiện đại hơn, không có đồ vật thập niên 80).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
