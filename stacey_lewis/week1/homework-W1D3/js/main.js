
console.log(`Homework Week 1, day 3`);
console.log(`----------The Word Guesser----------`);

// Homework: The Word Guesser


// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

//set the word to guess
const wordToGuess = [
  "B",
  "A",
  "N",
  "T",
  "E",
  "R",
  "E",
  "D",
]; //end array

//create a record of the letters that have been guessed.
const blankGuessingBoard = [ "_", "_","_","_","_","_","_","_"]; //end array


//set variables to check if the game is over or if a letter was
let missingLetterCount = null;
let gotALetter = null;

//run through the length of the wordToGuess and check if it matches each the letter choosen. If they do enter that letter into the blankGuessingBoard at the corresponding location.
const guessLetter = function(guess) {
  missingLetterCount = null;
  gotALetter = null;
    for (let i = 0; i < wordToGuess.length; i++) {
        if (guess === wordToGuess[i]) {
          blankGuessingBoard[i] = guess;
          gotALetter = gotALetter + 1;
        } //end if
    }; //end for

    if (gotALetter === 1) {
      console.log(`You got 1 letter, well done!`);
    }
    else if (gotALetter > 1) {
      console.log(`You got ${gotALetter} letters, wooo hooo!`);
    } else {
      console.log('Bad luck, that letter was not in the word');
    }; //end if
  console.log(`After your guess, this is the board ${blankGuessingBoard}`);

  //check the new array against word to see if any are missing = "_"
  //log the guessed letters in a new array

  for (let i = 0; i < wordToGuess.length; i++) {
      if (blankGuessingBoard[i] === "_") {
        missingLetterCount = missingLetterCount + 1;
      } //end if
  }; //end for

  //tell the player how many letters are remaining by counting the missingLetterCount
  if (missingLetterCount > 0 ) {
    console.log(`You still have ${missingLetterCount} letters to go - go again.............`);
  } else {
    console.log(`Congrats, you have guessed the word!`);
  }
};


//CHECK WHETHER IT WORKS:
const guessedLetters = [
  "E",
  "B",
  "A",
  "N",
  "X",
  "T",
  "R",
  "D"
];

guessLetter(guessedLetters[0]);
guessLetter(guessedLetters[1]);
guessLetter(guessedLetters[2]);
guessLetter(guessedLetters[3]);
guessLetter(guessedLetters[4]);
guessLetter(guessedLetters[5]);
guessLetter(guessedLetters[6]);
guessLetter(guessedLetters[7]);

//BONUS STUFF IF TIME--------------------------


// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
