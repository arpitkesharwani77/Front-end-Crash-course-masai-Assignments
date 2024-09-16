// ++++++++++++++++++++++++++++Arrow Functions+++++++++++++++++++++++++++++

console.log("<===================Q1=================>")
// 1. Basic Arrow Function: Convert the following function into an arrow function:
// function add(a, b) {
// return a + b;
   
const add=(a,b)=>a+b
console.log(add(15,10))

console.log("<===================Q2=================>")
// 2. Single-Line Arrow Function: Write a single-line arrow function double(n) that returns the double of a number.

const double=(n)=>2*n
console.log(double(5))



console.log("<===================Q3=================>")
// 3. Arrow Function with Implicit Return: Create an arrow function greet that takes a name and returns "Hello, [name]" without using the
// return keyword explicitly.

const greet=(name)=>`Hello,${name}`
console.log(greet("vivek sir"))

console.log("<===================Q4=================>")
// 4. Arrow Function in Callback: Write a function filterEvenNumbers(arr) that uses an arrow function inside Array. filter() to filter out only
// even numbers from an array.

function filterEvenNumbers(arr){
    return arr.filter(num=>num%2===0)
}
let mixedNumber=[2,1,4,5,3,7,8,20,]
const EvenNumbers=filterEvenNumbers(mixedNumber)
console.log(EvenNumbers)

 console.log("<===================Q5=================>")
// 5. Arrow Function and this Context: Write a function Person(name) that has an arrow function to print the person's name using this.name .
// Compare it with a regular function and explain the difference in this binding.

function Person(name) {
    this.name = name;
    
    // Arrow function retains the context of 'this'
    this.printNameArrow = () => {
      console.log(`Arrow: My name is ${this.name}`);
    };
  }
  
  // Example usage
  const person1 = new Person("John");
  person1.printNameArrow();  // Output: Arrow: My name is John
  

  function PersonRegular(name) {
    this.name = name;
    
    // Regular function creates its own 'this' context
    this.printNameRegular = function() {
      console.log(`Regular: My name is ${this.name}`);
    };
  }
  
  // Example usage
  const person2 = new PersonRegular("John");
  person2.printNameRegular();  // Output: Regular: My name is John

/* 
+++++++++  important Point+++++++
Key Difference:
    Arrow Functions:
        They don’t create their own this context. They inherit this from their surrounding scope (the place where they are defined).

    Regular Functions:
         They do create their own this context based on how they are called.

*/



/*
Explanation of this Binding:
---->>>>>Arrow Function (printNameArrow):

-Arrow functions do not have their own this context; instead, they inherit this from the surrounding context (in this case, the instance of the Person object).

-This means this.name inside the arrow function correctly refers to the name property of the Person instance.


---->> >>>>Regular Function (printNameRegular):

-Regular functions have their own this context, so this inside a regular function will refer to the function’s invocation context.

-If you call printNameRegular as a method on the object, this will correctly refer to the object itself (the PersonRegular instance), so this.name will work as expected.


However, if the function is called in a different context (e.g., as a standalone function or inside an event handler), this might no longer refer to the object, which can cause issues with regular functions. Arrow functions avoid this problem because they don’t rebind this.

*/