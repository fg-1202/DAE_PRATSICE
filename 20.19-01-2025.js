/*// 練習 BigInt 的型別轉換：
   // 1. 將字串 "12345678901234567890" 轉換為 BigInt
   // 2. 將十六進位字串 "0xFF" 轉換為 BigInt
   // 3. 將二進位字串 "0b1111" 轉換為 BigInt

   let fromString = // 你的程式碼
   let fromHex = // 你的程式碼
   let fromBinary = // 你的程式碼/*/

// 練習 BigInt 的型別轉換：
let fromString = BigInt("12345678901234567890"); // 1. 將字串 "12345678901234567890" 轉換為 BigInt
let fromHex = BigInt("0xFF"); // 2. 將十六進位字串 "0xFF" 轉換為 BigInt
let fromBinary = BigInt("0b1111"); // 3. 將二進位字串 "0b1111" 轉換為 BigInt

console.log(fromString);  // 输出：12345678901234567890n
console.log(fromHex);     // 输出：255n
console.log(fromBinary);  // 输出：15n