// Xuất thông báo cho người dùng nhập dữ liệu
let numberA = prompt("Mời bạn nhập vào numberA: ");
// Check thử kiểu loại biến numberA
console.log("Kiểu dữ liệu của numberA là: ", typeof numberA);
// Thử thực hiện tính toán
let numberB = 5;
console.log("Kiểu dữ liệu của numberB là: ", typeof numberB);
// cộng A và B
let total = numberA + numberB;
console.log(` Kết quả A = B = ${total}`);
console.log("Kiểu dữ liệu của total là: ", typeof total);
// VD: a = 10, b = 5 => kêt quả 105 -> sai, js sẽ hiểu là cộng chuỗi
// Các phép tính khác
console.log(`A - B = %s`, numberA - numberB);
console.log(`A * B = %s`, numberA * numberB);
console.log(`A / B = %s`, numberA / numberB);
console.log(`A % B = %s`, numberA % numberB);

// Ép kiểu dữ liệu
// Ép sang kiểu số nguyên
let numberC = parseInt(prompt("Mời bạn nhập vào numberC: "));
console.log(numberC);
console.log("Kiểu dữ liệu của numberC là: ", typeof numberC);
// Ép sang kiểu số thực
let numberD = parseFloat(prompt("Mời bạn nhập vào numberD: "));
console.log(numberD);
console.log("Kiểu dữ liệu của numberD là: ", typeof numberD);

// Hoặc đơn giản dùng hàm Number()
let numberE = Number(prompt("Mời bạn nhập vào numberE: "));
console.log(numberE);
console.log("Kiểu dữ liệu của numberE là: ", typeof numberE);
