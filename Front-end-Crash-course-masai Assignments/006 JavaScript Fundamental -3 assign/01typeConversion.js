                    //<-------------------Type Conversion (Explicit)--------------->

console.log("Q1--------------------------------------->")

// 1. Basic Type Conversion: Write a function convertToNumber(va1ue) that explicitly converts a given value to a number using
// Number() and returns the result. Test this function with string numbers ( "10"
// "2e.5" ) and boolean values.

function convertToNumber(value){
    return Number(value)

}
console.log(convertToNumber("10"))  //10
console.log(convertToNumber("2e.5"))  //NaN
console.log(convertToNumber(true))  //1


console.log("Q2--------------------------------------->")

// 2. String Conversion: Write a function convertToString(va1ue) that explicitly converts a given value to a string using
// String() . Test it with numbers, booleans, arrays, and objects.

function convertToString(value){
    return String(value)
}
console.log(convertToString(12))  //12
console.log(convertToString(true))   //true
console.log(convertToString([1,2,"arpit"]))   //1,2,arpit
console.log(convertToString({"key":"values","name":"arpit"}))  //[object Object]

console.log("Q3--------------------------------------->")

// 3. Complex Type Conversion: Write a function convertAndCompare(a, b) that converts both values to the same type
// (number or string) and then compares them. Return whether the values are equal after conversion. Test this function with
// combinations like "10" and 10 , false and 0, etc.

function convertAndCompare(a, b){
    return String(a)===String(b)
}

console.log(convertAndCompare("10",10))  //true
console.log(convertAndCompare(false,0)) //false
console.log(convertAndCompare("",[]))  //true
console.log(convertAndCompare(null,undefined)) //false