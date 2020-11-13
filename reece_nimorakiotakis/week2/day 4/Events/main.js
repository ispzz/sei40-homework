// // const sayHello = function(){
// //   console.log('Hello World!')
// // }
// //
// // // sayHello();
// //
// // //write a function that will run ANOTHER funciton for us,
// // // but nicely- we need to tell it what function we want it to run by passing that function in to runNicely
// // const runNicely = function( functionToRunNicely){
// //
// // console.log('Hello I am about to run your function for you, I hope this is to your liking!');
// //
// //
// // functionToRunNicely();
// //
// // console.log('it was a real pleasure to run your function- have a wonderful day.');
// // }
// // runNicely(sayHello);
// //
// // runNicely(function(){
// //   console.log('its ya boy!')
// // });
// //
// // runNicely(Math.random)
// // const heading = document.querySelector('h1');
// // console.log('heading:', heading);
// //
// // heading.addEventListener('click', console.log('you clicked me!'))
//
//

//
//
// const cat = document.querySelector('#mainImage');
// bill.style.opacity = 1.0;
// bill.style.position = 'relative';
// bill.style.left = '0px';
//
// const growID = setInterval( function(){
//
//   let pos = parseInt( bill.style.left );
//   pos += 1;
//   cat.style.left = pos + 'px';
// }, 10);
//
//

const img= document.querySelector('#mainImage');
const img2= document.querySelector('#dance1');
const img3= document.querySelector('#dance2');
const img5= document.querySelector('#dance3');
const img6= document.querySelector('#dance4');
const img4= document.querySelector('#backGround');
//querySelectors for images on HTML (need to group images)

img.style.left = 0;
var newleft = 0
const maxWidth = window.innerWidth -296; //296 is the length of the cat
var newRight =maxWidth;
var animateright;


const  catWalk = function(){

    newleft +=  20;
    img.style.left = newleft + 'px';
    if(parseInt(img.style.left) >= maxWidth)
    {
        img.style.transform = "scaleX(-1)";
        animateright = setInterval(walkBack,100);
        clearInterval(animate);
    }
};


const walkBack = function() {
    newleft = newleft-20;
    img.style.left = newleft + 'px';
      if(parseInt(img.style.left) === 0){
        img.style.transform = "scaleX(1)";
        animate = setInterval(catWalk,100);
        clearInterval(animateright);}
      }



var animate = setInterval(catWalk,100);


img.addEventListener('click', function() {
const clicked = false
//when cat is clicked

  if (img.src === "http://www.anniemation.com/clip_art/images/cat-walk.gif"){

    img.src="https://media.tenor.com/images/7b831251f5790dc9b5fcb013213cf9b9/tenor.gif"
    img2.style.opacity= 1
    img3.style.opacity= 1
    img4.style.opacity= 1
    img5.style.opacity= 1
    img6.style.opacity= 1
    clicked = true

}

  if (img.src ==="https://media.tenor.com/images/7b831251f5790dc9b5fcb013213cf9b9/tenor.gif"){
    img.src="http://www.anniemation.com/clip_art/images/cat-walk.gif"
    img2.style.opacity= 0
    img3.style.opacity= 0
    img4.style.opacity= 0
    img5.style.opacity= 0
    img6.style.opacity= 0
}
});
