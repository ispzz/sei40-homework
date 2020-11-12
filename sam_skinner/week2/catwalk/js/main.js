console.log('Get your cat groove on!');

const catImg = document.querySelector('img#catWalk');
const catRave = document.querySelector('img#catRave');
catImg.style.left = '0px';
catImg.style.top = '500px';
catImg.style.transform = '0';
catImg.style.display = 'inline';
catRave.style.display = 'none';
catRave.style.top = '500px';


let lapCount = 0;
let pos = parseInt(catImg.style.left);
let secondCount = 0;


const runCatRun = function() {
  setInterval(function() {
    //cat runs to the right edge
    if((innerWidth - 250 > parseInt(catImg.style.left)) && (lapCount % 2 === 0)) {
    pos += 10;
    catImg.style.left = pos + 'px';
  } else if (parseInt(catImg.style.left) > 700 && secondCount === 0) {
      // debugger;
      //cat turns to run up the right side
      catImg.style.transform = 'rotate(270deg)';
      secondCount++;
    } else {
      //cat runs to the top edge
      let catTop = parseInt(catImg.style.top);
      catTop -= 10;
      catImg.style.top = catTop + 'px';
    }
  }, 20);
}


//decide if cat should party or run
const catMiddle = function() {
  //cat parties
  if(lapCount % 2 !== 0) {
    catImg.style.display = 'none';
    catRave.style.display = 'block';
    catRave.style.left = pos - 250 + 'px';
    setTimeout(function() {
      catRave.style.display = 'none';
      catImg.style.display = 'inline';
    }, 1500);
    pos -= 10;
    catImg.style.left = pos + 'px';
    return;
    //cat runs
    } else {
    catImg.style.left = pos + 10 + 'px';
    runCatRun();
  }
}




const catWalk = function() {
  //check if cat in middle
  if(Math.abs(((innerWidth - 250) / 2) - parseInt(catImg.style.left)) <= 10 && lapCount !== 0) {
    catMiddle();
    //move cat left
  } else if((innerWidth - 250 > parseInt(catImg.style.left)) && (lapCount % 2 === 0)) {
  pos += 10;
  catImg.style.left = pos + 'px';
    //move cat right
  } else if((innerWidth - 250 > parseInt(catImg.style.left)) && (lapCount % 2 !== 0) && parseInt(catImg.style.left) > 10) {
    pos -= 10;
    catImg.style.left = pos + 'px';
    //flip cat
  } else if(parseInt(catImg.style.left) > 700) {
    // console.log('am i here');
    catImg.style.transform = 'scaleX(-1)';
    lapCount++;
    pos -= 1
    catImg.style.left = pos + 'px';
  } else if(parseInt(catImg.style.left) < 10) {
    catImg.style.transform = 'scaleX(1)';
    lapCount++;
    catImg.style.left = '0px';
  }
}

setInterval(catWalk, 50);
