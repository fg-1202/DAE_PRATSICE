let password = '123Ab7!@'
//1.check at least has 8 characters
console.log('1.',password.length>= 8)

//2.check if it has upper case letter 
// password.toLowerCase() != password 
// 即係問!=：轉做細楷後嘅密碼 同 原本密碼 係咪唔同？
console.log('2.',password.toLowerCase() !=password)

//3.check if it has lower case letter 
console.log('3.',password.toUpperCase() !=password)

//4.check if it has symbol
//let hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password)含的符號
let hasSymbol = /[^A-Za-z0-9]/.test(password)//非含英母和數字
console.log('4.',hasSymbol)  

  
