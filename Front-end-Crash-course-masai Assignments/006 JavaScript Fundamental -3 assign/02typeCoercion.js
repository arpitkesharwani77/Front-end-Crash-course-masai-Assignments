// --------------------Type Coercion (Implicit)-------------------->

console.log("Q1----------------------->")

// 1. Basic Coercion Check: Write a function checkCoercion(a, b) that compares two values using both
// ==(loose equality) and ====(strict equality). Log the results for both comparisons. Test with values like
//"5" and 5 , false and 0 , null and undefined

function checkCoercion(a, b){
    console.log(a==b, "loose equality")
    console.log(a===b ,"strict equality")
}
 checkCoercion("5" , 5)
 checkCoercion(false , 0)
 checkCoercion(null, undefined)

console.log("Q2----------------------->")
// 2. Coercion in Arithmetic: Write a function coerce1nArithmetic(a, b) that performs addition ( +
// subtraction ( - ), multiplication ( * ), and division ( / ) on two values of different types (e.g., string and
// number) and logs the results to demonstrate implicit type coercion.
function coerce1nArithmetic(a, b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log("____________")
}

coerce1nArithmetic("20", 5)
// 205  +
// 15   -
// 100  *
// 4    /
coerce1nArithmetic("10", "5")
// 105  +
// 5    -
// 50   *
// 2    / 
coerce1nArithmetic(20, 5)




console.log("Q3----------------------->")
// 3. Implicit Coercion in Conditionals: Write a function coercelnconditionals(value) that takes a value and
// uses it in an if statement to check if the value is truthy or falsy, demonstrating implicit coercion in
// conditionals. Log whether the value is considered "truthy" or "falsy."

function coercelnconditionals(value){
    if(value){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
coercelnconditionals(0)  //false
coercelnconditionals(null) //false
coercelnconditionals(false)  //false
coercelnconditionals(undefined)   //false
coercelnconditionals("")  //false
coercelnconditionals([])   //false
coercelnconditionals({})   //false
coercelnconditionals("5")   //false
coercelnconditionals("0")   //false