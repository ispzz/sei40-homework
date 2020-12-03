const cat = document.querySelector('img');
let originalCat = cat.src;
let steps = 0;
let direction = 'forward';
let windowSize = window.innerWidth;

windowSize -= 296;
cat.style.left = '0px';

const catWalk = function(){
  if(direction === 'forward'){
    steps += 10;
  } else {
    steps -= 10;
  }

  // confirmCatPosition(steps, direction);

  if(steps >= windowSize){
    direction = 'backward';
    cat.style.transform = 'scaleX(-1)';
    steps = windowSize;
  } else if(steps <= 0){
    cat.style.transform = 'scaleX(1)';
    direction = 'forward';
    steps = 0;
  }
  cat.style.left = steps + 'px';
}

const confirmCatPosition = function(steps, direction){
  if((direction === 'forward' && steps >= windowSize/2) ||
      (direction === 'backward' && steps <= windowSize/2)){
    dancingCat();
  }
  return;
}

const dancingCat = function(){
  console.log('got here');
  const newCat = setInterval(showDancingCat, 50);
  setTimeout(clearInterval(newCat), 10000);
  cat.src = originalCat;
  return;
}

const showDancingCat = function(){
  console.log('got here');
  cat.src = 'https://acegif.com/wp-content/gifs/dancing-cat-33.gif';
}

setInterval(catWalk, 50);

// if(steps >= windowSize/2){
//   setTimeout(function () {
//     dancingCat();
//   }, 10000);
//
//   catGif.src = catSrc;
// }