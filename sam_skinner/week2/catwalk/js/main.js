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
let secondCount = 0;
let middleActive = 0;


const runCatRun = function() {
  setInterval(function() {
    //cat runs to the right edge
    if((innerWidth - 250 > parseInt($catImg.css('left'))) && (lapCount % 2 === 0)) {
    pos += 10;
    $catImg.css('left', pos + 'px');
  } else if (parseInt($catImg.css('left')) > 700 && secondCount === 0) {
      // debugger;
      //cat turns to run up the right side
      $catImg.css('transform', 'rotate(270deg)');
      secondCount++;
    } else {
      //cat runs to the top edge
      let catTop = parseInt($catImg.css('top'));
      catTop -= 10;
      $catImg.css('top', catTop + 'px');
    }
  }, 20);
}


//decide if cat should party or run
const catMiddle = function() {
  //cat parties
  if(lapCount % 2 !== 0) {
    clearInterval(catInterval);
    $catImg.css('display', 'none');
    $catRave.css('display', 'block');
    $catRave.css('left', pos - 250 + 'px');
    // debugger;
    setTimeout(function() {
      pos -= 10;
      $catRave.css('display', 'none');
      $catImg.css('display', 'inline');
      $catImg.css('left', pos + 'px');
      catAnimation();
    }, 1000);

    // pos -= 10;
    // $catImg.css('left', pos + 'px');
    // return;
    //cat runs
    } else {
    $catImg.css('left', pos + 10 + 'px');
    runCatRun();
  }
}



const catWalk = function() {
  //check if cat in middle
  if(Math.abs(((innerWidth - 250) / 2) - parseInt($catImg.css('left'))) <= 10 && lapCount !== 0) {
    catMiddle();
    //move cat right
  } else if((innerWidth - 250 > parseInt($catImg.css('left'))) && (lapCount % 2 === 0)) {
    pos += 10;
    $catImg.css('left', pos + 'px');
    //move cat left
  } else if(parseInt($catImg.css('left')) > 10 && (lapCount % 2 !== 0)) {
    pos -= 10;
    $catImg.css('left', pos + 'px');
    //flip cat
  } else if(parseInt($catImg.css('left')) > 700) {
    $catImg.css('transform', 'scaleX(-1)');
    lapCount++;
    pos -= 1
    $catImg.css('left', pos + 'px');
  } else if(parseInt($catImg.css('left')) < 10) {
    $catImg.css('transform', 'scale(1)');
    lapCount++;
    $catImg.css('left', '0px');
  }
}
const catInterval = setInterval(catWalk, 50);
const catAnimation = function() {
  catInterval;
}
catAnimation();
