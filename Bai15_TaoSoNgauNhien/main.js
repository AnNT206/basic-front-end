// 1. Random trong [0 - 1)
let randomValue = Math.random();
console.log("Số ngẫu nhiên từ không đến sát 1 là: " + randomValue);

// 2. Random số lớn hơn 1
let randomValue2 = Math.random() * 10; // Số ngẫu nhiên từ 0 đến sát 10
console.log("Số ngẫu nhiên từ không đến sát 10 là: " + randomValue2);

// 3. Random số nguyên
let randomInt = parseInt(Math.random() * 10); // Số nguyên ngẫu nhiên từ 0 đến 9
console.log("Số nguyên ngẫu nhiên từ 0 đến 9 là: " + randomInt);

/* Math.random(): 
     + Nhân với 10 để mở rộng phạm vi từ 0 đến sát 10 (nhân với bao nhiêu thì đến bấy nhiêu và không bao gồm lấy số đó)
     + Dùng parseInt()/parseFloat()/... để ép kiểu của số ngẫu nhiên
*/

// 4. Random từ 0 đến 10
let random0To10 = parseInt(Math.random() * 11); // Số nguyên ngẫu nhiên từ 0 đến 10
console.log("Số nguyên ngẫu nhiên từ 0 đến 10 là: " + random0To10);

// 5. Random từ min đến max
let randomMinToMax = parseInt(Math.random() * (30 - 0 + 1)) + 0; // Số nguyên ngẫu nhiên từ 0 đến 30
console.log("Số nguyên ngẫu nhiên từ 0 đến 30 là: " + randomMinToMax);

/*
Công thức chung để random từ min đến max:
(Math.random() * (max - min + 1)) + min
*/
