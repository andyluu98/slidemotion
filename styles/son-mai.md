# Sơn mài

> Nền sơn then đen nâu, chữ ngà, một tấm sơn son đỏ trượt đổi bên, khung vàng mảnh đôi, vàng lá rắc và khảm vỏ trứng. Sang trọng kiểu Việt.

**Hợp:** Tết, sự kiện văn hóa, thương hiệu Việt cao cấp, lễ kỷ niệm, quà tặng doanh nghiệp, di sản.
**Không hợp:** công nghệ thuần, startup trẻ, số liệu kỹ thuật dày.
**Cảm xúc:** trang trọng, văn hóa Việt, cao cấp, lắng.

## Hình dung
Mỗi slide như một tấm tranh sơn mài treo trên tường: mặt sơn bóng sâu, ánh vàng lá lấp lánh khi nghiêng, mảng khảm vỏ trứng trắng ngà nứt hạt. Chữ đặt trang trọng như hoành phi, nhiều khoảng tối.

## Bảng màu
```css
--lacquer: #140C09;   /* sơn then */
--ivory: #EDE3CF;     /* chữ, vỏ trứng */
--muted: #B9A98E;
--gold: #C9A04A; --gold-l: #E6C46E;   /* vàng lá, khung */
--cinnabar: #8E1B12; --lred: #A52A2A; /* sơn son */
```

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Cormorant Garamond 700, không giãn, cỡ lớn.
- Thân: Be Vietnam Pro 400 đến 500.
- Nhãn nhỏ: Be Vietnam Pro 600 IN HOA, giãn 0,2em, màu vàng.

## Bề mặt
Nền sơn then có độ sâu: gradient tối hai lớp, một vệt bóng chéo rất mờ như ánh đèn trên mặt sơn. Khung vàng đôi mảnh (1px và 3px cách nhau 8px) quanh nội dung chính.

## Ngôn ngữ minh họa
- **Tấm sơn son:** khối chữ nhật đỏ son lớn chiếm một bên slide, mang tiêu đề hoặc con số.
- **Khảm vỏ trứng:** khối ghép các mảnh đa giác nhỏ màu ngà, khe tối giữa các mảnh.
- **Vàng lá:** các mảnh vàng nhỏ hình tứ giác lệch, rắc thưa.
- Họa tiết gợi ý: hoa sen, sóng nước, mây cuộn, hạc, cành mai, vẽ nét vàng mảnh trên nền tối.
- Ảnh (nếu có) viền khung vàng đôi.

## Chữ ký chuyển động
- **Tấm sơn son trượt đổi bên** giữa các slide (`data-morph` hoặc lớp cố định theo `data-scene`), chậm và nặng.
- **Vàng lá rơi và đậu** vào chỗ mới (`drop` trễ dần), sau đó lấp lánh nhẹ (`pulse` mờ).
- **Mài lộ:** hình hiện bằng `blur` như lớp sơn được mài ra.
- **Khung vàng vẽ dần** quanh nội dung (`draw` trên khung SVG).
- Nhịp: chậm, trang nghiêm, không nảy.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tấm son đỏ lớn, tên sự kiện chữ ngà, vàng lá rơi xuống.
- **Câu chúc, câu chốt:** chữ lớn giữa khung vàng đôi, một cành mai vẽ nét vàng.
- **Hành trình, cột mốc:** dòng sông nét vàng uốn lượn, mỗi mốc một bông sen.
- **Kết:** mảng khảm vỏ trứng ghép dần thành hình, lời cảm ơn.

## Nên tránh
Màu tươi hiện đại, gradient neon, icon phẳng, font không dấu, bố cục quá dày.

## Họ hàng
`dong-ho` (tranh dân gian sáng, vui), `den-long-giay` (đêm lễ hội ấm), `art-deco` (sang trọng phương Tây), `thuy-mac` (thủy mặc tĩnh lặng).
