
console.log(`Homework Week 1, day 2`);
console.log(`----------Calculator task = PART 1----------`);

// The Calculator
// Part 1


//-----------PART 1: SECTION A ------------
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(numToSquare) {
  return calcSquareNumber = numToSquare * numToSquare;
}

const inputA = 4;
const squareNumberOutput = squareNumber(inputA);
console.log(`The result of squaring the number ${inputA} is ${squareNumberOutput}.`);



//-----------PART 1: SECTION B ------------
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (numToSquare) {
  return calcHalfNumber = numToSquare / 2;
}

const inputB = 6;
//can run in one piece of code different from above...
console.log(`Half of ${inputB} is ${halfNumber(inputB)}.`);


//-----------PART 1: SECTION C ------------
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (numerator, denominator) {
  return calcPercentOf = Math.round((numerator / denominator)*100);
}

const numeratorInput = 9;
const denominatorInput = 27;
const percentOutput = percentOf(numeratorInput, denominatorInput);

console.log(`${numeratorInput} is ${percentOutput}% of ${denominatorInput}.`);

//-----------PART 1: SECTION D ------------
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

//-----------PART 1: SECTION E (BONUS) ------------
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function (radius) {
  const calcAreaOfCircle = radius*radius*Math.PI;
  return calcAreaOfCircleRound = calcAreaOfCircle.toFixed(2);
}

const radiusInput = 5;
// const outputD = areaOfCircle(radiusInput);
// console.log(outputD + " Test");
console.log(`The area of the circle with a radius of ${radiusInput} is ${areaOfCircle(radiusInput)}.`);

//----------------------------------------------------------

console.log(`----------Calculator task = PART 2----------`);

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).



const calculatorTaskPart2 = function(inputPart2) {
  calcOutput1 = halfNumber(inputPart2);
  calcOutput2 = squareNumber(calcOutput1);
  calcOutput3 = areaOfCircle(calcOutput2);
  calcOutput4 = percentOf(calcOutput2, calcOutput3);
  calcOutput5 = percentOf(calcOutput3, calcOutput2);
  return calcTaskPart2 = `Half of ${inputPart2} equals ${calcOutput1}. If you square ${calcOutput1}, you get ${calcOutput2}. When you make that number the radius of a circle, and then calculate the area of that circle, you get ${calcOutput3}. The aforementioned squared result (${calcOutput2}) is ${calcOutput4}% of the area (${calcOutput3}). Conversely, the area is ${calcOutput5}% of the squared result.`;
}

// calculatorTaskPart2(2);


const outputPart2 = 6;
console.log(`${calculatorTaskPart2(outputPart2)}`);



//-----------Strings ------------
console.log(`----------Strings Exercises----------`);
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!


console.log(`--------DrEvil Function---------`);
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const drEvil = function(dollarInput) {
  if (dollarInput === 1000000) {
    return dollarOutput = `${dollarInput} dollars (pinky)`;
  } else {
    return dollarOutput = `${dollarInput} dollars`;
  }
}

const drEvilOutput = drEvil(10000);
console.log(drEvilOutput);
const drEvilOutput2 = drEvil(1000000);
console.log(drEvilOutput2);


console.log(`--------MixUp Function---------`);
// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function (string1, string2) {
  return extract1 = `${string2.slice(0,1)}${string1.slice(1)} ${string1.slice(0,1)}${string2.slice(1)}`;
}

console.log(mixUp("red", "dog"));


console.log(`--------FixStart Function---------`);
// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

//THIS DOESN'T WORK -

const fixStart = function (string1) {
  const findStartValue = string1.charAt();
  console.log(findStartValue);
  const findMatchedValue = string1.replace(/findStartValue/g,"*");
  return concatMatchedValue = `${findStartValue}${findMatchedValue.slice(1)}`;

}

const inputFixStart = `babble`;
console.log(fixStart(inputFixStart));


console.log(`--------Verbing Function---------`);
// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('walk'): 'walking'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function(verb) {
  if (verb.length > 2 && (verb.slice(-3) == "ing")) {
    return verbText = `${verb}ly`;
    } else if (verb.length > 2) {
      return verbText = `${verb}ing`;
    } else {
      return verb;
    }
}

const verbInput1 = 'hi';
console.log(`${verbing(verbInput1)}`);

const verbInput2 = 'sit';
console.log(`${verbing(verbInput2)}`);

const verbInput3 = 'swimming';
console.log(`${verbing(verbInput3)}`);




//
// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
