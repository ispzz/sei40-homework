const cloudLoop = function(){
  $('.cloud').css({left: 0});
  $('.cloud').animate({left: '+=2000px',
}, {
  duration: 10000,
  easing: 'linear',
  complete: cloudLoop
  });
}
cloudLoop();

const catLoopR = function(){
  $('#catWalker').css({left: 0});
  $('#catWalker').animate({left: '+=1400px',
}, {
  duration: 2000,
  easing: 'linear',
  complete: catLoopR
}
)}

// const catLoopL = function(){
//   $('#catWalker').css({left: '1400px'});
//   $('#catWalker').css({scale: '-1,1'});
//   $('#catWalker').animate({left: '-=1400px',
// }, {
//   duration: 2000,
//   easing: 'linear',
//   complete: catLoopR
// })

catLoopR();
