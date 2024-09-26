/*
<<<<<<<<<<<<<<<<<<<< problem statement >>>>>>>>>>>>>>>>>>>>>>>>>>>>

2. Define a User constructor function that takes a name and role . Create a prototype method 
getR01e() in User that logs the user'srole. Then, create another 
constructor function Admin that inherits from User and adds an additional method 
manageUsers() that logs "Admin managing users" . 
Create an instance of Admin and demonstrate both getRole() and manageusers() methods.


 */

// Step 1: Define the User constructor function
function User(name, role) {
    this.name = name;
    this.role = role;
}

// Step 2: Add a method to User.prototype to get the user's role
User.prototype.getRole = function() {
    console.log(`Role: ${this.role}`);
};

// Step 3: Define the Admin constructor function that inherits from User
function Admin(name) {
    User.call(this, name, 'Admin'); // Call the User constructor with 'Admin' role
}

// Step 4: Inherit User prototype in Admin using Object.setPrototypeOf()
Object.setPrototypeOf(Admin.prototype, User.prototype);

// Step 5: Add the manageUsers method to Admin.prototype
Admin.prototype.manageUsers = function() {
    console.log("Admin managing users");
};

// Step 6: Demonstrate the functionality
const admin = new Admin('Alice');

// Call the getRole method (inherited from User)
admin.getRole(); // Output: Role: Admin

// Call the manageUsers method (specific to Admin)
admin.manageUsers(); // Output: Admin managing users
