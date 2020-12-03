// console.log('MTA lab this is working');
//
// const singleLineTrip = function(line, start, end){
//   console.log('singleLineTrip()');
//   console.log('line = ', line);
//   console.log('sart = ', start);
//   console.log ('end =', end);
//
//   //Get the stations on the line whose name is
//   //in the variable 'line'
//
//   //Just to get this working, lets hardcode the N stations as the stations we are travelling on
// const lineStations =[];
//
// }; //singleLineTrip()
//
// // actually use the function we defined above
// singleLineTrip('N', '34th','8th')
// // output should be: 28th, 23rd Union Square, 8th

console.log('Hello');

const mta = {
  "N":["times Square", "34th", "28th", "union square", "8th"],
  "L":["8th","6th", "union square", "3rd", "1st" ],
  "6":["grand central","33rd", "28th", "23rd", "union square", "astor Place"]
}

const singleLineTrip = function(line,start, end){
  	const lineStations = mta[line];
	const startIndex = lineStations.indexOf(start);//position of the start
	const endIndex = lineStations.indexOf(end); // position of the endlane

	if(startIndex<endIndex){
		let stations = (lineStations.slice(startIndex,endIndex));
  		console.log(`You need to pass through: ${stations} `)
	} else {
		let stations = lineStations.slice().reverse(endIndex,startIndex);
    console.log(`You need to pass through: ${stations} `)
	}
}

singleLineTrip("N","34th","8th");
