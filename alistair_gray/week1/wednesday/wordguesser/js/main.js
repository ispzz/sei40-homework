console.log('Word Guesser');

                    // 0    1    2    3
const wordSolution = ["W", "O", "R", "D"]; // Word to be guessed

const wordGuess = []; // Initial template

let guess

const guessLetter = function (guess) {
  for (i = 0; i < wordSolution.length; i++) {
    if (guess === wordSolution[i]) {
      const correctGuess = wordGuess.push(guess)
      console.log(`Correct guess of ${guess}, the remaining word looks like this ${wordGuess}. Please guess another letter`)
      }else if (wordSolution === wordGuess) {
      console.log(`Well done! You got every letter!`);
    } // conditional
  } // for loop wordSolution
} // function guessLetter

guessLetter("W");
guessLetter("O");
guessLetter("R");
guessLetter("D");
