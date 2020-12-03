

const catImage = document.querySelector('#meow');
const body = document.querySelector('body');
catImage.style.position= 'relative';
catImage.style.left= '0px';
const catLocation= catImage.innerWidth;
console.log(catLocation);
let catLeft= null;
let catRight=null;
catLeft= function(){
let pos = parseInt(catImage.style.left);
pos += 10;
catImage.style.left = pos + 'px';
console.log(catImage.style.left);
};

catRight= function(){
let pos = parseInt(catImage.style.left);
pos -= 10;
catImage.style.left = pos + 'px';
console.log(catImage.style.left);
};
// const catWalkLeft = setInterval(catLeft, 50);
//  const catWalkRight = setInterval(catRight, 50);

 // $('#meow').animate({
 //   left:'1400px', }, 5000)  //.transform('rotateX(180deg)')
 //
 //   $('meow').animate({right:0},50);
// console.log(parseInt(catImage.style.left));
//

const catWalk = function(){
  if((parseInt(catImage.style.left)) > window.innerWidth){
   clearInterval(catLeft);
   catImage.style.transform= 'rotateY(180deg)' ;
   const catWalkRight = setInterval(catRight, 50);
   console.log(`left`);
 }else if((parseInt(catImage.style.left)) === 0){
     clearInterval(catRight);
     catImage.style.transform= 'rotateY(180deg)' ;
     console.log(`right`)
     const catWalkLeft = setInterval(catLeft, 50);
   }
 };


const catWalking = setInterval(catWalk, 50);
// console.log(catImage.style.left);
// const where = window.innerWidth
// console.log(where);
// const catSize = catImage.width
// console.log(catSize);
//
// if(where === window.innerWidth){
//   let pos = parseInt(catImage.style.left);
//   pos -= 10;
//   catImage.style.left = pos + 'px';
//   console.log(catImage.style.left);
// }else{const catWalkLeft = function(){
//   let pos = parseInt(catImage.style.left);
//   pos += 10;
//   catImage.style.left = pos + 'px';
//   console.log(catImage.style.left);
// }
// };
