//functions are first class
//they live in variables
//
// const sayHello = function(){
//   console.log('Hi how are you?');
// };

//run the function after 1 second:
// setTimeout(sayHello, 3000);

//inline functions
// setTimeout(function(){
//   console.log('Hi how are you?');
// },3000);

// const runFiveTimes = function(functionToRun){
//   for(let i = 0; i < 5; i++){
//     funtionToRun();
//   };
// };

const arr = ['groucho','harpo','chico']

// each(arr, fn);

// const each = function(array, fnToUse){
//   for(let i = 0; i <= array.length-1; i++ ){
//     fnToUse(array[i], i);
//   };
// };

//each
// each(arr, function(item, index){
//   console.log(item,index);
// });

//same as
arr.forEach(console.log);
