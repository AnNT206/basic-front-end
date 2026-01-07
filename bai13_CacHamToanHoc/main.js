// 1. Hàm Math.sqrt()
let a = Math.sqrt(4);
console.log("Căn bậc hai của 4 là: " + a); // Kết quả: 2

// 2. Hàm Math.pow(base, exponent)
let b = Math.pow(2, 3);
console.log("2 mũ 3 là: " + b); // Kết quả: 8

// 3. Hàm Math.abs()
let c = Math.abs(-10);
console.log("Giá trị tuyệt đối của -10 là: " + c); // Kết quả: 10

// 4. Hàm Math.ceil() và Math.floor()
let d = Math.ceil(5.004);
console.log("Làm tròn lên của 5.004 là: " + d); // Kết quả: 6

let e = Math.floor(5.999);
console.log("Làm tròn xuống của 5.999 là: " + e); // Kết quả: 5

// 5. Hàm Math.round() từ 0.5 trở lên thì làm tròn lên, dưới 0.5 thì làm tròn xuống
let f = Math.round(7.49);
console.log("Làm tròn của 7.49 là: " + f); // Kết quả: 7
let g = Math.round(7.5);
console.log("Làm tròn của 7.5 là: " + g); // Kết quả: 8

// 6. làm tròn x chữ số phần đơn vị
let h = 3.14159;
let hRounded = h.toFixed(2); // làm tròn 2 chữ số phần thập phân
console.log(hRounded);
console.log(typeof hRounded); // Kết quả: "3.14" (kiểu chuỗi)

let hNumber = Number(h.toFixed(2)); // chuyển về kiểu số
console.log(hNumber);
console.log(typeof hNumber); // Kết quả: 3.14 (kiểu số)

// 7. Hàm Math.max() và Math.min()
let num1 = 8,
  num2 = 12,
  num3 = 5;
let maxNum = Math.max(num1, num2, num3);
console.log("Số lớn nhất là: " + maxNum); // Kết quả: 12

let minNum = Math.min(num1, num2, num3);
console.log("Số nhỏ nhất là: " + minNum); // Kết quả: 5
