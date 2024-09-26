// <====================Title===================>
// Basic Person Management System with Prototypical Inheritance

// Topics   ========>

// - JavaScript Constructor Functions
// - Prototypes and Inheritance

/* 
<========================= Problem Statement ==========================>

-You are developing a basic person management system. Implement this system using constructor 
functions and prototypical inheritance.

-Create a constructor function person with properties:
    -name (string): name of the person
    -age (number): age of the person

-Add a method "introduce" to Person.prototype that logs:
    - "Hi, my name is [name] and I am [age] years old."

-Create a constructor function Employee that inherits from Person and adds:
    - jobTit1e (string): job title of the employee

-Add a method work to Employee. prototype that logs:
    - "[name] is working as a [jobTitle].lI


   +++ Demonstration+++
1. Create an instance of Person .
2. Create an instance of Employee .
3. Call introduce on both instances.
4. Call work on the Employee instance.

*/

// Step 1: Create the constructor function Person with name and age properties
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Step 2: Add the introduce method to Person.prototype
Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Step 3: Create the constructor function Employee that inherits from Person
function Employee(name, age, jobTitle) {
    // Call the parent constructor (Person) to inherit name and age
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Step 4: Ensure Employee.prototype inherits from Person.prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // Fix the constructor reference

// Step 5: Add the work method to Employee.prototype
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// +++ Demonstration +++

// Step 6: Create an instance of Person
const person1 = new Person('Alice', 30);

// Step 7: Create an instance of Employee
const employee1 = new Employee('Bob', 40, 'Software Engineer');

// Step 8: Call introduce on both instances
person1.introduce(); // Output: "Hi, my name is Alice and I am 30 years old."
employee1.introduce(); // Output: "Hi, my name is Bob and I am 40 years old."

// Step 9: Call work on the Employee instance
employee1.work(); // Output: "Bob is working as a Software Engineer."
