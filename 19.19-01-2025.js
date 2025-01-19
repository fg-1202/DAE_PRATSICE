/*/ // 使用 BigInt 計算：
   // 1. 9999999999999999 + 1
   // 2. 8888888888888888 * 9
   // 3. 將結果轉換為一般數字，觀察是否有精度損失

   let calculation1 = // 你的程式碼
   let calculation2 = // 你的程式碼/*/


// 使用 BigInt 計算：
let calculation1 = BigInt(9999999999999999) + BigInt(1); // 1. 9999999999999999 + 1
let calculation2 = BigInt(8888888888888888) * BigInt(9); // 2. 8888888888888888 * 9

// 將結果轉換為一般數字，觀察是否有精度損失
let result1 = Number(calculation1);
let result2 = Number(calculation2);

console.log(calculation1); // 输出：10000000000000000n
console.log(result1);      // 输出：10000000000000000
console.log(calculation2); // 输出：80000000000000000n
console.log(result2);      // 输出：80000000000000000