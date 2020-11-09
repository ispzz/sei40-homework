
console.log(`Homework Week 1, day 5`);
console.log(`----------MTA Trip Player----------`);
//assumes that you have to choose from a drop down menu :D


const directions = {

  stopList1: [], //empty array to hold stops
  stopList2: [], //empty array to hold stops

  networkLines: {
    nLine:[
    'Times Square',
    '34th',
    '28th',
    '23rd',
    'Union Square',
    '8th'
    ], //end array nLine

    lLine: [
    '8th',
    '6th',
    'Union Square',
    '3rd',
    '1st'
    ], //end array lLine

    sixLine:[
    'Grand Central',
    '33rd',
    '28th',
    '23rd',
    'Union Square',
    'Astor Place'
    ], //end array nLine
  }, //end networkLines{}

  //function to check direction of second leg of journey
  checkEndLeg: function(endLine,endStation,endStationIndex,endUSIndex) {
    if(endUSIndex>endStationIndex) {
      for (let i = endUSIndex-1; i >= endStationIndex; i--) {
        this.stopList2.push(this.networkLines[endLine][i]);
      }; //end for
    } // end if
    else {
      for (let i = endUSIndex+1; i <= endStationIndex; i++) {
        this.stopList2.push(this.networkLines[endLine][i]);
      }; //end for
    } //end else
  },

  //function to check direction of first leg of journey
  checkStartLeg: function(startLine,startStation,startStationIndex,startUSIndex) {
    if(startStationIndex>startUSIndex) {

      for (let i = startStationIndex-1; i >= startUSIndex; i--) {
        this.stopList1.push(this.networkLines[startLine][i]);
      }; //end for
    } // end if
    else {
      for (let i = startStationIndex+1; i <= startUSIndex; i++) {
        this.stopList1.push(this.networkLines[startLine][i]);
      }; //end for
    } //end else
  },

  //function to output stop directions
  directionCalc: function (startLine,startStation,endLine,endStation) {

    //reset stopList
    this.stopList1= [];
    this.stopList2= [];

    //check if the starting position is Union Square - ensure they don't get on an unneccessary train.
    if (startStation === 'Union Square' || endStation === 'Union Square') {
      startLine = endLine;
    } // end if

    //set start and end location index.
    const startStationIndex = this.networkLines[startLine].indexOf(startStation);
    const startUSIndex = this.networkLines[startLine].indexOf("Union Square");
    const endStationIndex = this.networkLines[endLine].indexOf(endStation);
    const endUSIndex = this.networkLines[endLine].indexOf("Union Square");

    //directions communications. Communicate differently depending on whether they need to change trains and whether they start / end at Union Square

    //check if Union Square is the end point.
    if (endStation === 'Union Square') {
      //find direction based on 'start leg' (as we already know end)
      this.checkStartLeg(startLine,startStation,startStationIndex,startUSIndex);
      console.log(`Just take the one train on the ${startLine}. You must travel through  the following stops: ${this.stopList1.join(", ")}.`);
    } //end else if endStation === "Union Square"

    //check if Union Square is the starting point.
    else if (startStation === 'Union Square') {
      //find direction based on 'end leg' (as we already know start)
      this.checkEndLeg(endLine,endStation,endStationIndex,endUSIndex);
      console.log(`Just take the one train on the ${startLine}. You must travel through  the following stops: ${this.stopList2.join(", ")}.`);
    } //end else if startStation === "Union Square"

    else {
      this.checkStartLeg(startLine,startStation,startStationIndex,startUSIndex);
      this.checkEndLeg(endLine,endStation,endStationIndex,endUSIndex);
      // output stop change in text if the startLine is different from the end line.
      if (startLine !== endLine) {
        console.log(`You must travel through the following stops on the ${startLine}: ${this.stopList1.join(", ")}. \nChange at Union Square to the ${endLine}. \nYour journey continues through the following stops: ${this.stopList2.join(", ")}.`);
      } //end if

      // output no stop change if all one line.
      else {
        console.log(`You must travel through the following stops on the ${startLine}: ${this.stopList1.join(", ")}, ${this.stopList2.join(", ")}.`);
      } //end else
    } //end else

  }, // end directionCalc
}; // end directions()


//TEST
//test a few networkLines
directions.directionCalc('sixLine','Grand Central','nLine','Times Square');
directions.directionCalc('nLine','34th','sixLine','33rd');
//test same line
directions.directionCalc('lLine','8th','lLine','1st');
// //test Union Square start
directions.directionCalc('nLine','Union Square','nLine','28th');
// // test Union Square end
directions.directionCalc('nLine','34th','sixLine','Union Square');



// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

  // const nLineUnionSquare = 5;

  // // console.log() shows output similar to this:
  // // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
  // // "Change at Union Square."
  // // "Your journey continues through the following stops: 23rd, 28th, 33rd."

  // // "7 stops in total."
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
