
// # Badger's Revenge
// The names of those who are witnessed clapping Badger more than twice in the first
// four days of any one week will go into a draw. On Friday morning, a random name
// will be drawn from that list and the 'winner' will be forced to deliver the solution
// to Friday's warmup.
// Create a program that Badger can use for this task - ideally, you should create an
// object (revengeOfBadger) to do this, but if you can get it working using standalone
// functions, that's cool.
// Your program should:
// - Track how many times each student in the class has clapped this week (just make
//    up the numbers);
// - Include a collection of candidates for the Friday draw (ie, a list of names of
//   people who have clapped Badger more than twice that week);
// - Pick a random student to deliver the solution to Friday's warmup.
// - If no one has clapped enough that week, the program should indicate that Badger
// has to do his own damned warmup.


console.log(`badgers revenge`)

const studentClaps = {
  andrew: 3,
  peter: 2,
  mel: 3
}


const clapsInWeek = function (andre, peter, mel){
  numberOfClaps= 0
  randomDraw = []

  if (andre > 2)
randomDraw.push('andre')
  if (peter > 2)
randomDraw.push('peter')
  if (mel > 2)
randomDraw.push('Mel')

let randomValue = randomDraw[Math.floor(Math.random() * randomDraw.length)];
console.log(`${randomValue} has been randomly selected to present to the class`)

  if (andre < 2 && peter < 2 && mel <2)
  console.log (`badger has to do his own damn warmup`)
}
