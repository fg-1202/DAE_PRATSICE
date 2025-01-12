
console.log('Hello, Node.js!')
// 建立商品描述，包含：
   // - 商品名稱: xxx
   // - 原價: xxx
   // - 折扣價: xxx
   // - 折扣百分比: xxx
   let productName = "機械鍵盤"
   let originalPrice = 2999
   let discount = 0.8
   //let description = productName + originalPrice +discount // 建立完整商品描述
  
   console.log('商品名稱:',productName)
   console.log('原價:' ,originalPrice)
   console.log('折扣價:',originalPrice*discount)
   console.log('折扣百分比:',discount * 10,'折')
   
    //.replace('X', originalPrice)
    //.replace('Y', (originalPrice * discount).toFixed(2))//先括住前原價和折扣.答案小數點後2個位
   // .replace('Z', discount * 100)  // 換百分比為字串

   