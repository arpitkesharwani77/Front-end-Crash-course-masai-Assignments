/*
<================Problem Statement===============>

You're tasked with developing a sophisticated e-commerce system to
manage various products efficiently. To achieve scalability and
maintainability, you opt to implement the system in JavaScript
using constructor functions and prototypical inheritance. The system
should accommodate diverse product types such as Electronics,
Clothing, and Books, each with unique attributes and behaviors.
All products share common features like name, price, and quantity,
which should be implemented in a base constructor function called Product. 
Specialized products like Electronics, Clothing, and Books have additional properties
and methods specific to their category. For instance, Electronics may have
properties like brand and model, along with methods like powerOn and powerOff.
Your task is to design and implement the system, ensuring clear inheritance
among different product types using prototypical inheritance. 
The system should minimize code duplication and effectively 
handle product management operations.

 */


// Step 1: Base constructor function for Product
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

// Step 2: Add common methods for all products
Product.prototype.showDetails = function() {
    console.log(`Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
};

Product.prototype.updateQuantity = function(newQuantity) {
    this.quantity = newQuantity;
    console.log(`Updated quantity of ${this.name}: ${this.quantity}`);
};

// Step 3: Constructor function for Electronics
function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity); // Inherit properties from Product
    this.brand = brand;
    this.model = model;
}

// Step 4: Inherit Product prototype for Electronics
Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

// Step 5: Add unique methods for Electronics
Electronics.prototype.powerOn = function() {
    console.log(`${this.name} is now powered on.`);
};

Electronics.prototype.powerOff = function() {
    console.log(`${this.name} is now powered off.`);
};

// Step 6: Constructor function for Clothing
function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity); // Inherit properties from Product
    this.size = size;
    this.material = material;
}

// Step 7: Inherit Product prototype for Clothing
Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

// Step 8: Add unique methods for Clothing
Clothing.prototype.tryOn = function() {
    console.log(`Trying on ${this.name} of size ${this.size}.`);
};

// Step 9: Constructor function for Books
function Book(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity); // Inherit properties from Product
    this.author = author;
    this.genre = genre;
}

// Step 10: Inherit Product prototype for Books
Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;

// Step 11: Add unique methods for Books
Book.prototype.read = function() {
    console.log(`Reading ${this.name} by ${this.author}.`);
};

// Step 12: Demonstrate functionality

// Create instances of different products
const laptop = new Electronics('Laptop', 1200, 10, 'Apple', 'MacBook Pro');
const shirt = new Clothing('T-Shirt', 25, 50, 'M', 'Cotton');
const novel = new Book('The Great Gatsby', 15, 100, 'F. Scott Fitzgerald', 'Fiction');

// Show product details
laptop.showDetails(); // Output: Product: Laptop, Price: $1200, Quantity: 10
shirt.showDetails();  // Output: Product: T-Shirt, Price: $25, Quantity: 50
novel.showDetails();  // Output: Product: The Great Gatsby, Price: $15, Quantity: 100

// Use specific methods for Electronics
laptop.powerOn(); // Output: Laptop is now powered on.
laptop.powerOff(); // Output: Laptop is now powered off.

// Use specific methods for Clothing
shirt.tryOn(); // Output: Trying on T-Shirt of size M.

// Use specific methods for Books
novel.read(); // Output: Reading The Great Gatsby by F. Scott Fitzgerald.

// Update product quantity
laptop.updateQuantity(8); // Output: Updated quantity of Laptop: 8
