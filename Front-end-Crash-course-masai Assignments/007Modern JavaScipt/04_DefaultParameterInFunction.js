// +++++++++++++++++++++++++++Default Parameters in Function++++++++++++++++++++++++++++++++

console.log("<================Q1====================>")

// 1. Basic Default Parameters: Write a function greet(name = "Guest") that returns a greeting. If no name is provided, it should return "Hello, Guest!" .

function greet(name = "Guest"){
    return `Hello ${name}!`

}
console.log(greet("arpit"))
console.log(greet())

console.log("<================Q2====================>")

// 2. Multiple Default Parameters: Write a function calculateTota1(price, tax = 0.05) that returns the total price with tax. Test it with and without passing the tax value.

function calculateTota1(price, tax = 0.05){
    return price+price*tax
}
console.log(calculateTota1(2000, 0.1))
console.log(calculateTota1(10000))

console.log("<================Q3====================>")
// 3. Default Parameters with Undefined Values: Write a function describeperson(name, age = 25) that returns a description of a person. If age is passed as undefined , the function should use the default value.

function describeperson(name, age = 25){
    return `${name}'s age is ${age}`
}
console.log(describeperson("vivek", age = 25))
console.log(describeperson("DSA Anna"))
console.log(describeperson("DSA Anna",undefined))



console.log("<================Q4====================>")
// 4. Default Parameters in Complex Expression: Create a function calculateDiscount(price, discount = price * 0.1) that calculates and returns the final price after applying a discount. Test it with different values.

function calculateDiscount(price, discount = price * 0.1){
    return `Your final price after discount is: ${price-discount}`
}

console.log(calculateDiscount(2000,100))
console.log(calculateDiscount(2000))

console.log("<================Q5====================>")
// 5. Overriding Default Parameters: Write a function createUser(username, role = "user") that creates a new user with a default role of 'user" , but allows overriding it.

function createUser(username, role = "user"){
    return `username: ${username} is successfully added and role of ${username} is ${role}`
}

console.log(createUser("arpit bhaiya","admin"))
console.log(createUser("vivek bhaiya"))