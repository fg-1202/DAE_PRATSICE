class Meal {
    constructor(date, location) {
        this.date = date;
        this.location = location;
        this.orders = [];
    }

    addOrder(person, itemName, price, splitEqually) {
        this.orders.push({ person, itemName, price, splitEqually });
    }

    calculate() {
        let totalAmount = 0;
        let individualAmounts = {};

        this.orders.forEach(order => {
            totalAmount += order.price;
            if (order.splitEqually) {
                if (!individualAmounts[order.person]) {
                    individualAmounts[order.person] = 0;
                }
                individualAmounts[order.person] += order.price;
            } else {
                if (!individualAmounts[order.person]) {
                    individualAmounts[order.person] = 0;
                }
                individualAmounts[order.person] += order.price; // 個人點的餐點
            }
        });

        // 計算均分的部分
        const splitAmount = totalAmount / Object.keys(individualAmounts).length;
        for (let person in individualAmounts) {
            if (individualAmounts[person] > 0) {
                individualAmounts[person] += splitAmount; // 加上均分的部分
            }
        }

        return { totalAmount, individualAmounts };
    }

    displayResults() {
        const { totalAmount, individualAmounts } = this.calculate();
        console.log(`日期：${this.date}`);
        console.log(`地點：${this.location}`);
        console.log(`總金額：${totalAmount.toFixed(2)}`);
        console.log('各人應付金額：');
        for (let person in individualAmounts) {
            console.log(`${person}: ${individualAmounts[person].toFixed(2)}`);
        }
    }
}

// 使用範例
const meal = new Meal('2024/03/21', '餐廳名稱');
meal.addOrder('小明', '主菜A', 100, true);
meal.addOrder('小明', '飲料', 50, false);
meal.addOrder('小華', '主菜A', 100, true);
meal.addOrder('小華', '主菜B', 150, true);

meal.displayResults();