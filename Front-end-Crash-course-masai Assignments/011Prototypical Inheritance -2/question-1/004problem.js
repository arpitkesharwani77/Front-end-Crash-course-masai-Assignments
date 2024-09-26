/* 
<===================== problem statement ======================>
4. Create a Person object with a method introduce() that
logs "Hello, my name is [name]" . Then, create an object Athlete that inherits
from Person and adds a method playsport() that logs "playing [sport]" . 
Override the introduce() method in Athlete to include the
sport they play. Instantiate an Athlete and demonstrate both 
the introduce() and playsport() methods.
*/

// Step 1: Create the Person object with a method introduce()
const Person = {
    name: '',
    introduce: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Step 2: Create the Athlete object that inherits from Person
const Athlete = {
    sport: '',
    // Overriding the introduce method to include the sport
    introduce: function() {
        console.log(`Hello, my name is ${this.name} and I play ${this.sport}`);
    },
    // Add the playsport method
    playSport: function() {
        console.log(`Playing ${this.sport}`);
    }
};

// Step 3: Set up prototypical inheritance using Object.setPrototypeOf()
Object.setPrototypeOf(Athlete, Person);

// Step 4: Demonstrate the functionality
const athlete = Object.create(Athlete); // Create an instance of Athlete
athlete.name = 'Michael';
athlete.sport = 'Basketball';

// Call the overridden introduce method
athlete.introduce(); // Output: Hello, my name is Michael and I play Basketball

// Call the playSport method
athlete.playSport(); // Output: Playing Basketball
