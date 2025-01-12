
// 建立一個個人名片，包含：
// - 姓名: xxx
// - 職稱: xxx
// - 電話: xxx
// - Email: xxx
let name = "王小明"
let title = "軟體工程師"
let phone = "0912-345-678"
let email = "ming@example.com"

/* 姓名:${name}
   職業:{title}
   電話:{phone}
   Email: {email} 
   bussinesscard=
   ''姓名:'+
   name
   */



let businessCard = name + title + phone + email// 使用樣板字串建立名片格式
console.log(
    'My name is X ,\nI am a Y.\nMy phone is Z.\nMy Email is W'
    .replace('X',name)
    . replace('Y',title)
    .replace('Z',phone)
    .replace('W',email)
)
