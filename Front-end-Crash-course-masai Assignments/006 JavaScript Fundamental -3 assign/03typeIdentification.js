// <------------------Type Identification in JavaScript----------------->
console.log("Q1------------------------------>")

// 1. Identify Type Using typeof : Write a function identifyType(value) that uses typeof to log the type of
// the given value. Test the function with numbers, strings, booleans, arrays, objects, and functions.

function identifyType(value){
    console.log(typeof value)   // or => console.log(typeOf(value)) 
}
identifyType("arpit")
identifyType("")  //string
identifyType(0)  //number
identifyType(null)  //object
identifyType(true)  //boolean
identifyType(false)  //boolean
identifyType(undefined)  //undefined
identifyType(NaN)   //number        ("not a number is also a number Ha Ha Haaa.....")
identifyType(11.23)  //number 

console.log("Q2------------------------------>")

// 2. Check Object vs Array: Write a function isArrayOrObject(value) that uses Array.isArray() and
// typeof to identify whether the value is an array, object, or some other type. Return the result in a
// readable format.

function isArrayOrObject(value){
    console.log(Array.isArray(value), "=>isArray or not")
    console.log(typeof (value),  "=>type of value\n")

    if(typeof(value) ==="object" && !Array.isArray(value) && value!==null){
        console.log("this is definately a object means {name:arpit} wala ,in form of key-value")
    }
}
isArrayOrObject([1,2,3,4,5])  
//true =>isArray or not
//object =>type of value
isArrayOrObject({"name":"kesharwani"})
// false =>isArray or not
// object =>type of value
// this is definately a object means {name:arpit} wala ,in form of key-value
isArrayOrObject(null)
// false =>isArray or not
// object =>type of value
isArrayOrObject(undefined)
// false =>isArray or not
// undefined =>type of value
isArrayOrObject(NaN)
// false =>isArray or not
// number =>type of value
isArrayOrObject(BigInt)
// false =>isArray or not
// function =>type of value

console.log("Q3------------------------------>")
// 3. Complex Type Identification: Write a function identifycomp1exType(va1ues) that takes an array of
// mixed data types and uses typeof , instanceof , and Array.isArray() to identify and return the type of
// each element.

function identifycomp1exType(values) {
    return values.map(value => {
      // Check if the value is an array
      if (Array.isArray(value)) {
        return `${value} is an Array`;
      }
      // Check if the value is a Date object
      else if (value instanceof Date) {
        return `${value} is a Date`;
      }
      // Check if the value is a Map object
      else if (value instanceof Map) {
        return `${value} is a Map`;
      }
      // Check if the value is an Object (excluding arrays and null)
      else if (typeof value === 'object' && value !== null) {
        return `${value} is an Object`;
      }
      // Use typeof for primitive types (string, number, boolean, etc.)
      else {
        return `${value} is a ${typeof value}`;
      }
    });
  }
  

const mixedValues = [
    42, 
    "hello", 
    true, 
    [1, 2, 3], 
    { name: "Alice" }, 
    new Date(), 
    null, 
    new Map()
];
  
console.log(identifycomp1exType(mixedValues));
  

values=[10,"arpit",null,undefined,false,0,{"abc":"xyz"},[1,2,3],NaN]
console.log(identifycomp1exType(values))