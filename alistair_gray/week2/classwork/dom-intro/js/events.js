console.log('events!');

const sayHello = function(){
  console.log('Hello World');
}

// sayHello();

// const runNicely = function(functionToRunNicely){
//   console.log('Hello! I am about to run your function for you! I hope that is to your liking');
//
//   functionToRunNicely();
//
//   console.log('It was a real pleasure to run your function. Have a nice day');
// }
//
// runNicely(sayHello);
// 1. Query the DOM to get the element to which you want to add an event
// handler.
const heading = document.querySelector('h1');
console.log('heading :', heading)
// 2. Using the variable you saved the element into, run .addEventListener on it, passing it the event name and the function that should run when the event runs

heading.addEventListener('click', sayHello);
