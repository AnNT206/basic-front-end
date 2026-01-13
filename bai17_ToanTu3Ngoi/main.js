// Toán tử 3 ngôi
/*
biến = biểu thứ 1 ? biểu thức 2 : biểu thức 3
nếu biểu thức 1 đúng (true) thì nhân giá trị đằng sau dấu ? ->(biểu thức 2)
ngược lại nếu sai (false) thì nhận giá trị đằng sau dấu : ->(biểu thức 3)
*/

let number = 10;
let message = number > 0 ? "Số dương" : "Số âm";
console.log(message); // Kết quả: Số dương

let number2 = Number(prompt("Nhập số bất kỳ: "));
let message2 = number2 % 2 === 0 ? "Số chẵn" : "Số lẻ";
console.log(message2);

//Bài tập
let dtb = Number(prompt("Nhập điểm trung bình: "));
let hocLuc =
  dtb >= 8 ? "Giỏi" : dtb >= 6.5 ? "Khá" : dtb >= 5 ? "Trung bình" : "Yếu";
console.log(`Học lực của bạn là: ${hocLuc}`);
