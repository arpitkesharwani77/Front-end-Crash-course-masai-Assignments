/*
<==========================Problem Statement================================>

    - create a new object called new0bj using the students array &
        the subjectsHash Object.

    - new0bj contains unique students as key and an array of subjects as value.



--input==>

 let subjectsHash = {
  1: "Javascript",
  2: "HTML",
  3: "CSS",
  4: "Java",
  5: "Rust",
};

let students = [
  { id: 1, name: "Prateek", subjectID: 5 },
  { id: 2, name: "Yogesh", subjectID: 2 },
  { id: 3, name: "Nrupul", subjectID: 4 },
  { id: 4, name: "Prateek", subjectID: 1 },
];


--ouput==>

{
    Prateek: ["Rust", "Javascript"],
    Yogesh: ["HTML"],
    Nrupul: ["Java"],
}

 

*/  

function newObj(students,subjectsHash){
    let obj={}
    students.map((student)=>{
        const subject=subjectsHash[student.subjectID]
        if (obj[student.name]){
            obj[student.name].push(subject)
        }
        else
        obj[student.name]=[subject]
    })

    return obj
}

let subjectsHash = {
    1: "Javascript",
    2: "HTML",
    3: "CSS",
    4: "Java",
    5: "Rust",
  };
  
  let students = [
    { id: 1, name: "Prateek", subjectID: 5 },
    { id: 2, name: "Yogesh", subjectID: 2 },
    { id: 3, name: "Nrupul", subjectID: 4 },
    { id: 4, name: "Prateek", subjectID: 1 },
  ];
  
console.log(newObj(students,subjectsHash))  


/**
     ++++++++++  using reduce ++++++++++++++++
     
let newObj = students.reduce((acc, student) => {
  const subject = subjectsHash[student.subjectID]; // Get the subject using subjectID
  const studentName = student.name; // Get student's name

  // Check if the student name is already in the accumulator (acc)
  if (acc[studentName]) {
    acc[studentName].push(subject); // Add subject to the existing array
  } else {
    acc[studentName] = [subject]; // Create new entry with the subject
  }

  return acc;
}, {}); // Initialize as an empty object

console.log(newObj);
 */




/*
++++++++++++ using ForEach+++++++++++++

let newObj = {};

students.forEach(student => {
  const subject = subjectsHash[student.subjectID];

  if (!newObj[student.name]) {
    newObj[student.name] = [subject]; // Initialize with the subject in an array
  } else {
    newObj[student.name].push(subject); // Add the subject to the existing array
  }
});

console.log(newObj);

*/