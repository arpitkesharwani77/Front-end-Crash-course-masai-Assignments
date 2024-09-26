// <========== problem Statement============>

/*

1. Create a prototype Employee with a method getDetai1s() that 
returns the employee's name and position. Then, create two other
prototypes, Manager and Developer , that inherit from Employee .
 Override the getDetai1s() method in both Manager and Developer to include 
additional information (e.g., team size for manager and programming language for Developer ).
 Create instances of both and call their getDetai1s() method.

*/    

// Step 1: Create the base Employee prototype
function Employee(name, position) {
    this.name = name;
    this.position = position;
}

// Step 2: Add the getDetails method to Employee prototype
Employee.prototype.getDetails = function() {
    return `Name: ${this.name}, Position: ${this.position}`;
};

// Step 3: Create the Manager constructor
function Manager(name, position, teamSize) {
    Employee.call(this, name, position); // Inherit properties from Employee
    this.teamSize = teamSize;
}

// Step 4: Use Object.setPrototypeOf to set the prototype of Manager to Employee
Object.setPrototypeOf(Manager.prototype, Employee.prototype);

// Step 5: Override getDetails method in Manager prototype
Manager.prototype.getDetails = function() {
    return `Name: ${this.name}, Position: ${this.position}, Team Size: ${this.teamSize}`;
};

// Step 6: Create the Developer constructor
function Developer(name, position, programmingLanguage) {
    Employee.call(this, name, position); // Inherit properties from Employee
    this.programmingLanguage = programmingLanguage;
}

// Step 7: Use Object.setPrototypeOf to set the prototype of Developer to Employee
Object.setPrototypeOf(Developer.prototype, Employee.prototype);

// Step 8: Override getDetails method in Developer prototype
Developer.prototype.getDetails = function() {
    return `Name: ${this.name}, Position: ${this.position}, Programming Language: ${this.programmingLanguage}`;
};

// Step 9: Demonstrate the functionality

// Create an instance of Manager
const manager = new Manager('Alice', 'Manager', 10);

// Create an instance of Developer
const developer = new Developer('Bob', 'Developer', 'JavaScript');

// Call getDetails on both instances
console.log(manager.getDetails()); 
// Output: Name: Alice, Position: Manager, Team Size: 10

console.log(developer.getDetails()); 
// Output: Name: Bob, Position: Developer, Programming Language: JavaScript
