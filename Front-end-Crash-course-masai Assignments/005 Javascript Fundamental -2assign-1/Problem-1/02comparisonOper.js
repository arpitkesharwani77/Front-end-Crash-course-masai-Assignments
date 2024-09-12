//<----------------B. Comparison Operator ------------------------>
// Q-1--------------------->

function compareTwoNumber(num1,num2){
    if(num1===num2){
        console.log("Num1 and Num2 both are equal");
    }
    else if(num1>num2){
        console.log("Num1 is greater than num2");
    }
    else if(num1<num2){
        console.log("num2 is greater than num1");
    }

}

compareTwoNumber(2,5);
compareTwoNumber(2,2);
compareTwoNumber(12,5);



// Q-2--------------------->

console.log("problem2----------------->")

function compareWithListOfNumber(arr,value){
    for(let el of arr){
        if (el===value){
            console.log(`${el} and ${value} both are equal`)
        }
        else if(el<value){
            console.log(` ${value} is greater than or equal to ${el} both are equal`)
        }
        else if(el>value){
            console.log(` ${value} is less than or equal to ${el} both are equal`)
        }
    }
}

let arr=[5,12,10,7,-1,0,6]
let givenValue=7
compareWithListOfNumber(arr,givenValue)



// Q-3--------------------->

console.log("problem3----------------->")

function compareThreeNum(n1,n2,n3){
    if(n1>n2){
        if(n1>n3){
            console.log(`${n1} is largest number among ${n1},${n2},${n3}`);
        }
        else{
            console.log(`${n3} is largest number among ${n1},${n2},${n3}`);
        }
    }
    else if(n2>n1){
        if(n2>n3){
            console.log(`${n2} is largest number among ${n1},${n2},${n3}`);
        }
        else{
            console.log(`${n3} is largest number among ${n1},${n2},${n3}`);
        }
    }
    else{
        if(n1===n3){
            console.log(` ${n1},${n2},${n3} all are equal`);
        }
        else if(n1>n3){
            console.log(`${n1} and ${n2} are equal and ${n3} is smallest number among ${n1},${n2},${n3}`)
        }
        else{
            console.log(`${n1} and ${n2} are equal and ${n3} is largest number among ${n1},${n2},${n3}`)
        }
    }
}

compareThreeNum(10,12,15)
compareThreeNum(10,20,15)
compareThreeNum(100,12,15)
compareThreeNum(10,10,15)
compareThreeNum(15,120,15)