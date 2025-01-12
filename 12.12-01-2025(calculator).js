// 實作簡單計算機功能，計算：
   // 1. 兩件商品的總價
   // 2. 折扣後的價格（八折）
   // 3. 平均價格
   let item1 = 199
   let item2 = 299

   let total = item1 + item2// 你的程式碼
   let discount=total*0.8
   let average=(discount.toFixed(2))/2//平均價格

console.log('總價:',total)
console.log('折扣(8折):',+discount.toFixed(2))//+號代表變成數值
console.log('平均價格:',average)