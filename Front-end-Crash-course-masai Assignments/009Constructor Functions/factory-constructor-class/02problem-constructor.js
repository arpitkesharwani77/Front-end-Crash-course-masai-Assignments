// <========= factory function to a constructor function =========>
/*

• Write a constructor function that can be used to create animal objects in bulk quantity..
    -animalCF

        ├── noOfLegs <number>
        ├── vegetarian <boolean>
        ├── eat() <function that returns `eating...`>
        └── greet() <function that returns `Hi, I have {noOfLegs} legs.`>

    
    -define an AnimalCF factory function that takes input as
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

let animalCF = new AnimalCF(4, true);
console.log(animalCF.eat()); // eating...
console.log(animalCF.greet()); // Hi, I have 4 legs.


*/
function AnimalCF(noOfLegs,vegetarian){
    this.noOfLegs=noOfLegs
    this.vegetarian=vegetarian

    this.eat=function(){
        return `eating.......`
    }
    this.greet=function(){
        return `Hi, I have ${this.noOfLegs} legs.`
    }
}

let animalCF = new AnimalCF(4, true);
console.log(animalCF.eat()); // eating...
console.log(animalCF.greet()); // Hi, I have 4 legs.