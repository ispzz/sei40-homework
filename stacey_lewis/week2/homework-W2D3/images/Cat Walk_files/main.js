console.log('hello cat!');

const cat = document.querySelector('.catID');
cat.style.left = '200px';
cat.style.width = '50px';
cat.style.top = '50%';
// cat.transform.rotateY = 'auto';

// cat.style.right= '0px';

const catWalk = setInterval(function() {
  let pos = parseInt(cat.style.left);
  pos += 1;
  cat.style.left = pos + 'px';
  if (parseInt(cat.style.left) === 2000) {
    cat.style.left = 0 +'px';
  }; // end if
  if (parseInt(cat.style.left) === 400) {
    cat.style.transform = "rotateY(180deg)";
  }; //end if
}, 10); //end catWalk

const catGrow = setInterval(function() {
  let pos = parseInt(cat.style.width);
  pos += 1;
  cat.style.width = pos + 'px';
  if (parseInt(cat.style.width) === 400) {
    cat.style.with = 0 +'px';
  } // end if
}, 100); //end catWalk

console.log(cat);

//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.
