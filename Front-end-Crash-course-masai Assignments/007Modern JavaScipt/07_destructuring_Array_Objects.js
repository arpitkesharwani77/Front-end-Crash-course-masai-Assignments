// +++++++++++++++++++++++++++++++++++++++++ Destructuring Arrays and Objects  +++++++++++++++++++++++++++++++++++

console.log("<========================== Question 1 =================================>")
// 1.Array Destructuring:
            //  Write a function swap(a, b) that uses array destructuring to swap the values of a and b .

function swap(a, b){
    [a,b]=[b,a]
    return {a,b}
}
let a=10;
let b=5; 
console.log(swap(a,b))      //{ a: 5, b: 10 } 

console.log(a,b)            // 10 5


/* 
            <============direct swapping two variables==================>
                let num1 = 500;
                let num2 = 10000;

                [num1, num2] = [num2, num1];  // Swapping the values

                console.log(num1); // Output: 10000
                console.log(num2); // Output: 500
*/


console.log("<========================== Question 2 =================================>")
// 2. Object Destructuring:
    // Write a function displayperson(person) that uses object destructuring to extract and log the name and age   properties from a person object.

// function displayperson(person){
//     let{name,age}=person
//     return {name,age}
// }

// console.log(displayperson(person))


function displayperson(person){
    let {name:n,age:a}=person       
    console.log(n,a)
}

let person={
    name:"arpit",
    age:24
}
displayperson(person)

console.log("<========================== Question 3 =================================>")
// 3. Nested Destructuring: Create a function extractNestedData(obj) that uses nested object destructuring to extract values from a nested object like { name: { first: "John" ,last:"Doe" } , age: 30 } .

function extractNestedData(obj){
        let {first:firstName,last:lastName}=obj.name
        let {age:employeeAge}=obj
        console.log("first name:",firstName,"last name:",lastName)
        console.log("employee age:",employeeAge)
}
let employee={ 
                name: { first: "John" ,last:"Doe" } ,
                age: 30 }

extractNestedData(employee)     


/*
    second ways==>
       
function extractNestedData(obj) {
    const { name: { first, last }, age } = obj;
    console.log(`First Name: ${first}, Last Name: ${last}, Age: ${age}`);
}

const person = { 
    name: { 
        first: "John", 
        last: "Doe" 
    }, 
    age: 30 
};

extractNestedData(person);
/// Output: First Name: John, Last Name: Doe, Age: 30
    
*/


console.log("<========================== Question 4 =================================>")
// 4. Default Values in Destructuring: Write a function getCoordinate ({x = 0, y = 0 }= {}) that uses object destructuring with default values to return coordinates. Test it with different inputs.   

function getCoordinate ({x = 0, y = 0 }= {}){
    return `so the coordinate is: (${x},${y})`
}
let coordinate1={x:2,y:3}
let coordinate2={x:4,y:6}
let coordinate3={x:1,y:11}

console.log(getCoordinate(coordinate1))   //so the coordinate is: (2,3)
console.log(getCoordinate(coordinate2))
console.log(getCoordinate(coordinate3))
console.log(getCoordinate())     //so the coordinate is: (0,0)




console.log("<========================== Question 5 =================================>")
// 5. Rest in Destructuring: Write a function getUser1nfo(user) that destructures the user object, extracting name and placing the remaining properties into a rest variable.


function getUserInfo(user){
    const { name,...restInfo }=user
    console.log(name,restInfo)

    return {name,restInfo}
}

let userObject={
    name:"arpit kesharwani",
    age:24,
    email:"arpit@gmail.com",
    city:'prayagraj'
}
console.log(getUserInfo(userObject))

