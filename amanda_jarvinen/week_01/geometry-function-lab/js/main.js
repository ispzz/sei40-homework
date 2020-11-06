/*
  --------------------
  GEOMETRY FUNCTION LAB
  --------------------
*/

// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
//
// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
// const rectangle = {
//   length: 4,
//   width: 4
// };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.
const rectangle = {
  length: 4,
  width: 4
};

const rectangleTwo = {
  length: 12,
  width: 2
};

const isSquare = function(rect){
  return rect.length === rect.width;
}; // isSquare();

console.log(isSquare(rectangle)); // true
console.log(isSquare(rectangleTwo)); // false

const area = function(rect){
  return rect.length * rect.width;
}; // area();

console.log(`Area is ${area(rectangle)}`); // Area is 16
console.log(`Area is ${area(rectangle)}`); // Area is 24

const perimeter = function(rect){
  return (rect.length * 2) + (rect.width * 2);
}; // perimeter();

console.log(`Perimeter is ${perimeter(rectangle)}`) // Perimeter is 16
console.log(`Perimeter is ${perimeter(rectangleTwo)}`) // Perimeter is 28


// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:
//
// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleTwo = {
  sideA: 5,
  sideB: 6,
  sideC: 7
};

const triangleThree = {
  sideA: 2,
  sideB: 2,
  sideC: 2
};

const isEquilateral = function(tri){
  return (tri.sideA === tri.sideB) &&( tri.sideB === tri.sideC); // All sides are equal
}; // isEquilateral();

console.log(isEquilateral(triangle)); // false
console.log(isEquilateral(triangleTwo)); // false
console.log(isEquilateral(triangleThree)); // true

const isIsosceles = function(tri){
  const sideA = tri.sideA;
  const sideB = tri.sideB;
  const sideC = tri.sideC;

  if (((sideA === sideB) && (sideB !== sideC)) ||
  ((sideA === sideC) && (sideB !== sideC))||
  ((sideB === sideC) && (sideA !== sideC))){
    return true; // Two sides of the triangle are equal
  }
  return false;

}; // isIsosceles();

console.log(isIsosceles(triangle)); // true
console.log(isIsosceles(triangleTwo)); // false
console.log(isIsosceles(triangleThree)); // false

const areaOfTriangle = function(tri){
  const sideA = tri.sideA;
  const sideB = tri.sideB;
  const sideC = tri.sideC;

  // Use Herron's formula = 1/4 ⎷4a²b² - (a² + b² - c²)²
  const area = 0.25 * // 1/4
  Math.sqrt(
    4 * Math.pow(sideA, 2) * Math.pow(sideB, 2) - // 4a²b² -
    Math.pow((Math.pow(sideA, 2) + Math.pow(sideB, 2) - Math.pow(sideC, 2)), 2) // (a² + b² - c²)²
  );
  return area;
}; // areaOfTriangle();

console.log(`Area is ${areaOfTriangle(triangle)}`); // Area is 5.562
console.log(`Area is ${areaOfTriangle(triangleTwo)}`); // Area is 14.6969
console.log(`Area is ${areaOfTriangle(triangleThree)}`); // Area is 1.73
