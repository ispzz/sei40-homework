
// Do your exercises here:

console.log('=====================================');
console.log('%cYour Trip Map', 'font-size:1.2em;font-weight:bold');
console.log('Station Status: %copen%c %cclosed', 'background:#D697FF;padding:3px;border-radius:3px','','background:#84878C;padding:3px;border-radius:3px');
console.log('=====================================');

//----constructor----//
const TrainLine = function(line, status){
  this.line = line;
  this.status = status;
  this.stations = [];
}; //TrainLine()

const Station = function(status, name, isHub){
  this.status = status;
  this.name = name;
  this.isHub = isHub;
}; //Station()


const mta = {
  //----data----//
  trainLines: [
    {
      line: 'N',
      status: 'open',
      stations: [
        {
          status: 'open',
          name: 'Times Square',
          isHub: false,
          timetoStation: 0
        },
        {
          status: 'closed',
          name: '34th',
          isHub: false,
          timetoStation: 30
        },
        {
          status: 'open',
          name: '28th',
          isHub: false,
          timetoStation: 10
        },
        {
          status: 'open',
          name: '23rd',
          isHub: false,
          timetoStation: 20
        },
        {
          status: 'open',
          name: 'Union Square',
          isHub: true,
          timetoStation: 7
        },
        {
          status: 'open',
          name: '8th',
          isHub: false,
          timetoStation: 12
        }
      ]
    },
    {
      line: 'L',
      status: 'open',
      stations: [
        {
          status: 'closed',
          name: '8th',
          isHub: false,
          timetoStation: 0
        },
        {
          status: 'open',
          name: '6th',
          isHub: false,
          timetoStation: 10
        },
        {
          status: 'open',
          name: 'Union Square',
          isHub: true,
          timetoStation: 15
        },
        {
          status: 'open',
          name: '3rd',
          isHub: false,
          timetoStation: 20
        },
        {
          status: 'open',
          name: '1st',
          isHub: false,
          timetoStation: 10
        }
      ]
    },
    {
      line: '6',
      status: 'open',
      stations: [
        {
          status: 'open',
          name: 'Grand Central',
          isHub: false,
          timetoStation: 8
        },
        {
          status: 'open',
          name: '33rd',
          isHub: false,
          timetoStation: 12
        },
        {
          status: 'open',
          name: '28th',
          isHub: false,
          timetoStation: 25
        },
        {
          status: 'open',
          name: '23rd',
          isHub: false,
          timetoStation: 12
        },
        {
          status: 'open',
          name: 'Union Square',
          isHub: true,
          timetoStation: 18
        },
        {
          status: 'closed',
          name: 'Astor Place',
          isHub: false,
          timetoStation: 15
        }
      ]
    },
  ],

  //----methods----//
  createNewLine: function(line, status){
    const newLine = new TrainLine(line, status);
    this.trainLines.push(newLine);
  }, //createNewLine()

  createNewStation: function(line, name, status, isHub){
    const newStation = new Station(status, name, isHub);
    const lineIdx = this.getIndex(this.trainLines, line);
    this.trainLines[lineIdx].stations.push(newStation);
  }, //createNewStation()

  planTrip: function(startLine, startStation, destLine, destStation){
    let tripMap;
    const isStartOpen = this.isStationOpen(startLine, startStation);
    const isDestOpen = this.isStationOpen(destLine, destStation);

    if(!isStartOpen.status){
      this.closedStationNotice('start', startLine, startStation, isStartOpen.closest);
      return 'Trip Mapping Completed.';
    };

    if(!isDestOpen.status){
      this.closedStationNotice('dest', destLine, destStation, isDestOpen.closest);
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
  }, //planTrip()

  oneLineTrip: function(line, start, destination){
    const trainLine = this.getTrainLine(line);
    const stations = trainLine.stations;

    const startIdx = this.getIndex(stations, start);
    const endIdx = this.getIndex(stations, destination);

    if(startIdx > endIdx){
      return stations.slice(endIdx, startIdx + 1).reverse();
    }
    return stations.slice(startIdx, endIdx + 1);
  }, //oneLineTrip()

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

  isStationOpen: function(line, station){
    const trainLine = this.getTrainLine(line);
    const stationIdx = this.getIndex(trainLine.stations, station);
    const trainStation = trainLine.stations[stationIdx];

    if(trainLine.status === 'open'){
      if(trainStation.status === 'closed'){
        const closest = this.getClosestStation(trainLine, stationIdx);
        return {closest: closest + ' Station.', status:false}
      }
      return {status: true};
    }

    return {closest: 'This train line is closed. No station is open.', status: false};
  }, //isStationOpen()

  closedStationNotice: function(which, line, station, closest){
    if(which === 'start'){
      console.log(`\n%cSorry. Your start station "${station}" on the "${line} line" is closed. \nPlease choose a different station to journey from.`,'font-weight:bold;padding:5px;color:white;background:#35459E;');
      console.log(`The closest open station is:`);
      console.log(`%c${closest}%c\n`, 'color:#5C257F; background:#D697FF;padding:5px;border-radius:5px','');
    } else {
      console.log(`\n%cSorry. Your arrival station "${station}" on the "${line} line" is closed. \nPlease choose a different station to journey to.`,'font-weight:bold;padding:5px;color:white;background:#35459E;');
      console.log(`The closest open station is:`);
      console.log(`%c${closest}%c\n`, 'color:#5C257F; background:#D697FF;padding:5px;border-radius:5px', '');
    }
  }, //closedStationNotice()

  printTrip: function(startLine, destLine, map){
    const now = new Date();

    if(map instanceof Array){
      console.log(`\n%cBoard the ${startLine} line`,'font-weight:bold;border-radius:3px;padding:5px;color:white;background:#35459E;');
      console.log(`and travel through the following stops.\n\n`);

      this.generateMap(map, now.getTime());

      console.log(`%c\u26B2 You have arrived.`, 'color:#403C00;background:#FBFF87;padding:5px;border-radius:5px;');
      console.log(`\n%c${map.length} stops in total.`,'font-style:italic;color:gray;')

    } else{

      const mapTo = map[startLine];
      const mapFrom = map[destLine];

      console.log(`\n%cBoard the ${startLine} line`,'font-weight:bold;border-radius:3px;padding:5px;color:white;background:#35459E;');
      console.log(`and travel through the following stops.\n\n`);

      const timeToHub = this.generateMap(mapTo, now.getTime());

      console.log(`%c\u26D6 Change at Union Square.`,'color:#403C00;background:#FBFF87;padding:5px;border-radius:5px');

      console.log(`\n%cBoard the ${destLine} line`,'font-weight:bold;border-radius:3px;padding:5px;color:white;background:#35459E;');
      console.log(`and continue through the following stops.\n\n`);

      this.generateMap(mapFrom, timeToHub + 20*60000);

      console.log(`%c\u26B2 You have arrived.`, 'color:#403C00;background:#FBFF87;padding:5px;border-radius:5px;');
      console.log(`\n%c${mapTo.length + mapFrom.length} stops in total.`,'font-style:italic;color:gray;')
    }
  }, //printTrip()

  generateMap: function(map, departure){
    let travelTime;

    for(let i = 0; i < map.length; i++){
      let station = map[i];
      travelTime = this.calculateTravelTime(i, station, departure);

      if(station.status === 'open'){
        console.log(`%c⚫ ${station.name} Station.%c${travelTime.time}`, 'color:#5C257F; background:#D697FF;padding:5px;border-radius:5px','font-size:0.8em;font-style:italic;color:gray;');
      } else {
        console.log(`%c⚫ ${station.name} Station.%c${travelTime.time}`, 'color:#343840; background:#84878C;padding:5px;border-radius:5px', 'font-size:0.8em;font-style:italic;color:gray;');
      }
    }
    return travelTime.departure;
  }, //generateMap()

  calculateTravelTime: function(idx, station, departure){
    let travelTime;

    if(idx === 0){
      travelTime = this.getTravelTime(departure, ' depart at');
    } else {
      departure += station.timetoStation * 60000;
      travelTime = this.getTravelTime(departure, ' arrive at');
    }
    return {time: travelTime, departure: departure};
  }, //arrivalTime()

  calculateOptimumRoute: function(){
    // TODO:
    // Determine the best route to take
    // Where start line and destination line
    // Have multiple hubs/intersections common to both

  }, //calculateOptimumRoute()

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

  getClosestStation: function(line, stationIdx){
    const hubIdx = this.getIndex(line.stations, 'Union Square');

    if(stationIdx < hubIdx){
      return this.getOpenStation(line.stations, stationIdx, hubIdx);
    }

    return this.getOpenStation(line.stations, hubIdx, stationIdx);
  }, //getClosestStation()

  getOpenStation: function(stations, startIdx, endIdx){
    for(let i = startIdx; i <= endIdx; i++){
      if(stations[i].status === 'open'){
        return stations[i].name;
      }
    }
  }, //searchStation()

  getTravelTime: function(departure, prefix){
    const arrivalTime = new Date(departure);
    const hours = arrivalTime.getHours();
    const minutes = ('0' + arrivalTime.getMinutes()).slice(-2);

    return `${prefix} ${hours}:${minutes}`;
  }, //travelTime()
}

// Test Trip Mapping
console.log(mta.planTrip('N', '8th', 'N', '28th'));//test single line
console.log('=====================================');
console.log(mta.planTrip('N', '28th', 'N', '8th'));//test reverse of above
console.log('=====================================');

console.log(mta.planTrip('N', '28th', '6', '33rd'));//test multiple lines
console.log('=====================================');
console.log(mta.planTrip('6', '33rd', 'N', '28th'));//test reverse of above
console.log('=====================================');

//test closed destination station
console.log(mta.planTrip('N', '34th', '6', 'Astor Place'));
console.log('=====================================');

//test closed starting station
console.log(mta.planTrip('6', 'Astor Place', 'L', '1st'));
console.log('=====================================');

//test travelling through a closed station
console.log(mta.planTrip('N', 'Times Square', 'L', '6th'));
console.log('=====================================');
