# Biennale Vàng (catalogue triển lãm nghệ thuật)

> Giấy da ấm, một màu mực chàm đậm duy nhất, một mảng vàng mặt trời tràn như áp phích. Không bóng đổ, không bo góc, chỉ đường kẻ mảnh và khoảng trống.

**Hợp:** triển lãm, sự kiện văn hóa, hội thảo thiết kế, giới thiệu nghệ sĩ, tuyên bố giám tuyển, chương trình lễ hội nghệ thuật.
**Không hợp:** demo phần mềm, báo cáo số liệu dày, chủ đề trẻ em vui nhộn, khuyến mãi bán hàng.
**Cảm xúc:** tạp chí nghệ thuật, ấm áp, tĩnh lặng, áp phích triển lãm.

## Hình dung
Như cầm trên tay cuốn catalogue của một biennale: giấy hơi ngả màu, chữ in chàm, và một trang áp phích vàng rực đến bất ngờ. Phía sau tiêu đề là một quầng mặt trời mềm như ánh nắng chiều, ở góc xa có đốm than hồng ấm. Dưới lớp giấy là một bản in lót các ô vàng trong mờ xếp 4 nhân 8, như bản thử màu của thợ in. Người xem cảm thấy thong thả, có thời gian để nhìn.

## Bảng màu
```css
--paper: #E9E5DB;     /* giấy da ấm: nền */
--ink: #1B2566;       /* mực chàm: chữ, đường kẻ, thanh, màu duy nhất cho nét */
--muted: #3A427A;     /* chàm nhạt: chữ phụ */
--sun: #F1EE2E;       /* vàng mặt trời: mảng tràn, quầng sáng */
/* quầng mặt trời: rgba(241,238,46,.92) tới rgba(240,218,124,.22) */
/* đốm than hồng: rgba(226,107,74,.24) */
```
Luật màu nhấn: mỗi slide chỉ một mảng vàng lớn (tràn, cột, dải), cộng một quầng sáng mềm. Mực chàm là màu duy nhất cho chữ và nét. Đốm than hồng chỉ là hơi ấm ở một góc, không thành hình.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Archivo:wght@400;600;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
```
- Tiêu đề: Playfair Display 400, giãn -0,012em, cỡ rất lớn, có thể dùng nghiêng cho một chữ (thay cho Instrument Serif gốc vốn không có dấu tiếng Việt).
- Thân: Archivo 400; nhãn mục Archivo 600 IN HOA giãn rộng.
- Số danh mục, ngày, kích thước tác phẩm: JetBrains Mono 400 ("No. 07", "2026").
- Đã kiểm: cả ba font có bộ chữ tiếng Việt.

## Bề mặt
Giấy phẳng màu da, không vân. Quầng mặt trời là gradient tròn mềm đặt sau tiêu đề; đốm than hồng nhỏ hơn ở góc đối diện. Bản in lót ô vàng trong mờ (lưới 4 cột 8 hàng, các ô độ đậm 35 đến 70%) dùng cho khoảng trống lớn.
```css
background: radial-gradient(closest-side, rgba(241,238,46,.92) 0%, rgba(241,238,46,.58) 36%, rgba(240,218,124,.22) 62%, rgba(233,229,219,0) 100%);
```

## Ngôn ngữ minh họa
- **Mảng vàng tràn:** khối chữ nhật cạnh thẳng, chiếm một phần ba, một cột, một dải hay toàn trang.
- **Đường kẻ mảnh** chàm 2px, ngang và dọc, chia trang như lưới catalogue.
- **Thanh mực** chàm dày 14px cho biểu đồ.
- **Ô in lót:** hình chữ nhật vàng trong mờ chồng nhau, như bản thử màu.
- Ảnh tác phẩm đặt phẳng, không viền, không bóng, kèm chú thích kiểu bảo tàng (tên, năm, chất liệu) bằng chữ đơn cách nhỏ.

## Chữ ký chuyển động
- **Mặt trời mọc:** quầng vàng `rise` chậm từ dưới mép trang lên sau tiêu đề, độ đậm tăng dần.
- **Mảng vàng tràn như mực in:** mảng vàng `wipe` một lần dứt khoát, sau đó đứng yên; giữa các slide nó gập lại hoặc dời chỗ bằng `data-morph="panel"`.
- **Kẻ lưới catalogue:** đường kẻ mảnh `draw` từ trái sang, rồi chữ mới `fade` vào ô của nó.
- **Ô in lót hiện từng ô:** các ô vàng `fade` trễ dần không theo thứ tự rõ, như mực bắt giấy.
- **Hơi ấm thở:** đốm than hồng `pulse` rất chậm, gần như không thấy.
- Nhịp: chậm, lặng, nhiều khoảng nghỉ; không nảy, không cắt gắt.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** một phần ba trang vàng, tên triển lãm chữ Playfair khổng lồ màu chàm, quầng mặt trời phía sau, năm tổ chức chữ đơn cách ở góc.
- **Nghệ sĩ tham gia:** cột vàng bên phải, danh sách tên chữ serif lớn bên trái, đường kẻ mảnh giữa mỗi tên.
- **Con số:** con số đầu tiên được "thắp" trên ô vàng, các số còn lại chìm trong quầng sáng.
- **Kết:** mặt trời mọc từ chân trang, ô in lót phủ khắp, lời mời đến xem.

## Nên tránh
Bóng đổ, bo góc, màu thứ ba cho chữ, gradient nhiều màu, icon phẳng, chữ đậm nặng nề cho tiêu đề, lấp đầy khoảng trống.

## Họ hàng
`silkscreen-poster` (cũng áp phích ấm, phẳng nhưng là in lụa du lịch hoài cổ, nhiều màu hơn), `cobalt-grid` (biên tập tĩnh lặng nhưng một màu cobalt lạnh trên lưới), `editorial-tri-tone` (biên tập ấm ba màu, chỉn chu kiểu tạp chí hơn là catalogue).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
