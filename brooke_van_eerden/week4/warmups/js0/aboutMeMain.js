console.log("Hello DOM2!");

// Exercises: More DOM Manipulation
// About Me
// Every webpage needs an "About" section.
//
// Start with this HTML and save it as "aboutme.html":
// const body=document.getElementsByTagName('body');
// document.body.style.fontFamily = "Arial, sans-serif";
//
// const spans = document.getElementsByTagName('span');
// console.log('spans:', spans);
//
//
// for(let i=0; i< spans.length; i++){
//   spans.innerHTML = "dutchess";
//   console.log(spans);
// }
//
// let listItem = document.getElementsByTagName('li');
// listItem.class= 'listItem';

//SOLUTION
document.body.style.fontFamily= 'Arial, sans-serif';

const nickname=document.querySelector("#nickname");
nickname.innerHTML = 'textchimp';
console.log('nickname', nickname);

const faves=document.getElementById("favorites");
faves.innerHTML = 'Ruby';
console.log('faves', faves);

const home =document.querySelector("#hometown");
home.innerHTML = 'Sydney';
console.log('hometown', home);


const listItems = document.querySelectorAll('li');
for( let i =0; i < listItems.length; i++){
  const currentItem = listItems[1];
  console.log(currentItem);
  currentItem.className = 'listItem';
}

// for(let i=0; i< listItem.length; i++){
  // const listClass = document.createElement('listItem');
//   console.log(listItem);
// }
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
// The Book List
// Keep track of which books you read and which books you want to read!
//
// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page.
// Copy this array of books:
// var books = [
//   {
//     title: 'The Design of EveryDay Things',
//     author: 'Don Norman',
//     alreadyRead: false
//   },
//   {
//     title: 'The Most Human Human',
//     author: 'Brian Christian',
//     alreadyRead: true
//   }
// ];
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.
