console.log('hello cat!');

//set start position cat1
const cat1 = document.querySelector('#catID');
cat1.style.right = '10px';
cat1.style.width = '100px';
cat1.style.top = '100px';
cat1.style.transform = "rotateY(180deg)";

//set start position cat2
// const cat2 = document.querySelector('#catID2');
// cat2.style.left = '900px';
// cat2.style.width = '300px';
// cat2.style.top = '450px';

//set start position cat3
// const cat3 = document.querySelector('#catID3');

//get window width
const screen = window.innerWidth;
console.log('screen:',screen);


    setInterval(function() {
    // find screen width less the cat width
      let screenSize = screen-cat1.width;
      // if the cat is facing this way, and not at the end of the screen, then
      if ((cat1.style.transform === 'rotateY(180deg)') && (screenSize >= parseInt(cat1.style.right))) {

        let pos = parseInt(cat1.style.right);
        pos += 1;
        cat1.style.right = pos + 'px';
      } //end if

      if ((cat1.style.transform === 'rotateY(0deg)') && (screenSize >= parseInt(cat1.style.right))) {

        let pos = parseInt(cat1.style.right);
        pos -= 1;
        cat1.style.right = pos + 'px';
      } //end if

      if (screenSize === parseInt(cat1.style.right)) {
        cat1.style.transform = 'rotateY(0deg)';
      }

      if(parseInt(cat1.style.right) < 0) {
        cat1.style.transform = 'rotateY(180deg)';
      } //end if

      // if (offset % 2 === ) {

      // }


  }, 5); //end catWalk

let catPosition = cat1.style.offset.left;
console.log(catPosition);


//   //catJungleFunction
//   function catJungle() {
//    if(cat1.style.transform = 'rotateY(180deg)') {
//      catWalkLeft();
//    }
//    else {
//      catWalkRight();
//    }
//   };
//
//
// catJungle();

// } // end if



// if(timer >630) {
//   cat.style.transform = 'rotateY(0deg)';
//   cat2.style.transform = 'rotateY(180deg)';
//
//   let pos = parseInt(cat.style.right);
//   pos -= 1;
//   cat.style.right = pos + 'px';
//
//   let pos2 = parseInt(cat.style.top);
//   pos2 += 1;
//   cat.style.top = pos2 + 'px';
//
//   let posCat2 = parseInt(cat2.style.left);
//   posCat2 -= 1;
//   cat2.style.left = posCat2 + 'px';
// }
