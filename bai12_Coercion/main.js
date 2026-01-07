// Coercion ép kiểu ngầm định trong JavaScript
// 1. Coercion từ số sang chuỗi
let a = 6;
let b = "1";
let kq = a + b; // Kết quả sẽ là chuỗi "61" do phép cộng với chuỗi sẽ ép kiểu số sang chuỗi
console.log(kq);

// 2. Coercion từ chuỗi sang số
let c = 5;
let d = "2";
let kq2 = c - d; // Kết quả sẽ là số 3 do phép trừ sẽ ép kiểu chuỗi sang số
console.log(kq2);

let e = 2;
let f = "3";
let kq3 = e * f; // Kết quả sẽ là số 6 do phép nhân sẽ ép kiểu chuỗi sang số
console.log(kq3);

let g = 3;
let h = "3";
let kq4 = g / h; // Kết quả sẽ là số 1 do phép chia sẽ ép kiểu chuỗi sang số
console.log(kq4);

// Một số ví dụ dễ nhầm lẫn
let num1 = 5;
let num2 = 1;
let num3 = 2;
let str1 = "4";
console.log(num1 + num2 + num3 + str1); // Kết quả sẽ là "81" (5 + 1 + 2 = 8, sau đó 8 + "4" = "84")
console.log(num1 + num2 + str1 + num3); // Kết quả sẽ là "642" ( 5 + 1 = 6 -> 6 + "4" = 64 -> "64" + 2 = "642")
console.log(str1 + num1 + num2 - str1 + num3); // Kết quả sẽ là "449" ("4" + 5 = "45" -> "45" + 1 = "451" -> "451" - "4" = 447 -> 447 + 2 = 449)
