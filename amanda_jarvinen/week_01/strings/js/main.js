/*
  ---------
  DrEvil
  ---------
*/
const drEvil = function(amount){
  if (amount === 1000000){
    return amount + " dollars (pinky)";
  }
  return amount + " dollars";
};

console.log(drEvil(10));
console.log(drEvil(1000000));

/*
  ---------
  MixUp
  ---------
*/
/*
A LONG WAY: Swap one character at a time

const mixUp = function(firstString, secondString){
  let newFirstString = swapCharacters(firstString, secondString, 0);
  newFirstString = swapCharacters(newFirstString, secondString, 1);

  let newSecondString = swapCharacters(secondString, firstString, 0);
  newSecondString = swapCharacters(newSecondString, firstString, 1);

  console.log(`${newFirstString} ${newSecondString}`);
};

const swapCharacters = function(firstString, secondString, charPosition){
  return firstString.replace(firstString[charPosition], secondString[charPosition]);
}
*/

const mixUp = function(firstString, secondString){
  const newFirstString = swapCharacters(firstString, secondString);

  const newSecondString = swapCharacters(secondString, firstString);

  console.log(`${newFirstString} ${newSecondString}`);
};

const swapCharacters = function(firstString, secondString){
  return newString = secondString.substr(0, 2) + firstString.substr(2, firstString.length);
}

mixUp("mix", "pod");
mixUp("dog", "dinner")

/*
  ---------
  FixStart
  ---------
*/
const fixStart = function(word){
  const newWord =  word.substr(0, 1) + word.substr(1, word.length).replaceAll(word[0], "*")
  return newWord;
};

console.log(fixStart("babble"));

/*
  ---------
  Verbing
  ---------
*/
const verbing = function(word){
  if (word.length >= 3){
    if (word.substr(word.length - 3, word.length) !== "ing"){
      return word + "ing";
    } else {
      return word + "ly";
    }
  } else {
    return word;
  }
};

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));

/*
  ---------
  Not bad
  ---------
*/
const notBad = function(sentence){
  const positionOfNot = sentence.search("not");
  const positionOfBad = sentence.search("bad");

  if ((positionOfBad > positionOfNot) && (positionOfNot !== -1)){
    const newSentence = sentence.substr(0, positionOfNot) + "good!";
    return newSentence;
  } else {
    return sentence;
  }
};

console.log(notBad("This dinner is not that bad!"));
console.log(notBad("This movie is not so bad!"));
console.log(notBad("This dinner is bad!"));
