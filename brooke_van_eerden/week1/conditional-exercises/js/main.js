console.log('JS loaded!');
// Write a function named greaterNum that:
//
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
const greaterNum = function(numberA, numberB){
  if(numberA > numberB){
    console.log(`The greater number of ${numberA} and ${numberB} is ${numberA}.`);
    return numberA;
  }
  else{
    console.log(`The greater number of ${numberA} and ${numberB} is ${numberB}.`);
    return numberB;
  }
}
greaterNum();


// The World Translator
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
const helloWorld = function(languageCode){
  if (languageCode === "de"){
    console.log(`Guten Tag`);
    return "de";
  }
  else if(languageCode === "mand"){
    console.log('ni hao ma');
    return "mand";
  }
  else{
  console.log('Hello World');
  return "english";
  }
  }

helloWorld();
//
// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(numberC){
  const squareNumberC = numberC * numberC;
  console.log(`The result of squaring the number ${numberC} is ${squareNumberC}.`);
  return squareNumberC;
}
squareNumber();

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(numberD){
  const halfNumberD = numberD /2;
  console.log(`Half of ${numberD} is ${halfNumberD}.`);
  return halfNumberD;
}
halfNumber();

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(numberE,numberF){
  const percentResult = (numberE / numberF) * 100;
  console.log(`${numberE} is ${percentResult.toFixed(2)}% of ${numberF}.`);
  return percentResult.toFixed(2);
}
percentOf();

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(radius){
  const area = (radius*radius)*3.14159;
  console.log(`The area for a circle with the radius of ${radius} is ${area.toFixed(2)}.`) ;
  return area.toFixed(2);
}

areaOfCircle();
// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const finalCalc = function(numberX){
  const x1 = halfNumber(numberX);
  console.log(x1);


  const x2 = squareNumber(x1);
  console.log(x2);

  const x3 = areaOfCircle(x2);
  console.log(x3);

  const x4 = percentOf(x2,x3);
  console.log(x4);
  return x1,x2,x3,x4;
}

finalCalc();
