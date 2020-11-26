console.log('Text Soup');

// const emptyArr = [];

const newArr = $('.hidden').text().split(" ");

// console.log(emptyArr);

const ranValue = function(max) {
  return Math.floor(Math.random() * max)
};

const getRandomElementFromArray = function(array){
  const randomIndex = randomValue(array.length);
  return array[randomIndex];
};

const displayWord = function(){
  const word = getRandomElementFromArray(newArr)
  console.log(word);
}

// console.log(ranWord);
//
// $('.hidden').appendChild(`<div class=randomWord></div>`).text(ranWord);
