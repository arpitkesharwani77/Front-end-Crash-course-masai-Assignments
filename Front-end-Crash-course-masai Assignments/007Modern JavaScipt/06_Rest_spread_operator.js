// ++++++++++++++++++++++++++++ Rest and Spread +++++++++++++++++++++++++++++++++++

console.log("<================== problem - 1 ======================>")

// 1. Rest Parameter: Write a function sum(... numbers) that takes any number of arguments using the rest parameter and returns their sum.

// function sum(... numbers){
//     let sum=0;
//     for(let num of numbers){
//         sum+=num
//     }
//     return sum
// }
// console.log(sum(10,20))
// console.log(sum(10,20,30))
// console.log(sum(10,20,50,20))

function sum(...numbers) {
    return numbers.reduce((acc,curr)=>acc+curr,0)
}

console.log(sum(1, 2, 3, 4));  // Output: 10
console.log(sum(5, 10, 15));    // Output: 30

console.log("<================== problem - 2 ======================>")

// 2. Spread with Arrays: Write a function mergeArrays(arr1, arr2) that merges two arrays using the spread operator.

function mergeArrays(arr1, arr2){
    return [...arr1,...arr2]

}
let arr1=[2,4,6,8]
let arr2=[1,3,5,7]
console.log(mergeArrays(arr1,arr2))


console.log("<================== problem - 3 ======================>")

// 3. Spread with Objects: Write a function updateperson(person, updates) that uses the spread operator to return a new object by updating properties of the person object with values from the updates object.

function updateperson(person, updates){
    return {...person,...updates}
}

let person={
     name:"arpit",
     email:"arpit@gmail.com",
     age:24
}
let updates={
    name:"surabh",
    email:"surabh@gmail.com",
    age:24
}
let updatedPerson=updateperson(person,updates)
console.log(updatedPerson)

console.log("<================== problem - 4 ======================>")

// 4. Rest with Destructuring: Write a function extractFirstAndRest(arr) that destructures an array to extract the first element into a variable and the rest into another variable using the rest operator.

function extractFirstAndRest(arr){
    let [first,...restElems]=arr
    console.log("first element:",first)
    console.log("rest elements of the array:",restElems)
}
extractFirstAndRest([50,1,2,3,4,5])


// function extractFirstAndRest(arr) {
//     const [first, ...rest] = arr;
//     return { first, rest };
// }

// const array = [10, 20, 30, 40];

// console.log(extractFirstAndRest(array));     // Output: { first: 10, rest: [20, 30, 40] }


console.log("<================== problem - 5 ======================>")

// 5. Spread in Function Calls: Write a function calculateTota1(.. .args) that accepts a variable number of arguments and calls a separate sum function using the spread operator to pass the arguments.

function totalSum(...nums){
    return nums.reduce((acc,curr)=>acc+curr,0)
}

function calculateTotal(...args){
    return totalSum(...args)
}
console.log(calculateTotal(12,13,25,30,20))
console.log(calculateTotal(12,13,30,20))
console.log(calculateTotal(12,13,25))
