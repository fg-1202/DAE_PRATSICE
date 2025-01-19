
/*// 模擬 RSA 加密中的大數運算
   // 計算：(base ^ exponent) % modulus
   // 這是 RSA 加密演算法的核心運算之一

   let base = 7n
   let exponent = 5n
   let modulus = 13n

   // 計算 (7 ^ 5) % 13
   let result = // 你的程式碼

   // 進階：試著計算 (7 ^ 1000) % 13
   let advancedResult = // 你的程式碼/*/
   
// 模擬 RSA 加密中的大數運算
let base = 7n;
let exponent = 5n;
let modulus = 13n;

// 計算 (7 ^ 5) % 13
let result = (base ** exponent) % modulus;

// 進階：試著計算 (7 ^ 1000) % 13
let advancedResult = (base ** 1000n) % modulus;

console.log(result);          // 输出：10n
console.log(advancedResult);  // 输出：9n