// ++++++++++++++++++++++++++++++++Optional Chaining++++++++++++++++++++++++++++++++++++++

console.log("<=====================Question 1======================>")

// 1. Basic Optional Chaining:==>

// Write a function getusercity(user)  that uses optional chaining to safely access the city property of the address object within a user object. Return undefined if the address or city is missing.

function getusercity(user) {
    
    console.log(user.address)
    console.log(user.address?.city)
    console.log(user.address?.city?.block)
    console.log("------finished-------")
}
let user1={
    name:"arpit",
    age:24,
    email:"arpit@gmail.com",
    address:{city:"Prayagraj"}
}
let user2={
    name:"arpit",
    age:24,
    email:"arpit@gmail.com",
    address:"Prayagraj"
}
let user3={
    name:"arpit",
    age:24,
    email:"arpit@gmail.com",
}

getusercity(user1)
getusercity(user2)
getusercity(user3)


console.log("<=====================Question 2======================>")
// 2. Optional Chaining with Arrays: Write a function getFirstFriend(user) that uses optional chaining to safely access the first friend in the friends array of a user object. Return undefined if the friends array is missing or empty.

function getFirstFriend(user){
    console.log(user?.friends?.[0])
}
let user4={
    name:"arpit",
    age:24,
    friends:1
}

let user5={
    name:"arpit",
}
let user6={
    name:"arpit",
    friends:["arpit","saurabh","aman","vivek"]
}

getFirstFriend(user4)
getFirstFriend(user5)
getFirstFriend(user6)
getFirstFriend({})

console.log("<=====================Question 3======================>")
// 3. Optional Chaining with Function Calls: Write a function calloptionalmethod(obj) that uses optional chaining to call a method greet() on obj , returning undefined if greet doesn't exist.

function calloptionalmethod(obj){
    return obj?.greet?.()
}
let obj1={
    name:"arpit",
    greet:function(){
        return "hello i am greet from obj1"
    }
}
let obj2={
    name:"saurabh",
    email:"saurabh@gmail.com",
    address:"Prayagraj"
}
let obj3={
    name:"vivek",
    friends:["arpit","saurabh","aman","vivek"]
}

console.log(calloptionalmethod(obj1))
console.log(calloptionalmethod(obj2))
console.log(calloptionalmethod(obj3))

console.log("<=====================Question 4======================>")
// 4. Optional Chaining with Nested Objects: Write a function getNestedProperty(obj) that uses optional chaining to safely retrieve a deeply nested property like obj .a.b.c.d .


function getNestedProperty(obj) {
    return obj?.a?.b?.c?.d;
}

const nestedObject = {
    a: {
        b: {
            c: {
                d: "Deep Value"
            }
        }
    }
};

const partialNestedObject = {
    a: {
        b: {
            c: {}
        }
    }
};

const emptyObject = {};

console.log(getNestedProperty(nestedObject));        // Output: Deep Value
console.log(getNestedProperty(partialNestedObject)); // Output: undefined
console.log(getNestedProperty(emptyObject));         // Output: undefined




console.log("<=====================Question 5======================>")

// 5. Optional Chaining with Default Values: Modify the previous function to return a default value like "Not Available" if the deeply nested property is undefined .

function getNestedProperty(obj) {
    return obj?.a?.b?.c?.d ?? "Not Available";
}

const nestedObject2 = {
    a: {
        b: {
            c: {
                d: "Deep Value"
            }
        }
    }
};

const partialNestedObject2 = {
    a: {
        b: {
            c: {}
        }
    }
};

const emptyObject3 = {};

console.log(getNestedProperty(nestedObject2));        // Output: Deep Value
console.log(getNestedProperty(partialNestedObject2)); // Output: Not Available
console.log(getNestedProperty(emptyObject3));         // Output: Not Available
