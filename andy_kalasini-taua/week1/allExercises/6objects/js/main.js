console.log('Object Exercises!')

// The Reading List

// Create an array of objects, where each object describes a book
// and has properties for the title (a string), author (a string),
// and alreadyRead (a boolean indicating if you read it yet).

const readingList = [

//Book 1
  {
  title1: 'Don Quixote',
  author: 'Miguel Cerv',
  alreadyRead: false
},
// Book 2
  {
  title2: 'Lord of the Rings',
  author: 'JRR Tolkien',
  alreadyRead: true
},
//Book 3
  {
  title3: 'Capture',
  author: 'JRR',
  alreadyRead: true
}

];

// Iterate through the array of books. For each book, log the book
// title and book author like so: "The Hobbit by J.R.R. Tolkien".


for( let i=0; i < readingList.length; i++){
  const currentBook = readingList[i];

}

// Now use an if/else statement to change the output depending on
// whether you read it yet or not. If you read it, log a string like
// 'You already read "The Hobbit" by J.R.R. Tolkien', and if not,
// log a string like 'You still need to read "The Lord of the Rings"
// by J.R.R. Tolkien.'

if (readingList.alreadyRead){
console.log(`Your have already read ${readingList[1].title2} by ${readingList[1].author}`);
}else {
console.log(`Your still need to read ${readingList[1].title2} by ${readingList[1].author}`);
}
