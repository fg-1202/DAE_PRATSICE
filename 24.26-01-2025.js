function getGrade(score) {
    if (score >= 90) {
        return '優秀';
    } else if (score >= 80) {
        return '良好';
    } else if (score >= 50) {
        return '及格';
    } else {
        return '不及格';
    }
}       

// 測試
let score = 85;
console.log(`分數: ${score}, 評級: ${getGrade(score)}`); // 輸出: 分數: 85, 評級: 良好


