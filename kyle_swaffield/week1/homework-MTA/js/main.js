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
  en:["8th", "union square", "23rd", "28th", "34th", "times square"],
  el:["1st", "3rd", "union square", "6th", "8th"],
  six:["astor place", "union square", "23rd", "28th", "33rd", "grand central"],
  tripArray:[],
//  methods
  planTrip: function(str,arr,str2,arr2){
    this.tripArray = [];
    if(arr === arr2){
      this.singleLineTrip(str,arr,str2,arr2);
    }
    if(arr === arr2 && str === str2){
      return false;
    }
    if(arr === "N"){
      const givenIdxInbound = this.en.indexOf(str);
      let givenIdxOutbound = "";
      let unionIdxOut = 0;
    //  console.log("give:" + givenIdx);
      const unionIdxIn = 1;
    //  console.log("union:" + unionIdx);
      if(arr2 === "N"){
        givenIdxOutbound = this.en.indexOf(str2);
        unionIdxOut = 1;
      }else if(arr2 === "L"){
        //console.log("print me" + this.el.indexOf(str2));
        givenIdxOutbound = this.el.indexOf(str2);
        unionIdxOut = 2;
      }else{
        givenIdxOutbound = this.six.indexOf(str2);
        unionIdxOut = 1;
      }
      this.converge(givenIdxInbound,unionIdxIn,arr,arr2,givenIdxOutbound,unionIdxOut);
    }else if(arr === "L"){
      const givenIdxInbound = this.el.indexOf(str);
      const unionIdxIn = 2;
      if(arr2 === "N"){
        givenIdxOutbound = this.en.indexOf(str2);
        unionIdxOut = 1;
      }else if(arr2 === "L"){
        //console.log("print me" + this.el.indexOf(str2));
        givenIdxOutbound = this.el.indexOf(str2);
        unionIdxOut = 2;
      }else{
        givenIdxOutbound = this.six.indexOf(str2);
        unionIdxOut = 1;
      }
      this.converge(givenIdxInbound,unionIdxIn,arr,arr2,givenIdxOutbound,unionIdxOut);
    }else{
      const givenIdxInbound = this.six.indexOf(str);
      const unionIdxIn = 1;
      if(arr2 === "N"){
        givenIdxOutbound = this.en.indexOf(str2);
        unionIdxOut = 1;
      }else if(arr2 === "L"){
        //console.log("print me" + this.el.indexOf(str2));
        givenIdxOutbound = this.el.indexOf(str2);
        unionIdxOut = 2;
      }else{
        givenIdxOutbound = this.six.indexOf(str2);
        unionIdxOut = 1;
      }
      this.converge(givenIdxInbound,unionIdxIn,arr,arr2,givenIdxOutbound,unionIdxOut);
    }
//  console.log(this.en[1]);
},
  converge: function(givenIdxIn,unionIdxIn,arr,arr2,givenIdxOut,unionIdxOut){
    if(givenIdxIn < unionIdxIn){
      for(let i = givenIdxIn; i <= unionIdxIn; i++){
        if(i === unionIdxIn){
          this.diverge(givenIdxOut,unionIdxOut,arr2);
        }
        else{
          this.arrayPrint(arr,i);
        }
      }
    }
    else if(givenIdxIn > unionIdxIn){
      for(let i = givenIdxIn; i >= unionIdxIn; i--){
        if(i === unionIdxIn){
          this.diverge(givenIdxOut,unionIdxOut,arr2);
        }
        else{
          this.arrayPrint(arr,i);
        }
      }
    }else{
      this.diverge(givenIdxOut,unionIdxOut,arr2);
    }
  },
  diverge:function(givenIdxOut,unionIdxOut,arr2){
      if(givenIdxOut > unionIdxOut){
        for(let i = unionIdxOut; i <= givenIdxOut; i++){
          if(i === givenIdxOut){
            this.arrayPrint(arr2,i);
          }
          else{
            this.arrayPrint(arr2,i);
          }
        }
      }else if(givenIdxOut < unionIdxOut){
        for(let i = unionIdxOut; i >= givenIdxOut; i--){
          if(i === unionIdxOut){
            this.tripArray.push("union square");
          }
          else{
            this.arrayPrint(arr2,i);
          }
        }
      }
  },
  singleLineTrip:function(str,arr,str2,arr2){
    if(arr === "N"){
      for(let i = this.indexStart(str,str2) -1 ; i <= this.indexEnd(str,str2); i++){
        this.tripArray.push(this.en[i]);
      }
    }else if(arr = "L"){
      for(let i = this.indexStart(str,str2)-1; i <= this.indexStart(str,str2); i++){
        this.tripArray.push(this.el[i]);
      }
    }else{
      for(let i = this.indexStart(str,str2)-1; i <= this.indexStart(str,str2); i++){
        this.tripArray.push(this.six[i]);
      }
    }
  },
  indexStart: function(idx1,idx2){
    if(idx1 > idx2){
      return idx2;
    }else{
      return idx1;
    }
  },
  indexEnd: function(idx1,idx2){
    if(idx1 > idx2){
      return idx1;
    }else{
      return idx2;
    }
  },
  arrayPrint: function(str,idx){
    if(str === "N"){
      this.tripArray.push(this.en[idx]);
    }else if(str === "L"){
      this.tripArray.push(this.el[idx]);
    }else{
      this.tripArray.push(this.six[idx]);
    }
  },
};
mta.planTrip("8th","N","times square","N");
