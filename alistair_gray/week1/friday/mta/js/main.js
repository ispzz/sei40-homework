// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

console.log("============== WELCOME =============");
console.log("============ TO THE MTA ===========");
console.log("===================================");
console.log("== PLEASE ENTER STARTING LOCATION =");
console.log("...................................");

// start location function goes here

console.log(`START LOCATION: ""              >>>`);
console.log("...................................");
console.log("===== PLEASE ENTER DESTINATION ====");
console.log("...................................");

// destination function goes here

console.log(`DESTINATION: ""                 <<<`);
console.log("...................................");
console.log(`OPTIMAL ROUTE: "" "" ""`);

// PSEUDOCODE

// Create an object for each line with a nested array inside each

// MTA's map shows the below's array as an accurate representation
// This is useful for checking that the direction works both ways irl
// for...in loops won't work as the index order is important
// A normal for loop may work as it holds the sequence

nLine = ["times square", "34th", "28th", "23rd", "union square", "8th"];
lLine = ["8th", "6th", "union square", "3rd", "1st"];
sixLine = ["grand central", "33rd", "28th", "23rd", "union square", "astor place"];

for(let i = 0; i < nLine.length; i++) {
  console.log(`Station ${i+1}: ${nLine[i]}`);
}; // for loop nLine

// The for loop works, but it requires a way to move between items in the array.
// That way the user can choose their start and end LOCATION
// To achieve the choosing part, this will require a function
// To find the matching station selected, this looks like it requires an index

const stationChoice = function(start, end) {
  const startLoc = nLine.indexOf(start);
  const endLoc   = nLine.indexOf(end);
  console.log(startLoc, endLoc);
}; // function stationChoice

stationChoice("times square", "8th");

// The function to index the stations works! It tells me where each station is in the
// array. Now I want to show the user how many stations there are between their choices

const numStops = function(start, end){
  const startLocNum = (nLine.indexOf(start) + 1);
  const endLocNum   = (nLine.indexOf(end) + 1);
  const calcNumStops = endLocNum  - startLocNum;
  console.log(`Number of Stops is: ${calcNumStops+1}`) // needs a plus one to show the whole array
}; // function numStops

numStops("times square", "8th");

// numStops function also works but it displays a negative number. This will need to be
// modified for the user in the console using the Math.sign() for negative numbers.

// Now I need a function that tells the user which stops are in between their choices
// A for loop should work, however it will either need a break command to stop when the
// destination is reached or using the index function output as where to stop.

const arrStops = [];

// N Line Stop Tracker

const stopTracker = function(start, end){
  const startLoc = nLine.indexOf(start);
  console.log(`startLoc: ${startLoc}`);
  const endLoc   = nLine.indexOf(end);
  console.log(`endLoc: ${endLoc}`);
    if(startLoc < endLoc){
      for(let i=startLoc; i < endLoc; i++){
        if(i === startLoc || i === endLoc){
        }else {
          const arryStops = arrStops.push(nLine[i]);
        } // conditional start - end loop (positive)
      }
    }else if (startLoc > endLoc){
      for(let j=startLoc; j > endLoc; j = j - 1){
        if(j === startLoc || j === endLoc){
        }else {
          const arryStops = arrStops.push(nLine[j]);
        } // conditional start - end loop (negative)
      }
    } // function stopTracker
  };

stopTracker("times square", "8th");
console.log(`Your journey continues through the following stops: ${arrStops}`);

// // An idea for the direction was to use the +/- sign as a way to demonstrate direction
// // If the number of stops is negative, then it should move right to left and vice versa
// // if it is a postive number. I ended up using > < to determine the index position instead.
//
// Now to integrate the other 2 lines. The complex nature of this is that although Union Square
// acts as a hub for all 3, the lines do not mirror each other exactly.
//
// First part is to put the arrays into an object
// If startLoc is in nLine && endLoc is in sixLine then

const subwayLines = {
  nLine: ["times square", "34th", "28th", "23rd", "union square", "8th"],
  lLine: ["8th", "6th", "union square", "3rd", "1st"],
  sixLine: ["grand central", "33rd", "28th", "23rd", "union square", "astor place"]
}; // object subwayLines

const startLineStops = [];
const endLineStops = [];
const calcNumStops = firstLineStops + secondLineStops

// In this section, I am close to the solution. I need to understand how to tell JS
// to understand if there are multiple lines and that they should use the hub - union square
// to make the change.

const stopTrackerMultiLines = function(startLn, startStn, endLn, endStn){
  const startLine      = subwayLines[startLn];
  const startLoc       = subwayLines[startLn].indexOf(startStn);
  const startHubLoc    = subwayLines[startLn].indexOf("union square");

  const startLocNum    = (subwayLines[startLn].indexOf(start) + 1);
  const starthubLocNum      = (nLine.indexOf(end) + 1);
  const firstLineStops = starthubLocNum  - startLocNum;

  const endLine   = subwayLines[endLn];
  const endLoc    = subwayLines[endLn].indexOf(endStn);
  const endHubLoc  = subwayLines[endLn].indexOf("union square");

  const endLocNum    = (subwayLines[startLn].indexOf(start) + 1);
  const endHubLocNum      = (nLine.indexOf(end) + 1);
  const secondLineStops = endHubLocNum  - startLocNum;

  if(startLn === endLn){
      if(startLoc < endLoc){
        for(let i=startLoc; i < endLoc; i++){
          if(i === startLoc || i === endLoc){
          }else {
            const arryStops = startLineStops.push(subwayLines[startLn][i]);
          } // conditional start - end loop (positive)
        }
      }else if (startLoc > endLoc){
        for(let j=startLoc; j > endLoc; j = j - 1){
          if(j === startLoc || j === endLoc){
          }else {
            const arryStops = startLineStops.push(subwayLines[startLn][j]);
          } // conditional start - end loop (negative)
      }
    }
  }
  if(startLn !== endLn){
      if(startLoc < startHubLoc){
        for(let i=startLoc; i < startHubLoc; i++){
          if(i === startLoc || i === startHubLoc){
          }else {
            const multiStops = startLineStops.push(subwayLines[startLn][i]);
          } // conditional start - end loop (positive)
        }
      }else if (startLoc > startHubLoc){
        for(let j=startLoc; j > startHubLoc; j = j - 1){
          if(j === startLoc || j === startHubLoc){
          }else {
            const multiStops = startLineStops.push(subwayLines[startLn][j]);
        }
      }
    }
    if(endLoc < endHubLoc){
      for(let i=endLoc; i < endHubLoc; i++){
        if(i === endLoc || i === endHubLoc){
        }else {
          const multiStops = endLineStops.push(subwayLines[endLn][i]);
        } // conditional start - end loop (positive)
      }
    }else if (endLoc > endHubLoc){
      for(let j=endLoc; j > endHubLoc; j = j - 1){
        if(j === endLoc || j === endHubLoc){
        }else {
          const multiStops = endLineStops.push(subwayLines[endLn][j]);
        }
      }
    }
  }
}

stopTrackerMultiLines("nLine", "times square", "lLine", "1st");
console.log(`Your starting station is `)
console.log(`Your journey starts with the following stops: ${startLineStops}`);
console.log("Change at Union Square");
console.log(`Your journey continues with the following stops: ${endLineStops}`);
console.log(`Your destination station is `)

//
