console.log('AmoamokofeCat!');

var AmoamokofeCat = document.getElementById('AmoamokofeCat')[0];
AmoamokofeCat.style.left = 0;
AmoamokofeCat.style.right = 0;
var newleft =0;
var maxWidth = window.innerWidth -296; //296 is the length od the cat
var newRight =0;
var animateright;

var  AmoamokofeCatWalk = function(){

  newleft +=  10;
  newright += 10
  AmoamokofeCat.style.left = newleft + 'px';
  AmoamokofeCat.style.right=newright + 'px';

  if(parseInt(AmoamokofeCat.style.left) >= maxWidth)
  {
     // clearInterval(animate);
      AmoamokofeCat.style.webkitTransform ="scaleX(-1)";
      AmoamokofeCat.style.msTransform="scaleX(-1)";
      AmoamokofeCat.style.transform = "scaleX(-1)";
      animateright = setInterval(walkBack,100);
      clearInterval(animate);
  }

};

if(parseInt(AmoamokofeCat.style.right) >= maxWidth)
{
   // clearInterval(animate);
    AmoamokofeCat.style.webkitTransform ="scaleX(-1)";
    AmoamokofeCat.style.msTransform="scaleX(-1)";
    AmoamokofeCat.style.transform = "scaleX(-1)";
    animateleft = setInterval(walkForward,100);
    clearInterval(animate);
}

};




var walkBack = function() {
console.log('walking back')
  newleft = newleft-10;
  AmoamokofeCat.style.left = newleft + 'px';
    if(parseInt(AmoamokofeCat.style.left) === 0){
      clearInterval(animateright);
      //clearInterval(animate);
    }
    var walkforward = function() {
   console.log('forward')
      newright = newright 10;
      AmoamokofeCat.style.right = newright + 'px';
        if(parseInt(img.style.right) === 0){
          clearInterval(animateleft);
          //clearInterval(animate);
        }


  }


}
var animate = setInterval(AmoamokofeCat,100);
var animate = setInterval(walkBack,30);
var animat = setInterval(walkForward, 30);
// var animateright = setInterval(walkBack,30);



// window.screen.availWidth
