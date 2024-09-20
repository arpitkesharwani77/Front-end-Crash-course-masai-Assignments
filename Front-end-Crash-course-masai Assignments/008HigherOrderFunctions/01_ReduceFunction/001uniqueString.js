/*
<==========================Problem Statement================================>

provided a function Uniquestring that takes an array of strings as input and returns an object with the count of each unique string in the array, using .reduce() array method.


input:==>

const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];

output:==>

{ apple: 3, banana: 2, orange: 1, pear: 1 }

*/



const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
  ];
function Uniquestring(strings){
        return strings.reduce((acc,curr)=>{
            if (acc[curr]){
                acc[curr]++
            }
            else{
                acc[curr]=1
            }
            return acc
        },{})
}
console.log(Uniquestring(strings))
