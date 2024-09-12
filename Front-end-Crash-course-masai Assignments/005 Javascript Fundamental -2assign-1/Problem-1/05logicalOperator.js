console.log('Q1--------------------------------------->')
// Basic Logical Operations: Write a function logicaloperations(a, b) that takes two boolean values and returns the result of logical AND ,
// OR , and NOT operations on them.

function logicaloperations(a, b){
    console.log( a||b,"1")
    console.log(a&&b,"2")
    console.log(!a,"3")
    console.log(!b,"4")
    console.log('____________')
}
logicaloperations(true, true)
logicaloperations(true, false)
logicaloperations(false, false)
logicaloperations(false, true)




console.log('Q2--------------------------------------->')

// 2. Eligibility Check: Create a function isE1igib1e(age, haspermission) that uses logical operators to determine if someone is eligible based on
// their age (must be 18 or older) and whether they have permission.

function isE1igib1e(age, haspermission){
    if(age>=18 && haspermission){
        console.log(`Yes you have permission`)
    }
    else if(age<18){
        console.log(`sorry! you are not adult`)
    }
    else{
        console.log(`sorry! you have no permission`)
    }
}
isE1igib1e(69,true)
isE1igib1e(15,true)
isE1igib1e(15,false)
isE1igib1e(69,false)

console.log('Q3--------------------------------------->')

// 3. Complex Logic: Write a function evaluateconditions(a, b, c) that uses logical operators to evaluate the following conditions and return a
// string: "a is positive and b is negative", "b is zero or c is not a number", "a is not equal to b or c is greater than 10".

function evaluateconditions(a, b, c){
    if(a>0 && b<0){
        console.log("a is positive and b is negative")
    }
    else if( b==0 || c===NaN){
        console.log("b is zero or c is not a number")
    }
    else if(a!=b || c>10){
        console.log("a is not equal to b or c is greater than 10")
    }
    else{
        console.log("no condition satisfied with given condition")
    }
}
evaluateconditions(10, 10, 100)
evaluateconditions(10, 10, 1)
evaluateconditions(-5, 10, 100)
evaluateconditions(1, -10, 100)
evaluateconditions(10, 10, -100)
evaluateconditions(10, 10, "arpit")
evaluateconditions(10, 0, 5)