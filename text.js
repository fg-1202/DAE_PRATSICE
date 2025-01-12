let firstName = 'Alice'
let lastName = 'Wong'
let age = 25

// Target Output: I am Alice Wong, my age is 25.

// version 1: using +
console.log('I am ' + firstName + ' ' + lastName + ', my age is ' + age + '.')

// version 2: using string.replace
let fullName = firstName + ' ' + lastName
console.log('I am X, my age is Y.'.replace('X', fullName).replace('Y', age))

// version 3: using Template String
console.log(`I am ${firstName} ${lastName}, my age is ${age}.`)
