// <+++++++++++++++++++++++++++++++Topics++++++++++++++++++++++++++++++++++++>

// ===============>Prototypes

// ===============>Prototypical Inheritance

/* 
<=======================Problem Statement=====================>

    Write JavaScript code to achieve the following tasks:

1. Define a constructor function Animal with a property type set to "Animal"
2. Add a method sound to Animal. prototype that logs "Animal sound" .
3. Define a constructor function Dog that inherits from Animal
4. Ensure that Dog.prototype inherits from Animal.prototype
5. Override the sound method in Dog. prototype to log "Bark" instead of
"Animal sound"
6. Create an instance of Dog called myDog .
7. Call the sound method on myDog


*/

// Step 1: Define the constructor function Animal with a property 'type'
function Animal() {
    this.type = "Animal";
}

// Step 2: Add a method 'sound' to Animal.prototype that logs "Animal sound"
Animal.prototype.sound = function() {
    console.log("Animal sound");
};

// Step 3: Define the constructor function Dog that inherits from Animal
function Dog() {
    // Call the parent constructor (Animal) to initialize 'type'
    Animal.call(this); // Ensures the 'type' is inherited properly
    this.type = "Dog"; // Optionally, change the type to "Dog" if needed
}

// Step 4: Ensure Dog.prototype inherits from Animal.prototype
Dog.prototype = Object.create(Animal.prototype); 
Dog.prototype.constructor = Dog; // Fix the constructor reference

// Step 5: Override the sound method in Dog.prototype to log "Bark"
Dog.prototype.sound = function() {
    console.log("Bark");
};

// Step 6: Create an instance of Dog called myDog
const myDog = new Dog();

// Step 7: Call the sound method on myDog
myDog.sound(); // Output: "Bark"

// Test different scenarios
const animal = new Animal();
animal.sound(); // Output: "Animal sound"

const anotherDog = new Dog();
anotherDog.sound(); // Output: "Bark"
