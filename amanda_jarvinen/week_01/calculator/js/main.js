// THE CALCULATOR

/*
  ---------
  Part 1
  ---------
*/

const squareNumber = function(x){
  const result = x * x;
  console.log(`The result of squaring ${x} is ${result}`);
  return result;
};

const halfNumber = function(x){
  const result = x / 2;
  console.log(`Half of ${x} is ${result}`);
  return result;
};

const percentOf = function(x, y){
  const percentOfY = x/y * 100;
  console.log(`${x} is ${percentOfY}% of ${y}`);
  return percentOfY;
};

const areaOfCircle = function(radius){
  const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${area}`);
  return area;
};

squareNumber(2);
halfNumber(5);
percentOf(2,4);
areaOfCircle(2);

/*
  ---------
  Part 2
  ---------
*/
const calculator = function(x){
  const half = halfNumber(x);
  console.log(half);
  const squared = squareNumber(half);
  const areaCircle = areaOfCircle(squared);
  const percentage = percentOf(areaCircle, squared);
};

calculator(2);
