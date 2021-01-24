// 1. Have your page load the contents of a text file into a single variable using AJAX (you will need to run a local server so you can open the file as a URL). To run a local server which will let you load a local text file via AJAX, try `python3 -m SimpleHTTPServer` on the command line.

// 2. Separate all the text in the loaded file into an array of words. *Hint: Text Soup*

// 3. Iterate over the array and add a key to your lookup table for each word, and an empty array as the key's value (if it's not already set as a key); get the word that follows this word and push it onto the array of words for this key (i.e. and words in this array are words which have been found to follow this word in your original text). Repeat.

// 4. Pick a random starting word (*Hint: Create a function that gets random words from an array*), and get the next word by randomly picking one of the words in its array of following words (if we've allowed duplicates in this array, words that were found to follow more often will have a higher probability of being picked). Repeat!