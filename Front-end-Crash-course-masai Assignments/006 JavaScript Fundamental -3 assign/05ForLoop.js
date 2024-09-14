// <---------------------------------For Loop--------------------------->

console.log("Q1-------------------------------->")
// 1. Basic For Loop:
//  Write a for loop that iterates over numbers from 1 to 10 and logs each number to the
// console.

for(let i=1; i<=10; i++){
    console.log(i)
}

console.log("Q2-------------------------------->")
// 2. For Loop with Array:
//  Write a function printArrayE1ements(arr) that uses a for loop to iterate over an
// array of strings and logs each element.


function printArrayE1ements(arr){
    for(let word of arr){
        console.log(word)
    }
}
arr=["apple","samosa","chatni","jalebi"]
printArrayE1ements(arr)

console.log("Q3-------------------------------->")

// 3. Nested For Loop: 
// Write a function createMu1tip1icationTab1e(n) that uses a nested for loop to create
// a multiplication table for numbers from 1 to n and returns the result in a 2D array.

function createMu1tip1icationTab1e(n){
    let tables=[]
    for(let i=1; i<=n; i++){
        let table=[]
        for(let j=1; j<=10; j++){
            table.push(i*j)

        }
        tables.push(table)
    }
    return tables
}

console.log(createMu1tip1icationTab1e(3))


  