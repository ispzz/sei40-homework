console.log('JS loaded for MTA!');

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
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
// // Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).
// debugger;
const planTrip = {

  trains:{
  nLine: ['Times Square', '34th', '28th', '23rd', 'Union Square','8th'],
  lLine: ['8th', '6th', 'Union Square', '3rd','1st'],
sixthLine: ['Grand Central', '33rd', '28th', '23rd','Union Square','Astor Place']
},

      findStop: function(lineNames, stopNames){
        for(let i=0; i <this.trains[lineNames].length; i++){
          if(stopNames === this.trains[lineNames][i]){
          return i;
        }//if
        }//for
      },//findStop

      findUnion: function(lineNames){
        for(let i=0; i<this.trains[lineNames].length; i++){
          if( 'Union Square' === this.trains[lineNames][i]){
          // console.log(`union=${i}`);
          return i;
          }//if
        }//for
      },//findUnion
      // listStops: function(lineNameOne,lineNameTwo){
      //   console.log(`List Stops: ${this.trains[lineNameOne].slice(startIndex, endIndex)} and ${this.trains[lineNameTwo].slice(startIndex, endIndex)}`);
      //   }
      // ,


      findLocation: function(lineNameOne,startName,lineNameTwo,stopName){


        console.log(`Welcome to Coding Train Travels, below is your personalised travel information:`);
        const startIndex = this.findStop(lineNameOne, startName);
        const endIndex = this.findStop(lineNameTwo, stopName);
        const changeIndexOne = this.findUnion(lineNameOne);
        const changeIndexTwo = this.findUnion(lineNameTwo);
        // console.log(this.trains[lineNameOne].slice(startIndex, changeIndexOne));
        console.log(`You are starting at "${startName}", on ${lineNameOne}.`);
        console.log(`You are stopping at "${stopName}", on ${lineNameTwo}.`);
        // console.log(this.nLine.slice(0));



        // console.log(`union is ${changeIndexOne} line one ${changeIndexTwo} on line 2`);
        const listStops = function(lineNameOne,lineNameTwo){
          // console.log(planTrip.trains);
          const lineOne = planTrip.trains[lineNameOne];
          const lineTwo = planTrip.trains[lineNameTwo];
          if(lineOne === lineTwo ){
          console.log(`List Stops: ${lineOne.slice(endIndex,startIndex).reversed}`);
          }else{
            console.log(`List Stops: ${lineOne.slice(startIndex,endIndex)}`)
          }

              if(lineOne !== lineTwo && startIndex > changeIndexOne && endIndex > changeIndexTwo){
                console.log(`List Stops: ${lineOne.slice(changeIndexOne,startIndex).reversed}, and ${lineTwo.slice(changeIndexTwo,endIndex).reversed}`);
              } else if(lineOne !== lineTwo && startIndex > changeIndexOne && endIndex < changeIndexTwo){
              console.log(`List Stops: ${lineOne.slice(changeIndexOne,startIndex).reversed}, and ${lineTwo.slice(endIndex,changeIndexTwo)}`);
            }else if(lineOne !== lineTwo && startIndex < changeIndexOne && endIndex > changeIndexTwo){
              console.log(`List Stops: ${lineOne.slice(startIndex, changeIndexOne)}, and ${lineTwo.slice(changeIndexTwo,endIndex)}`);
            }else{
              console.log(`List Stops: ${lineOne.slice(startIndex,changeIndexOne)}, and ${lineTwo.slice(endIndex,changeIndexTwo)}`);
            }
        };




      if(lineNameOne === lineNameTwo){///lines the same starting small ending big
        const countStops = Math.abs(endIndex - startIndex) ;
        console.log(`You will have a total of ${countStops} stops.${listStops(lineOne,lineTwo)}`);
        console.log(`On the the ${lineNameOne} you will travel ${listStops(lineOne,lineTwo)}, ${lineOne.slice(startIndex,endIndex)}`);
        return startName +startIndex + stopName + endIndex;
      } else {//different lines
        const total = Math.abs(startIndex-changeIndexOne)+ Math.abs(endIndex-changeIndexTwo);//need to make both numbers positive
        console.log(`On the ${lineNameOne}, you will travel the following stations:${listStops(lineNameOne,lineNameTwo)}.`);//reversed
        console.log(`You must change at Union Square.`);
        console.log(`On the ${lineNameTwo}, you will travel the following stations: ${listStops(lineNameOne,lineNameTwo)}.`);
        console.log(`You will travel ${Math.abs(startIndex-changeIndexOne)} stops on ${lineNameOne} and ${Math.abs(endIndex-changeIndexTwo)} stops on ${lineNameTwo} for a total of ${total} stops.`);
        return total;
      }


    },//findLocation



};
// findLocation('sixthLine','28th','nLine','Times Square');
// planTrip.findLocation('sixthLine','28th','nLine','Times Square');
planTrip.findLocation('lLine','6th','nLine','8th');
// planTrip.findLocation('nLine','8th','lLine','6th');
//
// planTrip.findLocation('lLine','3rd','nLine','Times Square');
// planTrip.findLocation('nLine','Times Square','lLine','3rd');
// //
// planTrip.findLocation('nLine','Times Square','nLine','8th');
// planTrip.findLocation('nLine','8th','nLine','Times Square');
//
// planTrip.findLocation('sixthLine','28th','nLine','Times Square');



//
//
//
// nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square','8th'];
//
// // const sixLine = ['Grand Central', '33rd', '28th', '23rd','Union Square','Astor Place'];
//
// const findLocation2 = function(startName,stopName){
// // let startInt;
// // let stopInt;
//
// for(i=0; i <nLine.length; i++){
//   if(startName === nLine[i]){
//   startInt = nLine.indexOf(nLine[i]);
//   console.log(`You are starting at ${startName},Index: ${startInt}`);
// }
// }
//
//   // debugger;
//   for(j=0; j <nLine.length; j++){
//     if(stopName === nLine[j]){
//     const stopInt = nLine.indexOf(nLine[j]);
//     console.log(`You are stopping at ${stopName},Index: ${stopInt}`);
//     const countStops = `${stopInt}-${startInt}`;
//     console.log(`${stopInt}...${startInt} Stops Between ${countStops}`);
//
//   return startName +startInt + stopName + stopInt;
// }
// }
// };
// findLocation2('8th','34th');
//
//
//
//
//
//
// // findLocation('34th','8th');
// // findLocation("Times Square","23rd");
//   const findLocation2 = function(stopName){
//     for(i=0; i <nLine.length; i++){
//     if(stopName === nLine[i]){
//     const stopInt = nLine.indexOf(nLine[i]);
//     return stopName + stopInt + startName +startInt;
//    console.log(`You are starting at ${startName} and stopping at ${stopName}`);
//   }
//   }
// }

// }

// findLocation2('8th');

// totalLocation();

// return countStops;





// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
