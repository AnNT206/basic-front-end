// 8. Hàm number(value) --> chuyển value sang số
// --> Nếu không chuyển được trả về NaN
console.log("Ví dụ về hàm Number()");
let str = "123ab";
console.log(typeof str);
let num = Number(str);
console.log(num);
console.log(typeof num);

// let so = Number(prompt("Mời bạn nhập số: "));
// console.log(so);

// 9. Hàm isNaN(value) --> kiểm tra value có phải là NaN hay không
console.log("Ví dụ về hàm isNaN()");
let a = 123;
console.log(isNaN(a)); // false

let b = "123ab";
console.log(isNaN(b)); // true

let c = Number(true);
console.log(isNaN(c)); // false -> true chuyển thành 1

let d = Number(false);
console.log(isNaN(d)); // false -> false chuyển thành 0

let e = Number(null);
console.log(isNaN(e)); // false -> null chuyển thành 0

let f = Number("");
console.log(isNaN(f)); // false -> chuỗi rỗng chuyển thành 0 (kể cả chuỗi có khoảng trắng)

// 10. Hàm Number.isNaN(value) --> kiểm tra value có phải là NaN hay không
console.log("Ví dụ về hàm Number.isNaN()");
let x = Number.isNaN(NaN);
console.log(x); // true

console.log(Number.isNaN("abc" / "cba")); // true

console.log("abc" / "cba"); // NaN
console.log(0 / 0); // NaN
console.log(Number.isNaN(0 / 0)); // true
