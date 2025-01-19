let a = null;        // 明确表示没有值
let b =               // 声明但未初始化，默认值为 undefined

console.log(a);     // 输出: null
console.log(b);     // 输出: undefined

if (a === null) {
  console.log("a is null"); // 这个条件为真
}
else console.log("a is not null");

if (b === undefined) {
  console.log("b is undefined"); // 这个条件为真
}
   else console.log("b is not undefined");