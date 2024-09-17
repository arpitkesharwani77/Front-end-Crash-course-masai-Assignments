// +++++++++++++++++++++++++++++++++ var vs let vs const +++++++++++++++++++++++++++++++++++

console.log("<=============Q1================>")

// 1. Scope Comparison: Write two functions testvar() and testLet() that declare a variable inside a block using var and let , and log the result. Show how var leaks out of the block scope, while let does not.

function testvar(){
    if (5===5){
        var a=5;
    console.log("inside of if block in testvar function",a)
    }
    console.log("outside of if block in testvar function",a)  //accessible outside of if block as var has functional scope
}
testvar()
//console.log(a)  //error as var has functional scoper


function testLet(){
    if (true){
        let b=10;
        console.log("inside of if block in testlet function",b)
    }
    //console.log("outside of if block in testlet function",b)  //error bcs let accessible only within block scope
}
//console.log(b)  //error bcs let accessible only within block scope
testLet()


/*
==> Explanation:
            -var is function-scoped, meaning it can be accessed outside a block if it is declared inside a block, which may cause unexpected behavior.

            -let is block-scoped, meaning it is confined to the block in which it is declared and cannot be accessed outside the block.
*/

console.log("<=============Q2================>")

// 2. Constant Variables: Write a function createconstantArray() that declares a constant array using const , adds elements to the array, and tries to reassign it. Explain what happens and why.


function createconstantArray(){
    const arr=[]
    arr.push(5)
    arr.push(3)
    console.log(`after two element added in arr:${arr}`);
    try{
        arr=[3,2,1]  //trying to re-assign arr
       console.log("re-assign of arr successful and the array is now:",arr)
    }catch{
        console.log("re-assign of arr failed")
    }    
}

createconstantArray()

/*

<++++++++++++++++++++++ const keyword  +++++++++++++++:
Explanation:
    -When you declare an array using const, you cannot reassign the array to a new reference (like arr = [5, 6, 7]), because const ensures that the reference to the array is constant.
    
    -However, the contents of the array can be modified. This means you can push new elements,   update existing ones, or change the array in any way, but the variable must always refer to the same array.
*/


console.log("<=============Q3================>")


// 3. Temporal Dead Zone: Write a function demonstrateTDZ() that tries to log a let variable before it's declared. Compare this with using var .

/* 
        +++++++++++++++++++++++++ Temporal Dead Zone   +++++++++++++++++++++++++++

-In JavaScript, the Temporal Dead Zone (TDZ) refers to the time between entering a block scope and the point where a variable declared using let or const is initialized. If you try to access these variables before they are declared, you'll encounter a ReferenceError.

-On the other hand, variables declared with var are hoisted to the top of their scope and initialized with undefined, so accessing them before the declaration doesn't cause an error but returns undefined.

*/

function demonstrateTDZ(){
    console.log(name)
}
//demonstrateTDZ()     //ReferenceError: Cannot access 'name' before initialization
let name="arpit"
demonstrateTDZ()         //arpit


function demonstrateTDZ2(){
    console.log(name2)      
}

demonstrateTDZ2()       //undefined
var name2="arpit"
demonstrateTDZ2()           //arpit



function demonstrateTDZwithGPT() {
    // Trying to access 'let' variable before declaration
    try {
        console.log("Accessing let before declaration:", someLet); // This will throw a ReferenceError
    } catch (error) {
        console.log("Error:", error.message); // Output: Error: Cannot access 'someLet' before initialization
    }

    let someLet = 10; // 'let' variable is declared

    // Now accessing 'let' after declaration
    console.log("Accessing let after declaration:", someLet); // Output: 10

    // Accessing 'var' variable before declaration
    console.log("Accessing var before declaration:", someVar); // Output: undefined (because of hoisting)

    var someVar = 20; // 'var' variable is declared

    // Now accessing 'var' after declaration
    console.log("Accessing var after declaration:", someVar); // Output: 20
}
// Test the function
demonstrateTDZwithGPT();


/*
Explanation:====>
    let variable (Temporal Dead Zone)==>:
       - When we try to access someLet before it's declared, we get a ReferenceError. This is because variables declared with let are in the TDZ until their declaration is encountered.

       - After the declaration (let someLet = 10;), we can access someLet normally, and it prints 10.

    var variable (Hoisting)==>:
       - Variables declared with var are hoisted to the top of their scope. This means the declaration is moved to the top, but the initialization remains in place.

    -When we try to access someVar before the declaration, it returns undefined instead of throwing an error, because var is hoisted and initialized with undefined. After the declaration, it behaves normally and prints 20.


+++++++++++

The key difference is that let variables cannot be accessed before their declaration due to the TDZ, while var variables can be accessed, but they will have the value undefined until they are initialized.

++++++++++
*/

console.log("<=============Q4================>")

// 4. Re-declaration of Variables: Write a function testRedec1aration() that demonstrates how var allows re-declaring the same variable within the same scope, whereas let and const do not.


/*
In JavaScript, the behavior of re-declaring variables differs between var, let, and const.
         Here's how they behave:

            var allows re-declaring the same variable within the same scope.

            let and const do not allow re-declaring a variable within the same scope, 
            and trying to do so results in a SyntaxError.
 * 
 */
function testRedec1aration(){
    var name="arpit";
    console.log(name);

    var name="saurabh";  //re-declaration  are allowed
    console.log(name);

    let email="arpit@gmail.com"  //Cannot redeclare block-scoped variable 'email'
    console.log(email)   //arpit@gmail.com

    // let email="saurabh@gmail.com"    //Cannot redeclare block-scoped variable 'email'
    // console.log(email)               
}

testRedec1aration()

console.log("<=============Q5================>")
// 5. Block Scope and Loop: Create a function loopwithvarAndLet() that uses var in a for loop and logs the index after the loop finishes. Do the same with let and explain the difference.

function loopwithvarAndLet(){
    //with var for loop
    for(var i=0; i<3; i++){
        console.log(i, "inside of var-for loop")
    }
    console.log(i,"outside of var with for loop\n")   //0 because var is accessible here

    //with let for loop

    for(let i=0; i<3; i++){
        console.log(i,"inside of let-for loop")
    }
    console.log(i, 'outside of let with for loop')  //0 because var is accessible here
}
loopwithvarAndLet()


/**
     -var is function-scoped, so it "escapes" the block and is accessible after the loop. The same variable is reused throughout the iterations.

    -let is block-scoped, so each iteration of the loop has its own separate instance of the variable. Once the loop is finished, the variable is no longer accessible outside the loop block.
 */