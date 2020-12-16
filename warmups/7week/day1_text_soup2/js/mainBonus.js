// Text colour change
// Add your own text
// Reset button

const randomValue = function(max) {
    return Math.floor(Math.random() * max);
};

const getRandomElementFromArray = function(array) {
    const randomIndex = randomValue(array.length);
    return array[randomIndex];
};

$(document).ready(function() {

    // Add the GUI pane
    const gui = new dat.GUI();

    // set up the controllers by creating an object that will store all the variables
    // Through this object dat.gui will determine the controller type based on the initial value
    const controls = {
        fadeIn: 2000, // this is the value it will always be set on
        fadeOut: 2000,
        fontSize: 30,
        wordTimerInterval: 100,
        // BONUS: ADD WORD, TEXT COLOUR, RESET BUTTON
        // because this is set as a string, GUI will add a text field
        addWord: "",
        color: "#FFFFFF", // can also use [ 0, 128, 255 ]
        reset: function () {
            $(".word").remove();
        }
    }

    // Add the controllers to the GUI interface
    // This is done by using the method gui.add where we pass in the controls object and the controller as a string
    // we also pass in the min and max value
    gui.add(controls, 'fadeIn', 0, 5000);
    gui.add(controls, 'fadeOut', 0, 5000);
    gui.add(controls, 'fontSize', 10, 200);

    // Add the wordTimerInterval controller
    // To change the interval we need to clear the current interval
    // Use the .onFinishChange event handler
    gui.add(controls, 'wordTimerInterval', 1, 1000).onFinishChange(function(newValue) {
        // This code will run when the slider has stopped being dragged by the user

        // log out the new value just to see if it's working
        console.log(newValue);

        // Cancel/clear the current interval or we'll have multiple set timers
        clearInterval(timerID);

        // Start a new interval with our new value
        timerID = setInterval(displayWord, newValue);
    });

    // BONUS: ADD WORD, TEXT COLOUR, RESET BUTTON
    gui.add(controls, 'addWord');
    gui.addColor(controls, 'color'); // this will add a colour picker
    gui.add(controls, 'reset');

    const divContents = $('#words').text();

    const words = divContents.split(/[ :_;.,"'\-\n]+/);

    // Main function
    const displayWord = function() {

        
        const word = getRandomElementFromArray(words);

        // BONUS: ADD WORD
        // Use the value from the GUI text input approx half the time
        // (but only if the string has contents)
        if (controls.addWord.length > 0 && Math.random() > 0.5) {
            word = controls.addWord;
        }

        const $wordDiv = $('<div class="word">');
        $wordDiv.text(word);

        const xRand = randomValue(window.innerWidth);
        const yRand = randomValue(window.innerHeight);

        const randomColour = `rgb(${randomValue(255)}, ${randomValue(255)}, ${randomValue(255)})`;

        // Add the random positions and colours to the css of each word
        $wordDiv.css({
            top: yRand,
            left: xRand,
            color: controls.color, // BONUS: COLOUR PICKER
            fontSize: `${controls.fontSize}pt`,
            transform: `rotate(${randomValue(360)}deg)`,
        });
        
        $('body').append($wordDiv);

        // Use the GUI fadeIn/fadeOut values
        $wordDiv.fadeIn(controls.fadeIn).fadeOut(controls.fadeOut, function() {
            $(this).remove(); // same as $wordDiv.remove();
        });
    };
    // we want to be able to clear this interval so add it to a variable called timerID
    timerID = setInterval(displayWord, 100);
});