/*
<==========================Problem Statement================================>

    
-Implementation function takes voters array as a input and returns the sample output .

-the values are the count of object meet the condition.

-numYoungVotes: voters age <= 20 and given the vote,

-numYoungPeople: voters age <= 20,

-numMidVotesPeople: voters age and age<=45 and given the vote,

-numMidsPeople: voters age and age« =45,

-numOldVotesPeople: voters age and given the vote,

-numOldsPeople: voters age >45,

--input==>

    const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];



--ouput==>

        {
      numYoungVotes: 0,
      numYoungPeople: 2,
      numMidVotesPeople: 5,
      numMidsPeople: 8,
      numOldVotesPeople: 2,
      numOldsPeople: 2,
    }




*/  

function Implementation(voters){
    return voters.reduce((acc,voter)=>{
        if(voter.age<=20){
            acc["numYoungPeople"]++
            if(voter.voted){
                acc["numYoungVotes"]++
            }                
        }
        else if(voter.age<=45){
            acc["numMidsPeople"]++
            if(voter.voted){
                acc["numMidVotesPeople"]++
            }                
        }
        else if(voter.age>45){
            acc["numOldsPeople"]++
            if(voter.voted){
                acc["numOldVotesPeople"]++
            }                
        }
        return acc

    } ,{
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    })
}

const voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];

 console.log(Implementation(voters)) 



 /**
  
 ++++++++++++++++++using ForEach ++++++++++++++++++++++++++


 function Implementation(voters) {
  // Initialize the result object
  let result = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  };

  // Iterate over each voter
  voters.forEach(voter => {
    const { age, voted } = voter;

    // Young people (age <= 20)
    if (age <= 20) {
      result.numYoungPeople++; // Count all young people
      if (voted) result.numYoungVotes++; // Count if they voted
    }
    // Middle-aged people (21 <= age <= 45)
    else if (age <= 45) {
      result.numMidsPeople++; // Count all middle-aged people
      if (voted) result.numMidVotesPeople++; // Count if they voted
    }
    // Old people (age > 45)
    else {
      result.numOldsPeople++; // Count all old people
      if (voted) result.numOldVotesPeople++; // Count if they voted
    }
  });

  return result;
}

const output = Implementation(voters);
console.log(output);





*/


