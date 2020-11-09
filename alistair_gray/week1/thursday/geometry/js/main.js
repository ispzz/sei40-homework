console.log("Geometry Function Lab");

// Given a rectangle object like the one below, write the following functions:
//
// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
//

const rectangle = {
  rectLength: 4,
  rectWidth: 4
};

const isSquare = function(){
  const output = rectangle.rectLength / rectangle.rectWidth
    if (Number.isInteger(output) && output > 0){
    console.log("Yes, it has a square root")
  } else {
    console.log("No, it does not have a square root")
  }
}

isSquare();
