//<---------------- A. Truthy/Falsy Values ------------------------>

// Q-1 ----------------->
console.log(`problem1------------------>`)
function isTruthy(value){
    if(value){
        return true;
    }
    else{
        return false
    }
}
console.log(isTruthy(0))
console.log(isTruthy(1))
console.log(isTruthy(""))
console.log(isTruthy("hello"))
console.log(isTruthy([]))
console.log(isTruthy({}))
console.log(isTruthy(null))

/// Q2------------>

console.log("problem 2------->")
function countFalsyValues(arr){
    let count=0;
    for(el of arr){
        if(Boolean(el)==false){
            count+=1
            console.log(el)
        }
    }
    return count
}

let arr1=[0,1,"",[],{},null,undefined,false,5,"arpit",NaN]
console.log(countFalsyValues(arr1))


// Q-3--------------------->
console.log(`problem3------------>`)
function filterFalsyValues(arr){
    let truthyValues=arr.filter(el=>Boolean(el)==true)
    return truthyValues
}
let arr2=[0,1,"",[],{},null,undefined,false,5,"arpit",NaN,true]
console.log(filterFalsyValues(arr2))




