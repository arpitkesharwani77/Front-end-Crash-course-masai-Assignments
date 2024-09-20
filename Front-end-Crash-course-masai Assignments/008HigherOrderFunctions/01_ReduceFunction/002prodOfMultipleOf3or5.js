// <====================================Product Of Multiple Of Three Or Five==================================>
/*
   ++++++++++++problem Statement++++++++++++

    - provided a function that takes an array of numbers, use .reduce() to find the sum of all numbers that are divisible by 3 or 5, and return a single number.

    input===>

        const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

    output=======>
      1817
 */

function sumOfNumberDivisibleBy3Or5(arr){
    return arr.reduce((acc,curr)=>{
        if (curr%3===0 ||curr%5===0){
            return acc+curr
        }
        return acc
    },0);
}    

const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
console.log(sumOfNumberDivisibleBy3Or5(numbers));