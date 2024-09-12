// Q-1--------------->

function performArithmatic(a,b){
    console.log(`Addition of ${a} and ${b}: ${a+b}`)
    console.log(`substraction of ${a} and ${b}: ${a-b}`)
    console.log(`multiplication of ${a} and ${b}: ${a*b}`)
    console.log(`division of ${a} and ${b}: ${a/b}`)
    console.log(`modulo of ${a} and ${b}: ${a%b}`)
}
performArithmatic(50,10)



// Q-2--------------->
console.log('Q-2--------------->')

function calculateAverage(numbers){
    let sum=0
    for(let el of numbers){
        sum+=el
    }
    return `the average of all the numbers [${numbers}] is:`+ `${sum/numbers.length}`
}

let numbers=[10,20,-10,30,50];
console.log(calculateAverage(numbers));



// Q-3--------------->
console.log("Q-3--------------->");

function calculateExpression(a,b,c){
    console.log((a+b)*c/(b-a))
}
calculateExpression(10,20,5)
