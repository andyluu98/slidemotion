# Vẽ một nét (một đường mực không nhấc bút)

> Cả deck là một đường mực duy nhất chạy qua giấy trắng ngà: mỗi slide chỉ là một đoạn khác của cùng nét ấy, và màu đỏ chỉ xuất hiện một lần, ở trái tim cuối cùng.

**Hợp:** câu chuyện thương hiệu, cột mốc đời người, quảng cáo tối giản, bài nói nhiều khoảng trắng.
**Không hợp:** số liệu dày, sơ đồ nhiều thành phần, nội dung cần nhiều màu phân loại.
**Cảm xúc:** tối giản, tinh tế, liền mạch, thoáng đãng.

## Hình dung
Một tờ giấy rất dài, một cây bút đặt xuống và không bao giờ nhấc lên. Người xem đi dọc theo nét bút: sóng, vòng xoắn thành trạm, xoắn ốc cho chương mới, một ngôi nhà, một chiếc máy bay giấy, cuối cùng là trái tim đỏ. Chuyển slide không phải là "trang mới" mà là máy quay trượt dọc tờ giấy tới đoạn tiếp theo.

## Bảng màu
```css
--paper: #F8F5EE;   /* giấy trắng ngà, nền */
--ink: #1D1A17;     /* mực đen ấm: nét, chữ */
--muted: #6B645A;   /* chữ phụ, nhãn phụ */
--red: #C4372B;     /* màu nhấn duy nhất: trái tim ở slide kết, dùng đúng một lần */
```
Màu nhấn của cả deck dùng một lần. Mọi slide khác chỉ có mực và giấy.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&family=Patrick+Hand&display=swap" rel="stylesheet">
```
- Tiêu đề và thân: Quicksand 400 đến 500, tròn và thoáng, giãn âm nhẹ -0,005em cho tiêu đề.
- Nhãn trong hình: Patrick Hand 28 đến 30px, chỉ 1 đến 3 chữ, không khung, cách nét ít nhất 20px.
- Cả hai font có bộ chữ tiếng Việt (đã kiểm Google Fonts ngày 16/10/2026).

## Bề mặt
Giấy trơn, sạch. Không lưới, không họa tiết, không khung. Có thể có bóng mềm rất nhạt của ngòi bút và chấm tiếp xúc ở đầu nét đang vẽ. 85% khung là giấy trống.

## Ngôn ngữ minh họa
- **Một hình là một `<path>`** (hoặc một dãy path nối đầu nối đuôi). Nét được cắt chính nó và quay lại đường cũ; nhấc bút là sai tinh thần.
- Một độ dày cho mỗi hình (khoảng 3,4px), đầu và góc tròn. Không tô, không bóng, không viền kép.
- **Tay người cầm bút:** dày ở chỗ chậm và rẽ gấp, mảnh ở đoạn chạy thẳng; cạnh thẳng run 1 đến 3px, góc nhọn không bo.
- **Giọt mực** (chấm đặc bán kính 6 đến 7px) ở điểm bút đặt xuống; nét dừng ở đường nền hoặc ở một vòng xoắn.
- **Vòng xoắn** là phần thưởng của cây bút (đường trochoid, r 14 đến 26); **xoắn ốc** 2 đến 2,5 vòng cho mở phần, kết chương.
- Hình mới "mọc" ra từ đường nền, tiếp tuyến, không có góc gập ở chỗ nối.
- Hình tượng gợi ý: nhà (bắt đầu), máy bay giấy (chuyển cảnh), vòng xoắn (thời gian), bậc thang (tăng trưởng), trái tim (cảm ơn); mỗi hình dưới 12 nét gập hoặc cong.

## Chữ ký chuyển động
- **Máy quay trượt dọc nét:** cả đường mực là một lớp cố định rất lớn ngoài các slide; mỗi slide đổi vị trí lớp đó theo `data-scene`, đoạn mới trượt vào khung. Nét không vẽ lại, nó chỉ đi tiếp.
- **Bút đang vẽ:** hình riêng của slide hiện bằng `draw` đúng chiều cây bút đi, cả hình xong trong khoảng 2 giây; nhãn `fade` sau khi nét dừng.
- **Giọt mực đặt xuống:** chấm đầu nét `pop` nhỏ ngay trước khi nét bắt đầu chạy.
- **Ngòi bút dẫn đường:** chấm tiếp xúc của ngòi đi theo nét bằng `<animateMotion>` trong lúc `draw`, rồi dừng ở cuối.
- **Trái tim đỏ:** chỉ ở slide kết, nét cuối cùng của deck vòng thành trái tim và đổi sang màu đỏ.
- Nhịp: liền mạch, thong thả, không cắt, không nảy, không lặp.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** giọt mực rơi xuống giấy trắng, nét chạy ra thành một ngôi nhà nhỏ, tên deck nằm thoáng phía trên.
- **Cột mốc đời người:** đường nền chạy ngang, mỗi mốc là một vòng xoắn, cung nhảy nối các trạm.
- **Chương mới:** xoắn ốc cuộn vào tâm, dừng bằng giọt mực, tên chương ở bên cạnh.
- **Kết:** nét cuối vòng thành trái tim đỏ, lần duy nhất có màu trong cả deck.

## Nên tránh
Tô màu, đổ bóng, gradient, hạt nhiễu, viền kép, nền họa tiết; màu nhấn trong hình riêng; hai nét rời nhau không nối; mũi tên đầu tam giác đặc; hình học hoàn hảo bằng compa và thước; icon có sẵn; hình lấp quá 15% khung; số liệu bịa; chép tác phẩm vẽ một nét có thật.

## Họ hàng
`monochrome` (đen trắng nhưng là mảng khối phẳng và chữ dày, kiểu sổ cái), `soft-editorial` (thoáng và văn chương, nhưng dùng serif và màu pastel), `whiteboard` (cũng nét tay, nhưng nhiều nét rời, ba màu bút và chữ dày đặc hơn).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
