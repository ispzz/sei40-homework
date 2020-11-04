console.log('The javascript has loaded!');

// Do your exercises here:

// The Word Guesser
let wordToGuess = 'bandage';
let totalReward = 0;
let hangman = 0;
const wordArr = wordToGuess.toLowerCase().split('');
const guessArr = [];

const guessLetter = function(guess){
  let currReward = Math.floor(Math.random() * 100);
  guess = guess.toLowerCase();

  if(guess.length > 1){
    console.log('You can only guess a letter at a time');
    return;
  }

  if(hangman === 6){
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
    return;
  }

  if(gameOver(wordArr)){
    console.log('GAME OVER!!!');
    return;
  };

  if(wordArr.includes(guess)){
    hangman -= 1;
    let currGuess = '';
    let idx = wordArr.indexOf(guess);

    guessArr[idx] = guess;
    wordArr.splice(idx, 1, '*');

    for(let i = 0; i < guessArr.length; i++){
      if(guessArr[i] === undefined){
        currGuess += '_,';
      } else {
        currGuess += guessArr[i] + ',';
      }
    } //for

    if(guessArr.length < wordArr.length){
      let diff = wordArr.length - guessArr.length;
      for(let i = 1; i <= diff; i++){
        currGuess += '_,'
      }
    } //if

    currGuess = currGuess.slice(0, currGuess.length - 1);

    if(totalReward === 0){
      totalReward = currReward;
    } else {
      totalReward = totalReward * currReward;
    } //if



    console.log('Congrats! After your guess, this is the board:');
    console.log(currGuess, 'Reward: $' + totalReward);
    wonGame(wordArr);

  } else if(guessArr.includes(guess)){
    console.log("You've guessed that letter already. Try again.")
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

const wonGame = function(arr){
  if(checkArr(arr)){
    console.log('Congratulations. You won the game!');
  }
} //wonGame()

const gameOver = function(arr){
  if(checkArr(arr)){
    return true;
  }
} //gameOver()

const checkArr = function(arr){
  return arr.every(function(el){
    return el === '*';
  })
} //checkArr()
