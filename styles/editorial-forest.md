# Editorial Forest (tạp chí văn chương xanh rừng)

> Một số tạp chí văn chương ra theo quý: xanh rừng, hồng phấn bụi, giấy yến mạch. Chữ serif đậm vừa, nhãn mono IN HOA, đường kẻ 2px, ô bo 6px, không bóng.

**Hợp:** báo cáo quý, tổng kết nội bộ, cập nhật studio, ra mắt sách, bản tin cộng đồng, báo cáo bền vững nhẹ nhàng.
**Không hợp:** ra mắt công nghệ sôi động, trẻ em, sự kiện lễ hội, nội dung cần nhiều màu số liệu.
**Cảm xúc:** trầm lắng, chỉn chu, ấm áp, văn chương.

## Hình dung
Như cầm trên tay một tạp chí in giấy mờ: trang bìa xanh rừng sâu với chữ hồng, trang trong giấy yến mạch chữ mực, thỉnh thoảng một cột hồng phấn đứng bên lề. Ở góc có vòng tròn đóng số "N°" như số phát hành, và một biểu đồ cột tí hon ba màu như hình minh họa trong bài. Người xem cảm thấy được tôn trọng: số liệu được kể như một bài viết.

## Bảng màu
```css
--cream: #efe7d4;      /* giấy yến mạch: nền đọc */
--cream-2: #e6dcc4;    /* ô, thẻ */
--fg: #1a1a17;         /* chữ mực */
--muted: #4f5a4a;
--green: #2e4a2a;      /* xanh rừng: mặt phẳng lớn, tiêu đề, đường kẻ */
--green-deep: #243a21; --green-lite: #3a5a36;
--pink: #e89cb1;       /* hồng phấn: nhấn, cột lề, chữ trên nền xanh */
--pink-deep: #d27e96;
```
Luật màu: hai giọng. Trên giấy yến mạch, tiêu đề và đường kẻ màu xanh rừng. Khi xanh phủ trang, chữ đổi sang kem và nhấn đổi sang hồng. Hồng không bao giờ phủ trang trừ slide kết.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
```
- Tiêu đề và thân: Source Serif 4; tiêu đề 500 giãn -0,02em, dòng sát 0,96 ở bìa; thân 400; chữ đậm 600.
- Nhãn, meta, nguồn: JetBrains Mono 500 IN HOA, 24px, giãn 0,16em.
- Cả hai font có tiếng Việt (đã kiểm Google Fonts, 16/10/2026).

## Bề mặt
Giấy phẳng, không hạt, không bóng. Hairline 2px xanh rừng ở đầu và chân trang như lề tạp chí. Ô nội dung nền `--cream-2`, viền 2px xanh, bo 6px.

## Ngôn ngữ minh họa
- **Biểu đồ cột tí hon** ba cột (hồng, xanh, xanh nhạt) trên một đường đáy 2px: họa tiết biên tập, không phải số liệu thật nếu không có nguồn.
- **Vòng monogram "N°"** viền 2px, chữ mono ở giữa: dùng đánh số chương, số phát hành.
- Ô vuông bo nhẹ 6px, cột hồng chạy hết chiều cao làm lề.
- Biểu đồ thật: cột phẳng, trục hairline, nhãn mono, màu lấy từ ba tông xanh và hồng.
- Minh họa (nếu cần) là lá, cành vẽ nét serif mảnh, một màu.

## Chữ ký chuyển động
- **Lật trang xanh:** mặt phẳng xanh rừng dâng từ dưới lên phủ trang (`rise-wipe`) khi vào chương, như lật sang trang in màu.
- **Cột tí hon mọc:** ba cột `rise-wipe` lần lượt (`data-stagger="140"`), sau đó đứng yên.
- **Vòng N° tự vẽ:** vòng tròn `draw` một vòng, chữ "N°" và số `fade` vào giữa, như đóng số phát hành.
- **Hairline kẻ lề:** đường đầu và chân trang `wipe` từ trái trước khi chữ hiện, như dàn trang.
- **Cột hồng trượt vào lề** và đổi vai giữa các slide (`data-morph="pink"`), lúc là cột, lúc là dải ngang.
- Nhịp: điềm tĩnh, đều tay như lật trang, không nảy.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** trang xanh rừng, tiêu đề hồng serif lớn, tấm hồng bên phải mang biểu đồ tí hon, vòng N° đóng ở góc.
- **Mục lục:** dải xanh đầu trang, danh mục serif đánh số mono, hairline chia cột.
- **Số liệu quý:** xanh phủ trang, con số kem `data-count`, hairline hồng chia ô, biểu đồ tí hon ở thanh trên.
- **Kết:** hồng phủ trang, xanh rút xuống, lời cảm ơn serif xanh đậm.

## Nên tránh
Bóng đổ, gradient, bo góc lớn, chữ serif quá đậm (700 trở lên), thêm màu ngoài xanh và hồng, biểu đồ tí hon gắn số bịa.

## Họ hàng
`grove` (cũng xanh rừng văn chương nhưng nền tối, giấy da, nhấn san hô đất và vòng gỗ), `soft-editorial` (tạp chí thanh lịch nền sáng, Cormorant), `signal` (Source Serif 4 trang trọng cho hội đồng quản trị, chính sách).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
