// <------------------------Switch Case------------------->


console.log("Q1=========================>")
// 1. Basic Switch Case: Write a function getDayOfWeek(dayNumber) that uses a switch case to return the
// name of the day based on the number ( 1 for Monday, 2 for Tuesday, etc.).


// function getDayOfWeek(dayNumber){
//     switch(dayNumber){
//         case 0:
//             return "Sunday"
//         case 1:
//             return "Monday"
//         case 2:
//             return "Tuesday"
//         case 3:
//             return "Wednesday"
//         case 4:
//             return "Thursday"
//         case 5:
//             return "Friday"
//         case 6:
//             return "Saturday"
//         default:
//             return "invalid number please provide a number between 0-6"   
//     }
// }

// console.log(getDayOfWeek(2))
// console.log(getDayOfWeek(6))
// console.log(getDayOfWeek(10))

function getDayOfWeek(dayNumber) {
    let dayName;
    switch (dayNumber) {
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
      case 6:
        dayName = "Saturday";
        break;
      case 7:
        dayName = "Sunday";
        break;
      default:
        dayName = "Invalid day number"; 
        break;
    }
  
    return dayName;
  }
  
 
  console.log(getDayOfWeek(1)); 
  console.log(getDayOfWeek(4)); 
  console.log(getDayOfWeek(7)); 
  console.log(getDayOfWeek(9)); 
  

console.log("Q2=========================>")
// 2. Switch with Fall-through: Modify the previous function so that if the day number is 6 or 7 , it returns
// "Weekend." Ensure that case 6 falls through to case 7 to return the same result.


function getDayOfWeek(dayNumber) {
    let dayName;
    switch (dayNumber) {
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;

      case 6:
      case 7:
        dayName = "Weekend";
        break;
      default:
        dayName = "Invalid day number"; 
        break;
    }
  
    return dayName;
  }
  
 
  console.log(getDayOfWeek(1)); 
  console.log(getDayOfWeek(4)); 
  console.log(getDayOfWeek(7)); 
  console.log(getDayOfWeek(6)); 
  console.log(getDayOfWeek(9)); 

console.log("Q3=========================>")

// 3. Switch Case with Multiple Conditions: Write a function classifyAnima1(anima1) that uses a switch
// case to classify animals as "mammal," "bird," "reptile," etc. Use fall-through where appropriate to group
// similar animals together.

function classifyAnimal(animal) {
    let category;
  
    switch (animal.toLowerCase()) {
      case "dog":
      case "cat":
      case "elephant":
      case "tiger":
        category = "Mammal";
        break;
      
      case "sparrow":
      case "eagle":
      case "parrot":
      case "penguin":
        category = "Bird";
        break;
  
      case "snake":
      case "lizard":
      case "crocodile":
      case "turtle":
        category = "Reptile";
        break;
  
      case "shark":
      case "salmon":
      case "goldfish":
        category = "Fish";
        break;
  
      case "frog":
      case "toad":
      case "newt":
        category = "Amphibian";
        break;
  
      default:
        category = "Unknown"; 
        break;
    }
  
    return category;
  }
  
 
  console.log(classifyAnimal("Dog"));     
  console.log(classifyAnimal("sparrow"))
  console.log(classifyAnimal("snake"));
  console.log(classifyAnimal("Shark")); 
  console.log(classifyAnimal("Frog"));  
  console.log(classifyAnimal("dinosaur"));
  