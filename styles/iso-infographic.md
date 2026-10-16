# Infographic isometric (sa bàn hệ thống)

> Cả hệ thống đặt trên một sa bàn nhìn nghiêng 30 độ: khối phẳng ba tông không viền, luồng nét đứt có mũi tên, ghim nhãn như bản đồ chỉ dẫn.

**Hợp:** giải thích hệ thống, quy trình, chuỗi cung ứng, kiến trúc phần mềm cho người không chuyên, báo cáo năm, logistics.
**Không hợp:** cảm xúc, văn hóa truyền thống, thời trang, nội dung cần chất thủ công.
**Cảm xúc:** rõ ràng, hệ thống, tươi sáng, hiện đại.

## Hình dung
Người xem như đang cúi nhìn một mô hình thu nhỏ trên bàn: tấm nền nổi có lớp đất nâu ở mép, tòa tháp xanh có cửa sổ, vài khối màu đứng thành trạm, dòng dữ liệu chạy giữa chúng như xe trên đường. Góc nhìn không bao giờ đổi: mọi thứ chỉ trượt, lớn lên, nhỏ lại. Cảm giác: "à, hóa ra nó chạy như vậy".

## Bảng màu
Mỗi màu có ba tông: mặt trên sáng (`-t`), mặt trái vừa (`-l`), mặt phải tối (`-r`).
```css
--ground: #F4F2EC; --paper: #FFFFFF; --ink: #22263A;  /* nền, thẻ trạm, mực đồ nghề */
--plate-side: #D3D8E2; --plate-line: #A3ABBB;          /* cạnh và viền đứt của tấm trạm */
--blue-t: #8DBCE8; --blue-l: #4A88C8; --blue-r: #2F619A;   /* dữ liệu, nước, hệ thống */
--coral-t: #F59A86; --coral-l: #E0644F; --coral-r: #B0473A; /* chủ thể đang kể */
--amber-t: #F7CF6E; --amber-l: #E5A93A; --amber-r: #B8842A; /* nhóm phụ, bước giữa */
--mint-t: #9EDBB4; --mint-l: #55B37F; --mint-r: #3C8A60;    /* kết quả, hoàn tất */
--slate-t: #E3E7EE; --slate-l: #BCC4D2; --slate-r: #939CAF; /* trung tính: máy, giấy */
--muted: #565C72; --accent: #2B67AD;
```
Màu là chú giải bản đồ: một màu một nghĩa, không dùng một màu cho hai nghĩa. Dữ liệu luôn xanh dương; san hô chỉ dành cho chủ thể của slide. Mực chỉ dùng cho đồ nghề (luồng, ghim, đường kích thước).

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Lexend 600, IN HOA, giãn 0,04em, như biển chỉ dẫn.
- Thân, nhãn ghim, tên trạm: Be Vietnam Pro 400 đến 600.
- Số lớn: Lexend 600 đến 700.
Cả hai font có tiếng Việt (đã kiểm ngày 16/10/2026).

## Bề mặt
Nền kem nhạt có lưới isometric mờ (đường chéo 30 độ, chấm ở mắt lưới, ô 69,282 x 40px). Thẻ trạm trắng bo 14px, viền đứt xám, cạnh dày lệch phải dưới như tấm bìa cứng.
```css
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='69.282' height='40'%3E%3Cpath d='M0 0L69.282 40M0 40L69.282 0' stroke='%23C9CFDA' stroke-opacity='.55' fill='none'/%3E%3C/svg%3E");
background-size: 69.282px 40px;
```

## Ngôn ngữ minh họa
- **Phép chiếu cố định:** `x = ox + 0.866·k·(u − v)`, `y = oy + 0.5·k·(u + v) − k·z`. Vẽ xa trước gần sau. Không phối cảnh, không xoay trục.
- **Khối hộp ba đa giác** (trái, phải, trên), không viền, không gradient, không bóng mềm.
- **Tấm nền nổi:** mặt cỏ nhạt, mép là 3 đến 4 dải đất nâu phẳng, có thể có một ao nước xanh.
- **Luồng dữ liệu:** nét đứt 4px (14/10) đi dọc trục u hoặc v, mũi tên là tam giác ép dẹt theo mặt đất.
- **Gói dữ liệu Isotype:** khối xanh nhỏ cạnh 20 đến 24px; muốn nói số lượng thì lặp đúng số khối.
- **Ghim nhãn:** vòng tròn ở tâm mặt trên của vật, cần đứng, gạch ngang, nhãn HTML là thẻ giấy viền mực.
- **Vòng theo dõi:** nửa trước của elip quanh chân vật. **Bóng ma:** viền lục giác nét đứt nơi vật vừa rời đi.

## Chữ ký chuyển động
- **Đường trước, khối sau:** luồng nét đứt hiện trước (`wipe` theo hướng luồng), rồi khối mới `drop` xuống đúng ô, không có gì di chuyển khi chưa có đường.
- **Dòng kiến chạy:** gói dữ liệu đi dọc luồng bằng `<animateMotion>`, nhịp đều, như băng chuyền; đây là thứ lặp duy nhất của slide.
- **Khối trượt trên trục:** giữa hai slide, cùng một khối `data-morph` trượt sang trạm khác và đổi chiều cao, không bao giờ xoay.
- **Tòa tháp mọc tầng:** cột tiến độ dâng bằng `rise-wipe`, cao dần qua từng bước.
- **Ghim cắm xuống:** vòng ghim `pop`, cần và gạch ngang `draw`, nhãn `fade` sau cùng; bóng ma để lại chỗ cũ.
- Nhịp: gọn, máy móc vui vẻ, nảy rất nhẹ khi khối đáp.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** sa bàn bên phải, tháp xanh và ba khối màu đứng trên tấm nền; luồng nối thành vòng, gói dữ liệu bắt đầu chạy; một vòng theo dõi quanh khối san hô.
- **Kiến trúc hệ thống:** các trạm zíc zắc dọc trục, mỗi trạm mang một vật tượng trưng (chồng tấm mỏng là tệp, cụm khối là thành phần), luồng đi đúng trục.
- **Quy trình:** ba đến năm cột cao dần, luồng nhảy cong từ mặt cột này sang cột sau, chủ thể san hô nhảy theo.
- **So sánh trước và sau:** hai tấm trạm cạnh nhau cùng góc nhìn, chỉ khác số khối Isotype, đếm được bằng mắt.

## Nên tránh
Phối cảnh hay nghiêng phép chiếu, khối xoay lệch trục, low poly có ánh sáng, bóng đổ mềm, viền quanh khối đặc; tô san hô cho thứ không phải chủ thể; biểu đồ 3D có trục; đếm Isotype sai số; chữ vẽ trong SVG.

## Họ hàng
`blueprint` (bản vẽ kỹ thuật nét trắng trên giấy xanh, chính xác và cổ điển; iso thì màu tươi, dễ hiểu cho người ngoài ngành), `clay-3d` (khối đất sét bo tròn có ánh sáng, vui cho trẻ em; iso phẳng ba tông, không ánh sáng), `bento-light` (thẻ phẳng chính diện, tối giản; iso có chiều sâu sa bàn).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
