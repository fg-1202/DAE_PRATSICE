let target = 42;  // 目標數字
let guess = 12;   // 初始猜測值

// 更新 guess 的值
guess = 19; 

if (guess >=100 && target) {
    console.log('猜的數字太大了,不能>=100');  // 猜的數字比目標大
} else if (guess > target) {
    console.log('猜的數字太大了');  
} else if (guess <=0 && target) {
    console.log('猜的數字太小了,不能<=0');  // 猜的數字比目標小
} else if (guess < target) {
    console.log('猜的數字太小了');
} else if (guess === target) {
    console.log('猜的數字剛好');    // 猜的數字正好
} else {
    console.log('無效的輸入', guess); // 處理無效輸入
}