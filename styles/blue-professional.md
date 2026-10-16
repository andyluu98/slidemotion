# Blue Professional (báo cáo tư vấn xanh cobalt)

> Nền kem ấm, một màu cobalt bão hòa cho mọi điểm nhấn, thẻ nhuộm xanh 4% viền mềm. Bình tĩnh, rõ ràng, đáng tin như một báo cáo tư vấn tốt.

**Hợp:** báo cáo tư vấn, pitch B2B, báo cáo nhà đầu tư, họp đánh giá, đề xuất chiến lược, kế hoạch kinh doanh.
**Không hợp:** sự kiện vui chơi, trẻ em, văn hóa truyền thống, nghệ thuật cảm xúc.
**Cảm xúc:** chuyên nghiệp, điềm tĩnh, đáng tin, hiện đại.

## Hình dung
Như đọc một bản báo cáo của hãng tư vấn hàng đầu được dàn trang đẹp: giấy kem ấm thay vì trắng lạnh, mọi số liệu nằm trong thẻ nhạt viền xanh, và chỉ có một màu cobalt đậm để chỉ ra điều quan trọng. Ở bìa có một tấm panel xanh nhạt cắt chéo, một đĩa cobalt đặc nằm trong hai vòng tròn đồng tâm như con dấu thương hiệu. Người xem cảm thấy được dẫn dắt bằng logic: mỗi slide một kết luận, có bằng chứng bên dưới.

## Bảng màu
```css
--cream: #fdfae7;     /* nền kem ấm */
--fg: #111111;        /* chữ chính */
--muted: #6b6b6b;     /* chữ phụ, nguồn số liệu */
--cobalt: #1e2bfa;    /* màu nhấn duy nhất */
--tint: rgba(30,43,250,.08);   /* panel nhuộm xanh nhạt */
--card-bg: rgba(30,43,250,.04); /* thẻ nhuộm 4% */
--edge: rgba(30,43,250,.2);    /* viền thẻ, vòng tròn */
```
Luật màu nhấn: cobalt chỉ dành cho kết luận, con số chính, hoặc khối cấu trúc (gáy, dải tiêu đề, trục). Phần còn lại là đen, xám và các sắc độ trong suốt của chính cobalt. Không thêm màu thứ hai; muốn phân biệt thì dùng độ đậm nhạt của cobalt.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Space Grotesk 700, giãn -0,02em, viết thành câu kết luận chứ không phải nhãn chủ đề.
- Số liệu lớn: Space Grotesk 600 đến 700, màu cobalt.
- Thân, chú thích, nguồn: Inter 400 đến 500.
- Đã kiểm: cả hai font có bộ chữ tiếng Việt.

## Bề mặt
Nền kem phẳng. Thẻ bo 14px, nền cobalt 4%, viền 1,5px cobalt 20%, không bóng đổ. Lưới chấm cobalt nhỏ (chấm 3px, ô 18px) mờ 35% làm điểm trang trí ở một góc.
```css
background-image: radial-gradient(circle, #1e2bfa 3px, transparent 3.6px);
background-size: 18px 18px;
```

## Ngôn ngữ minh họa
- **Đĩa cobalt** đặc trong **hai vòng tròn đồng tâm** viền mảnh: dấu hiệu nhận diện, đặt ở bìa và kết.
- **Panel cắt chéo** nhuộm xanh nhạt (cạnh trái xiên 30%).
- **Vạch nhấn** cobalt 60 nhân 4px đặt trên tiêu đề.
- **Thanh viên nhộng** cao 6px: phần đầy cobalt, phần rỗng nhuộm nhạt, cho tiến độ và tỷ lệ.
- Biểu đồ phẳng: cột cobalt cho dữ liệu chính, cobalt nhạt cho so sánh, không 3D, không gradient. Ghi nguồn dưới mỗi biểu đồ.
- Sơ đồ: thẻ nhuộm nối bằng đường 1,5px màu viền, mũi tên nhỏ.

## Chữ ký chuyển động
- **Kết luận trước, bằng chứng sau:** tiêu đề `fade` trước, thẻ số liệu `rise` lần lượt (`data-stagger="120"`) bên dưới.
- **Đĩa biến thành cấu trúc:** đĩa cobalt ở bìa kéo dài thành gáy trái, rồi phình thành khối, rồi thu thành trục thời gian (`data-morph="slab"` xuyên deck).
- **Thanh lấp đầy:** thanh viên nhộng `wipe` tới tỷ lệ thật, số `data-count` chạy cùng lúc.
- **Vòng tròn đồng tâm lan:** hai vòng `zoom` nhẹ từ tâm đĩa, như sóng tín hiệu, một lần rồi đứng.
- **Bóc lớp theo cú bấm:** từng luận điểm hiện theo `data-step` khi trình bày trực tiếp với khách.
- Nhịp: điềm tĩnh, đều, không nảy; chuyển slide hòa dần mặc định, chương mới `data-transition="wipe"`.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** panel chéo xanh nhạt bên phải, đĩa cobalt trong hai vòng tròn, tên báo cáo chữ đen lớn bên trái, vạch nhấn cobalt phía trên.
- **Tóm tắt điều hành:** ba thẻ nhuộm xếp ngang, mỗi thẻ một con số cobalt lớn và một dòng kết luận.
- **Bảng điều khiển:** dải tiêu đề cobalt trên cùng chữ kem, bên dưới thẻ lớn chứa các thanh tiến độ.
- **Kết:** cobalt tràn kín, các vòng tròn đồng tâm màu kem, khuyến nghị cuối chữ kem.

## Nên tránh
Màu nhấn thứ hai, nền trắng tinh lạnh, bóng đổ, biểu đồ 3D hay bánh nhiều màu, ảnh stock bắt tay, tiêu đề chỉ là danh từ ("Doanh thu") thay vì kết luận, số liệu không ghi nguồn.

## Họ hàng
`swiss-modern` (rõ ràng chuyên nghiệp nhưng lưới Thụy Sĩ trắng đen với nhấn đỏ), `cobalt-grid` (cũng cobalt nhưng chất nghiên cứu biên tập, lưới nhiều hơn), `signal` (trang trọng đáng tin, có chiều sâu tối hơn).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
