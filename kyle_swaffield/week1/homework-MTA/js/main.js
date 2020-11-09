//console.log("test");
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
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."


// There are 3 subway lines:<---------


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

const mta = {
  arrays: [
    ["8th", "union square", "23rd", "28th", "34th", "times square"],                 //The three arrays used as the data for the object
    ["1st", "3rd", "union square", "6th", "8th"],
    ["astor place", "union square", "23rd", "28th", "33rd", "grand central"],
  ],
  timeArrays: [
    [10,20,15,5,7],
    [5,6,9,13],
    [7,3,8,3,7],
  ],

  tripArray:[], //an empty array to store the trip details
  tripTime: 0,
//  methods
  planTrip: function(str,arr,str2,arr2){                            //The first function will sort through three cases
    this.tripArray = [];                                            //Case1: A single line trip - No change at union
    this.tripTime = 0;
    let message = "";

    const givenIdxInbound = this.arrays[arr].indexOf(str);               //I collected all the indexes from the arrays using indexOf()
    const givenIdxOutbound = this.arrays[arr2].indexOf(str2);
    const unionIdxOut = this.arrays[arr2].indexOf("union square");
    const unionIdxIn = this.arrays[arr].indexOf("union square");

    if(arr === arr2){

      this.singleLineTrip(givenIdxInbound,givenIdxOutbound,arr);
      let message = `
You must travel through the following stops on the ${arr} line:\n`;
      let counter = 0;
      for(let i = 0; i <= this.tripArray.length-1;i++){
        message = message + `Station: ${this.tripArray[i]}\n`;
        counter ++;
      }
      message = message + `Your trip will take you ${this.timeConvert(this.tripTime)} and pass through ${counter} stations.`;
      console.log(message);
      return message;
    }
    if(arr === arr2 && str === str2){                              //case2: A trip that has the same start and end destination
      return false;
    }

    this.converge(givenIdxInbound,unionIdxIn,arr,arr2,givenIdxOutbound,unionIdxOut);

    message = `
You must travel through the following stops on the ${arr} line:\n`;
    let counter = 0;
    for(let i = 0; i <= this.tripArray.length-1;i++){
      if(this.tripArray[i] !== "union square"){
        message = message + `Station: ${this.tripArray[i]}\n`;
        counter ++;
      }else{
        message = message +`Change at Union Station\nYour Journey continues through:\n`;
        counter ++;
      }
    }
    message = message + `Your trip will take you ${this.timeConvert(this.tripTime)} and pass through ${counter} stations.`;
    console.log(message);
    return message;
  },

  converge: function(givenIdxIn,unionIdxIn,arr,arr2,givenIdxOut,unionIdxOut){   //In converge I collected all the indexes I sorted in
    //let travelTime = 0;
    if(givenIdxIn < unionIdxIn){                                                //planning the trip planTrip()
      for(let i = givenIdxIn; i <= unionIdxIn; i++){                            //I tested if the indexes were smaller or greater than
        if(i === unionIdxIn){
          this.tripTime = this.tripTime + 5;
          //this.tripArray.push(this.arrays[arr][i]);
          //console.log(`Array Time: ${this.timeArrays[arr][i]} Trip Time: ${this.tripTime}`);                                                 //unions index. I then looped through them to converge on
          this.diverge(givenIdxOut,unionIdxOut,arr2);                          //union station. Each iteration of the loop tested to see
        }                                                                       //if we were at union station. If not I called a function
        else{                                                                   //that would print the station to the tripArray[];
          this.tripArray.push(this.arrays[arr][i]);
          //console.log(`Array Time: ${this.timeArrays[arr][i]} Trip Time: ${this.tripTime}`);                                       //Once we arrived at union station I called the diverge
          this.tripTime = this.tripTime + this.timeArrays[arr][i];
        }                                                                       //function.
      }                                                                         //The function tested both an assending case and a desending
    }                                                                           //case to converge on union station.
    else if(givenIdxIn > unionIdxIn){
      for(let i = givenIdxIn; i >= unionIdxIn; i--){
        if(i === unionIdxIn){
          this.tripTime = this.tripTime + 5;
          this.diverge(givenIdxOut,unionIdxOut,arr2);
        }
        else{
          this.tripArray.push(this.arrays[arr][i]);
          this.tripTime = this.tripTime + this.timeArrays[arr][i-1];
        }
      }
    }
  },
  diverge:function(givenIdxOut,unionIdxOut,arr2){                       //Once converged on the union station it is time to diverge to
      if(givenIdxOut > unionIdxOut){                                    //the destination. The diverge was similar to the converge
        for(let i = unionIdxOut; i <= givenIdxOut; i++){                //it tested the direction to go and then looped through the
          this.tripArray.push(this.arrays[arr2][i]);
          if(givenIdxOut !== i){
            this.tripTime = this.tripTime + this.timeArrays[arr2][i];
          }
        }
      }else if(givenIdxOut < unionIdxOut){
        for(let i = unionIdxOut; i >= givenIdxOut; i--){
          this.tripArray.push(this.arrays[arr2][i]);
          if(givenIdxOut !== i){
            this.tripTime = this.tripTime + this.timeArrays[arr2][i];
          }
        }
      }
  },
  singleLineTrip:function(str,str2,arr){                                           //The single trip                                                                  // tested to check the line the trip will be on
    if(str < str2){
      //this.indexStart(str,str2,arr)
      for(let i = str; i <= str2; i++){    //sorted the indexes of the arrays so that it could
        if((str2) !== (i)){
          this.tripTime = this.tripTime + this.timeArrays[arr][i];
        }
      };
    }else{
      for(let i = this.indexEnd(str,str2); i >= this.indexStart(str,str2); i--){    //sorted the indexes of the arrays so that it could
        this.tripArray.push(this.arrays[arr][i]);
        if((this.indexEnd(str,str2)) !== i){
          this.tripTime = this.tripTime + this.timeArrays[arr][i];
        }
      };
    };                                          //always capture lower to highest. Used indexStart
  },
  indexStart: function(idx1,idx2){
    if(idx1 > idx2){
      return idx2;
    }else{
      return idx1;
    }
  },
  indexEnd: function(idx1,idx2){                    //Took both the indexes
    if(idx1 > idx2){                    //compared them to each other
      return idx1;                      //returned the end index
    }else{
      return idx2;
    }
  },
  timeConvert: function(min){
    if(min > 60){
      const time = `${Math.floor(min / 60)}h ${(min % 60)}min`;
      return time;
    }else{
      const time = `${min}min`;
      return time;
    }
  },
 };

console.log(`
<<<<<New York subway lines - MTA>>>>>

The N (0) Line Stations:
8th, union square, 23rd, 28th, 34th, times square

The L (1) Line Stations:
1st, 3rd, union square, 6th, 8th

The SIX (2) Line Stations:
astor place, union square, 23rd, 28th, 33rd, grand central

To plan a trip use the console to and call:
planTrip(Departure Station,Subway Line,Arrival Station, Subway Line);
  `);

 mta.planTrip("34th",0,"8th",0);
//end of file ---
