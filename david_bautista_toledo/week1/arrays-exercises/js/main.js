
console.log('JS loaded!')

const subjects= [
  "Maths",
  "Physics",
  "Chemistry",
  "English",
  "History"
  ]

  for (let i=0; i<subjects.length; i++ ){
    const subject = subjects[i];
    const suffixes = ["st"]
    console.log(`My # ${i+1}${suffixes} choice is ${subject}`);

  }
