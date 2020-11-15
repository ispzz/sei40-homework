console.log('Paintr')

/*
1.When the user moves the mouse around
2. draw a coloured circle at the mouse position.
  a) Get the mouse position for the latest move event.
  b Create a div and add it to the DOM at that position.

*/

let hue = 0; // we will increment this inside our mouse handler

// For keeping track of the last mouse position (to calc speed):
let prevMouseX = 0;

const drawBlob = function(x, y){

  // hue += 1;

  // console.log('mouse move', ev.clientX,  ev.clientY);

  // Create a new DIV with a specific class
  const $blob = $('<div class="blob">');

  const mouseXSpeed = Math.abs(x - prevMouseX);
  prevMouseX = x; // save the current position, for the next time

  const blobSize = 100;

  // const blobColour = `hsla(${hue}, 100%, 50%, 25%)`

  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;


  // Set some CSS properties of the blog
  $blob.css({
    width: blobSize + 'px',
    height: blobSize + 'px',
    backgroundColor: `rgb(${r}, ${g}, ${b}, .5)`,
    // backgroundColor: blobColour,
    top: y - blobSize/2 + 'px',
    left: x - blobSize/2 + 'px',
  });

  // Add the blob DIV to the page
  $('body').append($blob);

  // $blob.animate({
  //   top: window.innerHeight
  // }, 1000, function(){
  //   $(this).remove();
  // })

}; // end of drawBlob

$(document).ready( function(){

  // Respond to movemovement anywhere on the document by running a callback function; that function receives an event object as its argument when the browser runs it for us.
  $(document).on('mousemove', function(ev){
    if(ev.shiftKey){
      drawBlob(ev.clientX, ev.clientY);
    }
  }); // end of mousemove
}); // end of document handler.
