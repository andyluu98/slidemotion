# Cắt giấy đỏ (giấy đỏ cắt kéo, đặt trên giấy kem)

> Một tờ giấy đỏ cắt bằng kéo đặt phẳng trên giấy kem: đường cắt chính là nét vẽ, lỗ thủng để nền lộ ra, một bông mai vàng là điểm sáng.

**Hợp:** Tết, lễ hội, thiệp chúc mừng, sự kiện cuối năm, văn hóa dân gian, khai trương, quà tặng.
**Không hợp:** công nghệ, số liệu kỹ thuật, nội dung u buồn, báo cáo dày chữ.
**Cảm xúc:** lễ hội, may mắn, truyền thống, tươi vui.

## Hình dung
Như mở một tấm thiệp tự cắt tay ngày Tết: tờ giấy đỏ gấp tư gấp tám rồi cắt, mở ra thành bông tròn đối xứng; nếp gấp mờ vẫn còn, bóng giấy mỏng sát dưới mép. Không tô, không viền: mọi chi tiết đến từ phần bị cắt bỏ. Người xem thấy sự khéo tay và không khí sum vầy.

## Bảng màu
```css
--pc-paper: #F4E7CD;   /* giấy kem nền */
--pc-cream: #FBF0DA;   /* chữ trên tờ đỏ */
--pc-ink: #3D1411;     /* chữ trên giấy kem */
--pc-red: #C8201E;     /* giấy đỏ chính: hình chính, mảnh gần */
--pc-deep: #9A1518;    /* đỏ thẫm: mảnh nặng, cuống nối, sóng nước */
--pc-pale: #E2775F;    /* đỏ nhạt: mảnh xa (mây, đồi) */
--pc-gold: #D9A534;    /* vàng kim: một điểm nhấn mỗi slide */
--pc-shadow: rgba(92, 14, 11, 0.3);  /* bóng giấy */
--muted: #7B4A3C;
```
Chiều sâu bằng tông giấy cách nhau một bậc: xa đỏ nhạt, gần đỏ chính, nặng đỏ thẫm. Vàng kim chỉ một chỗ mỗi slide (bông mai, con số quan trọng nhất), không thành màu chính thứ hai. Đỏ không đặt thẳng lên đỏ cùng tông. Khi chữ nằm trên tờ đỏ, chữ dùng kem, nhấn dùng vàng `#F2C14E`.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,500;0,700;0,800;1,600&family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Spectral 800, giãn rất nhẹ âm, trang trọng mà ấm; chữ nghiêng 600 cho câu chúc.
- Thân, nhãn: Lexend 400 đến 600, tròn và dễ đọc.
Cả hai font có tiếng Việt (đã kiểm ngày 16/10/2026).

## Bề mặt
Giấy kem có hạt sợi mịn, hai nếp gấp mờ chữ thập qua giữa trang. Tờ đỏ lớn có mép răng cưa trên dưới, nếp gấp hồng mờ ở giữa, bóng giấy sát lệch phải dưới.
```css
background-image:
  linear-gradient(90deg, transparent calc(50% - 1px), rgba(140,80,50,.07) 50%, transparent calc(50% + 1px)),
  linear-gradient(0deg, transparent calc(50% - 1px), rgba(140,80,50,.06) 50%, transparent calc(50% + 1px));
```

## Ngôn ngữ minh họa
- **Bông tròn 8 cánh** (biểu tượng của style, cho "trung tâm", "chu kỳ"): vỏ răng cưa, vòng chỉ âm có cầu nối, vòng trăng lưỡi liềm, cánh lá thủng xen hình thoi, lỗ tâm dán bông mai vàng.
- **Lỗ thủng:** vỏ và mọi lỗ gom vào một `<path>` với `fill-rule="evenodd"`; lỗ không chồng lỗ; không có đảo nổi (vòng cắt kín thì phần giữa rơi mất).
- **Mây cuộn** (3 đến 4 vòng tròn trên đáy phẳng, mỗi vòng khoét lưỡi liềm), **sóng nước vảy** đỏ thẫm, **dải răng cưa** có hàng lỗ tròn và thoi, **trăng lưỡi liềm**.
- **Bông mai vàng** 5 cánh, mảnh dán đè lên đỏ.
- **Bóng giấy:** vẽ cùng path hai lần, lần dưới tô bóng lệch (2, 3), không blur.
- Nét chỉ cho cuống nối (đỏ thẫm 6 đến 8px), đường kéo (kem 2 đến 3px), nếp gấp (hồng mờ 1 đến 1,5px).
- Họa tiết sinh từ hình học (múi gấp 45 độ, lặp xoay), không chép mẫu của nghệ nhân.

## Chữ ký chuyển động
- **Mở gấp:** bông tròn nở từ rất nhỏ và xoay từ -90 độ về 0 trong khoảng 1,1 giây, như tờ giấy gấp vừa được mở ra. Gần nhất là `zoom`; phần xoay tự viết keyframes trên lớp bọc (bản PPTX hạ về Zoom).
- **Bật mảnh kiểu cắt giấy:** bông mai, ô cửa sổ hiện bằng `pop` có nhịp giật hai khung (`steps(2)`), như hoạt hình cắt giấy 12 hình mỗi giây, lệch nhau bằng `data-stagger`.
- **Đường kéo chạy:** đường kéo kem, cuống nối, nếp gấp vẽ dần bằng `draw`, như lưỡi kéo đang đi.
- **Tờ đỏ kéo lên như màn sân khấu:** tờ đỏ lớn là lớp cố định theo `data-scene`, trượt từ đáy lên phủ nửa slide ở slide chương, rút xuống ở slide nội dung.
- **Mai vàng rơi rồi đậu** (`drop` trễ dần) ở slide chúc mừng.
- Nhịp: vui, giật nhẹ như đồ thủ công, không trơn tru kiểu máy.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** một bông tròn lớn nửa phải mở gấp ra, mây đỏ nhạt ở hai góc chéo, bông mai vàng bật vào tâm; tên sự kiện chữ Spectral bên trái.
- **Hành trình, cột mốc:** dải răng cưa làm trục, đường kéo kem chạy dọc, mỗi mốc một bông mai vàng bật lên.
- **Sơ đồ khái niệm:** bông tròn giữa là gốc, các huy chương răng cưa xung quanh khoét hình tượng, cuống đỏ thẫm vẽ dần nối vào.
- **Câu chúc, kết:** tờ đỏ kéo lên, chữ kem lớn, mai vàng rơi lả tả rồi đậu.

## Nên tránh
Màu ngoài bảng; vàng kim quá một điểm mỗi slide; đỏ trên đỏ cùng tông; nét viền quanh hình, gradient, khối 3D, phối cảnh; chữ trong ảnh; lỗ chồng lỗ, đảo nổi; `filter` blur, `mix-blend-mode`; chép hoa văn có tác giả.

## Họ hàng
`son-mai` (nền sơn then tối, vàng lá, sang và lắng; cắt giấy thì sáng, vui, thủ công), `dong-ho` (tranh dân gian mảng màu phẳng có nét viền, kể chuyện; cắt giấy không có nét, chỉ có lỗ thủng), `paper-popup` (sách giấy dựng đứng nhiều lớp có chiều sâu; cắt giấy nằm phẳng một mặt).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
