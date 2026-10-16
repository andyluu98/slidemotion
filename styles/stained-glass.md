# Kính màu (cửa sổ kính ghép chì trong gian đá tối)

> Gian đá tối, một ô cửa kính màu rực lên khi nắng chiếu qua: mảnh màu ngọc phẳng, chì đen dày, và vệt màu rơi xuống nền đá.

**Hợp:** kể chuyện, lịch sử, nghệ thuật, lễ hội, bài thuyết trình trang trọng cần điểm nhấn ánh sáng.
**Không hợp:** công nghệ hiện đại, số liệu dày, nội dung vui nhộn cho trẻ em.
**Cảm xúc:** rực rỡ, trang nghiêm, huyền ảo, cổ kính.

## Hình dung
Người xem đứng trong một sảnh đá cổ, nhìn lên ô cửa vòm nhọn. Kính không tự phát sáng: chỉ khi nắng sau lưng thì mảnh mới rực, mảnh chưa được chiếu thì tối và đục. Mỗi slide là một ô kính nữa được ghép vào cùng cửa sổ. Chủ đề thế tục: hoa hồng, hình thoi, ngọc trai, mặt trời, lá.

## Bảng màu
```css
--bg: #1B1511;       /* đá tối */
--lead: #0F0B09;     /* chì: viền mọi mảnh, nét 6px (4px mảnh, 3,5px nhỏ) */
--parch: #F3E7C9;    /* chữ, giấy da */
--muted: #D8C8A2;
--gold: #F0C25E;     /* chữ mạ vàng, ánh sáng, mặt trời */
--cobalt: #2457B5;   /* kính nền, sáng hơn #3470D6 */
--ruby: #B3182C;     /* kính đỏ rubi (bản sân khấu #D12D42) */
--gd: #E6AE2E; --gd2: #F6CC5A;   /* kính vàng, vàng sáng */
--green: #2F8A55; --plum: #8A2F68; --white-glass: #D6E8D0;
--grisaille: #3A2210; /* nét vẽ nâu trên kính, mờ 62% */
```
Hai màu gánh bức tranh: cobalt sâu và đỏ rubi. Vàng, lục, tím mận chỉ là điểm nhỏ. Vàng dành cho ánh sáng, mặt trời và chữ mạ vàng. Tránh màu nhạt phấn.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Cormorant Garamond 700, IN HOA, giãn 0,06em, màu mạ vàng hoặc giấy da.
- Nhãn trong hình: Cormorant Garamond 700, IN HOA, giãn 0,1em, trên băng giấy da chữ nâu đen #2B1D10.
- Thân: Lora 400 đến 500.
- Cả hai font có bộ chữ tiếng Việt (đã kiểm Google Fonts ngày 16/10/2026).

## Bề mặt
Nền đá tối, ấm, có một luồng sáng xiên từ cửa sổ xuống và một vệt màu loang trên sàn. Thẻ nội dung là tấm đá sẫm mờ (`rgba(15,10,8,.62)`), góc vuông, không bo.

## Ngôn ngữ minh họa
- Mỗi mảnh kính một màu phẳng, viền chì đen bo tròn. Chì chỉ nằm nơi hai màu gặp nhau.
- **Mảnh nào cũng có chi tiết:** một nét sáng "cạo kính" (trắng, mờ 55%) ven mảnh, hoặc vài nét grisaille xiên. Mảnh trơn trông như clip-art.
- Mảnh cắt có góc, không lõm sâu; đường cong mềm, hình thoi, vòng tròn, cung.
- Hình mẫu: đĩa mặt trời kính (mười tia xen vàng sáng và đỏ, lõi trắng), trạm tròn (đĩa đá che thanh sắt, đĩa kính, lõi vàng), ô kính vòm nhọn, băng chữ giấy da cắt chéo hai đầu, dây mạ vàng nét đứt nối hai vật, vết nứt ánh sáng (đường gãy khúc kem trên vệt vàng mờ), số trong đĩa vàng.

## Chữ ký chuyển động
- **Được chiếu sáng:** mảnh kính không bay vào; nó có sẵn ở dạng tối đục rồi sáng lên (`fade` từ độ mờ thấp), từng nhóm: vành, nền, vật chính, nét grisaille, nhãn.
- **Chì vẽ trước, kính sáng sau:** khung chì hiện bằng `draw`, xong mới tới màu kính, như thợ ghép khung rồi nắng mới chiếu tới.
- **Luồng nắng dịch chuyển:** tia sáng và vệt màu trên sàn là lớp cố định theo `data-scene`, mỗi slide nắng nghiêng một góc khác, như giờ trong ngày đổi.
- **Vết nứt bừng sáng:** với ý "đột phá, vỡ ra", vết nứt `draw` rồi vệt vàng phía dưới `pulse` một lần.
- Nhịp: chậm, trang nghiêm. Kính cứng: không xoay, không uốn, không mờ nhòe, không lặp.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** gian đá tối hẳn, rồi nắng lên: ô cửa hoa hồng sáng dần từ tâm ra vành, tên deck mạ vàng.
- **Ba trụ cột:** ba ô vòm nhọn cạnh nhau, mỗi ô một màu chủ đạo, sáng lần lượt theo cú bấm (`data-step`).
- **Hành trình:** thanh sắt ngang làm trục, mỗi mốc là một trạm tròn kính, trạm cuối là đĩa mặt trời.
- **Kết:** vệt màu trên sàn đá trôi tới giữa slide, câu chốt nằm trong vệt sáng đó.

## Nên tránh
Thập tự, thánh, hào quang, mọi biểu tượng tôn giáo; gradient trong mảnh kính; bóng đổ mềm, glow neon, viền đen mảnh kiểu vector, kaleidoscope; màu nhạt phấn; quá hai màu chủ đạo trên một hình; số liệu bịa trong hình.

## Họ hàng
`art-deco` (kim loại, đối xứng hình học, nền đen vàng phẳng, không có ánh sáng xuyên), `son-mai` (cũng tối và quý, nhưng là mặt sơn bóng và vàng lá kiểu Việt), `den-long-giay` (ánh sáng ấm xuyên qua giấy, mềm và lễ hội hơn).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
