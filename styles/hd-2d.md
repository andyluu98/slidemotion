# HD-2D (sprite pixel trong mô hình thu nhỏ có đèn)

> Nhân vật pixel phẳng đứng giữa một diorama về đêm: sương chàm, đèn lồng ấm, vầng sáng trên đá lát. Cái chuyển động mượt là ánh sáng, không phải nhân vật.

**Hợp:** trailer game, kể chuyện, giới thiệu thương hiệu, nội dung giả tưởng và hoài niệm, mở màn sự kiện có không khí.
**Không hợp:** số liệu dày, bảng biểu kỹ thuật, nội dung cần đọc nhanh nhiều chữ.
**Cảm xúc:** ấm áp, huyền ảo, ánh sáng, diorama.

## Hình dung
Người xem nhìn từ trên xuống và hơi xéo vào một sa bàn thu nhỏ: bầu trời chàm lúc chạng vạng có viền tối, hai dãy núi bậc thang, ngôi làng có cửa sổ sáng, cây thông, một cột đèn đường đổ vũng sáng ấm. Người lữ hành áo choàng đỏ san hô đứng như tấm bìa cắt. Mỗi slide đổi một màu sương, như máy quay lia sang góc khác của cùng một thế giới.

## Bảng màu
```css
--sky: #2b2a66;     /* sương nền, đổi theo slide */
--ink: #14102e;     /* tối nhất, không dùng đen thuần */
--fg: #F6ECD6;      /* chữ kem */
--muted: #D8CFB6;
--gold: #E8C27A;    /* kim loại duy nhất: khung giao diện, nhãn */
--card-bg: rgba(14,10,36,.82);  /* tấm giao diện tối trong mờ */
/* sương mỗi slide: #2b2a66 #1e2554 #4a2c66 #1d2f5c #322868 #2a3a5e #23204d #1f3355 #3a2148 #4a2f5e
   đá #4a3f78 sáng #5a4e90 tối #2b2554 khe #221d48
   đèn ấm #ffb347 lõi #fff3c4
   nhân vật chính: áo #e8553a, bóng áo #b13e2e, da #f2c9a0 */
```
Một tông lạnh lớn đối lập vài nguồn sáng ấm nhỏ. Mỗi hình có đúng một nguồn sáng dẫn mắt (tối đa hai). Màu san hô chỉ dành cho nhân vật chính.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@600;700&family=Cormorant+Garamond:wght@500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Cormorant 700, IN HOA, giãn 0,06em (nhãn trong hình giãn 0,2em), màu kem hoặc vàng. Có tiếng Việt (đã kiểm).
- Thân: Cormorant Garamond 500 đến 600. Có tiếng Việt. Nét serif mảnh, nên giữ cỡ chữ thân lớn và nền tấm tối đủ đặc.

## Bề mặt
Trời chạng vạng có quầng sáng chân trời và viền tối bốn góc, sương nhạt dần lên trên, bụi sáng và sao rải thưa. Đáy là phiến đá lát.
```css
background: radial-gradient(120% 90% at 50% 100%, transparent 50%, rgba(20,16,46,.7)),
            linear-gradient(to top, #4a3f78, var(--sky) 45%, #14102e);
```

## Ngôn ngữ minh họa
- **Hai mức độ nét:** sprite và đồ vật là ô pixel vuông (ô 4, 6 hoặc 8 đơn vị, `crispEdges`), vầng sáng, bóng và sương là tròn, elip trong suốt, mềm. Không trộn nét mềm vào sprite.
- **Vầng sáng** là các vòng tròn đồng tâm cùng màu ấm, độ mờ 0,07 đến 0,2, lõi đậm nhất; không dùng `filter`.
- **Bóng** là elip `#05030f` mờ 0,4, lệch ra xa nguồn sáng; **vũng sáng** là elip ấm chồng hai lớp trên mặt đất.
- Đế diorama là ba đa giác (mặt trên, mặt trái đậm, mặt phải đậm nhất), khe lát đá song song hai trục.
- Hình mẫu: đèn lồng giấy kem viền vàng lơ lửng, căn nhà pixel cửa sổ sáng, thông pixel, đèn đường, bảng kê viền vàng có viên thoi số, tia lấp lánh chữ thập, hạt sáng ba lớp.
- Nhân vật không cao hơn 1/8 khung hình.

## Chữ ký chuyển động
- **Thắp nguồn sáng:** cảnh hiện tối trước, rồi đèn bật: lõi `pop`, các vòng sáng nở ra từ trong ra ngoài (`zoom` + `data-stagger`), vũng sáng trên đất hiện sau cùng. Ánh sáng kể chuyện.
- **Lia máy qua các lớp:** núi xa, làng, phiến đá là lớp cố định xuyên deck (`data-scene`), chuyển slide thì mỗi lớp trượt một quãng khác nhau (xa ít, gần nhiều), tạo thị sai.
- **Sương đổi màu:** màu trời chuyển êm sang màu sương mới của slide (chuyển `--sky` có `transition` dài), không cắt.
- **Bụi và đom đóm bay:** vài hạt sáng `data-loop="float"`, đèn lồng giấy lơ lửng nghiêng nhẹ; tối đa hai thứ lặp mỗi slide.
- **Ngó vào chi tiết:** đi sâu vào một ý bằng `data-transition="zoom"`, như máy quay hạ xuống sa bàn.
- **Nhân vật bước chậm:** người lữ hành di chuyển theo bậc pixel, ngắn, rồi đứng yên; phần mượt để dành cho ánh sáng.
- Nhịp: chậm, êm, có khoảng lặng; mọi thứ như đang thở.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** trời chàm, làng xa lên đèn từng ô cửa, đèn đường bật sáng giữa khung, người lữ hành đứng trong vũng sáng; tên deck chữ vàng IN HOA.
- **Chương mới:** máy quay lia ngang qua núi, sương đổi từ chàm sang tím, một đèn lồng giấy lơ lửng mang tên chương.
- **Danh sách:** bảng kê viền vàng như menu nhập vai, mỗi hàng một viên thoi số sáng lên theo cú bấm.
- **Kết:** các đèn tắt dần, chỉ còn đèn lồng và lời cảm ơn, tia lấp lánh rơi quanh.

## Nên tránh
Bloom thật, `filter` mờ, gradient trên sprite; nhân vật dáng mềm cuốn tròn; nhiều hơn hai nguồn sáng ấm trong một hình; màu san hô trên vật khác; cảnh ban ngày không đèn; tên, nhân vật, hoa văn khung của game HD-2D có thật; số liệu bịa; câu dài trong hình.

## Họ hàng
`pixel-rpg` (cùng sprite pixel nhưng phẳng, tươi, có hộp thoại và thanh HP, nhịp giật kiểu 16-bit), `den-long-giay` (cũng đêm và đèn ấm, nhưng là bìa cắt, không có pixel), `stained-glass` (huyền ảo bằng ánh sáng xuyên kính màu, trang nghiêm hơn).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
