//去買牛奶,如果芝士有促銷,就買芝士

let hasCheesePromotion=false; 
let buymilk = true // 一定買牛奶

//let buyCheese = hasCheesePromotion
let buyCheese = hasCheesePromotion ? true : false; // 如果有芝士促銷就買芝士
/*/console.log({
hasCHeesePromotion,
buyMilk,
buyCheese,
})/*/
console.log('購買牛奶:', buymilk); // 输出: 購買牛奶: true
console.log('購買芝士:', buyCheese); // 输出: 購買芝士: true
