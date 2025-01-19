// 如果芝士有促銷，就買芝士，否則買牛奶
let hasCheesePromotion = false;
//let buyCheese = hasCheesePromotion 
let buyCheese = hasCheesePromotion ? true : false; // 如果有芝士促銷就買芝士
let buymilk = !hasCheesePromotion; // 如果沒有芝士促銷就買牛奶

/*/console.log({
hasCHeesePromotion,
buyMilk,
buyCheese,
})/*/
console.log('購買芝士:', buyCheese); // 输出: 購買芝士: true
console.log('購買牛奶:', buymilk);   // 输出: 購買牛奶: false