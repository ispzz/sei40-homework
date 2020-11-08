console.log("JS has been loaded succesfully")

//
// Exercises: if/else statements
// Which number's bigger?
// Write a function named greaterNum that:
//
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").


// const greaterNum = function (x,y){
//   if (x>y) {
//     return `The greater number of ${x} and ${y} is ${x}`;
//   }else {
//     return `The greater number of ${x} and ${y} is ${y}`;
//   }
// };
// const result = greaterNum (1,100);
// console.log(result);





// The World Translator
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

//
// const helloWorld = function (languageCode){
//   if (languageCode==="es"){
//     return ("Hola Mundo. Please enter your language");
//   } else if (languageCode==="de") {
//     return ("Hallo Welt. Please enter your language");
//   } else if (languageCode==="en"){
//     return ("Hello World. Please enter your language");
//   } else {
//     return("Please enter a valid language");
//   }
// };
//
// const translator = helloWorld ("en");
// console.log(translator);


// The Grade Assigner
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.


const assignGrade = function(score){
  if (score>90){
    return "A";
  } else if (score >80){
    return"B";
  } else if (score>70){
    return"C";
  } else if (score>60){
    return"D";
  } else{
    return"F";
  }
}
const firstGrade=assignGrade(95);
const secondGrade=assignGrade(85);
// assignGrade(70);










// The Pluralizer
// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different combinations of noun & number, and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
