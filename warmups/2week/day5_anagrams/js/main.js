// 1. create a function that will convert a word in alphabetical order
// 2. create a function will use the first function to sort each of the words in the array and THEN we can compare the word we input to the array of potential anagrams

/////////////// Version 1 ///////////////

// Helper Function
// This will rearrange characters of any strings
// .toLowerCase() to turn any upperCase characters to lowerCase
// .sort() will sort the elements of an array alphabetically
// before sorting the string we need to .split() into an array
// .join("") will return the array as a string ["a", "z"] -> "az"
const wordSort = function(unsortedWord) {

    let sortedWord = unsortedWord.toLowerCase().split("").sort().join("");
    return sortedWord;

} // end of wordSort

// Anagram
// All this function will do is use wordSort() on the word and list of possible anagrams
// The for loop will iterate through the array and run wordSort() on each string
const anagramDetector = function(word, array) {

    let wordOne = wordSort(word);
    // console.log("wordOne: " + wordOne);

    for (let i = 0; i < array.length; i++) {

        // console.log(array[i]);
        let wordTwo = wordSort(array[i]);
        // console.log(wordTwo);

        if ( wordOne === wordTwo ) {
            console.log(`The anagram of ${word} is ${array[i]}.`);
        }

    } // end of for loop

} // end of anagramDetector

anagramDetector("listen", ["enlists", "google", "netsil", "inlets", "banana"]);


/////////////// Version 2 ///////////////

const anagramDetector = {

    anagram: [],
  
    customSort: function (unsortedWord) {
      return unsortedWord.toLowerCase().split("").sort().join("");
    },
  
    findMatch: function (word, array) {

      let wordOne = this.customSort(word);

      for (let i = 0; i < array.length; i++) {

        let wordTwo = this.customSort(array[i]);
        if (wordOne === wordTwo) {
          this.anagram.push(array[i]);

        } // end of if

      } // end of for
 
      return `The anagram of ${word} is ${this.anagram}`

    } // end of findMatch
  };
  
  console.log(anagramDetector.findMatch("listen", ["enlists", "google", "inlets", "banana"]));