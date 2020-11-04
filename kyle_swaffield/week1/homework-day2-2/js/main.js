// Strings
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!
//
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
console.log("<<<Dr Evil>>>");
const drEvil = function(amount){
  if(amount < 1000000){
    return `${amount} dollars`;
  }
  return `${amount} dollars (pinky)`;
};
console.log(drEvil(1999999));
console.log(drEvil(999999));
// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
console.log("<<<Mix Up!!>>>");
const mixUp = function(str1,str2){
  const firstChar = str1[0] + str1[1];
  const secondChar = str2[0] + str2[1];

  let firstStr = secondChar;
  let secondStr = firstChar;

   for(let i = 0; i < str1.length; i++ ){
     if(i > 1){
       firstStr = firstStr + str1[i];
     };
   };
  for(let i = 0; i < str2.length; i++ ){
    if(i > 1){
        secondStr = secondStr + str2[i];
      };
  };

   return firstStr + " " + secondStr;
};

console.log(mixUp("turn","left"));
// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'
console.log("<<<Fix Start>>>");
const fixStart = function(str){
   let wordObj = {};
   let strChange = "";

  for(let i = 0; i < str.length; i++){
    //console.log(str[i] + " : " + i)

    if(wordObj[str[i]]){
      wordObj[str[i]].push(i);
    }else{
      wordObj[str[i]] = [i];
    }

    if(i != wordObj[str[i]]){
      strChange = strChange + "*";
    }else{
      strChange = strChange + str[i];
    }
  }
  return strChange;
};

console.log(fixStart("test"));
console.log(fixStart("testtool"));
// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
console.log("<<<Verbing>>>");
const verbing = function(str){
  let testIng = "";

  if(str.length >= 3){
    for(let i = str.length - 1; i >= str.length - 3; i --){
        testIng = testIng + str[i];
    };
    if(testIng == "gni"){
      return str + "ly";
    }else{
      return str + "ing";
    }
    };
    return str;
  }; //verbing()


console.log(verbing("Testing"));
console.log(verbing("Test"));
console.log(verbing("Red"));
console.log(verbing("To"));
// Not Bad
// Create a function called notBad that takes a single argument, a string.
console.log("<<<Not Bad>>>");
const notBad = function(str){

};
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
