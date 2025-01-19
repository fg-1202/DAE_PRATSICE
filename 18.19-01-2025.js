   /*// 計算以下數值：
   // 1. 2 的 10 次方（使用 BigInt）
   // 2. 計算結果是否大於 Number.MAX_SAFE_INTEGER
   // 3. 將結果轉換為字串

   let result = // 你的程式碼
   let isLarger = // 你的程式碼
   let resultString = // 你的程式碼/*/



// 計算以下數值：
let result = BigInt(2) ** BigInt(10); // 1. 2 的 10 次方（使用 BigInt）
let isLarger = result > BigInt(Number.MAX_SAFE_INTEGER); // 2. 計算結果是否大於 Number.MAX_SAFE_INTEGER
let resultString = result.toString(); // 3. 將結果轉換為字串

console.log(result);          // 输出：1024n
console.log(isLarger);       // 输出：false
console.log(resultString);    // 输出："1024"