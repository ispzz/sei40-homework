
console.log('main.js loaded');

$(document).ready( function(){

  // $.ajax({
  //   url: 'http://numbersapi.com/random/trivia?json',
  //   dataType: 'json'
  // })

$.getJSON( 'http://numbersapi.com/random/trivia?json' )
  .done( function( response ){
    //when the response is fully recieved jQuery runs this .done callback funciton for us, and it provides the response data as the first argument to this callback function
    console.log( 'response:', response );
  }) //.done
  .fail( function( err ){
    console.log( err.status, err.statusText );
  });
  //$.ajax( OBJ ).done( FN );
   // .always( function() );
}); //document ready
