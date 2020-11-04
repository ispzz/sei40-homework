// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function(num){
  const calc = num * num;
  console.log(`The result of squaring the number ${num} is ${calc}.`);
  return calc;
};

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function(num){
  const calc = num / 2;
  console.log(`Half of ${num} is ${calc}.`);
  return calc;
};

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(num1,num2){
  const calc = (num1 * 100) / num2;
  console.log(`${num1} is ${calc}% of ${num2}.`);
  return calc;
};

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = function(num){
  const calc = Math.PI * (num * num);
  console.log(`The area for a circle with radius ${num} is ${calc.toFixed(2)}.`);
  return calc.toFixed(2);
};

// Bonus: Round the result so there are only two digits after the decimal.
// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
 const calcFunc = function(num){
   const halfNum = halfNumber(num);
   const squareNum = squareNumber(halfNum);
   const areaNum = areaOfCircle(squareNum);
   const percentNum = percentOf(areaNum,squareNum);

   return percentNum;
 };
 console.log(calcFunc(10));
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
