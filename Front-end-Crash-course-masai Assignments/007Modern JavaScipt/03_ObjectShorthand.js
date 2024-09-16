// +++++++++++++++++++++++++++++++++++Object Shorthand+++++++++++++++++++++++++++++
console.log("<================Question1======================>")
// 1. Basic Object Shorthand: Write a function createperson(name, age) that uses the shorthand property syntax to return an object with name and age .

const createperson1=(name,age)=>({"name":name,"age":age})
console.log(createperson1("arpit",24))


// Function using shorthand property syntax======>

    function createPerson(name, age) {
    return { name, age };  // Shorthand: same as { name: name, age: age }
  }  
  // Example usage
  const person = createPerson("John", 25);
  console.log(person);  // Output: { name: 'John', age: 25 }


 
     /*
==>  Explanation:
        -The object shorthand property syntax allows you to skip the repetition when the property name is the same as the variable name.

        -Instead of writing { name: name, age: age }, you can just write { name, age }. The keys and values will be automatically matched.
  */ 
console.log("<================Question2======================>")
// 2. Method Shorthand: Modify the createperson function to include a method introduce() that logs a string introducing the person (e.g.,"Hi, I'm John and I'm 30 years old."), using the method shorthand.

function ModifiedCreatePerson(name, age) {
    return {
        name,
        age,
        
        // Method shorthand for introduce
        introduce() {
          console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
        }
      };
  }  
  
  const person2 = ModifiedCreatePerson("saurabh", 25);
  person2.introduce()  // Output: Hi, I'm saurabh and I'm 30 years old.



// +++++++++
/* 
<===============Explanation===========>:
    Method Shorthand:
        - Instead of writing introduce: function() {}, we can simply write introduce() {}. This shorthand makes the code more concise and readable.

       -  this.name and this.age refer to the properties of the current object (the person in this case).

       -  The introduce method logs a string introducing the person, using template literals to insert the name and age.  

*/       
console.log("<================Question3======================>")
// 3. Computed Property Names: Write a function createobject(key, value) that returns an object with a computed property using [key] :value syntax.

function createobject(key, value){
    return {
        [key]:value       //do not use  "key:value"  bcs  The property name in the object will literally be "key",
                            // not the value of the key variable.
    }
}
let newObj=createobject("name", "vivek sir")
console.log(newObj)


console.log("<================Question4======================>")
// 4. Object Shorthand with Destructuring: Write a function mergeobjects(obj1, obj2) that merges two objects using both object shorthand syntax and destructuring.

function mergeobjects(obj1, obj2){
    // return {...obj1,...obj2}                 //or
    return Object.assign({},obj1,obj2)       //or 
}
/*
    ++++ there are two way to merge objects 
        1st- spread operator
        2nd- Object.assign(target, source1,source2,...)

 */   
object1={
    name:"arpit",
    email:"arpit@gmail.com",
    age:21
}

object2={
    name2:"saurabhkesharwani",
    email2:"saurabhkesharwani@gmail.com",
    age2:25
}

let newMergeObject=mergeobjects(object1,object2)
console.log(newMergeObject)





console.log("<================Question5======================>")
// 5. Advanced Shorthand Usage: Create a function updateperson(oldperson, newName) that updates only the name of a person object using object spread syntax and object shorthand.


// Function to update only the name of a person object
function updatePerson(oldPerson, newName) {
    return {
      ...oldPerson,  // Copy all properties from oldPerson
      name: newName  // Update the name property
    };
  }
  

  const person5 = { name: "John", age: 30, occupation: "Engineer" };
  const updatedPerson = updatePerson(person5, "Alice");
  
  console.log(updatedPerson);
  // Output: { name: 'Alice', age: 30, occupation: 'Engineer' }

  console.log(person5,"original will not changed")
  