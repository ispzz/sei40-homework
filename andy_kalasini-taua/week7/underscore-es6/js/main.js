
console.log('Hello underscore!');
console.log( _ );

const bros = [ 'Groucho', 'Harpo', 'Chico' ];

// _.each( bros, function(){} ); //Style 1:

  _(bros).each( function ( item, i ){
   console.log( i, item );
  }); //Style 2: more like Ruby

console.log('===========================');

const groucho = {
  name: 'Groucho',
  instrument: 'Guitar',
  vice: 'cigars'
};

_(groucho).each( function( val, key ){
  console.log( key, val );
});

console.log('Vanilla forEach() =========================== ');

bros.forEach( function( item ){
  console.log( item );
});

console.log('ES6 Arrow Functions! ======================== ');


//Simplest version: no parentheses around single argument, no curly brackets aroun single expression in body of fn; implicit return of single expression value
bros.forEach( item => console.log(item) );


// Longer version: parentheses around 1 or more arguments, curly brackeets around multiple lines of code in function body; no implicit return

bros.forEach( (item , i) => {
 console.log( 'position:', i);
 console.log( 'item:', item );
 // return xyz;
});

// this could also be written as above ^^

//Creating named funcitons looks the same:
// const myFunc = function(){ };
// const myFunc = function() => { };


console.log(' map() ===========================');

//map() transforms an input array of values into an output of values, according to what your callback funciton returns

const nums = [ 1, 2, 3, 4, 5 ];

const output = _(nums).map( function( item ){
  console.log('Current item', item)
  return item * 2;
  console.log('Result:', result);
  return result;
});

console.log('output of map():', output); // [2, 4, 6, 8, 10]

const outputArrow = _(nums).map( item => item * 2 );

console.log('Arrow function map output:', outputArrow);

const es6Map = nums.map( item => item * 2 );
console.log('es6 map output:', es6Map );

console.log(' reduce() =========================== ');


// reduce() takes an input array, and 'boils it down' to a singly value, by applying the code you give int in your callback function

const sum = _(nums).reduce( function( runningTotal, item ){
  console.log('__________');
  console.log('runningTotal:', runningTotal);
  console.log('item:', item);
  const newTotal = runningTotal + item;
  console.log('newTotal:', newTotal );
  return newTotal;
});

console.log('reduced sum:', sum);


const joined = _(bros).reduce( function( str, bro ){
  return str + ', ' + bro;
});

console.log('reduced bros: ', joined );

const arrowReduce = _(nums).reduce( (acc, i) => acc + i );
console.log('arrowReduce', arrowReduce);

const es6Reduce = _(nums).reduce( (acc, item) => acc + item, 10 );
console.log('es6Reduce', es6Reduce);

console.log('ActiveRecord-style Underscore methods');

const brothers = [
  { name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 44, nums: [1,2,3,5] },
  { name: 'Harpo',   instrument: 'harp', vice: 'mustism', age: 42, nums: [1,2,3] },
  { name: 'Chico',   instrument: 'guitar', vice: 'infidelity', age: 39 , nums: [1,2,3,5] }
];

  const harpist = _(brothers).findWhere( {instrument: 'guitar', age: 39} );
  console.log('harpist:', harpist);

  const es6Harpist = brothers.find( item => item.instrument === 'harp' );
  console.log('es6Harpist', es6Harpist);

  const allGuitarists = _(brothers).where( { instrument: 'guitar' } ).map( bro => bro.name );
  console.log('allGuitarists', allGuitarists );


const es6Guitarists = brothers.filter( item => item.instrument === 'guitar' );
console.log('es6Guitarists', es6Guitarists);
