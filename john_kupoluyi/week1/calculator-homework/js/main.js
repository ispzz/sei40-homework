console.log('The javascript has loaded!');

// Do your exercises here:

// The Calculator: Part 1
const squareNumber = function(number){
  return Math.pow(number, 2);
}

let number = 3;
let result = squareNumber(number);
console.log(`The result of squaring the number ${number} is ${result}`);

//---
const halfNumber = function(number){
  return number/2;
}

number = 5;
result = halfNumber(number);
console.log(`Half of ${number} is ${result}`);

//---
const percentOf = function(num1, num2){
  return (num1/num2) * 100;
}

let num1 = 2;
let num2 = 4;
result = percentOf(num1, num2)
console.log(`${num1} is ${result}% of ${num2}`);

//--
const areaOfCircle = function(radius){
  return Math.PI * Math.pow(radius, 2);
}

let radius = 4;
result = areaOfCircle(radius)
console.log(`The area for a circle with radius ${radius} is ${result.toFixed(2)}`);


// The Calculator: Part 2
const mathsOperation = function(){
  let half = halfNumber(10);
  let square = squareNumber(half);
  let area = areaOfCircle(square);
  let percent = percentOf(area, square).toFixed(2);

  console.log(half, square, area, percent+'%');
}

mathsOperation();


//Strings

//DrEvil
const drEvil = function(amount){
  if(amount !== 1000000) return `${amount} dollars`;
  return `${amount} dollars (pinky)`;
}
console.log(drEvil(500000));
console.log(drEvil(1000000));

//MixUp
const mixUp = function(str1, str2){
  cat1Start = str1.slice(0, 2);
  cat2Start = str2.slice(0, 2);
  cat1End = str2.slice(2, str2.length);
  cat2End = str1.slice(2, str1.length);

  console.log(`${cat1Start}${cat1End} ${cat2Start}${cat2End}`);
}

mixUp('dog', 'dinner');

//FixStart
const fixStart = function(str){
  str = str.toLowerCase();
  let strArray = str.split('');
  for(let i = 1; i < strArray.length; i++){
    if(strArray[0] === strArray[i]) strArray[i] = '*';
  }

  console.log(strArray.join(''));
}

fixStart('Babble Babble');

//Verbing
const verbing = function(str){
  let result = str;
  if(str.length >= 3){
    if(str.slice(-3) === 'ing'){
      result = str.concat('ly');
    } else {
      result = str.concat('ing');
    }
  }
  console.log(result);
}

verbing('swimming');

//Not Bad
const notBad = function(str){
  let notIdx = str.indexOf('not');
  let badIdx = str.indexOf('bad');

  if(notIdx === -1 ||  badIdx == -1) return str;
  if(notIdx < badIdx){
    return str.substring(0, notIdx).concat('good', str.substring(badIdx + 3));
  }

  return str;
}

console.log(notBad('This dinner is bad!'));
