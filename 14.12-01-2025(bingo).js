// 實作發票對獎程式
// 特別獎號碼：12345678
// 使用者發票號碼：後三碼為 678
// 對中後三碼可得 200 元

let specialNumber = 12345678;
let userNumber = 87654678;

// 提示：可使用 % 運算子取得後三碼
let lastThreeDigits = userNumber % 1000; // 取得使用者發票號碼的後三碼
let isWinner = (lastThreeDigits === specialNumber % 1000); // 檢查後三碼是否對中
//> specialNumber.slice(-3)會出'678'變了是字串會是不同TYPES
//一個=是代表給一個值的等於,兩個==是比較值,三個是比較值和類型
//console.log('IsWinner:', isWinner) //這句SIR提供

if (isWinner) {
    console.log("恭喜你中獎！你獲得了 200 元！");
} else {
    console.log("很遺憾，沒有中獎。");
}