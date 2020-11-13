console.log('Conditionals Js Loaded!');

// What number's bigger?
//
// Write a function named greaterNum that:
//
//     takes 2 arguments, both numbers.
//     returns whichever number is the greater (higher) number.
//     Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = 10;
if (greaterNum > 5){
  console.log('10');
} else {
  console.log()
}


// The World Translator
//
// Write a function named helloWorld that:
//
//     takes 1 argument, a language code (e.g. "es", "de", "en")
//     returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
//     Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function (langInput) {
  if("en"){
    console.log("Hello World");
    return "en";
}   else if ("es") {
    console.log("nope");
    return "es";
}   else ("nope")
    console.log("Hello World");
    langInput === "en";
}

helloWorld("es");







// The Grade Assigner
//
// Write a function named assignGrade that:
//
//     takes 1 argument, a number score.
//     returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
//     Call that function for a few different scores and log the result to make sure it works.
