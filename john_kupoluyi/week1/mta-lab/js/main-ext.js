console.log('=====================================');
console.log('%cYour Trip Map', 'font-size:1.2em;font-weight:bold');
console.log('=====================================');

// Do your exercises here:

const TrainLine = function(line, status){
  this.line = line;
  this.status = 'open';
  this.stations = [];
}; //TrainLine()

const Station = function(status, name){
  this.status = status;
  this.name = name;
}; //Station()

const mta = {
  //data:
  trainLines: [
    {
      line: 'N',
      status: 'open',
      stations: [
        {
          status: 'open',
          name: 'Times Square'
        },
        {
          status: 'open',
          name: '34th'
        },
        {
          status: 'open',
          name: '28th'
        },
        {
          status: 'open',
          name: '23rd'
        },
        {
          status: 'open',
          name: 'Union Square'
        },
        {
          status: 'open',
          name: '8th'
        }
      ]
    },
    {
      line: 'L',
      status: 'open',
      stations: [
        {
          status: 'open',
          name: '8th'
        },
        {
          status: 'closed',
          name: '6th'
        },
        {
          status: 'open',
          name: 'Union Square'
        },
        {
          status: 'open',
          name: '3rd'
        },
        {
          status: 'open',
          name: '1st'
        }
      ]
    },
    {
      line: '6',
      status: 'open',
      stations: [
        {
          status: 'open',
          name: 'Grand Central'
        },
        {
          status: 'open',
          name: '33rd'
        },
        {
          status: 'closed',
          name: '28th'
        },
        {
          status: 'open',
          name: '23rd'
        },
        {
          status: 'open',
          name: 'Union Square'
        },
        {
          status: 'closed',
          name: 'Astor Place'
        }
      ]
    },
  ],

  //methods:
  createNewLine: function(line, status){
    const newLine = new TrainLine(line, status);
    this.trainLines.push(newLine);
  }, //createNewLine()

  createNewStation: function(line, name, status){
    const newStation = new Station(status, name);
    const lineIdx = this.getIndex(this.trainLines, line);
    this.trainLines[lineIdx].stations.push(newStation);
  }, //createNewStation()

  validateStation: function(line, station){
    const trainLine = this.getTrainLine(line);
    const stationIdx = this.getIndex(trainLine.stations, station);
    const trainStation = trainLine.stations[stationIdx];
    if(trainLine.status === 'closed'  || trainStation.status === 'closed'){
      return false;
    }
    return true;
  }, // validateStation()

  stationClosed: function(which, line, station){
    if(which === 'start'){
      console.log(`\n%cSorry. Your start station "${station}" on the "${line} line" is closed. \nPlease choose a different station to journey from.`,'font-weight:bold;padding:5px;color:white;background:#35459E;');
    } else {
      console.log(`\n%cSorry. Your arrival station "${station}" on the "${line} line" is closed. \nPlease choose a different station to journey to.`,'font-weight:bold;padding:5px;color:white;background:#35459E;');
    }
  },

  planTrip: function(startLine, startStation, destLine, destStation){
    let tripMap;
    const validateStart = this.validateStation(startLine, startStation);
    const validateDest = this.validateStation(destLine, destStation);

    if(!validateStart){
      this.stationClosed('start', startLine, startStation);
      return 'Trip Mapping Completed.';
    };

    if(!validateDest){
      this.stationClosed('dest', destLine, destStation);
      return 'Trip Mapping Completed.';
    };

    if(startLine === destLine){
      tripMap = this.oneLineTrip(startLine, startStation, destStation);
    } else {
      tripMap = this.multiLineTrip(
        startLine, startStation, destLine, destStation
      );
    };

    this.printTrip(startLine, destLine, tripMap);
    return 'Trip Mapping Completed.'
  }, // planTrip()

  oneLineTrip: function(line, start, destination){
    const trainLine = this.getTrainLine(line);
    const stations = trainLine.stations;

    const startIdx = this.getIndex(stations, start);
    const endIdx = this.getIndex(stations, destination);

    if(startIdx > endIdx){
      return stations.slice(endIdx, startIdx + 1).reverse();
    }
    return stations.slice(startIdx, endIdx + 1);
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

    const deleteAtIdx = this.getIndex(tripFromExchange, 'Union Square');
    tripFromExchange.splice(deleteAtIdx, 1);
    multiTripMap[destLine] = tripFromExchange;

    return multiTripMap;
  }, //multiLineTrip()

  getTrainLine: function(line){
    return this.trainLines.find(function(el){
      return el.line === line;
    });
  }, //getTrainLine()

  getIndex: function(stations, location){
    return stations.findIndex(function(el){
      return el.name === location || el.line === location;
    })
  }, //getIndex()

  getTripMap: function(tripMap){
    return tripMap.map(function(el){
      return el.name;
    })
  }, //getTripMap()

  printTrip: function(startLine, destLine, map){
    if(map instanceof Array){
      // map = this.getTripMap(map);

      console.log(`\n%cBoard the ${startLine} line`,'font-weight:bold;border-radius:3px;padding:5px;color:white;background:#35459E;');
      console.log(`and travel through the following stops.\n\n`);

      this.generateMap(map);

      console.log(`%c\u26B2 You have arrived.`, 'color:#403C00;background:#FBFF87;padding:5px;border-radius:5px;');
      console.log(`\n%c${map.length} stops in total.`,'font-style:italic;color:gray;')

    } else{

      const mapTo = map[startLine];
      const mapFrom = map[destLine];

      console.log(`\n%cBoard the ${startLine} line`,'font-weight:bold;border-radius:3px;padding:5px;color:white;background:#35459E;');
      console.log(`and travel through the following stops.\n\n`);

      this.generateMap(mapTo);

      console.log(`%c\u26D6 Change at Union Square.`,'color:#403C00;background:#FBFF87;padding:5px;border-radius:5px');

      console.log(`\n%cBoard the ${destLine} line`,'font-weight:bold;border-radius:3px;padding:5px;color:white;background:#35459E;');
      console.log(`and continue through the following stops.\n\n`);

      this.generateMap(mapFrom);

      console.log(`%c\u26B2 You have arrived.`, 'color:#403C00;background:#FBFF87;padding:5px;border-radius:5px;');
      console.log(`\n%c${mapTo.length + mapFrom.length} stops in total.`,'font-style:italic;color:gray;')
    }
  }, //printTrip()

  generateMap: function(map){
    map.forEach(function(station){
      if(station.status === 'open'){
        console.log(`%c⚫ ${station.name} Station.`, 'color:#5C257F; background:#D697FF;padding:5px;border-radius:5px');
      } else {
        console.log(`%c⚫ ${station.name} Station (closed).`, 'color:#343840; background:#84878C;padding:5px;border-radius:5px');
      }
    })
  }, //generateMap()
}

// Test Trip Mapping
console.log(mta.planTrip('N', '28th', '6', '33rd'));//test multiple lines
console.log('=====================================');
console.log(mta.planTrip('6', '33rd', 'N', '28th'));//test reverse of above
console.log('=====================================');
console.log(mta.planTrip('N', '34th', 'L', '6th'));//test closed destination
console.log('=====================================');
console.log(mta.planTrip('6', 'Astor Place', 'L', '1st'));//test closed station
console.log('=====================================');
console.log(mta.planTrip('L', '8th', '6', 'Grand Central'));//test passthrough and closed station
console.log('=====================================');
console.log(mta.planTrip('N', '8th', 'N', '28th'));//test closed
console.log('=====================================');
