//Ôn tập
alert("Welcome to JavaScript!");
let userName = prompt("Mời bạn nhập tên: ");
console.log("Chào mừng " + userName + " đến với JavaScript!");

// Kiểu number
let soNguyen = Number(prompt("Mời bạn nhập số nguyên: "));
let soThuc = 8.8;

// Kiểu boolean
let check = true;

// Kiểu undifined
let diemToan;

// Kiểu null
let connect = null;

// Xuất giá trị biến
console.log("Số nguyên:", soNguyen);
console.log("Số thực:", soThuc);
console.log("Kiểu dữ liệu của soNguyen là: ", typeof soNguyen);
console.log("Kiểu dữ liệu của soThuc là: ", typeof soThuc);
console.log("Kiểu dữ liệu của check là:", typeof check);
console.log("Kiểu dữ liệu của diemToan là:", typeof diemToan);
console.log("Kiểu dữ liệu của connect là:", typeof connect);

// Số nguyên an toàn tối thiểu/tối đa
console.log("Số nguyên an toàn tối thiểu:", Number.MIN_SAFE_INTEGER);
console.log("Số nguyên an toàn tối đa:", Number.MAX_SAFE_INTEGER);
