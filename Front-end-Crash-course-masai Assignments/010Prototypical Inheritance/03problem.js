// <===================Title ==================>

// Prototypical Inheritance and Constructor Functions - I


/*

<==================== Problem Statement ====================>

You are developing a simulation for a car rental service. The simulation should manage the inventory of cars, track rentals by customers, and handle the return and maintenance of cars. 
Additionally, there are different types of cars with varying rental rules and prices. The system should be able to process rentals asynchronously to simulate real-world delays.

---To implement this system, follow these steps:===>

1. Create a constructor function for car that takes the following parameters:
    -make : the make of the car (e.g., Toyota)
    - model : the model of the car (e.g., Corolla)
    - year : the year of the car (e.g., 2020)
    - isAvai1ab1e : a boolean indicating if the car is available for rent (default is true )

2. Create a constructor function for customer that takes the following parameters:

    -name : the name of the customer
    -rentedcars : an array to store the cars rented by the customer (default is an empty array)


3. Add a method to the customer prototype to allow customers to rent a car.
    -This method should:
        - Take a car object as an argument.
        - Check if the car is available.
        -If the car is available, mark it as not available and add the car to the customer's rentedcars array.
        - If the car is not available, log a message saying the car is already rented.


4. Create a constructor function for Premiumcustomer that inherits from customer and takes the same parameters. Additionally,   
    -Premiumcustomer should have:
        - A discountRate property indicating a discount on rental prices (e.g., 10%).


5. Create a function to calculate rental prices that considers:
    - Base rental price per day (e.g., $50).
    -Different rates for different car types (e.g., SUV, Sedan).
    -Apply discounts for premium customers.

6. Handle car returns by adding a method to the customer prototype to return a car. 
This method should:

    - Take a car object as an argument.
    - Mark the car as available. 
    - Remove the car from the customer's rentedcars array.
    - Simulate a delay in processing the return (e.g., 2 seconds).


7. Extend the system to handle maintenance:
    -Create a Maintenance function that takes a car object and a delay (in milliseconds).
    -After the delay, mark the car as available.

8. Demonstrate the functionality:

    -Create several car objects of different types.
    -Create regular and premium customers.
    -Show renting and returning cars, applying discounts, and handling maintenance.
    -Use call , apply , and bind where appropriate to demonstrate your understanding.   

 */


// Step 1: Create the constructor function for Car
function Car(make, model, year, type, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type; // e.g., "SUV", "Sedan"
    this.isAvailable = isAvailable;
}

// Step 2: Create the constructor function for Customer
function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}

// Step 3: Add a method to Customer.prototype to allow customers to rent a car
Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented the car: ${car.make} ${car.model}`);
    } else {
        console.log(`Sorry, ${car.make} ${car.model} is already rented.`);
    }
};

// Step 6: Add a method to Customer.prototype to return a car with a simulated delay
Customer.prototype.returnCar = function(car) {
    if (this.rentedCars.includes(car)) {
        setTimeout(() => {
            car.isAvailable = true;
            this.rentedCars = this.rentedCars.filter(c => c !== car);
            console.log(`${this.name} returned the car: ${car.make} ${car.model}`);
        }, 2000); // Simulate a delay of 2 seconds
    } else {
        console.log(`${this.name} did not rent this car.`);
    }
};

// Step 4: Create the constructor function for PremiumCustomer
function PremiumCustomer(name, discountRate = 0.1) {
    Customer.call(this, name); // Inherit from Customer
    this.discountRate = discountRate; // e.g., 10% discount
}

// Inherit Customer prototype
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

// Step 5: Function to calculate rental prices
function calculateRentalPrice(car, days, isPremiumCustomer = false, discountRate = 0) {
    const basePrice = 50; // Base price per day
    let typeRate = 1;

    switch (car.type) {
        case 'SUV':
            typeRate = 1.5;
            break;
        case 'Sedan':
            typeRate = 1.2;
            break;
        default:
            typeRate = 1;
    }

    let totalPrice = basePrice * typeRate * days;
    if (isPremiumCustomer) {
        totalPrice -= totalPrice * discountRate;
    }
    
    console.log(`Rental price for ${days} day(s) is: $${totalPrice.toFixed(2)}`);
    return totalPrice;
}

// Step 7: Function to handle car maintenance
function Maintenance(car, delay) {
    console.log(`Car ${car.make} ${car.model} is under maintenance...`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`Car ${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}

// Step 8: Demonstrate functionality

// Create car objects
const car1 = new Car('Toyota', 'Corolla', 2020, 'Sedan');
const car2 = new Car('Ford', 'Explorer', 2021, 'SUV');
const car3 = new Car('Honda', 'Civic', 2019, 'Sedan');

// Create regular customer and premium customer
const regularCustomer = new Customer('Alice');
const premiumCustomer = new PremiumCustomer('Bob');

// Rent and return cars
regularCustomer.rentCar(car1); // Alice rents Toyota Corolla
premiumCustomer.rentCar(car2); // Bob rents Ford Explorer
regularCustomer.returnCar(car1); // Alice returns Toyota Corolla after 2 seconds

// Calculate rental prices
calculateRentalPrice(car1, 3); // Base calculation for 3 days for a regular customer
calculateRentalPrice(car2, 5, true, premiumCustomer.discountRate); // Premium customer with discount

// Maintenance for a car
Maintenance(car3, 3000); // Honda Civic goes under maintenance for 3 seconds
