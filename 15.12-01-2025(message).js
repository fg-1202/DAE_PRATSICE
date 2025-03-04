// 將以下訊息格式化：
// - 訂單編號：20240001 (直接顯示)
// - 消費金額：$1,000,000 (千分位逗號)
// - 訂購日期：2024-03-15 (YYYY-MM-DD)
let orderNumber = 20240001;
let amount = 1000000;
let orderDate = 20240315;

// 將金額格式化為千分位
let formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// 將訂購日期格式化為 YYYY-MM-DD
let formattedDate = orderDate.toString().replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");

// 組合格式化訊息
let formattedMessage = `- 訂單編號：${orderNumber}\n- 消費金額：$${formattedAmount}\n- 訂購日期：${formattedDate}`;

console.log(formattedMessage);