console.log('JS loaded!');
// ## Text Soup
// Using HTML, CSS and JS + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.
// #### Hints:
// - Grab some plain text (20-50 paragraphs should do) from one the top 100 novels in the public domain at [Project Gutenberg](https://www.gutenberg.org/browse/scores/top), and paste the text into a hidden `<div>` element in your HTML file (use CSS to hide it).
// - Use jQuery to get the contents of the div as a string, then split up the string into an array of words.
// - Re-use the `getRandomElementFromArray()` function we wrote at the end of week 1 to pick a random word from the array.
// - Use jQuery to 1) create a new DIV with that word as its contents, 2) set the DIV to appear at a random position on the page , and 3) append it to the DOM.
// #### Bonus:
// - Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with texty text.
// - Try random colours, random font sizes, rotation, whatever floats your boat.
// (edited)
const textContents =$('#text').text();
console.log(textContents);
const textWords = textContents.split(/[ "'';\-,.\n]+/)
console.log(textWords.length);

const generateRandomInt = function(max){
  const randomNum = Math.random() * max;
  const randomInt = Math.floor(randomNum);
  return randomInt;
};//end of generateRandomInt
generateRandomInt();
const getRandomElementFromArray = function(array){
  const randomIndex = generateRandomInt(array.length);
  return array[randomIndex];

};//end of getRandomElementFromArray

const displayWord = function(){
  console.log(getRandomElementFromArray(textWords));
  const randomNumber = generateRandomInt(textWords.length);
  console.log(randomNumber);
  const $newDiv = $(`<div class=word> ${getRandomElementFromArray(textWords)} </div>`)

  const xRand = generateRandomInt(window.innerWidth);
  const yRand = generateRandomInt(window.innerHeight);
  const fontRand = generateRandomInt(30);
  // const randomColor = generateRandomInt(255) + generateRandomInt(255) + generateRandomInt(255)
  $newDiv.css({
    top: yRand,
    left: xRand,
    fontSize: fontRand + 'px',
    // color: rgba(randomColor),
  });
  $('body').prepend($newDiv);
  $newDiv.fadeIn(2000).fadeOut(2000,function(){
    $(this).remove();
  });
};


setInterval(function(){
  displayWord();

},1000);
