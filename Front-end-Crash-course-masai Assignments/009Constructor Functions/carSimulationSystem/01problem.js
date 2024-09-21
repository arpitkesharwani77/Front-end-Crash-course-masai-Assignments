// <================problem statement =======================>

/*
You are tasked with developing a small library management system in JavaScript. The system should manage a collection of books and support various operations such as
adding new books, filtering books based on certain criteria, and performing statistical calculations on the collection. Specifically, you need to create a Book class using the
ES6 class syntax with properties for title, author, year, and genre, and a method to return the book's information as a string. Additionally, you should create a Library class
to manage the book collection, where the constructor initializes an empty array of books and includes a method to add books to the collection. Implement a factory
function to create new books. Furthermore, the Library class should have methods to filter books published after a given year using filter, return an array of all book titles
using map, calculate the total number of books using reduce, and calculate the average publication year of all books using reduce. Use these components to effectively
manage the library's book collection and perform the specified operations.


The class should include methods to accelerate and brake the car. The accelerate method
should increase the car's speed based on its accelerationPower and log "Accelerating"
along with the current speed to the console. The brake method should decrease the carls
speed based on its brakingPower, ensuring the speed does not go below zero, and log
"Brakes applied" along with the current speed to the console. Additionally, implement
methods to check the carls current speed, refuel the car (assuming a maximum fuel
capacity and a method to consume fuel while driving), and simulate a driving session
over a period of time where the car accelerates and brakes at certain intervals.



Your task is to implement the Car class with the following methods:=>

    -accelerate: Increase the speed by accelerationPower and log "Accelerating" along with
    the current speed.

    -brake: Decrease the speed by brakingPower, ensuring the speed does
    not drop below zero, and log "Brakes applied" along with the current speed.

    -checkSpeed:Return the current speed of the car. 
    
    -refuel: Increase the fuel level to its maximum capacity
    and log "Refueled to maximum capacity".

    - drive: Simulate a driving session where the car
    accelerates and brakes at specified intervals, logging the car's speed and fuel level at
    each step.

    -Ensure that the carls speed cannot be negative and the fuel level is managed
    appropriately.

    -Create instances of the Car class and test these methods to ensure proper
    functionality.

*/    


class Car {
    constructor(name, accelerationPower, brakingPower, fuelCapacity) {
        this.name = name;
        this.accelerationPower = accelerationPower; 
        this.brakingPower = brakingPower;           
        this.speed = 0;                             
        this.fuelCapacity = fuelCapacity;           
        this.fuelLevel = fuelCapacity;              
    }

    // Method to accelerate the car
    accelerate() {
        if (this.fuelLevel > 0) {
            this.speed += this.accelerationPower;
            this.consumeFuel();
            console.log(`Accelerating. Current speed: ${this.speed.toFixed(2)} m/s, Fuel level: ${this.fuelLevel.toFixed(2)} L`);
        } else {
            console.log("Out of fuel! Please refuel.");
        }
    }

    // Method to apply the brakes
    brake() {
        this.speed -= this.brakingPower;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Brakes applied. Current speed: ${this.speed.toFixed(2)} m/s`);
    }

    // Method to check the car's current speed
    checkSpeed() {
        return `Current speed is ${this.speed.toFixed(2)} m/s`;
    }

    // Method to refuel the car to its maximum capacity
    refuel() {
        this.fuelLevel = this.fuelCapacity;
        console.log(`Refueled to maximum capacity: ${this.fuelLevel} liters`);
    }

    // Private method to consume fuel as the car drives
    consumeFuel() {
        const fuelConsumptionRate = 0.05; // Assume fuel consumption per acceleration step
        this.fuelLevel -= fuelConsumptionRate;
        if (this.fuelLevel < 0) {
            this.fuelLevel = 0;
        }
    }

    // Method to simulate a driving session
    drive(durationInSeconds, intervalInSeconds) {
        let elapsedTime = 0;

        const driveInterval = setInterval(() => {
            if (this.fuelLevel > 0) {
                this.accelerate();

                if (elapsedTime >= durationInSeconds / 2) {
                    this.brake(); // Apply brakes after half the time
                }

                elapsedTime += intervalInSeconds;

                if (elapsedTime >= durationInSeconds) {
                    clearInterval(driveInterval);
                    console.log("Driving session finished.");
                }
            } else {
                console.log("Out of fuel! Stopping the car.");
                clearInterval(driveInterval);
            }
        }, intervalInSeconds * 1000); // Convert interval to milliseconds
    }
}

// Create an instance of the Car class
const myCar = new Car("Sportscar", 5, 3, 50); // Car with 5 m/s² acceleration, 3 m/s² braking power, 50-liter fuel capacity


console.log(myCar.checkSpeed()); // Current speed: 0 m/s
myCar.accelerate();               // Accelerating to increase speed
myCar.brake();                    // Brakes applied
console.log(myCar.checkSpeed());  // Check speed after braking

myCar.refuel();                   // Refuel the car to maximum capacity

// Simulate a driving session for 10 seconds, accelerating/braking every 2 seconds
myCar.drive(10, 2);
