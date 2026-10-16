# Long Table (thực đơn bữa tối bàn dài)

> Một tờ chương trình supper club in tay: giấy kem chấm hạt, một màu mực gạch duy nhất, chỉ có nét viền, chữ in hoa đậm và con số nghiêng to như món chính.

**Hợp:** supper club, nhà hàng nhỏ, tiệc cộng đồng, ra mắt thực đơn, sự kiện lifestyle, workshop ẩm thực, câu chuyện thương hiệu ấm.
**Không hợp:** số liệu kỹ thuật dày, công nghệ lạnh, báo cáo tài chính trang trọng.
**Cảm xúc:** ấm áp, thân mật, in ấn thủ công, tạp chí.

## Hình dung
Người xem như vừa ngồi vào một bàn dài trải khăn, trước mặt là tấm thiệp thực đơn in một màu. Mỗi slide là một "món" được dọn lên theo trình tự: khai vị, món chính, tráng miệng. Đĩa tròn viền mảnh, dấu "&" nghiêng nằm giữa đĩa như món được bày, khăn trải bàn là mảng giấy đậm hơn một tông.

## Bảng màu
```css
--bg: #faf1e2;        /* giấy kem */
--paper-d: #f2e5cf;   /* khăn trải bàn: mảng giấy đậm hơn một tông */
--ink: #b53d2a;       /* mực gạch: chữ, nét, mọi thứ */
--muted: #c05440;     /* chữ phụ */
--accent-2: #8e2d1f;  /* gạch sẫm, dùng rất ít */
--ink-32: rgba(181, 61, 42, 0.32);  /* nét phụ, nét đứt, vạch chia */
```
Luật màu: chỉ có một mực. Muốn nhấn thì đổi độ đậm (gạch sẫm), đổi cỡ chữ hoặc đóng khung, không thêm màu thứ hai.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400;1,9..144,600&family=Lora:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
```
- Tiêu đề: Bricolage Grotesque 800, IN HOA, giãn âm nhẹ (-0,012em).
- Thân: Lora, ưu tiên nghiêng, như lời mô tả món trên thực đơn.
- Số lớn, dấu "&", ngày giờ: Fraunces nghiêng 400. Cả ba font đều có tiếng Việt, nhưng chữ "h" nghiêng của Fraunces dễ đọc nhầm thành "k" khi có dấu, nên chỉ dùng Fraunces cho số và ký hiệu, thân bài để Lora.

## Bề mặt
Giấy kem phủ chấm hạt 4px rất mờ như giấy in thủ công. Mảng khăn trải bàn cùng chấm hạt nhưng đậm hơn một tông.
```css
background-image: radial-gradient(circle at 1px 1px, rgba(181,61,42,.09) .6px, transparent 1px);
background-size: 4px 4px;
```

## Ngôn ngữ minh họa
- **Chỉ nét viền, không tô đặc:** nét chính 1,5px, nét phụ 1px màu `--ink-32`, đường chia nét đứt.
- **Đĩa:** vòng tròn viền mảnh, bên trong một vòng nét đứt cách mép 11%.
- **Thẻ thực đơn:** khung chữ nhật viền 1,5px, vạch liền ở 18% từ trên, vạch đứt ở 18% từ dưới.
- **Viên thuốc nhãn:** khung bo tròn hết cỡ chứa ba chấm nghiêng "· · ·" hoặc một nhãn ngắn.
- **Dấu "&" khổng lồ** Fraunces nghiêng, đổi vai thành dấu ngoặc kép khi trích lời.
- Hình gợi ý vẽ nét: dao nĩa, ly, bình hoa nhỏ, bánh mì, nhành thảo mộc. Một nét, không bóng.

## Chữ ký chuyển động
- **Dọn món:** từng khối nội dung hiện theo cú bấm như người phục vụ đặt món (`data-step` kèm `fade` thật chậm, không bay xa).
- **Trải khăn:** mảng khăn trải bàn lăn ra theo chiều ngang (`wipe`) trước khi chữ hiện.
- **Đặt đĩa:** đĩa hiện bằng `zoom` nhẹ, vòng nét đứt bên trong `draw` theo sau 200ms.
- **Dấu "&" đi qua cả bữa:** cùng một dấu "&" nhỏ dần, đổi chỗ từ đĩa bìa sang góc nhãn, rồi thành dấu ngoặc kép (`data-morph="amp"`).
- **Ba chấm lần lượt** trong viên thuốc nhãn (`fade` với `data-stagger="250"`), như tiếng thìa gõ ly báo món mới.
- Nhịp: thong thả như một bữa tối, không nảy, không xoay.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** khăn trải bên phải, thẻ thực đơn đứng trên khăn, đĩa đặt xuống, dấu "&" trượt vào giữa đĩa; tên sự kiện in hoa bên trái.
- **Thực đơn chương trình:** mỗi phần là một "món" có số nghiêng to, hiện theo cú bấm.
- **Dòng thời gian:** khăn thu thành một dải chạy ngang (bàn dài nhìn từ trên), các mốc là đĩa nhỏ đặt dọc bàn.
- **Kết:** viên thuốc nhãn nở thành khung lớn ôm lời cảm ơn, một vạch đèn thả từ trên xuống.

## Nên tránh
Màu thứ hai, gradient, ảnh món ăn bóng bẩy kiểu quảng cáo, bóng đổ, icon phẳng nhiều màu, Fraunces nghiêng cho đoạn văn tiếng Việt dài.

## Họ hàng
`hoi-an` (ấm áp du lịch, ẩm thực nhưng nhiều màu và có ảnh hơn), `vintage-editorial` (tạp chí giấy kem, có mảng nâu in lệch, giọng có chính kiến hơn), `grove` (văn chương, hữu cơ, tông xanh lá thay cho gạch).

*Ý tưởng gốc: frontend-slides (MIT), mẫu "long-table", qua SlideFly.*
