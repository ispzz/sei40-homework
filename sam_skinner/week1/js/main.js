console.log('Tuesday Wk1 - Homwork');

// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function(numberSquare){
  const squareResult = numberSquare * numberSquare;
  console.log(`The result of squaring the number ${numberSquare} is ${squareResult}`);
  return squareResult;
}

const fourSquared = squareNumber(4);


const halfNumber = function(numberHalf){
  const halfResult = numberHalf/2;
  console.log(`Half of ${numberHalf} is ${halfResult}`);
  return halfResult;
}

const eightHalved = halfNumber(8);


const percentOf = function(num1, num2){
  const percentageResult = Math.round((num1 / num2 * 100) * 10) /10;
  console.log(`${num1} is ${percentageResult}% of ${num2}`);
  return percentageResult + "%";
}

const percentSolved = percentOf(25, 150);


const areaOfCircle = function(radius){
  const areaResult = Math.round(Math.PI * Math.pow(radius, 2) * 100) / 100;
  console.log(`The area for a circle with radius ${radius} is ${areaResult}`);
  return areaResult;
}

const fiveRadius = areaOfCircle(5);


// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const masterFunction = function(value){
  const masterHalf = halfNumber(value);
  const masterSquare = squareNumber(masterHalf);
  const masterArea = areaOfCircle(masterSquare);
  const masterPercentage = percentOf(masterArea, squareNumber(masterArea));
  console.log(`Half the number ${value} is equal to ${masterHalf}, the square of which is ${masterSquare}, which forms the radius of a circle with area ${masterArea}, the square of that area is ${squareNumber(masterArea)} and the percentage that the area forms of the squared area is ${masterPercentage} - this sentence is really weird.`);
  return masterPercentage;
}

const crazyPercentage = masterFunction(12);
