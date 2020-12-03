console.log("Hello Events JS");
//review of functions:
//functions in JS are first-class: they live in varibles!

const sayHello = function(){
  console.log('hello world');
};
sayHello();

//Write a function that will run another function for us but nicely- we need to tell it which function we want it to run, by passing that function in ot runNicely as an argument
const runNicely= function(functionToRunNicely){

  console.log('Hello I am about to run your function for you! I hope that is to your liking!');
  functionToRunNicely();

  console.log('it was a real pleasure to run your function. have a wonderful day');
};//run runNicely
runNicely(sayHello);


const heading = document.querySelector('h1');
console.log('heading:', heading);

////below is an anonoymous function
heading.addEventListener('click', function(eventData){
  console.log('the h1 was clicked');
  console.log(eventData);
});

///setTimeout, run function after 3sec(3000miliseconds)
// setTimeout(sayHello, 3000);
///setInterval, run function EVERY 3sec;
// setInterval(sayHello,3000);

// setInterval(function(){
//   ///this is the code that runs once per second
//   console.log('hi again!');
//   console.log(new Date());
//   console.log(Math.random());
// },1000);
//
const catImage = document.querySelector('#mainImage');
// catImage.style.opacity=1.0;
catImage.style.position= 'relative';
catImage.style.left= '0px';
const growID = setInterval(function(){
  // catImage.width += 10
  // catImage.style.opacity -= 0.01;
  // if(catImage.style.opacity<= 0 ){
    // clearInterval(growID);
  // }
  let pos = parseInt(catImage.style.left);
  pos += 10;
  catImage.style.left = pos + 'px';
},100);

console.log('growID', growID);
// clearInterval(growID)//will stop imediatly if here, use this in console
