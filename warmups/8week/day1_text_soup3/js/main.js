const randomValue = function(max) {
    return Math.floor(Math.random() * max);
};

const getRandomElementFromArray = function(array) {
    const randomIndex = randomValue(array.length);
    return array[randomIndex];
};

$(document).ready(function() {

    let words = [];

    // get the query string using URLSearchParams
     // a query string is the url with '?' at the end and followed by some parameters, in this case whatever we want to search in the wikiAPI
    // window.location.search returns whatever is after the '?' in the URL
    const urlParams = new URLSearchParams(window.location.search);

    // urlParams will have 'page=Cat' stored so now we can get the value of page which is Cat in this example
    const query = urlParams.get('query');
    console.log('urlParams.get: ', query);

    // Use .getJSON to start getting data based on the value of page
    $.getJSON('http://en.wikipedia.org/w/api.php?callback=?', {
        // instead of http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?
        // I can clean it up a little and add the other parameters in the object below
        action: 'parse',
        format: 'json',
        page: query,
        prop: 'text',
    }).done(data => {
        console.log(data);

        // get the text from the api
        let wikiHTML = data.parse.text['*'];
        // console.log(wikiHTML);

        let text = $('#words').html(wikiHTML).text();
        console.log(text);

        // split the block of text
        words = text.split(/[ :_;.,"'\-\n]+/);

        timerID = setInterval(displayWord, 100);
    })

    // Add the GUI pane
    const gui = new dat.GUI();

    // set up the controllers by creating an object that will store all the variables
    const controls = {
        fadeIn: 2000, 
        fadeOut: 2000,
        fontSize: 30,
        wordTimerInterval: 100,
    }

    // Add the controllers to the GUI interface
    gui.add(controls, 'fadeIn', 0, 5000);
    gui.add(controls, 'fadeOut', 0, 5000);
    gui.add(controls, 'fontSize', 10, 200);

    // Add the wordTimerInterval controller
    gui.add(controls, 'wordTimerInterval', 1, 1000).onFinishChange(function(newValue) {
        console.log(newValue);

        clearInterval(timerID);

        timerID = setInterval(displayWord, newValue);
    });

    // const divContents = $('#words').text();

    // const words = divContents.split(/[ :_;.,"'\-\n]+/);

    // Main function
    const displayWord = function() {

        const word = getRandomElementFromArray(words);

        const $wordDiv = $('<div class="word">');
        $wordDiv.text(word);

        const xRand = randomValue(window.innerWidth);
        const yRand = randomValue(window.innerHeight);

        const randomColour = `rgb(${randomValue(255)}, ${randomValue(255)}, ${randomValue(255)})`;

        // Add the random positions and colours to the css of each word
        $wordDiv.css({
            top: yRand,
            left: xRand,
            color: randomColour,
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