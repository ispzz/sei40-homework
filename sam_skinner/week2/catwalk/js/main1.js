console.log('Get your kitty groove on!');

const $catImg = $('img#catWalk');
const $catRave = $('img#catRave');

$catImg.css('left', '0px');
$catImg.css('top', '500px');
$catImg.css('transform', '0');
$catImg.css('display', 'inline');
$catRave.css('display', 'none');
$catRave.css('top', '500px');


let lapCount = 0;
let pos = parseInt($catImg.css('left'));
let directionMod = 1;
let catRunCounter = 0;

const runCatRun = function() {
  let catAnimationTwo = setInterval(function() {
    pos += 10;
    $catImg.css('left', pos + 'px');
  }, 5)
}



const catMiddle = function() {
  if(lapCount === 1) {
    $catImg.css('display', 'none');
    $catRave.css('display', 'block');
    $catRave.css('left', pos - 250 + 'px');
    setTimeout(function() {
      $catRave.css('display', 'none');
      $catImg.css('display', 'inline');
      lapCount--;
      return catAnimation = setInterval(catWalk, 50);
    }, 1000);
  } else {
    runCatRun();
  }
}

const catWalk = function() {
  pos = pos + (10 * directionMod);
  $catImg.css('left', pos + 'px');
  // if(pos > (innerWidth - 240) / 2 && pos < (innerWidth - 240) / 2 && lapCount !== 0) {
  if(pos === (innerWidth - 240) / 2 && lapCount !== 0) {
    clearInterval(catAnimation);
    // lapCount--;
    catMiddle();
  } else if(innerWidth - 250 < pos) {
    directionMod = -1;
    $catImg.css('transform', 'scaleX(-1)');
    lapCount++;
  } else if (pos < 10) {
    directionMod = 1;
    $catImg.css('transform', 'scaleX(1)');
    lapCount = 2;
  }
}

let catAnimation = setInterval(catWalk, 50);
