// 為 null 或 undefined 的變數設定預設值
let score = null; // 預設為 0
let name = undefined; // 預設為 "訪客"

function withDefault(value, defaultValue) {
  return value ?? defaultValue; // 使用空值合并运算符
}
//如果個值係null或者undefined,就要後面,否則要前面
//??問佢係唔係NULL或者UNDEFINED
console.log('score:', withDefault(score, 0));          // 输出: score: 0
console.log('score:', withDefault(123, 0));            // 输出: score: 123
console.log('score:', withDefault(0, 'no score'));     // 输出: score: 0
console.log('score:', withDefault(null, 'no score'));  // 输出: score: no score
console.log('name:', withDefault(name, '訪客'));       // 输出: name: 訪客
