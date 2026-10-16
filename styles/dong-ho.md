# Tranh Đông Hồ (tranh khắc gỗ dân gian trên giấy dó)

> Mỗi slide là một tờ tranh vừa nhấc khỏi ván in: nét mực đen khắc dày, màu dân gian phẳng, giấy dó ấm còn thớ sợi.

**Hợp:** bài giảng, văn hóa dân gian, sự kiện cộng đồng, nội dung cho trẻ em, Tết, kể chuyện làng nghề.
**Không hợp:** công nghệ cao, báo cáo tài chính dày số, sản phẩm sang trọng tối giản.
**Cảm xúc:** dân gian, mộc mạc, vui, giáo dục.

## Hình dung
Người xem như đứng trong xưởng tranh làng Hồ: tờ giấy ngà trải trên bàn, ván gỗ khắc ép xuống, từng mảng màu hiện ra rồi nét đen chốt lại hình. Bố cục được giữ trong một khung ván dày; các họa tiết mặt trời, ô vuông, hình thoi, chiếc lá đóng ở góc như dấu triện vui tay. Hình vẽ ngây thơ, chắc nét, kể chuyện bằng hình hơn bằng chữ.

## Bảng màu
```css
--paper: #EFE3C8;    /* giấy dó, nền */
--ink: #1E1A16;      /* mực khắc: nét bao, khung ván, khối mực */
--muted: #5A4E40;    /* chữ phụ */
--scarlet: #B23A2A;  /* đỏ son: màu nhấn chính, chữ đậm, mặt trời */
--copper: #2F6A8A;   /* xanh đồng: ô vuông, cột thứ hai */
--amber: #C98A2B;    /* vàng hoàng: hình thoi, chấm đầu dòng */
--green: #4F7A3A;    /* xanh lá: chiếc lá, số liệu thứ ba */
```
- Đỏ son là màu nói "điều quan trọng"; ba màu còn lại chia vai cho các nhóm ngang hàng, không trộn, không pha nhạt.
- Slide chương và slide kết đảo màu: nền là khối mực đen, chữ `#EFE3C8`, chữ phụ `#D9CBAD`, nhấn vàng `#E0A447`.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@700;800&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Alegreya 800 (có tiếng Việt), chân chữ như nét đục trên gỗ, không giãn chữ.
- Thân: Be Vietnam Pro 400 đến 500.
- Nhãn nhỏ: Be Vietnam Pro 600 IN HOA, giãn 0,24em. Số dùng kiểu số đứng (`lining-nums`).

## Bề mặt
Giấy dó màu ngà có hạt nhiễu ấm (khoảng 16% độ đậm) và vài sợi xơ cong mảnh màu `#8A7553` chạy ngẫu nhiên. Không gradient, không bóng. Khung ván là viền mực đặc 8px, co giãn để ôm đúng vùng nội dung. Mép khung có thể hơi run như gỗ khắc tay.

## Ngôn ngữ minh họa
- **Hai lớp như in ván:** mảng màu phẳng ở dưới, nét mực đen dày 5px ở trên, nét bao có thể lệch nhẹ khỏi mảng màu 2 đến 4px như ván in không khớp tuyệt đối.
- **Bộ họa tiết đóng dấu:** mặt trời đỏ tròn, ô vuông xanh đồng, hình thoi vàng (vuông xoay 45 độ), chiếc lá xanh có một gân khắc chéo. Mọi họa tiết viền đen 5px.
- **Khối mực:** dải hoặc mảng đen đặc làm trục, gáy, hoặc tấm biển chứa chữ sáng.
- Đề tài gợi ý: gà, lợn, cá chép, trâu, em bé ôm vật, hoa sen, ông đồ; vẽ dáng tròn, mắt to, đối xứng gần đúng.
- Đường viền trang trí: sóng nước, mây cuộn dạng nét khắc đơn giản.

## Chữ ký chuyển động
- **In ván hai nhịp:** mảng màu hiện trước bằng `fade` nhanh, rồi lớp nét đen đè xuống bằng `stamp` (trong làng tranh, ván nét đen thường in sau cùng). Cảm giác hình "được in ra", không được vẽ ra.
- **Họa tiết lăn như dấu triện:** mặt trời, ô vuông, thoi, lá lăn sang góc mới giữa các slide, mỗi lần xoay thêm 90 độ (lớp cố định theo `data-scene`, bọc thêm một lớp để xoay).
- **Khung ván co giãn** ôm vùng nội dung mới khi sang slide (`data-morph="khung"`), dứt khoát như thợ đặt ván.
- **Khối mực trượt** thành trục dòng thời gian, gáy mục lục hay tấm biển cuối (`data-morph="khoi-muc"`).
- **Con vật nhún nhảy** một lần khi xuất hiện (`pop`), sau đó đứng yên; tối đa một chi tiết `sway` nhẹ như đuôi gà phe phẩy.
- Nhịp: chắc tay, vui, có nảy nhẹ nhưng không lắc lư liên tục.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** khung ván ôm cả trang, bốn họa tiết đóng ở bốn góc, tên bài chữ Alegreya lớn giữa giấy dó.
- **Chương mới:** khối mực đen chiếm nửa trái chứa số chương, nửa phải là khung nhỏ với bốn họa tiết tụ lại.
- **Số liệu:** ba con số trên dải mực đáy, mỗi số một màu dân gian, họa tiết lăn tới đậu cạnh.
- **Kết:** tấm biển mực trong khung ván, lời cảm ơn chữ ngà, mặt trời và chiếc lá đứng hai bên.

## Nên tránh
Gradient, bóng đổ, màu neon hay pastel, icon phẳng hiện đại, nét mảnh như vector kỹ thuật, quá bốn màu dân gian trên một slide, ảnh chụp không đóng khung ván.

## Họ hàng
`woodcut` (khắc gỗ phương Tây, tương phản mạnh, kịch tính hơn), `cat-giay-do` (cắt giấy đỏ lễ hội, một màu chủ đạo), `son-mai` (cũng chất Việt nhưng nền tối, sang và trang nghiêm).

*Style gốc của SlideFly.*
