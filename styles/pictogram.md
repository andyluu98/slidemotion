# Pictogram (thẻ nhận diện thể thao trên lưới vuông)

> Một bộ thẻ nhận diện giải đấu: lưới vuông 180px, đĩa và bán nguyệt màu phẳng, người que không mặt làm đúng một việc, chữ grotesk thật đậm, mỗi chương một màu nền.

**Hợp:** sự kiện, giải đấu, nhận diện thương hiệu, mở màn chương trình, danh mục từng mục một, hướng dẫn an toàn, chiến dịch nội bộ sôi nổi.
**Không hợp:** nội dung trầm lắng, văn chương, báo cáo tài chính dày, văn hóa truyền thống.
**Cảm xúc:** thể thao, phẳng, rộn ràng, nhận diện.

## Hình dung
Như xem đoạn mở màn của một kỳ thể thao lớn: màn hình chia ô vuông chặt, các đĩa màu, nửa đĩa, phần tư đĩa và ô họa tiết trượt khớp vào lưới, một người que chạy ngang, thanh vạch ở đáy đếm từng thẻ. Mỗi chương đổi một màu nền như đổi môn thi. Người xem thấy nhịp nhanh, rõ, và một hệ thống nhất quán.

## Bảng màu
```css
--ink: #1b1712;      /* người que, thanh, nét, chữ trên nền sáng */
--cream: #f7f0de;    /* thẻ, nền chương sáng, chữ trên nền màu */
--gold: #f5b90a;     /* nền bìa và kết */
--red: #bf3620;      /* chương số liệu */
--violet: #4e3392;   /* chương mở phần */
--green: #17633d;    /* chương so sánh */
--sun: #fbe08a;      /* vàng sáng: đĩa sân khấu, phần "bị cắt" */
```
Mỗi chương một màu nền và một bộ năm tông cùng họ cho các khối (ví dụ chương vàng: `#e4a800`, `#c98f00`, `#f9cf45`, `#fbe08a`). Bìa và kết vàng, nội dung và dòng thời gian kem, mở phần tím, so sánh xanh lá, số liệu đỏ, trích dẫn mực. Trên nền kem, khối dùng đủ bốn màu chương; trên nền màu, khối dùng các tông cùng họ. Chữ luôn đủ tương phản với nền của đúng chương đó.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;800;900&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet">
```
- Tiêu đề: Inter Tight 900, IN HOA, sát chữ, cực đậm như chữ trên áo đấu.
- Thân: Inter Tight 400 đến 600.
- Nhãn meta góc thẻ, số thứ tự: IBM Plex Mono 600, IN HOA, giãn 0,1em, 18 đến 22px.
Cả hai font có tiếng Việt (đã kiểm ngày 16/10/2026).

## Bề mặt
Nền màu phẳng của chương, lưới vuông 180px kẻ mực 7 phần trăm. Không chất liệu, không hạt: sạch như đồ họa phát sóng.
```css
background-image: linear-gradient(rgba(27,23,18,.07) 2px, transparent 2px), linear-gradient(90deg, rgba(27,23,18,.07) 2px, transparent 2px);
background-size: 180px 180px; background-position: -1px -1px;
```

## Ngôn ngữ minh họa
- **Khối hình học trên lưới:** đĩa, bán nguyệt, phần tư đĩa, ô họa tiết (vòng đồng tâm từ góc, chấm đều 30px). Mọi khối đặt theo ô 180px.
- **Người que kiểu Olympic:** đầu là đĩa, thân và tay chân là thanh bo tròn đầu; không mặt, không tóc, không quần áo. Tay chân phía xa cùng màu nhưng mờ 45 phần trăm. Một người làm một việc (chạy, đứng, giơ tay chữ V).
- Thứ tự vẽ người: tay chân xa, thân, tay chân gần, đầu. Tư thế cũ bọc độ mờ 40 phần trăm.
- **Thanh tốc độ** sau lưng người chạy, **đường mặt đất** dưới chân.
- **Viên thuốc đánh số:** chữ nhật bo tròn hết cỡ, đĩa màu ở đầu mang số kem, thanh tên, bảy vạch chia.
- **Thẻ chồng "bóng ảnh cũ":** hai thẻ nét đứt phía sau, một thẻ đặc phía trước.
- Độ dày: thanh 22px (mảnh 18px), mặt đất 6px, trục 10px, viền thẻ 6px. Chỉ tô phẳng, không viền mảnh quanh khối.

## Chữ ký chuyển động
- **Khối trượt khớp lưới:** giữa hai slide, đĩa, bán nguyệt, phần tư đĩa `data-morph` trượt sang ô mới, đổi cỡ theo bội số ô, dừng đúng mép lưới.
- **Đổi chương bằng cú cắt màu:** sang chương mới dùng `data-transition="cut"`, cả nền đổi màu một nhát, các khối đổi tông theo.
- **Người que đổi tư thế:** tư thế cũ mờ đi còn 40 phần trăm, tư thế mới `pop` đè lên, mũi tên thanh bo tròn `wipe` nối hai tư thế.
- **Thanh đếm thẻ:** con trỏ trên thanh vạch ở đáy nhảy sang vạch kế tiếp mỗi slide (lớp cố định theo `data-scene`), như bảng điểm.
- **Ánh quét trên đĩa sân khấu:** một vệt sáng chéo lướt qua đĩa lớn một lần khi vào slide (`wipe` trên lớp vệt sáng).
- Nhịp: nhanh, dứt khoát, nảy rất nhẹ khi khớp; không rung lắc, không lặp.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** nền vàng, đĩa sân khấu lớn bên phải, người que chạy trên đường mặt đất kèm thanh tốc độ, ba thẻ chồng nhau ở phía trước; tên sự kiện chữ 900 bên trái.
- **Danh mục, chương trình:** các viên thuốc đánh số lần lượt `pop` theo `data-stagger`, mỗi viên một màu chương.
- **Quy trình:** trục mực dày vẽ dần, trạm là đĩa màu viền mực, một người que nhỏ chạy dọc trục tới trạm kế.
- **Con số:** nền đỏ, số cực lớn chữ kem, bên dưới hàng đĩa đếm ý; hàng quá dài biến thành bán nguyệt vàng sáng "bị cắt".

## Nên tránh
Màu ngoài bảng, gradient, bóng đổ, viền mảnh quanh khối, blur, glow; người có mặt, biểu cảm, quần áo; nhiều người làm nhiều việc trong một hình; số liệu bịa trên hình; bắt chước pictogram, biểu trưng, khẩu hiệu của một sự kiện thể thao có thật.

## Họ hàng
`bauhaus` (hình học cơ bản và màu gốc, tính giáo dục thiết kế, không có người que), `swiss-modern` (lưới chữ tối giản, nghiêm, doanh nghiệp; pictogram rộn ràng, có nhân vật), `block-frame` (khối màu táo bạo kiểu pop agency, khung dày; pictogram theo lưới ô vuông chặt và đổi màu theo chương).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
