# Dark Botanical (vườn đêm, ánh ấm nhòe trên nền đen)

> Sân khấu gần đen, ba quầng sáng ấm (vàng, hồng phấn, đất nung) nhòe và trôi rất chậm, một vòng vàng mảnh, một cuống mảnh và hạt mầm. Sang trọng mà mềm.

**Hợp:** thương hiệu cao cấp, sự kiện buổi tối, giới thiệu dịch vụ spa, nước hoa, mỹ phẩm, trà, rượu, nhà hàng fine dining.
**Không hợp:** số liệu kỹ thuật dày, đào tạo nội bộ, trẻ em, nội dung vui nhộn.
**Cảm xúc:** sang trọng, mềm mại, cao cấp.

## Hình dung
Như bước vào một nhà kính lúc nửa đêm: tối, ấm, chỉ có vài quầng đèn vàng hắt lên lá, ánh sáng loang chứ không chiếu thẳng. Một sợi cuống mảnh rủ xuống từ mép trên, cuối sợi là hạt mầm đất nung. Chữ serif nghiêng thanh như nhãn chai nước hoa. Người xem thấy chậm lại, thở sâu.

## Bảng màu
```css
--bg: #0f0f0f;        /* đêm */
--fg: #e8e4df;        /* chữ ngà */
--muted: #9a9590;
--gold: #c9b896;      /* quầng vàng, vòng, kicker */
--pink: #e8b4b8;      /* quầng hồng phấn, nhấn phụ */
--terra: #d4a574;     /* quầng đất nung, hạt mầm, nhấn chính */
--hair: rgba(201,184,150,.6);   /* đường mảnh như sợi cuống */
--card: rgba(232,228,223,.045); /* thẻ gần như trong suốt */
```
Màu ấm chỉ xuất hiện dưới dạng ánh sáng nhòe (độ mờ 0,4 đến 0,5, blur 100 đến 120px) hoặc nét mảnh. Không tô mảng ấm đặc lớn.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```
- Tiêu đề: Cormorant 600, cỡ lớn (72 đến 104px); câu chốt, trích dẫn, lời kết dùng nghiêng 500 đến 600.
- Thân: IBM Plex Sans 300 đến 400, nhẹ, thoáng.
- Kicker: IBM Plex Sans 500, giãn rộng 0,3em, màu vàng.
- Hai font đã kiểm có khối tiếng Việt.

## Bề mặt
Đen phẳng, các quầng sáng nằm phía sau mọi thứ và tự trôi lệch vài chục px trong chu kỳ 17 đến 21 giây, mỗi quầng một nhịp riêng nên không bao giờ lặp đều. Thẻ chỉ là viền vàng mảnh 22% trên nền gần như trong suốt.

## Ngôn ngữ minh họa
- **Quầng sáng:** hình tròn lớn, blur nặng, đặt ở góc hoặc sau con số, như đèn rọi lên tán lá.
- **Vòng vàng mảnh** 2px: khung cho ý chính, có khi tràn ra ngoài trang.
- **Cuống và hạt:** đường dọc mảnh từ mép trên xuống, kết thúc bằng chấm tròn đất nung 12px.
- **Đường ngang mảnh** làm trục, gạch dưới.
- Minh họa thực vật (nếu vẽ): lá, cành, nụ bằng nét vàng mảnh 1 đến 1,5px, không tô, thưa.
- Ảnh (nếu có) tối, ấm, nhiều bóng, đặt trong vùng quầng sáng.

## Chữ ký chuyển động
- **Quầng thở:** các quầng trôi chậm liên tục (`data-loop="float"` biên độ nhỏ, hoặc lớp cố định có keyframes riêng), đổi chỗ giữa các slide theo `data-scene`.
- **Cuống rủ, hạt đậu:** đường mảnh `draw` từ trên xuống, hạt mầm `pop` nhỏ ở cuối, như giọt sương.
- **Nở hoa:** vòng vàng `draw` quanh ý chính, quầng sáng phía sau `zoom` từ nhỏ ra lớn và dịu đi.
- **Chữ hiện từ bóng tối:** tiêu đề Cormorant `blur` chậm (900 đến 1200ms), thân `fade`.
- **Hạt mầm sống:** hạt `pulse` rất nhẹ, như ánh đom đóm.
- Nhịp: rất chậm, có thở; không hai thứ xuất hiện cùng lúc.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** màn đen, quầng vàng ở góc trên phải và quầng hồng góc dưới trái sáng dần; cuống rủ xuống giữa, hạt đậu, tên thương hiệu Cormorant hiện từ bóng tối.
- **Ba giá trị:** ba quầng màu khác nhau sau ba con số, mỗi số một nhịp.
- **Trích dẫn:** quầng sâu hơn, vòng vàng đỗ ở mép trái, câu nghiêng lớn.
- **Kết:** cả ba quầng cùng nở bên trong vòng vàng lớn, lời cảm ơn nghiêng.

## Nên tránh
Mảng màu đặc lớn, viền dày, chữ in hoa đậm, icon phẳng, chuyển động nhanh hay nảy, nền đen tuyền không có quầng sáng nào, quá ba màu ấm.

## Họ hàng
`son-mai` (cũng tối ấm và sang nhưng chất sơn bóng, vàng lá, đậm văn hóa Việt), `pink-script` (đêm thời trang, chữ script, quyến rũ hơn), `aurora` (ba ánh sáng màu trôi nhưng lạnh, công nghệ).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
