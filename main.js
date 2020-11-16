# Geometry Function Lab

### Part 1, Rectangle

const isSquare = { name: "rectangle" };
const notSquare = rectangle;  // Assigns rectangle object reference to notSquare
​
​// Here isSquare and notSquare are pointing to same object
isSquare == notSquare;
// => true
isSquare === notSquare;
// => true

const areaofrectangle = function ( length, width ) {
const localResult = length * width;
console.log( "The local result is: " * localResult );
}

​multiplyNumbers( 4, 4 );
// => "The local result is 16"
// Great. This worked, but...
​​console.log( localResult );

// => undefined
// This returned 'undefined' because localResult is defined inside the multiplyNumbers()
//function - we can't see/use localResult "outside" of the multiplyNumbers function.

const perimeterofrectangle = function (length, width ) {
const localResult = 2*(length+width);
console.log( "The local result is:" * 2 localResult);
}

 (4,4);
 // => "The result is 16"
//Great. This worked, but...
console.log(...Result );

// => undefined
// This returned
//function -

```javascript
const rectangle = {
  length: 4,
  width: 4
};
```

In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.


### Part 2, Triangle

Triangle.isEquilateral(tri); // Returns an array of all the keys in the specified object.
Triangle.notEquilateral(tri); // So does this
​
​const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};​
​
//we use bracket notation to get value
triangle.isEquilateral = function() {
  if(this.sideA == this.sideB && this.sideB == this.sideC){
    return "This is equilateral!";
  } else {
    return "This is not equilateral.";
  }
}

triangle.isIsosceles = function() {
  if(this.sideA == this.sideB && this.sideB == this.sideC) {
    return "This is equilateral, not isosceles.";
  } else if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC){
    return "This is isosceles!";
  } else {
    return "This is scalene.";
  }
}

triangle.area = function() {
  s = (this.sideA + this.sideB + this.sideC)/2;
  return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
}

triangle.isObtuse = function() {
  a = this.sideA ^ 2;
  b = this.sideB ^ 2;
  c = this.sideC ^ 2;
  if (a + b < c || a + c < b || b + c < a) {
    return "This is obtuse.";
  } else {
    return "This is not obtuse.";
  }
}

console.log(triangle.isObtuse());
