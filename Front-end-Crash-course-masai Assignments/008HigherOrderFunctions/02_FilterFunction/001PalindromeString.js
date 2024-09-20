/*
<==========================Problem Statement================================>

-Given an array of strings, write a function that returns a new array containing
 only the strings that are palindromes (i.e., read the same backwards as forwards) 
 using .filter().

--input==>
    const words = [
        "racecar",
        "hello",
        "deified",
        "world",
        "level",
        "programming",
        "radar",
        "civic",
        "javascript",
    ];

--ouput==>

    ["racecar", "deified", "level", "radar", "civic"];

*/  


function palindromesStrings(words){
    return words.filter((el)=>{
        let i=0;
        let j=(el.length)-1;

        while(i<j){
            if(el[i]!==el[j]) return false
            i++;
            j--;
        }
        return true;
        
    })
}

const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
];

console.log(palindromesStrings(words))


