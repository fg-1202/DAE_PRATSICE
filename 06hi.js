let user1={}
user1.id=10
user1.name='Alice'

let user2={}
user2.id=11
user2.name='Bob'

let user3={}
user3.id=12
user3.name='Charlie'

function report(user){
 console.log('User '+ user.id+' is '+user.name)   
}

report(user1)
report(user2)
report(user3)