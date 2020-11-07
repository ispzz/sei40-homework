/*
  --------------------
  MTA
  --------------------
*/

// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.

// Activity
// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:

// ===========================
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ===========================

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).

// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
console.log(`__________________________________________________`)
console.log(`\n         WELCOME TO MTA Trip Planner`)
console.log(`%c     🚂 We choo...choose to move you 😃        `, `color: grey;`)
console.log(`__________________________________________________`)
console.log(`%c\nMenu:\n
  - For help getting to your destination:
    tripPlanner.planTrip(
                          boardingLine,
                          origin,
                          disembarkingLine,
                          destination);\n\n
  - Check the planner is in action: runTests();`, `color: grey;`)
  console.log(`%c\n__________________________________________________`, `color: grey;`)

const tripPlanner = {
  exchangeStation: 'Union Square',
  lines: {
    'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }, // lines

  calculateNumberOfStations: function(firstLegOfTrip, lastLegOfTrip){

    if(lastLegOfTrip === undefined){
      return firstLegOfTrip.length;
    }

    return firstLegOfTrip.length + lastLegOfTrip.length;
  }, // calculateNumberStations()

  displayPlan: function(boardingLine, disembarkingLine, firstLegOfTrip, lastLegOfTrip){

    const numberOfStations = this.calculateNumberOfStations(firstLegOfTrip, lastLegOfTrip);

    console.log(`You must travel through the following stops on the ${boardingLine} line: ${firstLegOfTrip.join(`, `)}.`);

    if (boardingLine !== disembarkingLine){
      console.log(`Change at ${this.exchangeStation}`);
      console.log(`Your journey continues on ${disembarkingLine} through the following stops: ${lastLegOfTrip.join(`, `)}`);
      console.log(`${numberOfStations} stops in total`);
    }

    return true;
  }, // displayPlan()

  retrieveStations: function(line, boardingStation, disembarkingStation){
    let stations = this.lines[line];
    const indexOfBoardingStation = stations.indexOf(boardingStation);
    const indexOfDisembarkingStation = stations.indexOf(disembarkingStation);

    if(indexOfBoardingStation > indexOfDisembarkingStation){
      stations = stations.slice(indexOfDisembarkingStation, indexOfBoardingStation);
      stations = stations.reverse();
    } else {
      stations = stations.slice(indexOfBoardingStation + 1, indexOfDisembarkingStation + 1);
    }

    return stations;
  }, // retrieveStations()

  planTrip: function(boardingLine, boardingStation, disembarkingLine, disembarkingStation){
    let firstLegOfTrip;
    let lastLegOfTrip;

    if((boardingStation === this.exchangeStation) && (disembarkingStation === this.exchangeStation)
      || ((boardingLine === disembarkingLine) && (boardingStation === disembarkingStation))){ // Check if they are already at their destination
      console.log(`You're already at ${disembarkingStation}.`);
      return false;
    } else if(boardingLine === disembarkingLine){ // Single line trip
      firstLegOfTrip = this.retrieveStations(boardingLine, boardingStation, disembarkingStation);
    } else { // multi-line trip
      firstLegOfTrip = this.retrieveStations(boardingLine, boardingStation, this.exchangeStation);
      lastLegOfTrip = this.retrieveStations(disembarkingLine, this.exchangeStation, disembarkingStation);
    }

    this.displayPlan(boardingLine, disembarkingLine, firstLegOfTrip, lastLegOfTrip);

    return true;
  }, // planTrip()
}; // tripPlanner()

// TESTING
const runTests = function(){
  console.log(`%c\nTESTING\n`, `color: hotpink`)

  // Single lines going forward (full route)
  console.log(`%c____________________________________`, `color: hotpink`);
  console.log(`%c\nSingle line, forward (full route):`, `color: hotpink`);

  console.log(`%cplanTrip('N', 'Times Square', 'N', '8th')`, `color: pink`);
  tripPlanner.planTrip('N', 'Times Square', 'N', '8th');

  console.log(`%c\nplanTrip('L', '8th', 'L', '1st')`, `color: pink`);
  tripPlanner.planTrip('L', '8th', 'L', '1st');

  console.log(`%c\nplanTrip('6', 'Grand Central', '6', 'Astor Place')`, `color: pink`);
  tripPlanner.planTrip('6', 'Grand Central', '6', 'Astor Place');

  // Single line going forward (partial route)
  console.log(`%c____________________________________`, `color: hotpink`);
  console.log(`%c\nSingle line, forward (partial route):`, `color: hotpink`);
  console.log(`%cplanTrip('N', '34th', 'N', 'Union Square')`, `color: pink`);

  tripPlanner.planTrip('N', '34th', 'N', 'Union Square');

  // Single line going reverse (full route)
  console.log(`%c____________________________________`, `color: hotpink`);
  console.log(`%c\nSingle line, reverse (full route):`, `color: hotpink`);
  console.log(`%cplanTrip('N', '8th', 'N', 'Times Square')`, `color: pink`);

  tripPlanner.planTrip('N', '8th', 'N', 'Times Square');

  // Single line going reverse (partial route)
  console.log(`%c____________________________________`, `color: hotpink`);
  console.log(`%c\nSingle line, reverse (partial route):`, `color: hotpink`);
  console.log(`%cplanTrip('N', '34th', 'N', '23rd')`, `color: pink`);

  tripPlanner.planTrip('N', '34th', 'N', '23rd');

  // Multiple lines going forward (full route)
  console.log(`%c____________________________________`, `color: hotpink`);
  console.log(`%c\nMultiple lines going forward (full route):`, `color: hotpink`);

  console.log(`%cplanTrip('N', 'Times Square', 'L', '1st')`, `color: pink`);
  tripPlanner.planTrip('N', 'Times Square', 'L', '1st');

  console.log(`%c\nplanTrip('N', 'Times Square', '6', 'Astor Place')`, `color: pink`);
  tripPlanner.planTrip('N', 'Times Square', '6', 'Astor Place');

  console.log(`%c\nplanTrip('N', 'Times Square', '6', 'Astor Place')`, `color: pink`);
  tripPlanner.planTrip('6', 'Grand Central', 'L', '1st');

  // Multiple lines going reverse (full route)
  console.log(`%c____________________________________`, `color: hotpink`);
  console.log(`%c\nMultiple lines going reverse (full route):`, `color: hotpink`);

  console.log(`%cplanTrip('N', '8th', 'L', '8th')`, `color: pink`);
  tripPlanner.planTrip('N', '8th', 'L', '8th');


  // Already at destination station (Single line journey)
  console.log(`%c____________________________________`, `color: hotpink`);
  console.log(`%c\nAlready at destination (Single line journey):`, `color: hotpink`);
  console.log(`%cplanTrip('6', 'Grand Central', '6', 'Grand Central')`, `color: pink`);

  tripPlanner.planTrip('6', 'Grand Central', '6', 'Grand Central');

  // Already at destination station: Union Square (Multi-line journey)
  console.log(`%c____________________________________`, `color: hotpink`);
  console.log(`%c\nAlready at destination - Union Square (Multi-line journey):`, `color: hotpink`);
  console.log(`%cplanTrip('N', 'Union Square', 'L', 'Union Square')`, `color: pink`);

  tripPlanner.planTrip('N', 'Union Square', 'L', 'Union Square');
};
