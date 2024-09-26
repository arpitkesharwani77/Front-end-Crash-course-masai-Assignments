/*<================ problem statement================>

5. Define a base Appliance prototype with a turnon() method 
that logs "The appliance is now on" . Create another prototype washingmachine that
 inherits from Appliance and adds a method startwashing() that 
 logs "The washing machine is now washing clothes" . 
 Demonstrate the functionality by creating a washingmachine instance, 
 calling both turnon() and startwashing() .

  */

 // Base Appliance prototype
function Appliance() {}

Appliance.prototype.turnon = function() {
    console.log("The appliance is now on");
};

// WashingMachine prototype
function WashingMachine() {}

// Set WashingMachine to inherit from Appliance
Object.setPrototypeOf(WashingMachine.prototype, Appliance.prototype);

// Add startwashing method to WashingMachine
WashingMachine.prototype.startwashing = function() {
    console.log("The washing machine is now washing clothes");
};

// Demonstrate functionality
const myWashingMachine = new WashingMachine();
myWashingMachine.turnon();        // Inherited from Appliance
myWashingMachine.startwashing();  // Specific to WashingMachine
