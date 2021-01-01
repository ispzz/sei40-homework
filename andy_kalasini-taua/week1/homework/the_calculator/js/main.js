console.log('Js Loaded!');

//The calculator

// const x = 8
//
// const squareNumber = Math.pow(x, 2);
//  console.log(`The result of squaring the number ${x} is ${squareNumber}`);

//===================================

// const x1 = 5
//
// const halfNumber = (x1 / 2);
// console.log(`Half of ${x1} is ${halfNumber}`);


//===================================

// const parcentOf = function(x, y){
//   if (x > y){
//   console.log('Please try again!');
// } else {
//   console.log(`${x} is ${(x/y*100)}${'%'} of ${y}`);
// }
// };
//
// parcentOf('2', '4');

// This lets you create a function. The statements above are not functions. This seems more so like quering a const. Try to refactor the above to create a function.

//==================================

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(x){
console.log(`The area for a circle with a radius ${x} is ${Math. PI * x * x }`);

}; // end of areaOfCircle function

areaOfCircle(2)
