// # Badger's Revenge
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
// Your program should:
// - Track how many times each student in the class has clapped this week (just make up the numbers);
// - Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// - Pick a random student to deliver the solution to Friday's warmup.
// - If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

const revengeOfBadger = {
 students : [
   "kyle",
   "tom",
   "gustaf",
   "charl",
   "marco"
 ],
 claps : [
   [0,0,1,2,1],
   [1,0,0,0,1],
   [0,0,1,2,1],
   [1,3,1,2,1],
   [1,3,1,2,1],
],
trackedClaps : [0,0,0,0,0],

 clapTrack : function(){
   this.trackedClaps = [0,0,0,0,0];

   for(let i = 0; i < this.claps.length; i++){
     let add = this.trackedClaps[i];
     console.log (add);
     for(let j = 0; j < this.claps[i].length-1;j++){
       add = add + this.claps[i][j];
       this.trackedClaps[i] = add;
       //console.log(`TC: ${this.trackedClaps[j]} c: ${this.claps[i][j]}`);
       //console.log(this.trackedClaps[j]);
     }
     this.trackedClaps[i] = add;
   }
 }

};
