// <========= factory function that can be used to create animal objects =========>
/*

• Write a factory function that can be used to create animal objects in bulk quantity.
    -animal

        ├── noOfLegs <number>
        ├── vegetarian <boolean>
        ├── eat() <function that returns `eating...`>
        └── greet() <function that returns `Hi, I have {noOfLegs} legs.`>

    
    -define an animal factory function that takes input as
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

let a1 = animal(4, true);
console.log(a1.eat()); // eating...
console.log(a1.greet()); // Hi, I have 4 legs.

*/

function animal(noOfLegs,vegetarian){
    let obj={}

    obj.noOfLegs=noOfLegs
    obj.vegetarian

    obj.eat=function(){
        return `eating.....`
    }
    obj.greet=function(){
        return `Hi, I have ${obj.noOfLegs} legs.`
    }
    return obj
}

let a1 = animal(4, true);
console.log(a1.eat()); // eating...
console.log(a1.greet()); // Hi, I have 4 legs.

