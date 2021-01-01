const sayHello = function(){
  console.log('Hello!');
};

setTimeout( function(){
  console.log('Anonymous hello!');
}, 3000 )

const runFiveTimes = function( functionToRun ){

  for( let i = 0; i < 5; i++ ){
    functionToRun();
}

}; //runFiveTimes()

const arr = ['groucho', 'harpo', 'chico'];

// arr.each do |item|
//   puts item
// end


// Js version : arr is the first arg to each

const each = function( array, fnToUse ){
  // 1. loop over array
  for (var i = 0; i < array.length; i++) {
    const currentElem = array[i];

    fnToUse( currentElem );
  }
  //2. inside loop, give each element to fnToUse

}; //each ()

each( arr, function( item ){
  console.log( 'THE ITE3M IS:', item );
});
