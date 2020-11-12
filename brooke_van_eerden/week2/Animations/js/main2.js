

const catImage = document.querySelector('#meow');
const body = document.querySelector('body');
catImage.style.position= 'relative';
catImage.style.left= '0px';
const catLocation= catImage.innerWidth;
console.log(catLocation);


console.log(catImage.style.left);
const where = window.innerWidth
console.log(where);
const catSize = catImage.width
console.log(catSize);

if(catImage.style.left === window.innerWidth){
  let pos = parseInt(catImage.style.left);
  pos -= 10;
  catImage.style.left = pos + 'px';
  console.log(catImage.style.left);
}else{const catWalkLeft = function(){
  let pos = parseInt(catImage.style.left);
  pos += 10;
  catImage.style.left = pos + 'px';
  console.log(catImage.style.left);
}
};
