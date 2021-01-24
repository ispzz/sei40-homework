// 1. Have your page load the contents of a text file into a single variable using AJAX (you will need to run a local server so you can open the file as a URL). To run a local server which will let you load a local text file via AJAX, try `python -m SimpleHTTPServer` on the command line.
// 2. Separate all the text in the loaded file into an array of words. *Hint: Text Soup*
// 3. Iterate over the array and add a key to your lookup table for each word, and an empty array as the key's value (if it's not already set as a key); get the word that follows this word and push it onto the array of words for this key (i.e. and words in this array are words which have been found to follow this word in your original text). Repeat.
// 4. Pick a random starting word (*Hint: Create a function that gets random words from an array*), and get the next word by randomly picking one of the words in its array of following words (if we've allowed duplicates in this array, words that were found to follow more often will have a higher probability of being picked). Repeat!

const poem = `
The dogs are running.
The dogs are happy.
The owners are drunk.
No dogs survived.
`;

const sentenceStarterWords = [];
const createMarkovTable = text => {

    // object to store my markov table
    const markovTable = {};

    // split the text 
    let words = text.split(/[ ;\-\n]+/);
    
    // filter out any whitespace in the start and end
    words = words.filter(word => word.length > 0);
    // console.log(words);

    for (let i = 0; i < words.length - 1; i++) {
        // console.log(words[i]);
        const currentWord = words[i];

        // check if the current word exist in the table if not then add it
        if ( !(currentWord in markovTable) ) {
            // console.log(currentWord);
            markovTable[currentWord] = [];
        }

        // get the next word
        const nextWord = words[i + 1];
        // console.log(`current word: ${currentWord}, following word: ${nextWord}`);

        // pust the nextword after current word into the object as its value
        markovTable[currentWord].push(nextWord);

        // console.log(markovTable);

        // Keep track of sentence starting (uppercase) words e.g The
        if ( currentWord.match(/^[A-Z][a-z]/) ) {
            // console.log(`sentence starter word: ${currentWord}`);
            sentenceStarterWords.push( currentWord );
        }

        // console.log(sentenceStarterWords);
    } // end of for loop

    return markovTable;

} // end of create markov table

const poemMarkov = createMarkovTable(poem);

// get random element from array
const getRandomElement = array => {
    const randomIndex = Math.floor( Math.random() * array.length );
    return array[ randomIndex ];
}

const generateMarkovText = (table, outputLength) => {

    // get my first owrd of the sentence
    let currentWord = getRandomElement( sentenceStarterWords );
    let firstWord = currentWord;

    // console.log(firstWord);

    for (let i = 0; i < outputLength; i++) {
        currentWord = getRandomElement( table[ currentWord ] );

        firstWord += ' ' + currentWord;
    }

    return firstWord;

}

// console.log(generateMarkovText(poemMarkov, 2));

$.ajax('/text.txt')
.done( data => {
    // console.log(data.length);

    // create a new markov table with our text.txt
    const ajaxMarkovTable = createMarkovTable( data );

    const markovSentence = generateMarkovText( ajaxMarkovTable, 40 );
    console.log(markovSentence);

} )

