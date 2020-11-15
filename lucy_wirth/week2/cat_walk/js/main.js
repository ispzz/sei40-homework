// const catWalks = document.querySelector("img");
//
// catWalks.style.paddingLeft = "0px";
//
// function catWalk( ) {
//
//   let oldLeft = parseInt(catWalks.style.paddingLeft);
//   let newRight = oldLeft + 10;
// };
// catWalks.style.paddingLeft = newRight + 'px';
// // return; // prevents any further movement
// //     }
// //     direction *= -1; // reverses current direction
// //     end = Math.abs(maxDistToTravel - end);
//
// //   }
// //   pos += direction;
//
//
// //   elem.style.top = pos + "px";
// //   elem.style.left = pos + "px";
// //  }
// // }
// // catWalks.style.paddingRight = "-1px";
// //
// // function catWalk( ) {
// //   let oldRight = parseInt(catWalks.style.paddingRight);
// //   let newLeft = oldRight + 10;
// //   catWalks.style.paddingLeft = newLeft + 'px';
// // };
//
//
// window.setInterval(catWalk, 50);
var movePixels = 10;
            var delayMs = 50;
            var catTimer = null;
            function catWalk() {
              var img = document.getElementsByTagName('img')[0];
              var currentLeft = parseInt(img.style.left);
              img.style.left = (currentLeft + movePixels) + 'px';
              if (currentLeft > (window.innerWidth-img.width)) {
                img.style.left = '0px';
              }
            }
            function startCatWalk() {
              catTimer = window.setInterval(catWalk, delayMs);
            }
