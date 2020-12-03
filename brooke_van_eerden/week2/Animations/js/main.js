


const catImage = document.querySelector('#meow');
const body = document.querySelector('body');
catImage.style.position= 'relative';
catImage.style.left= '0px';
const catLocation= document.getElementById('meow');
// const where = catLocation.offsetLeft;
// console.log(`where:`, where)
console.log(catImage.style.width);
console.log(catImage.style.left);
const where = window.innerWidth
const catSize = catImage.width

const catWalkLeft = function(){
  let pos = parseInt(catImage.style.left);
  pos += 10;
  catImage.style.left = pos + 'px';
  console.log(catImage.style.left);


};

  // if(catImage.style.left === window.innerWidth){
  //   catImage.style.transform= 'rotateY(180deg)' ;
  //   // let posB = parseInt(catImage.style.right);
  // // setTimeout(function(){
  //   pos -= 50;
  //   catImage.style.left = pos + 'px';

    // body.style.backgroundImage = 'url(https://i.imgur.com/NdE49Af.gif)';
    // const catWalkRight = function(){
    // let pos = 630;
    // let posB= parseInt(catImage.style.right);
    //   posB+= 10;
    //   catImage.style.right = posB + 'px';
    //   console.log(catImage.style.right);



    // }
  // }

    // if(catImage.style.left === '1630px'){
    // const catWalkRight = function(){
    //   let posB = parseInt(catImage.style.right);
    //   posB += 20;
    //   catImage.style.left = posB + 'px';
    //   console.log(catImage.style.right);
    // }
    //

// let catWalk = setInterval(catWalkLeft, 50);
let catWalk = setInterval(catWalkRight, 50);

// },100);
  // debugger;

  // setInterval()


// clearinterval(1);
//   if(catImage.style.left==== 1190px){
//     clearinterval(leftID);
//     const rightID = setInterval(function()){
//     let pos= parseInt(catImage.style.right);
//       pos+= 10;
//       catImage.style.right = pos + 'px';
//     },
  // },






//
// console.log(`where:`, where)
// const rightID = setInterval(function(){
//   let pos = parseInt(catImage.style.left);
//   pos += -10;
//   catImage.style.left = pos + 'px';
// console.log('rightID', rightID);
//
// },1000);
