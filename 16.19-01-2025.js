// 檢查以下變數的狀態並顯示適當訊息：
let username = null;
let age = undefined;
let nickname = '小明';

function checkValue(value) {
    if (value === null) {
        return '尚未設定'; // 變更為 "尚未設定"
    }
    if (value === undefined) {
        return '未宣告';
    }
    return value; // 返回該值
}

console.log('username:', checkValue(username)); // 输出: username: 尚未設定
console.log('age:', checkValue(age));           // 输出: age: 未宣告
console.log('nickname:', checkValue(nickname)); // 输出: nickname: 小明