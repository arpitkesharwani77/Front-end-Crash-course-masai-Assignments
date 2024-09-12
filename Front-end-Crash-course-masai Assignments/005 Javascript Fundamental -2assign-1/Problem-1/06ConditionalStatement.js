console.log("Q1----------------------------------------->")

// 1. Simple If Statement: Write a function checkEvenodd(number) that uses a conditional statement to check if a number is even or odd and
// returns the result.

function checkEvenodd(number){
    if(number%2===0){
        console.log(`${number} is an even number`)
    }
    else{
        console.log(`${number} is  an odd number`)
    }
}
checkEvenodd(15)
checkEvenodd(110)
checkEvenodd(0)


console.log("Q2----------------------------------------->")
// 2. Grade Evaluation: Create a function evaluateGrade(score) that uses conditional statements to return a letter grade based on a numeric
// score (e.g., "A" for scores 90-100, "B" for 80-89, etc.).

function evaluateGrade(score){
    if(score>=90 &&score<=100){
        console.log("your grade is A")
    }
    else if(score>=80 &&score<90){
        console.log("your grade is B")
    }
    else if(score>=70 &&score<80){
        console.log("your grade is C")
    }
    else if(score>=60 &&score<70){
        console.log("your grade is D")
    }
    else{
        console.log("please do hard work your score is very low")
    }
     
}

evaluateGrade(85)
evaluateGrade(65)
evaluateGrade(92)
evaluateGrade(72)
evaluateGrade(22)



console.log("Q3----------------------------------------->")
// 3. Discount Calculation: Write a function calculateDiscount(price, isMember) that uses conditional statements to apply a discount based on
// whether the customer is a member (e.g., 10% discount for members, no discount for non-members).


function calculateDiscount(price, isMember){
    if(isMember){
        console.log(`price is this ${price} and your discounted price is ${price-(price/10)} `)
    }
    else{
        console.log(`As you are not a member so your price is ${price}\n`)
    }
}
calculateDiscount(2000,true)
calculateDiscount(2000,false)
calculateDiscount(1000,true)
calculateDiscount(1000,false)