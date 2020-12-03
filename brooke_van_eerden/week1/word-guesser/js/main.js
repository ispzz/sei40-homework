console.log('JS loaded!');
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
const word    = ['F', 'O', 'X'];
const toGuess = ['_', '_', "_"];

// Write a function called guessLetter that will:
// const fakeGuessLetter = 'S';

const guessLetter = function(userGuess){
  let matchFound = false;
  for(i=0; i < word.length; i++){
  const secretLetter = word[i];
  if(userGuess ===secretLetter){
    toGuess[i]= secretLetter;
    console.log(`correct ${secretLetter} at position ${i+1} '${toGuess}'`);
    matchFound= true;
  }
};

if(matchFound === false){
console.log("Bad Guess, try again ", toGuess);
};
const winConditional = function(letter){
    if(word.indexOf(letter) === "_"){
      console.log('YOU WON!')
    }
    winConditional();
    ///wincoditonal still doesnt work
};
};
guessLetter('F');

// }
// const guessLetter = function(letter){
//     if(word.includes(letter)){
//       console.log(`Congrats! You guessed right! ${letter} is the #${word.indexOf(letter)+1} letter`);
//       return letter;
//
//   } else{ console.log(`Sorry ${letter} is not correct`)}
// }
//
// guessLetter('F');
//
// const guessLetter = function(letter){
//     if(word.includes(letter)){
//       console.log(`Congrats! You guessed right! ${letter} is the #${word.indexOf(letter)+1} letter`);
//
//       if(word.indexOf(letter) === 0){
//         toGuess[word.indexOf(letter)]= "F";
//         console.log(`Congrats you got the first letter, ${toGuess[0]} ${toGuess[1]} ${toGuess[2]}`)
//       }
//       if(word.indexOf(letter) === 1){
//         toGuess[word.indexOf(letter)]= "O";
//         console.log(`Congrats you got the second letter, ${toGuess[0]}${toGuess[1]}${toGuess[2]}`)
//       }
//       if(word.indexOf(letter) === 2){
//         toGuess[word.indexOf(letter)]= "X";
//         console.log(`Congrats you got the third letter, ${toGuess[0]} ${toGuess[1]} ${toGuess[2]}`)
//       }
//       return letter;
//
//
//
//   } else{ console.log(`Sorry ${letter} is not correct`)}
//     return letter;
//This doesnt work and i'm not sure why

//
// }
// };
// guessLetter();

// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//SOLUTION
//for loop that prints out each letter then
