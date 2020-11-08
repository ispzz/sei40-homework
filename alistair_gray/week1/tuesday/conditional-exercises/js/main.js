
console.log("JS has loaded");

// Exercises

// Which number is bigger?

const greaterNum = function (firstNum, secondNum){
  if(firstNum > secondNum){
    let announcer = `The greater number of ${firstNum} and ${secondNum} is ${firstNum}`;
    console.log(announcer)
      return firstNum;
  }else {
    let announcer = `The greater number of ${firstNum} and ${secondNum} is ${secondNum}`
    console.log(announcer)
    return secondNum;
  }
};

greaterNum(20, 30);

// The World Translator

const helloWorld = function (langInput){
  if(langInput === "en"){
    console.log("Hello World");
    return "en";
  } else if (langInput === "es") {
    console.log("Ola Mundo");
    return "es";
  } else if (langInput === "aust") {
    console.log("G'day World");
    return "aust";
  } else {
    console.log("Hello World");
    return "en";
  }
}

helloWorld("es");

// Grade Assigner

const assignGrade = function(numInput){
  if (numInput >= 90){
    let gradeScore = "A";
    console.log(`You scored ${gradeScore}`)
    return gradeScore;
  }else if (numInput >= 80){
    let gradeScore = "B";
      console.log(`You scored ${gradeScore}`)
    return gradeScore;
  }else if (numInput >= 70){
      let gradeScore = "C";
          console.log(`You scored ${gradeScore}`)
      return gradeScore;
    }else if (numInput >= 60){
        let gradeScore = "D";
            console.log(`You scored ${gradeScore}`)
        return gradeScore;
      }else if (numInput >= 50){
          let gradeScore = "E";
              console.log(`You scored ${gradeScore}`)
          return gradeScore;
        }else {
          let gradeScore = "F";
              console.log(`You scored ${gradeScore}`)
          return gradeScore;
        }
}

assignGrade(66);

// The Pluralizer

const pluralize = function (noun, number){
  let plural = number + noun;
  if(number >1){
    console.log(`${number} ${noun}s`)
    return plural;
  } else {
      console.log(`${number} ${noun}`)
        return plural;
  }
};

pluralize("cat", 1);
