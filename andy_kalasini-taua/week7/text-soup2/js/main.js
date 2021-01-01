



// 3. Take our max value and return a number between 0 $ the max value
const randomValue = function(max) {
    return Math.floor(Math.random() * max);
};

// 4. Get random element/word from the array words
const getRandomElementFromArray = function(array) {
    const randomIndex = randomValue(array.length);
    return array[randomIndex];
};

$(document).ready(function() {

  // const controllers = {
  //   fadeInSpeed: 100,
  //   // etc..
  // };
  //
  const gui = new dat.GUI();  //Add the GUI pane

   const controls = {
     fadeIn: 2000,
     fadeOut: 2000,
     fontSize: 30;
   }

   gui.add(controls, 'fadeIn', 0, 5000);
   gui.add(controls, 'fadeOut', 0, 5000);
   gui.add(controls, 'fontSize', 10, 200);


    // 1. Get the contents of the div as a string
    const divContent = $('#words').text();
    // console.log(divContent);

    // 2. Split the divContents into from a string into an array
    // based on the regular expression, .split() will exclude spaces, punctuation and newlines
    // .split(" ") would also be fine here but I don't want to include newlines and punctuation
    const words = divContent.split(/[ ;\-,.\n]+/);
    // console.log(words);

    // 5. Main function
    const displayWord = function() {

        // 5a. get random word from our array
        const word = getRandomElementFromArray(words);
        // console.log(word);

        // 5b. Create a new div
        const $wordDiv = $('<div class="word">');

        // 5c. set the new div with the contents of the random word
        $wordDiv.text(word);
        // console.log($wordDiv.text());

        // 5d. Display the word at a random position
        // Get a random x, y position from the width and height of the body
        const xRand = randomValue(window.innerWidth);
        const yRand = randomValue(window.innerHeight);
        // console.log(xRand, yRand);

        // 5h. Get a random colour for colourful words!
        const randomColour = `rgb(${randomValue(255)}, ${randomValue(255)}, ${randomValue(255)})`;
        // console.log(randomColour);

        // 5e. Add the random positions to the css
        // set the position of the div at random
        // we can also set other properties
        $wordDiv.css({
            top: yRand,
            left: xRand,
            fontSize: `${30 + randomValue(30)}pt`,
            color: randomColour,
            transform: `rotate(${randomValue(360)}deg)`,
        });

        // 5f. Append to the DOM i.e the page
        $('body').append($wordDiv);

        // 5g. Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with texty text.
        // the div will fadeIn if the div has already been set to "display: none" - Thank you Sam & Luke I can't believe I never realised 😭
        // fadeOut wull start immediately after fadeIn is done
        $wordDiv.fadeIn(2000).fadeOut(2000, function() {
            // When fadeOut is finsihed then the second argument (which is an anonymous function) is called.
            // The div will then be removed from the DOM which will stop it from filling up the screen
            $(this).remove(); // same as $wordDiv.remove
        });

    }; // end of displayWord

    // add a word to the page every 100ms by using setIntercal to call our function
    setInterval(displayWord, 100);


}); // end of document ready3
