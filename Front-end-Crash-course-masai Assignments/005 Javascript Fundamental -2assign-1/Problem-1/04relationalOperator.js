

// Q-1--------------------->

function checkRelational(num1,num2){
if(num1===num2){
    console.log(`${num1} and ${num2} both are equal`);
    }
    else if(num1>num2){
        console.log(`${num1} is greater than ${num2}`);
    }
    else if(num1<num2){
        console.log(`${num2} is greater than ${num1}`);
    }

}

checkRelational(2,5);
checkRelational(2,2);
// checkRelational(12,5);



console.log("Q-2----------------------------->")
// 2. Range Check: Create a function islnRange(va1ue, min, max) that checks if a given value is between min and max (inclusive) using
// relational operators.


function islnRange(value, min, max){
    if(value<=max && value>=min){
        return `Yes ${value} is within range of ${min} and ${max} inclusively`
    }
    else{
        return `NO! ${value} is not within range of ${min} and ${max}`
    }
}

console.log(islnRange(5, 0, 10))
console.log(islnRange(10, 0, 10))
console.log(islnRange(0, 0, 10))
console.log(islnRange(15, 0, 10))


console.log("Q-3----------------------------->")

// 3. Complex Relational Logic: Write a function evaluatecondition(a, b, c) that uses relational operators to evaluate and return a string based
// on the conditions: "a is the largest", "b is between a and c", or "c is less than a and b".


function evaluatecondition(a, b, c){
    if(a>b && a>c){
        return ` ${a} is the largest`
    }
    else if(b>a && b<c){
        return `${b} is between ${a} and ${c}`
    }
    else if(c<a && c<b){
        return `${c} is smallest among ${a} and ${b}`

    }else{
        return `no condition satisfied with given conditions`
    }
}

console.log(evaluatecondition(100,80, 90))
console.log(evaluatecondition(100,90,80))
console.log(evaluatecondition(80,100, 90))
console.log(evaluatecondition(80,90,100))
console.log(evaluatecondition(90,100,80))
console.log(evaluatecondition(90,80,100))
