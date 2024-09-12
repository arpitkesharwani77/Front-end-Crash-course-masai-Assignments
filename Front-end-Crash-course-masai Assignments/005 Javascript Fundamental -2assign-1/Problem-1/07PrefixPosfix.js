console.log("Q1-------------G. Prefix & Postfix Operators---------------------------->")


// 1. Prefix vs. Postfix: Write a function prefixpostfixDemo() that demonstrates the difference between prefix ( ++a ) and postfix ( a++ ) increment
// operators by logging the value of a variable before and after incrementing it in both ways.
function prefixpostfixDemo(value){
    console.log(value)
    console.log(++value)
    console.log(value)
    console.log(value++)
    console.log(value)
    console.log(--value)
    console.log(value)

}
prefixpostfixDemo(10)



console.log("Q2----------------------------------------->")
// 2. Prefix & Postfix Calculation: Create a function calculateprefixpostfix(a, b) that applies prefix and postfix increment operators on a and
// b , and returns the results of both operations.

function calculateprefixpostfix(a, b){
    console.log(a)
    console.log(++a)
    console.log(a)
    console.log(b++)
    console.log(b)
    console.log(--b)
    console.log(b)

}
calculateprefixpostfix(10, 30)


console.log("Q3----------------------------------------->")
// 3. Complex Prefix/Postfix Operations: Write a function complexoperation(a, b) that performs a series of prefix and postfix operations on a
// and b and calculates the final result based on the sequence of operations. Log the intermediate results to illustrate the effect of each
// operation.
function complexoperation(a, b){
    console.log(a)
    console.log(++a)
    console.log(a)
    console.log(b++)
    console.log(b)
    console.log(--b)
    console.log(b)

}
complexoperation(10, 30)
