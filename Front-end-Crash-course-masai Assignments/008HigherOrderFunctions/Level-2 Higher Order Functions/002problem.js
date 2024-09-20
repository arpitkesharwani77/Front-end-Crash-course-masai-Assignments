/*
<==========================Problem Statement================================>
- ImplementationPS7 function takes the allStudentsMarksData to get a new array called massagedData .
- Instead of separate entities for 5 subjects and their marks, in the new array, 
    we just have one entry called marks . marks is an array of objects. the objects of
    marks contains subject and score to therr crosponding values.

--input==>
    
let prateekMarksData = {
  name: "Prateek",
  subject1: "Javascript",
  subject2: "HTML",
  subject3: "CSS",
  subject4: null,
  subject5: null,
  marks1: 90,
  marks2: 81,
  marks3: 80,
  marks4: null,
  marks5: null,
};

let nrupulMarksData = {
  name: "Nrupul",
  subject1: "Java",
  subject2: "Python",
  subject3: null,
  subject4: null,
  subject5: null,
  marks1: 95,
  marks2: 85,
  marks3: null,
  marks4: null,
  marks5: null,
};

let allStudentsMarksData = [prateekMarksData, nrupulMarksData];



--ouput==>

[
  {
    name: "Prateek",
    marks: [
      { subject: "Javascript", score: 90 },
      { subject: "HTML", score: 81 },
      { subject: "CSS", score: 80 },
    ],
  },
  {
    name: "Nrupul",
    marks: [
      { subject: "Java", score: 95 },
      { subject: "Python", score: 85 },
    ],
  },
];



*/  

function ImplementationPS7(allStudentsMarksData){


}

let prateekMarksData = {
    name: "Prateek",
    subject1: "Javascript",
    subject2: "HTML",
    subject3: "CSS",
    subject4: null,
    subject5: null,
    marks1: 90,
    marks2: 81,
    marks3: 80,
    marks4: null,
    marks5: null,
  };
  
  let nrupulMarksData = {
    name: "Nrupul",
    subject1: "Java",
    subject2: "Python",
    subject3: null,
    subject4: null,
    subject5: null,
    marks1: 95,
    marks2: 85,
    marks3: null,
    marks4: null,
    marks5: null,
  };
  
  let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
  