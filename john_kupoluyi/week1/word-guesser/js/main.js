console.log('The javascript has loaded!');

// Do your exercises here:

// The Word Guesser
let totalReward = 0;
let hangman = 0;
let counter = 0;
const wordToGuess = 'bandage';
const wordArr = wordToGuess.toLowerCase().split('');
const guessArr = [];

for(let i = 0; i < wordArr.length; i++){
  guessArr.push('_');
}

const guessLetter = function(guess){
  let currReward = Math.floor(Math.random() * 100);
  guess = guess.toLowerCase();

  if(guess.length > 1){
    console.log('You can only guess a letter at a time. Try again.');
    return;
  }

  if(hangman === 6){
    showHangman();
    return;
  }

  if(counter === wordToGuess.length){
    console.log('GAME OVER!!!');
    return;
  };

  if(wordArr.includes(guess)){
    hangman -= 1;
    counter += 1;
    let idx = wordArr.indexOf(guess);

    guessArr[idx] = guess;
    wordArr.splice(idx, 1, '*');

    if(totalReward === 0){
      totalReward = currReward;
    } else {
      totalReward = totalReward * currReward;
    } //if

    console.log('Congrats! After your guess, this is the board:');
    console.log(guessArr.join(), 'Reward: $' + totalReward);

    if(counter === wordToGuess.length){
      console.log('Congratulations. You won the game!');
    };

  } else if(guessArr.includes(guess)){
    console.log("You've guessed that letter already. Please try again.")
    return;

  } else {
    hangman += 1;
    if(totalReward - currReward > 0){
      totalReward = totalReward - currReward;
    } else {
      totalReward = 0;
    }
    console.log(`Ooops... wrooooong guess. Your reward is now $${totalReward}. Please try again!`);
  } //if

} //guessLetter()

const showHangman = function(){
  hangmanAscii = [`
      +---+
      |   |
          |
          |
          |
          |
    =========
    `
  ]
  console.log(`Sorry mate... you lost!`);
  console.log(hangmanAscii[0]);
} //showHangman()
