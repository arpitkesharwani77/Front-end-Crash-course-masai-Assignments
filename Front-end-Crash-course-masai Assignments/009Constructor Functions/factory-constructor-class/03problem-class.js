// <========= factory function to an ES6 class =========>
/*

• create a class AnimalES6 that can be used to create animal objects in bulk quantity.
    -AnimalES6

        ├── noOfLegs <number>
        ├── vegetarian <boolean>
        ├── eat() <function that returns `eating...`>
        └── greet() <function that returns `Hi, I have {noOfLegs} legs.`>

    
    -define an AnimalES6 factory function that takes input as
            - noOfLegs (number)
            - vegetarian (boolean)

    -Every animal object it creates has the following

       - properties : noOfLegs, vegetarian

       - methods :
        eat -
            return "eating..."
        
        greet - 
            return "Hi, I have ${noOfLegs} legs."    

==> output

let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.


*/
class AnimalES6{
    constructor(noOfLegs, vegetarian) {
        this.noOfLegs=noOfLegs
        this.vegetarian=vegetarian
    }
    eat(){
        return `eating.......`
    }
    greet(){
        return `Hi, I am ${this.noOfLegs} legs.`
    }

}

let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.

