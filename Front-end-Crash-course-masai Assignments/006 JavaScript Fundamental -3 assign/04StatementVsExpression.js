//<--------------------Statements vs Expressions-------------->

console.log("Q1------------------------->")
// 1. Identify Statement vs Expression: Write a comment or code snippet that explains the difference
// between a statement and an expression in JavaScript. Give examples of both, such as a for loop
// (statement) and a simple addition (2 + 2 ) (expression).

/*
Statement:---------->>

A statement performs an action but does not produce a value that can be used immediately. It typically controls the flow of the program, like loops or conditionals.

Example:->
         A for loop is a statement because it performs actions but doesn't return a value.


Expression:--------->>

    An expression is a piece of code that produces a value. This value can be assigned to a variable, passed to a function, or used in other expressions.

Example:->
     Simple addition 2 + 2 is an expression because it evaluates to 4, which is a value.   
     
     
Key Difference:
    Statement: Executes a block of code (does something), like loops or if conditions.
    Expression: Evaluates to a value (results in something).     
 */

console.log("Q2------------------------->")
// 2. Expression in Function: Write a function expressionlnFunction(a, b) that returns the result of an expression (e.g., a + b ). Call this function within a statement like an if condition to demonstrate how expressions can be used within statements.

function expressionInFunction(a, b) {
    return a + b; 
  }

// let result = expressionInFunction(5, 3);
let result = expressionInFunction(1, 3);

if (result > 5) { 
console.log("The result is greater than 5");}
else {
console.log("The result is 5 or less");
}  


console.log("Q3------------------------->")
// 3. Complex Expression in Conditional: Write a function complexExpression(a, b, c) that uses a combination of expressions (e.g., a + b, c * b) within a switch or if statement to determine the result and return a message based on the evaluated expressions.

function complexExpression(a, b, c) {
    
    let sum = a + b;   
    let product = c * b; 
  

    if (sum > product) {
      return `The sum (${sum}) is greater than the product (${product}).`;
    } else if (sum < product) {
      return `The product (${product}) is greater than the sum (${sum}).`;
    } else {
      return `The sum (${sum}) and the product (${product}) are equal.`;
    }
  }
  
  
  console.log(complexExpression(3, 4, 2));
  console.log(complexExpression(2, 5, 3)); 
  console.log(complexExpression(1, 2, 1.5)); 
  