# Đèn lồng giấy (hộp đèn bìa cắt đêm Trung thu)

> Cả deck là một hộp đèn giấy cắt trong đêm trăng: các lớp bìa xếp chồng, ánh sáng ấm chỉ lọt qua những chỗ đã cắt thủng.

**Hợp:** Trung thu, lễ hội, phố cổ, chuyện văn hóa, quà tặng, sự kiện cuối năm.
**Không hợp:** báo cáo số liệu dày, công nghệ thuần, nội dung cần nền sáng để in.
**Cảm xúc:** ấm áp, lễ hội, huyền ảo, đêm trăng.

## Hình dung
Người xem như đứng trước một hộp kính nông, bên trong là các tấm bìa cắt đặt so le: trăng kem tròn ở xa, mây cuộn cắt giấy, hai lớp đồi, mái phố cổ gần như đen với ô cửa sáng. Đèn tròn, đèn ông sao, đèn trụ treo từ mép trên xuống. Chiều sâu đến từ thang sáng tối: lớp xa sáng và lạnh, lớp gần tối gần như đen. Ánh ấm chỉ nằm trong đèn và ô cửa.

## Bảng màu
```css
--night: #0b1232;     /* bìa tối, nền đêm */
--night-hi: #26397a;  /* lớp xa, mây xanh tím */
--cream: #fff3d6;     /* chữ, trăng */
--amber: #ffc15e;     /* màu nhấn duy nhất: ánh sáng, hào quang */
--lamp: #ff9a3a;      /* thân đèn */
--lamp-red: #d6401f;  /* tua rua, nến, chấm mũi thỏ */
--muted: #cfc8e8;     /* chữ phụ */
/* phụ trợ trong hình: giấy sáng #f6e2b0, thẻ giấy #f7d98c, ánh qua lỗ cắt #fff2c4,
   nắp đèn #3a1410, vàng đồng #e8b941, dây treo #d8b45e */
```
Hổ phách là màu nhấn duy nhất. Đỏ chỉ dùng cho tua, nến, chấm nhỏ. Đèn luôn sáng hơn nền quanh nó; đặt đèn sáng lên nền sáng là mất chiều sâu.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Cormorant Garamond 700, giãn rất nhẹ (0,005em), màu kem. Có tiếng Việt (đã kiểm Google Fonts, có khối vietnamese).
- Thân: Be Vietnam Pro 400 đến 500.
- Nhãn trên thẻ, hạt số: Be Vietnam Pro 600, IN HOA, giãn 0,12em, 17 đến 22px.

## Bề mặt
Nền đêm `--night`, rắc sao kem rất thưa và mờ (độ mờ 0,2 đến 0,35). Phía trên có một quầng sáng hổ phách lớn sau đèn chính. Đáy sân khấu là dải đồi bìa và mái phố cổ, chỉ ô cửa là sáng.
```css
background: radial-gradient(60% 70% at 72% 18%, rgba(255,170,66,.18), transparent 70%),
            linear-gradient(#0b1232, #0b1232);
```

## Ngôn ngữ minh họa
- **Bìa cắt, không phải nét mực:** khối phẳng một màu, mép gọn, chi tiết bằng lỗ cắt (thoi, giọt, tròn nhỏ, vòng chấm). Không viền đậm, không bóng mềm.
- **Ánh sáng** là `radialGradient` hổ phách từ 55% về 0, đặt sau thân đèn. Thứ tự lớp: hào quang, dây, thân đèn, lỗ cắt, nắp và tua, rồi nhãn.
- Nét hai độ dày: dây và nét chính 3px, nét phụ 2px, đầu tròn. Nét đứt `9 8` cho "đèn ma" (tư thế cũ).
- Hình mẫu: đèn tròn có gân dọc và lỗ thoi; dây treo có hạt số (A, B, 1, 2, 3) như thẻ đố đèn; thẻ giấy treo dưới dây; cung chuyển nối tư thế cũ sang mới.
- Nhân vật là vật và con vật của lễ hội: đèn ông sao, thỏ ngọc, mái phố cổ, mây cuộn. Không vẽ người.

## Chữ ký chuyển động
- **Đèn thả xuống theo dây:** đèn từ trên mép màn hạ xuống chỗ treo (`drop` không nảy, `data-dur` 900 trở lên), dây đi trước, đèn theo sau.
- **Thắp đèn:** thân đèn hiện tối trước, rồi lỗ cắt sáng lần lượt (`fade` + `data-stagger="120"`), cuối cùng hào quang nở ra (`zoom` từ nhỏ, mờ dần ra rìa).
- **Đung đưa trong gió đêm:** một đèn chính treo `data-loop="sway"` rất nhẹ (góc nhỏ, chu kỳ dài). Đặt trên lớp con, không đặt lên phần tử đang `drop`.
- **Trăng và dây đèn là lớp cố định xuyên deck** (`data-scene`): trăng lên chậm từ chương này sang chương khác, dây đèn garland trượt ngang như đang đi dọc phố.
- **Đèn ma sang đèn thật:** đèn nét đứt ở tư thế cũ, cung chuyển `draw`, đèn sáng hiện ở tư thế mới (`data-morph` nếu là cùng một chiếc đèn qua hai slide).
- Nhịp: chậm, êm, như gió thổi. Không nhấp nháy gắt, không nảy.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** trăng kem bên phải, ba chiếc đèn lần lượt thả xuống, một thỏ ngọc giấy ngồi trên mây giơ đèn nhỏ về phía trăng; tên deck chữ kem bên trái.
- **Quy trình:** sợi dây ngang treo các đèn nhỏ, mỗi bước thắp thêm một đèn, quầng sáng to dần theo từng trạm.
- **Đố đèn:** câu hỏi treo trên thẻ giấy, bấm thì hạt số lật ra đáp án.
- **Kết:** cả phố mái tối, từng ô cửa sáng lên, lời cảm ơn nằm trong quầng đèn lớn nhất.

## Nên tránh
Màu ngoài bảng (xanh lá, tím rực, trắng lạnh), gradient ngoài hào quang hổ phách, glow neon, bóng đổ mềm, viền dày kiểu hoạt hình, vẽ người hay mặt người chi tiết, chữ Hán làm họa tiết khi không rõ nghĩa, câu dài trong SVG.

## Họ hàng
`son-mai` (sơn then bóng, vàng lá, trang trọng hơn và tĩnh hơn), `hoi-an` (đèn lụa phẳng trên tường vôi ban ngày, ở đây đèn giấy phát sáng giữa đêm), `cat-giay-do` (giấy đỏ cắt trên nền kem, tươi vui ngày Tết, không có ánh sáng xuyên qua).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
