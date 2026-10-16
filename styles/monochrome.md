# Monochrome (sổ cái ngà, mực đen)

> Mực đen trên giấy ngà, không một màu nào khác. Chiều sâu chỉ đến từ đường kẻ tóc 1px và khoảng trắng, như một cuốn sổ cái được lưu trữ cẩn thận.

**Hợp:** báo cáo dài, white paper, tổng hợp nghiên cứu, tài liệu tư vấn, chiến lược, nội dung cần đọc chậm và tin cậy.
**Không hợp:** sự kiện vui, trẻ em, ra mắt sản phẩm cần năng lượng, nội dung cần màu để phân loại.
**Cảm xúc:** tiết chế, văn chương, lưu trữ, sổ cái.

## Hình dung
Người xem đang lật một cuốn sổ cái bìa cứng trong thư viện: trang giấy ngà kẻ dòng đều 48px, chữ sans siêu mảnh, giọng người nói bằng serif nghiêng, nhãn mục đánh máy. Một tấm thẻ kem đi xuyên các trang, lúc là trang sổ, lúc là thẻ ghi chú, lúc là cái đĩa tròn ở trang cuối. Sự trang trọng đến từ chỗ không có gì thừa.

## Bảng màu
```css
--bg: #FAFADF;     /* giấy ngà */
--warm: #F5F0E4;   /* thẻ kem đi xuyên deck */
--ink: #1A1A16;    /* mực: chữ, nét kẻ, chấm */
--muted: #5E5E54;  /* chữ phụ, nhãn */
--faint: #8A8A80;  /* gạch đầu dòng, chi tiết rất phụ */
```
Luật màu: không có màu nhấn. Điều quan trọng được nhấn bằng serif nghiêng Lora, bằng một chấm đen đặc, hoặc bằng cách đặt nó một mình giữa nhiều khoảng trắng.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200;300;400;500&family=Lora:ital,wght@0,400;0,500;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```
- Tiêu đề, số lớn: Be Vietnam Pro 200, giãn âm (-0,02 đến -0,03em), cỡ rất lớn.
- Thân: Be Vietnam Pro 300.
- Giọng người, chữ nhấn, câu trích: Lora nghiêng 400.
- Nhãn mục, nguồn, ngày: JetBrains Mono 22px IN HOA, giãn 0,16em, màu `--muted`.

## Bề mặt
Giấy ngà phẳng. Vùng sổ cái phủ dòng kẻ ngang mờ cách nhau 48px. Thẻ kem viền 1px mực.
```css
background: repeating-linear-gradient(to bottom, transparent 0 47px, rgba(26,26,22,.16) 47px 48px);
```

## Ngôn ngữ minh họa
- **Đường kẻ tóc 1px** là bộ xương: kẻ trên đầu trang, kẻ cuối trang, kẻ dọc chia cột.
- **Vạch ngắn 36px x 2px** đặt trước nhãn mục, như dấu đánh mục trong sổ.
- **Vòng tròn tóc 1px và một chấm đặc** là cặp hình duy nhất được phép "trang trí".
- Biểu đồ: chỉ nét 1px và chấm, không tô mảng; số đặt sát nét, không chú giải màu.
- Gạch đầu dòng là vạch ngang ngắn màu `--faint`, không dùng chấm tròn.
- Không icon. Nếu cần hình, vẽ sơ đồ đường kẻ và nhãn mono.

## Chữ ký chuyển động
- **Kẻ dòng:** đường kẻ tóc chạy ra từ trái sang phải thật chậm (`wipe`, `data-dur` khoảng 1200), trước khi chữ hiện.
- **Trang sổ hiện từng dòng:** các dòng kẻ và dòng chữ hiện lần lượt từ trên xuống (`fade` với `data-stagger="120"`), như mắt người đọc dò sổ.
- **Mực khô:** tiêu đề siêu mảnh hiện bằng `blur` nhẹ rồi sắc.
- **Một chấm đi xuyên deck** (`data-morph="dot"`): chấm đen đánh dấu "chỗ đang đọc", từ tâm vòng tròn bìa tới đầu trục thời gian tới đỉnh đĩa kết.
- **Vòng tròn khép:** vòng tóc `draw` một vòng đủ rồi chấm `pop` thật nhỏ vào tâm.
- Nhịp: chậm, đều, im lặng. Không nảy, không lặp nhấp nháy.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** trang sổ kẻ dòng bên phải, một vòng tròn lớn với chấm ở đỉnh; tên báo cáo chữ siêu mảnh bên trái giữa hai đường kẻ.
- **Mở chương:** thẻ kem chiếm dải phải, vòng tròn có hai đường kẻ tóc cắt chữ thập, số chương 220px chữ 200.
- **Con số:** ba cột số mỗi cột một đường kẻ trên đầu, nhãn mono bên dưới, số đếm lên (`data-count`) có ghi nguồn.
- **Kết:** thẻ kem cuộn thành đĩa tròn trong một vòng tóc, hai đường kẻ ngang chạy ra hai mép.

## Nên tránh
Bất kỳ màu nào, chữ đậm 700 trở lên cho tiêu đề, icon, bóng đổ, ảnh màu, nhiều thứ cùng lặp, nét dày hơn 2px.

## Họ hàng
`soft-editorial` (cùng tĩnh nhưng có serif Cormorant và màu ấm), `wabi` (chiêm nghiệm, nhiều khoảng trống, có chất liệu tự nhiên), `signal` (trang trọng cho hội đồng quản trị, có màu nhấn và nhãn mono).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
