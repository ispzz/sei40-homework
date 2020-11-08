
console.log("JS works!")

// The Calculator

// Part 1

// Square

const squareNumber = function (square){
  const squareResult = square * square;
  console.log(`The result of squaring the number ${square} is ${squareResult}`);
  return squareResult;
}

squareNumber(3);

// Half

const halfNumber = function (half){
  const halfResult = half / 2;
    console.log(`Half of ${half} is ${halfResult}`);
    return halfResult;
}

halfNumber(2);

// Percent Of

const percentOf = function (firstNum, secondNum){
  const percentResult = (100 * secondNum / firstNum).toFixed(2);
    console.log(`${secondNum} is ${percentResult}% of ${firstNum}`);
    return percentResult;
}

percentOf(50,10);

// Area of Circle

const areaOfCircle = function (radiusInput){
  const areaResult = (Math.PI * (radiusInput * radiusInput).toFixed(2));
  console.log(`The area for a circle with radius ${radiusInput} is ${areaResult}`);
  return areaResult;
}

areaOfCircle(2);

const theCalculator = function (desiredInput){
  const
  }
}

theCalculator(2);
