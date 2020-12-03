// # Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word. A word is an anagram if its letters can be rearranged to create a new word.
// In other words, given: `"listen"` and `["enlists" "google" "inlets" "banana"]` the program should return "inlets".
// ## Suggestions
// - Start out by getting this working with discrete functions.
// - If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

const words = ["enlist", "google", "inlets", "banana"];

const anagrams = {};

for (let i=0; i < words.length; i++){
  const word = words[i];
  const sorted = sortWord(word);

  if(anagrams[sorted] !== null){
    anagrams[sorted].push(word);
  } else {
    anagrams[sorted] = [word];
    }
  };

console.log(anagrams);
