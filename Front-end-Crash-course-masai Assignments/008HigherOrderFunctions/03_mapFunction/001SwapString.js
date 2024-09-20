/*
<==========================Problem Statement================================>

--Given an array of strings, write a function that returns a new array
    where each string has its first and last letters swapped using .map().

--input==>
    -const strings = [
                        "Hello",
                        "world",
                        "this",
                        "is",
                        "an",
                        "example",
                        "array",
                        "of",
                        "strings",
                    ];


--ouput==>
   - ["oellH", "dorlw", "shit", "si", "na", "example", "yrraa", "fo", "strings"];


*/  
function firstAndLastCharSwap(strings){
    return strings.map(str=>{
        return `${str[str.length-1]}${str.slice(1,str.length-1)}${str[0]}`


    // if (str.length > 1) {
    //     return str[str.length - 1] + str.slice(1, -1) + str[0];          //or
    // }
    // return str;
    })
}

const strings = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings",
];

console.log(firstAndLastCharSwap(strings))