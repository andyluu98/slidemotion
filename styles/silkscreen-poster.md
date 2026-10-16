# Poster in lụa (poster du lịch in từng lớp mực)

> Mỗi slide là một tờ poster du lịch kéo từng lớp mực đặc qua lưới lụa: trời bậc thang, mặt trời vòng tròn, ba lớp núi, và một chấm cam đỏ hiếm hoi.

**Hợp:** điểm đến, du lịch, sự kiện, giới thiệu địa điểm hoặc sản phẩm theo loạt.
**Không hợp:** số liệu dày, công nghệ phần mềm, nội dung cần nhiều chữ.
**Cảm xúc:** ấm áp, phẳng, hoài cổ, du lịch.

## Hình dung
Một xưởng in lụa: tờ giấy kem đặt trên bàn, người thợ kéo dao gạt mực, mỗi lần một màu. Mực sau phủ kín mực trước. Người xem thấy chiều sâu chỉ nhờ độ đậm: xa thì nhạt, gần thì đậm. Thông tin nằm ở dải tối cuối tờ, cảnh vật kể phần còn lại.

## Bảng màu
```css
--paper: #F4E9D0;   /* giấy kem: chỗ không in là chỗ sáng nhất */
--card: #FBF3DF;    /* thẻ */
--s1: #F6CD98;      /* trời sáng */
--s2: #EE9A73;      /* trời đậm, vạch bậc thang */
--far: #9A7FA8;     /* núi xa tím hoa cà (mặt sáng #B99BC0) */
--mid: #3E7079;     /* đồi giữa xanh két (mặt sáng #5E9096) */
--near: #1E3B3F;    /* lớp gần nhất, dải thông tin, chữ */
--acc: #E8553D;     /* cam đỏ: mặt trời, đường đi duy nhất, con số quan trọng nhất */
--ghost: #7A2616;   /* bóng lệch đăng, mờ 42% */
--accent-text: #B83A22;  /* chữ nhấn trên giấy */
```
Tối đa sáu mực cho một hình, giấy kem là màu thứ bảy. Màu nhấn chỉ cho một vật mỗi slide. Bản in đêm: nền `--near`, chữ `--paper`, nhấn `--s1`.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Big Shoulders Display 800, IN HOA, giãn 0,02em (nhãn trong hình giãn 0,1em), như chữ trên poster công viên quốc gia.
- Thân: Be Vietnam Pro 400 đến 600.
- Cả hai font có bộ chữ tiếng Việt (đã kiểm Google Fonts ngày 16/10/2026).

## Bề mặt
Giấy kem có sợi và loang nhẹ, mép tờ tối hơn như chỗ tay cầm. Không tram, không nhiễu hạt mạnh.
```css
background:
  radial-gradient(ellipse at 50% 50%, rgba(160,120,60,0) 60%, rgba(160,120,60,.14) 100%),
  #F4E9D0;
```

## Ngôn ngữ minh họa
- **Không viền.** Hình chỉ có `fill`; nét chỉ dành cho vòng mặt trời, đường chấm, đường dóng mảnh.
- **Trời bậc thang** thay cho gradient: khối đậm phía trên, rồi vạch sáng và vạch đậm xen kẽ, vạch đậm mỏng dần (20, 14, 10, 7, 5, 3), cuối là giấy trắng.
- **Lệch đăng cố định** 2 đến 3px: bản in sau lệch (+3, +3); mặt trời có bóng ma lệch (3, 3).
- **Mặt sáng của núi:** tam giác lởm chởm ở sườn trái đỉnh; đồi giữa in lớp sáng rồi in lớp tối lệch (14, 12).
- Hình mẫu: mặt trời lõi đặc bốn vòng mảnh dần, thẻ poster nhỏ (một slide thu nhỏ), đường đi in từng chấm (nét 7px, `dasharray 0 17`), huy hiệu số tròn màu giấy, dải thử mực sáu ô, dấu căn đăng chữ thập ở góc.
- Kể bằng cảnh: núi, thông, đường mòn. Không vẽ người, không nhét số liệu vào hình.

## Chữ ký chuyển động
- **Kéo từng lớp mực:** hình hiện theo đúng thứ tự in (trời, núi xa, đồi giữa, lớp gần, chữ), mỗi lớp một `wipe` theo chiều dao gạt, `data-stagger` khoảng 220ms. Không fade lẻ từng nét.
- **Trời hạ bậc:** các vạch bậc thang `rise-wipe` từ trên xuống, mỏng dần như mực cạn.
- **Mặt trời khớp đăng:** bóng ma `--ghost` hiện trước, đĩa cam đỏ `fade` vào trễ một nhịp và nằm lệch đúng 3px.
- **Núi trượt chiều sâu:** ba lớp núi là lớp cố định theo `data-scene`, đổi slide thì lớp gần trượt xa hơn lớp xa, như lia máy qua một dãy poster.
- **Đường chấm in từng chấm:** các chấm `pop` với `data-stagger` nhỏ, không dùng `draw` (sẽ phá nét đứt).
- Nhịp: từng cú dứt khoát, cả hình xong trong khoảng 2 giây, không lặp, không rung.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tờ poster lớn in dần từng lớp, mặt trời khớp đăng sau cùng, tên điểm đến IN HOA ở dải tối.
- **Hành trình:** đường mòn chấm cam đỏ leo từ chân núi lên đỉnh, mỗi trạm là một vầng giấy, trạm cuối là mặt trời.
- **Giới thiệu theo loạt:** ba thẻ poster nhỏ cùng bảng mực, lần lượt `drop` xuống như ba tờ in vừa ra lò.
- **Kết:** bản in đêm: cả tờ ngập mực `--near`, chữ màu giấy, một vầng trăng màu giấy thay mặt trời.

## Nên tránh
Gradient, viền quanh hình đặc, chấm tram, bóng đổ mờ, glow, 3D, quá sáu mực, màu nhấn cho nhiều vật, số đo hay giá bịa trong hình, chép poster, tên công viên hay logo có thật.

## Họ hàng
`risograph` (mực trong chồng màu, có tram, lệch đăng mạnh, trẻ trung hơn), `bold-poster` (chữ khổng lồ làm nhân vật chính, không kể bằng cảnh), `ukiyoe` (cũng in từng bản màu và lệch đăng, nhưng có nét khóa đen và chất Nhật).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
