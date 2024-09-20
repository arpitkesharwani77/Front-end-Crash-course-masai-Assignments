/*
<==========================Problem Statement================================>
--Given an array of numbers, write a function sumOfSquaresOfOddNumbers that returns the sum
 of the squares of all odd numbers using .map(), .filter(), and .reduce().

--input==>
    const numbers = [1, 2, 3, 4, 5, 7];


--ouput==>

    84;


*/  
function sumOfSquareOfOddNumbers(numbers){
    return numbers
    .filter(num=>num%2===1)     // Filter odd numbers
    .map(num=>num*num)              // Square each odd number
    .reduce((acc,curr)=>curr+acc,0)     // Sum the squares
}

const numbers = [1, 2, 3, 4, 5, 7];
console.log(sumOfSquareOfOddNumbers(numbers))