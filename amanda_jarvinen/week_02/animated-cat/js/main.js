console.log('Walking cat');

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;


// CAT
const cat = document.querySelector('#walkingCat');
const catWidth = cat.offsetWidth;

cat.style.position = 'relative';
cat.style.top = viewportHeight/2 - catWidth/2 + 'px';
cat.style.left = '0';
cat.style.transform = 'scaleX(1)';
cat.style.opacity = '1';

// EYES
const eyes = document.querySelector('#eyes');
eyes.style.width = catWidth + 'px';
const eyesWidth = eyes.offsetWidth;
const eyesHeight = eyes.offsetHeight;

eyes.style.opacity = '0';

eyes.style.position = 'relative';
eyes.style.center = viewportWidth/2 - eyesWidth/2 + 'px';
eyes.style.top = viewportHeight/2 - eyesHeight/2 + 'px';

// DANCING
const dance = document.querySelector('#dancing');
dance.style.opacity = '0';
dance.style.position = 'absolute';
dance.style.bottom = '64px';
dance.style.right = '64px';
dance.style.width = '120px';
dance.style.borderRadius = '50%';

// GROUND
const ground = document.querySelector('#ground');
ground.style.opacity = '1';


let laps = 0;

// BACKGROUND
const container = document.querySelector('main');
container.style.backgroundColor = 'white';
let offset = 0;

let x = 1;
let set;

function flickerTimer(){
  set = 1;
  if(x === 0 && set === 1) {
      container.style.background = 'black';
      eyes.style.opacity = '1';
      dance.style.opacity = '0.5';
      ground.style.opacity = '0';
      walk = false;
      x = 1;
      set = 0;
  }
  if(x === 1 && set === 1) {
      container.style.background = 'white';
      eyes.style.opacity = '0';
      dance.style.opacity = '0';
      ground.style.opacity = '1';
      x = 0;
      set = 0;
  }
}

let walk = true;
const catWalk = function(){

  let catPosition = parseInt(cat.style.left);

  if (walk){
    if (laps % 2 === 0){
      catPosition += 1;
    } else {
      catPosition -= 1;
    }
    cat.style.left = catPosition + 'px';
  }

  // Turn around cat
  if (catPosition === (viewportWidth - catWidth)){
    cat.style.transform = 'scaleX(-1)';
    laps++;
  }

  // Wrong way go back cat
  if (catPosition === 0){
    cat.style.transform = 'scaleX(1)';
    laps++;
  }

  // Cat in the middle
  if (catPosition === ((viewportWidth - catWidth)/2)){

    timerInterval = setInterval(flickerTimer, 30);


    setTimeout(function(){
      clearInterval(timerInterval);

      container.style.backgroundColor = 'black';
      ground.style.opacity = '0';
      cat.style.opacity = '0';
      eyes.style.opacity = '1';
      dance.style.opacity = '0.5';
    }, 400);

    setTimeout(function(){
      timerInterval = setInterval(flickerTimer, 40);
    }, 4000);

    setTimeout(function(){
      clearInterval(timerInterval);
      container.style.backgroundColor = 'white';
      eyes.style.opacity = '0';
      dance.style.opacity = '0';
      ground.style.opacity = '1';
      cat.style.opacity = '1';
      walk = true;
    }, 4500);
  }
}; // catWalk()


const scene = function(){
  const catPositionID = setInterval(catWalk, 12);
};

scene();
