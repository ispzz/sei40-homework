/*
  --------------------------
  Homework: Array and Functions Bonus Material
  --------------------------
*/

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function(x, y){
  let largestNum;
  if(x > y){
    largestNum = x;
  } else {
    largestNum = y;
  }
  return `The largest number is ${largestNum}`;
}

console.log(maxOfTwoNumbers(1,2));
console.log(maxOfTwoNumbers(1,-2));
console.log(maxOfTwoNumbers(-1,-2));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function(x, y, z){
  const numArray = [x, y, z];
  let largestNum = numArray[0];

  for (let i = 1; i < numArray.length; i++){
    if(numArray[i] > largestNum){
      largestNum = numArray[i]
    }
  }

  return `The largest number is ${largestNum}`;
}

console.log(maxOfThree(1,2,3)); // 3
console.log(maxOfThree(6,5,4)); // 6
console.log(maxOfThree(1,10,2)); // 10
console.log(maxOfThree(1,1,1)); // 1
console.log(maxOfThree(-1,-2,-3)); // -1

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel = function(letter){
  switch (letter) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log(`Vowel`);
    return true; // It's a vowel
  default:
    console.log(`Not a vowel`);
    return false; // Not a vowel
  }
}

isVowel('a');
isVowel('e');
isVowel('i');
isVowel('o');
isVowel('u');
isVowel('s'); // not a vowel

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function(arr){
  let total = 0;

  for(let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
}

const multiplyArray = function(arr){
  let total = arr[0];

  for(let i = 1; i < arr.length; i++){
    total *= arr[i];
  }
  return total;
}

exampleArray = [1,2,3,4];
console.log(`Sum of ${exampleArray} is ${sumArray(exampleArray)}`);
console.log(`Multiplication of ${exampleArray} is ${multiplyArray(exampleArray)}`);

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function(string){
  let reversedString = [];

  for (let i = string.length; i >= 0; i--){
    reversedString.push(string[i]);
  }
  reversedString = reversedString.join(''); // Remove commas
  return reversedString.toString();
}

console.log(reverseString('jag testar'));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function(arr){
  let lengthOfLongest = 0;
  let longestWord;

  for (let i = 0; i < arr.length; i++){
    word = arr[i];
    if(word.length > lengthOfLongest){
      longestWord = word;
      lengthOfLongest = word.length;
    }
  }
  return longestWord;
}

const wordArray = ['tree', 'go', 'bananana', 'is'];
console.log(`Longest word is ${findLongestWord(wordArray)}`);

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const filterLongWords = function(arr, i){
  const longerWords = [];

  for (let j = 0; j < arr.length; j++){
    if(arr[j].length > i){
      longerWords.push(arr[j]);
    }
  }

  return longerWords;
}

const i = 3;
const testArray = ['a', 'tree', 'dog', 'iguana', 'blood diner', 'you'];
console.log(`Words with more than ${i} letters: ${filterLongWords(testArray, i).join(", ")}`);
