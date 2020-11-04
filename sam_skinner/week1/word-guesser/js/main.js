console.log('Begin Word Guesser Game!')

// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

const gameAnswer = ['B','R','O','W','N'];
let playerGuesses = ['_','_','_','_','_'];
let incorrectGuesses = [];
let numberOfBadGuesses = 0;

const guessLetter = function(guess){
  if(playerGuesses.includes(guess) || incorrectGuesses.includes(guess)){
    return;
  } //if
  for(i = 0; i < gameAnswer.length; i++){
    if(guess === gameAnswer[i]){
      playerGuesses[i] = guess;
      console.log(`Congratulations! ${guess} was correct!  Your current correct choices are: ${playerGuesses} and incorrect guesses are: ${incorrectGuesses}`);
    } //if
  } //for
  if(playerGuesses.join("") === gameAnswer.join("")){
    console.log(`Congratulations! You won the game!  The finished word was ${gameAnswer}`);
  } //if
  if(gameAnswer.includes(guess) === false){
    incorrectGuesses.push(guess);
    numberOfBadGuesses++;
    console.log(`Sorry! ${guess} is not in the word.  Your current correct choices are: ${playerGuesses} and incorrect guesses are: ${incorrectGuesses}`);
  } //if
  if(numberOfBadGuesses === 6){
    console.log("You're out of guesses, call the hangman!");
    console.log('  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n=========');
  } //if
} //guessLetter()
