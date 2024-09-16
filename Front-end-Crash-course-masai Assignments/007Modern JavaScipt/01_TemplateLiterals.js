// <============================Template Literals=========================>
 
console.log("Q1===========>") 

// 1. Basic String Interpolation: 
//Use template literals to create a function greet(name, age) that returns a sentence like,
// "Hello, my name is John, and i am 25 years old.
//" Make sure it handles variables directly within the template.
function greet(name, age){
    console.log(`Hello, my name is ${name}, and i am ${age} years old.`)
}
greet("arpit kesharwani",24)


console.log("Q2===========>")
// 2. Multi-line Strings:
// Write a function generateParagraph() that returns a paragraph with multiple lines using template
// literals.

function generateParagraph(){
    return ` hello word! this is arpit kesharwani here! i am learning full stack web development\n
       course at masai school  so far everything is good but i am not happy with the opportunities that\n
       masai provided they wasted my 1 and half year they didn't teach me full stack nor the django completely \n
       that is the cause of my failure in interview eveybody wants full stack or expert in any field \n 
       `
}
console.log(generateParagraph())

console.log("Q3===========>")
// 3. Expression Inside Template Literals: Write a function
// calculatesum(a, b) that returns a string using template literals,
// which also calculates and includes the sum of a and b in the output (e.g., "The sum of 5 and 3 is 8. " ).

function calculatesum(a, b){
    return `The sum of ${a} and ${b} is ${a+b}`
}
console.log(calculatesum(20,5))


console.log("Q4===========>")
// 4. Embedding a Function in Template Literals: Write a function formatcurrency(value) that returns a string like
// "$500.00" . Use this function inside a template literal to format the currency value directly when printing out messages.

function formatcurrency(value){
    console.log(`$${value.toFixed(2)}`)
}
formatcurrency(100)
console.log("Q5===========>")
// 5. Nested Template Literals: Create a function formatmessage(name, status) that uses nested template literals to return a
// string based on different conditions (e.g., "Welcome back, John! Your status is: active. "
// if status is true

function formatmessage(name, status){
    return `Welcome back,${name}! Your status is:${status?"active":"not active"}`
}
console.log(formatmessage("saurabh",true))
console.log(formatmessage("vivek",false))
console.log(formatmessage("aman",true))