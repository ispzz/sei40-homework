console.log('MTA lab');


// # MTA Lab
//
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
//
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * There are 3 subway lines:

const mta = {

  nLine: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  lLine: ['8th', '6th', 'Union Square', '3rd', '1st'],
  sixLine: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

};

console.log(mta.nLine[4]); //whatever number is picked it should say
// 1. "You must travel through the following stops on the:
// nLine: ['Times Square', '34th', '28th', '23rd', 'Union Square'],
// lLine: ['8th', '6th', 'Union Square'],
// sixLine: ['Grand Central', '33rd', '28th', '23rd', 'Union Square']

// 2."Change at Union Square."

// 3."Your journey continues through the following stops:
// nLine: 23rd, 28th, 34th."
// lLine: 6th, 8th
// sixLine: 23rd, 28th, 33rd, Grand Central

// 4. "stops in total."
// nLine: 8 stops
// lLine: 5 stops
// sixLine: 9 stops

console.log(mta.lLine[2])
console.log(mta.sixLine[1])


// const singleTrip = function( lineName, start, end){
//
// };




//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points.
//   (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
//     so you might need to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()```
// later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Depending on what kind of data structures you use to represent the lines and stations, you  might have to make sure the stops that are the same
// for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
