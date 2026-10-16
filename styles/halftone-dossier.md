# Hồ sơ halftone (hồ sơ vụ án kiểu truyện tranh cũ)

> Cả deck là một tập hồ sơ in trên giấy kem: nét navy dày, chấm tram thay cho bóng, ảnh vật chứng dán băng keo, và một con dấu đỏ chờ phán quyết.

**Hợp:** kể chuyện vui, điều tra, thú cưng, nội dung mạng xã hội, khóa học nhập môn.
**Không hợp:** báo cáo tài chính trang trọng, tang lễ, thương hiệu cao cấp tối giản.
**Cảm xúc:** hài hước, truyện tranh, bí mật, vui nhộn.

## Hình dung
Người xem đang lật một bìa hồ sơ manila trên bàn thám tử. Khung thì nghiêm trang (số hồ sơ, "VẬT CHỨNG A", nhãn chip), nội dung thì nghịch: vật chính có mắt bóng, mũi tên hồng to, vệt tốc độ sau lưng vật đang chạy. Cảnh "bí mật" (chương mới, câu trích) đổi sang tấm đêm navy rắc chấm nhạt, chữ chuyển màu giấy.

## Bảng màu
```css
--paper: #f3e9cf;    /* giấy lưu trữ kem, nền */
--paper-2: #fffaf0;  /* giấy trắng của thẻ, ảnh vật chứng */
--manila: #e8d39b;   /* bìa hồ sơ */
--ink: #1b2144;      /* mực navy: mọi nét viền, chữ */
--muted: #454b78;
--cobalt: #2f5fd0;   /* mảng lớn, tram nền, vật chính thứ hai */
--pink: #ee4a86;     /* mũi tên, bóng lệch đăng của tiêu đề */
--yellow: #ffc82e;   /* nhãn dán, thẻ, huy hiệu số */
--red: #d6352c;      /* chỉ cho con dấu và trạm kết (phán quyết) */
```
Màu nhấn: đỏ để dành cho con dấu và điểm kết, không rải lên chỗ khác. Độ đậm nhạt làm bằng mật độ chấm tram, không bằng gradient. Cảnh đêm: nền navy, chữ `--paper`, nhấn `--yellow`.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Paytone+One&family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=JetBrains+Mono:wght@700;800&display=swap" rel="stylesheet">
```
- Tiêu đề: Alfa Slab One, kèm một bóng hồng lệch đăng vài px phía sau.
- Con số: Paytone One, tròn, đậm, như số in trên tem.
- Thân: Be Vietnam Pro 400 đến 600.
- Nhãn hồ sơ: JetBrains Mono 800 IN HOA ("HỒ SƠ 07", "VẬT CHỨNG A").
- Cả bốn font đều có bộ chữ tiếng Việt (đã kiểm Google Fonts ngày 16/10/2026).

## Bề mặt
Giấy lưu trữ có vân sợi, loang ố nhẹ ở hai góc, nếp gấp giữa tờ, mép tối hơn. Có thể dựng nhanh:
```css
background:
  linear-gradient(90deg, transparent 49.85%, rgba(110,80,40,.13) 50%, rgba(255,250,235,.35) 50.12%, transparent 50.3%),
  radial-gradient(ellipse at 50% 50%, rgba(130,90,40,0) 62%, rgba(130,90,40,.18) 100%),
  linear-gradient(180deg, #f6edd4, #efe3c6);
```
Đạo cụ trên bàn: bìa manila có tab, ảnh vật chứng dán nghiêng, băng keo vàng, kẹp giấy, thước đo chiều cao, hình nổ kiểu truyện tranh.

## Ngôn ngữ minh họa
- Viền navy dày 4 đến 7px, đầu nét tròn, tô phẳng.
- **Chấm tram:** chấm to dần là tối dần; hai lớp chấm khác góc (45 độ và 15 hoặc 75 độ) chồng nhau cho cảm giác in. Mỗi chấm là nét dài 0,1px đầu tròn, gom theo cỡ vào một `<path>`.
- **Bóng lệch đăng:** cùng hình tô navy mờ 28%, lệch (+6, +7)px, vẽ trước hình.
- **Mắt bóng** (elip trắng viền navy, đồng tử, hai điểm sáng) chỉ cho vật chính của bìa hoặc một vật nhân hóa có chủ đích.
- Hình mẫu: nhãn số vòng vàng, thẻ vật chứng vàng có tram ở góc, mũi tên hồng dày 11px, nhãn chip hình viên thuốc, ảnh dán nhỏ nghiêng 3 đến 7 độ, con dấu hai viền đỏ xoay 7 đến 12 độ, ba vệt tốc độ sau vật đang chạy.
- Tư thế cũ là cùng hình viền đứt `11 8`; tư thế mới là thẻ vàng đầy đủ.

## Chữ ký chuyển động
- **Dán vật chứng:** ảnh rơi xuống bàn hơi nghiêng (`drop`), rồi băng keo vàng `wipe` ngang qua góc để "ghim" lại.
- **Tram lan theo mật độ:** các chấm hiện bằng `pop` có `data-stagger` nhỏ, từ vùng sáng sang vùng tối, như mực đang ăn vào giấy.
- **Lệch đăng khớp lại:** bóng hồng của tiêu đề vào trước, chữ navy `rise` khớp lên trên trễ 120ms.
- **Tấm đêm trượt vào** cho cảnh bí mật: lớp navy cố định đổi vị trí theo `data-scene`, chữ đổi sang màu giấy.
- **Đóng dấu:** "TUYỆT MẬT", "ĐÃ DUYỆT" bằng `stamp`, chỉ ở điểm phán quyết.
- Nhịp: nhanh, nảy nhẹ kiểu hoạt hình, nhưng mỗi slide chỉ một cú "nảy" chính.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** bìa hồ sơ mở ra, ảnh "VẬT CHỨNG A" dán xuống, vật chính có mắt bóng nhìn khán giả, nhãn "HỒ SƠ 01" gõ ra bằng chữ mono.
- **Điều tra nguyên nhân:** bảng kê vật chứng, mỗi hàng một nhãn số vàng, mũi tên hồng nối hai tư thế.
- **Hành trình:** thước đo chiều cao nằm ngang làm trục, mỗi trạm thêm một bậc tram, trạm cuối tô đỏ.
- **Kết:** gập bìa hồ sơ, con dấu "ĐÃ ĐÓNG HỒ SƠ" đóng xuống.

## Nên tránh
Gradient mượt (chỉ dùng tram), bóng đổ mờ, 3D, ánh kim, màu ngoài bảng, đỏ ngoài con dấu, mắt trên mọi vật, số liệu bịa trên thẻ, tên người hay vụ án có thật, con dấu giả cơ quan nhà nước.

## Họ hàng
`retro-zine` (giấy kaki, cắt dán risograph, thô hơn và không có nhân vật có mắt), `midcentury-toon` (cùng Alfa Slab One và in lệch màu, nhưng là hướng dẫn từng bước vui vẻ, không có không khí điều tra), `risograph` (mực trong chồng màu, nghệ thuật indie, không có đạo cụ hồ sơ).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
