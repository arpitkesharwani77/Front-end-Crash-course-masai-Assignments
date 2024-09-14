// <===============================Do-While Loop=============================>

console.log("==========> Question-1")    
// 1. Basic Do-While Loop: Write a do-while loop that logs the numbers from 1 to 5. Compare it with a
// while loop and explain the difference in behavior when the condition is false from the start.

let num=0;
do{
    console.log(++num)
}while(num<5)

/*

Difference in Behavior:======>

---------    do-while Loop:==>

In a do-while loop, the code inside the loop block always executes at least once,
 even if the condition is false at the beginning.

Example: If we set i = 6 before entering the do-while loop, it will still log 6 once before exiting because the condition is checked after the block of code has run.
This is known as a post-condition loop.


--------while Loop:========>

In a while loop, the condition is checked before the code inside the loop executes.

Example: If we set i = 6 before the while loop, the loop will not run at all because the condition is false from the start.
This is known as a pre-condition loop.
 */    

console.log("==========> Question-2")  

// 2. Input Validation Using Do-While: Write a function validatepassword() that prompts the user for a
// password and uses a do-while loop to keep asking for input until the password meets a specified
// condition (e.g., length greater than 6).

// function validatepassword(){
//     do{
//         var isValidPassword=prompt("please enter the password")
//           // prompt  and alert will not work here bcs it works in browser only

//          if (isValidPassword.length>=6) {
//                 alert("password is saved Successfully!")
//          }
//          else{
//             alert("your password is too short please make it to atleast 6 character")
//          }
//     }
//     while(isValidPassword.length<6)
// }
// validatepassword()

console.log("==========> Question-3")  

// 3. Random Number Guessing Game: Write a function guessNumber() that generates a random number
// between 1 and 10. Use a do-while loop to keep asking the user to guess the number until they guess
// correctly. Log the number of attempts it took to guess the correct number.


function guessNumber() {
    const targetNumber = Math.floor(Math.random() * 5) + 1; 
    let count = 0;
  
    do {
      const guessedNumber = parseInt(prompt("Please guess the number (between 1 and 10 inclusive):"), 10); // Convert input to integer
      count++;
  
      if (guessedNumber === targetNumber) {
        alert(`Correct! Congratulations, you win in ${count} attempts.`);
        break; 
      } else {
        alert("You guessed wrong. Please try again.");
      }
    } while (true);
  }
  
  guessNumber();
  
  