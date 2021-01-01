
$(document).ready(function(){

  console.log('main.js loaded');

  setInterval( function(){

  })

$.getJSON('/uptime')
.done( function( data ){
  console.log( '/uptime response:', data );

  $('#uptime').html( data.output )

})
.fail( console.warn );

}, 1000);



});
