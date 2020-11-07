console.log('=========================================');
console.log('Your Trip Map');
console.log('=========================================');

// Do your exercises here:
const mta = {
  //data:
  trainLines: [
    {
      line: 'N',
      stations: ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th']
    },
    {
      line: 'L',
      stations: ['8th', '6th', 'Union Square', '3rd', '1st']
    },
    {
      line: '6',
      stations: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    },
  ],

  //methods:
  planTrip: function(startLine, startStation, destLine, destStation){ //[]
    let tripMap;

    if(startLine === destLine){
      tripMap = this.oneLineTrip(startLine, startStation, destStation);
    } else {
      tripMap = this.multiLineTrip(
        startLine, startStation, destLine, destStation
      );
    }

    this.printTrip(startLine, destLine, tripMap);
    return 'Trip Mapping Completed.'
  }, //planTrip()

  oneLineTrip: function(line, start, destination){
    const trainLine = this.getTrainLine(line);
    let stations = trainLine.stations;

    const startIdx = stations.indexOf(start);
    const endIdx = stations.indexOf(destination);

    if(startIdx < endIdx){
      return stations.slice(startIdx, endIdx + 1);
    }
    return stations.slice(endIdx, startIdx + 1).reverse();
  }, // oneLineTrip()

  multiLineTrip: function(startLine, startStation, destLine, destStation){
    const tripToExchange = this.oneLineTrip(
      startLine, startStation, 'Union Square'
    );
    const tripFromExchange = this.oneLineTrip(
      destLine, 'Union Square', destStation
    );

    const multiTripMap = {};
    multiTripMap[startLine] = tripToExchange;
    tripFromExchange.splice(tripFromExchange.indexOf('Union Square'), 1);
    multiTripMap[destLine] = tripFromExchange;

    return multiTripMap;
  }, //multiLineTrip()

  getTrainLine: function(line){
    return this.trainLines.find(function(el){
      return el.line === line;
    });
  }, //getStationList()

  printTrip: function(startLine, destLine, map){
    if(map instanceof Array){
      console.log(`You must travel through the following stops on the ${startLine} line: ${map.join(', ')}.`);
      console.log(`${map.length} stops in total.`);

    } else{
      const mapTo = map[startLine];
      const mapFrom = map[destLine];

      console.log(`You must travel through the following stops on the ${startLine} line: ${mapTo.join(', ')}.`);
      console.log(`Change at Union Square.`);
      console.log(`Your journey continues through the following stops on the ${destLine} line: ${mapFrom.join(', ')}.`);
      console.log(`${mapTo.length + mapFrom.length} stops in total.`)
    }
  }, //printTrip()
}

console.log(mta.planTrip('N', '28th', '6', '33rd'));
console.log('=========================================');
console.log(mta.planTrip('N', '34th', 'L', '8th'));
console.log('=========================================');
console.log(mta.planTrip('6', 'Astor Place', 'L', '1st'));
console.log('=========================================');
console.log(mta.planTrip('N', '8th', 'N', '28th'));
console.log('=========================================');
