console.log('Warmup is working today!');


// # Badger's Revenge
//
// The names of those who are witnessed clapping Badger more than twice in
// the first four days of any one week will go into a draw. On Friday morning,
// a random name will be drawn from that list and the 'winner' will be forced
// to deliver the solution to Friday's warmup.
//
// Create a program that Badger can use for this task - ideally, you should
// create an object (revengeOfBadger) to do this, but if you can get it
// working using standalone functions, that's cool.

const revengeOfBadger = {

  student: {
    Liz: 2
    Bonnie: 4
    Socks: 5
    Boots: 6

  },

  shortList: [],

  generateShortList: function() {
    for(const key in this.students){
  
    }
  }
}
//
// Your program should:

// 1. - Track how many times each student in the class has clapped
// this week (just make up the numbers);
// 2. - Include a collection of candidates for the Friday draw
// (ie, a list of names of people who have clapped Badger more than twice that week);
// 3. - Pick a random student to deliver the solution to Friday's warmup.
// 4. - If no one has clapped enough that week, the program
// should indicate that "Badger has to do his own damned warmup."
