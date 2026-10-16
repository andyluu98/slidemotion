# Kể chuyện số liệu (báo chí dữ liệu trên giấy kem)

> Một trang báo dữ liệu: giấy kem chấm lưới, mực nâu đen cho trục, dải màu xanh tới đỏ chỉ mã hóa đúng một thứ là giá trị, và một dòng ghi chú viết tay ghim vào điểm cần xem.

**Hợp:** báo cáo số liệu, phân tích, kết quả khảo sát, đào tạo về dữ liệu, bài trình bày có biểu đồ, tổng kết đo lường.
**Không hợp:** nội dung không có số, lễ hội, thương hiệu cảm xúc, trẻ em.
**Cảm xúc:** báo chí dữ liệu, giấy kem, chính xác, kể chuyện.

## Hình dung
Như đọc một bài phóng sự dữ liệu được dàn trang kỹ: mỗi slide là một hình trong bài, biểu đồ là nhân vật chính, phóng viên cầm cây bút chì hai đầu đỏ xanh khoanh vào chỗ đáng chú ý và ghi một dòng bên lề. Người xem cảm thấy được dẫn đi, không bị dội số: mỗi hình một ý.

## Bảng màu
```css
--bg: #F4EEDF;     /* giấy kem */
--sheet: #FBF8F0;  /* khung biểu đồ */
--ink: #2A2621;    /* trục, đường chuỗi, viền chấm, chữ */
--muted: #5E5648;  /* nhãn mono, chữ trục */
--grid: #DDD3BD; --warm: #CBBFA6;   /* lưới, viền khung */
--blue: #2166AC; --blue-t: #1F5C9C; /* bút xanh: ghi chú, mũi tên, vòng ghim */
--red: #B2182B;
/* dải giá trị phân kỳ, từ thấp tới cao */
--r0: #2166AC; --r1: #67A9CF; --r2: #D1E5F0; --r3: #F7F4EC; --r4: #FDDBC7; --r5: #EF8A62; --r6: #B2182B;
```
Màu chỉ nằm ở dấu mã hóa giá trị, vòng ghim và chữ ghi chú xanh; còn lại là mực. Một hình dùng tối đa ba sắc của dải; chấm đỏ đậm dành cho điểm quan trọng nhất của slide. Giá trị nhạt thì để nhạt, không kéo dải màu cho kịch tính.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=IBM+Plex+Mono:wght@400;500&family=Patrick+Hand&display=swap" rel="stylesheet">
```
- Tiêu đề và thân: Newsreader 400 đến 600, giọng báo chí; tiêu đề nên là một câu khẳng định ("Chi phí giảm từ quý ba"), không phải tên biểu đồ.
- Nhãn trục, nguồn, chú giải: IBM Plex Mono 400 đến 500, 18 đến 20px.
- Ghi chú viết tay: Patrick Hand khoảng 36px, màu bút xanh, một dòng.
Cả ba font có tiếng Việt (đã kiểm ngày 16/10/2026).

## Bề mặt
Giấy kem có lưới chấm 24px, sợi giấy mờ, tối nhẹ về bốn góc. Khung biểu đồ là tờ giấy sáng hơn viền mảnh màu ấm.
```css
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='2' cy='2' r='1.1' fill='%238E8268' fill-opacity='.28'/%3E%3C/svg%3E"), linear-gradient(180deg, #F5F0E2, #F1EADA);
background-size: 24px 24px, 100% 100%;
```

## Ngôn ngữ minh họa
- **Chọn biểu đồ theo ý:** so sánh hạng mục dùng cột, theo thời gian dùng đường, trước và sau dùng biểu đồ độ dốc, đếm đơn vị dùng hàng chấm. Không biểu đồ tròn, không 3D, không ba trục.
- **Chấm dữ liệu có viền mực 2,2px** (cỡ 11 đến 21px) để giá trị nhạt vẫn thấy trên giấy kem.
- Nét: đường chuỗi 3,2px, trục 2,4px, vạch 2px, lưới 1,4px, đường chuẩn đứt `9 8`; đầu tròn.
- **Ghi chú ghim:** chữ viết tay xanh, đường dẫn lượn, kết thúc bằng vòng **không khép kín** quanh điểm. Tối đa một ghi chú mỗi hình.
- **Ô trống kế tiếp:** vòng hoặc ô nét đứt ngay sau điểm cuối, cho "giá trị chưa biết".
- **Dải sọc nhiệt (warming stripes):** một dải sọc đứng theo dải giá trị, kể xu hướng không cần trục.
- **Không bịa số:** trục chỉ có vạch, không chữ số; hình minh họa ý (không phải dữ liệu đo) ghi nhãn mono nhỏ "minh họa, chưa có số liệu".

## Chữ ký chuyển động
- **Biểu đồ dựng theo đúng ngữ pháp:** trục mọc trước (`draw`), rồi chuỗi nét vẽ dần (`draw`), rồi chấm rơi vào vị trí (`drop` nhỏ, `data-stagger` 80 đến 120ms), ghi chú đến sau cùng. Người xem đọc biểu đồ theo đúng thứ tự nó được vẽ.
- **Cột dâng theo giá trị:** cột hiện bằng `rise-wipe`, cột cao hơn chạy lâu hơn một chút, số trên đỉnh `data-count` (chỉ số có nguồn).
- **Ghi chú được viết ra:** dòng viết tay hiện bằng `wipe` từ trái, vòng không khép `draw` quanh điểm như tay vừa khoanh.
- **Bút chì trượt tới chỉ điểm:** cây bút chì là lớp `data-morph` xuyên deck, mỗi slide đầu bút dừng ở điểm quan trọng nhất.
- **Trục giữ nguyên, dữ liệu đổi:** hai slide liền cùng khung, chấm `data-morph` từ trạng thái cũ sang mới, người xem thấy chính điểm đó di chuyển.
- Nhịp: điềm tĩnh, rõ ràng, cả hình xong trong khoảng 2 giây; không lặp, không đổi màu liên tục.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** khung biểu đồ bên phải, một chuỗi 5 đến 7 điểm vẽ dần, điểm cuối đỏ, ghi chú viết tay ghim vào; dải sọc nhiệt ngay dưới; bút chì chỉ vào điểm cuối.
- **Trước và sau:** biểu đồ độ dốc, mỗi hạng mục một đoạn nối; đoạn nào đổi chiều được khoanh xanh.
- **Dòng thời gian:** thước trục ngang, mỗi mốc một chấm màu đi từ xanh đậm tới đỏ, ô nét đứt ở cuối là "mốc tiếp theo chưa biết".
- **Một con số lớn:** số `data-count` chữ Newsreader cỡ lớn, bên dưới hàng chấm đơn vị đếm đúng, nguồn chữ mono nhỏ.

## Nên tránh
Màu trang trí không mã hóa giá trị, gradient mượt, bóng đổ, 3D, biểu đồ tròn, ba trục; tô đỏ vì "đẹp"; số, nguồn hay thương hiệu không có trong tài liệu; chữ số trên trục khi chưa có dữ liệu; hình dày đặc nhiều ý; chú thích dài.

## Họ hàng
`cobalt-grid` (bản tin nghiên cứu lưới xanh cô ban, tĩnh và biên tập; dataviz lấy biểu đồ làm nhân vật), `bento-light` (thẻ trắng bo góc trên nền xám, kiểu dashboard sản phẩm; dataviz là giấy kem, mực và bút chì báo chí), `monochrome` (báo cáo dài một màu kiểu sổ cái; dataviz có dải màu giá trị).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
