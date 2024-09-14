// <=======================While Loop===================>

console.log("=========>Question-1")  

// 1. Basic While Loop: Write a while loop that logs numbers from 1 to 5. Stop the loop once the number
// reaches 5.

let num=1
while(num<=5){
    console.log(num++)
}


console.log("=========>Question-2") 

// 2. While Loop with Condition: Write a function countDownFrom(n) that uses a while loop to count down
// from n to 0 and logs each number.

function countDownFrom(n){
    while (n>=0){
        console.log(n--)
    }
}
countDownFrom(5)

console.log("=========>Question-3")  

// 3. While Loop with Break Condition: Write a function findFirstEven(numbers) that uses a while loop to
// iterate over an array of numbers and returns the first even number. Use a break statement to exit the
// loop once the even number is found.

function findFirstEven(numbers){
    let i=0;
    while (i<numbers.length){
        if(numbers[i]%2===0){
            console.log(numbers[i]);
            break;
        }
        i++;
    }
    if(i===numbers.length)
    console.log(" even no. is not found")
}
let numbers=[3,15,17,2,100,7,6]
let numbers2=[3,15,17,7,6]
let numbers3=[3,15,17,7]
 findFirstEven(numbers);
 findFirstEven(numbers2);
 findFirstEven(numbers3);