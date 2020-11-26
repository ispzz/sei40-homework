require 'colorize'

puts "===================================="
puts "Your Trip Map"
puts "===================================="
puts ""

$train_lines = [
  {
    line: 'N',
    status: 'open',
    stations: [
      {
        status: 'open',
        name: 'Times Square',
        is_hub: false,
        time_to_station: 0
      },
      {
        status: 'closed',
        name: '34th',
        is_hub: false,
        time_to_station: 30
      },
      {
        status: 'open',
        name: '28th',
        is_hub: false,
        time_to_station: 10
      },
      {
        status: 'open',
        name: '23rd',
        is_hub: false,
        time_to_station: 20
      },
      {
        status: 'open',
        name: 'Union Square',
        is_hub: true,
        time_to_station: 7
      },
      {
        status: 'open',
        name: '8th',
        is_hub: false,
        time_to_station: 12
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
        is_hub: false,
        time_to_station: 0
      },
      {
        status: 'open',
        name: '6th',
        is_hub: false,
        time_to_station: 10
      },
      {
        status: 'open',
        name: 'Union Square',
        is_hub: true,
        time_to_station: 15
      },
      {
        status: 'open',
        name: '3rd',
        is_hub: false,
        time_to_station: 20
      },
      {
        status: 'open',
        name: '1st',
        is_hub: false,
        time_to_station: 10
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
        is_hub: false,
        time_to_station: 8
      },
      {
        status: 'open',
        name: '33rd',
        is_hub: false,
        time_to_station: 12
      },
      {
        status: 'open',
        name: '28th',
        is_hub: false,
        time_to_station: 25
      },
      {
        status: 'open',
        name: '23rd',
        is_hub: false,
        time_to_station: 12
      },
      {
        status: 'open',
        name: 'Union Square',
        is_hub: true,
        time_to_station: 18
      },
      {
        status: 'closed',
        name: 'Astor Place',
        is_hub: false,
        time_to_station: 15
      }
    ]
  }
]

def plan_trip start_line, start_station, dest_line, dest_station
  trip_map = 'empty'
  is_start_open = is_station_open start_line, start_station
  is_dest_open = is_station_open dest_line, dest_station

  unless is_start_open[:status]
    closed_station_notice 'start', start_line, start_station, is_start_open[:closest];

    puts 'Trip Mapping Completed.'.light_black
    return
  end

  unless is_dest_open[:status]
    closed_station_notice 'dest', dest_line, dest_station, is_dest_open[:closest]

    puts 'Trip Mapping Completed.'.light_black
    return
  end

  if start_line == dest_line
    trip_map = one_line_trip start_line, start_station, dest_station
  else
    trip_map = multi_line_trip start_line, start_station, dest_line, dest_station
  end

  print_trip start_line, dest_line, trip_map
  puts 'Trip Mapping Completed.'.light_black
  return
end #plan_trip

def one_line_trip line, start, destination
  train_line = $train_lines.select { |el| el[:line] == line }
  stations = train_line.first[:stations]

  start_idx = stations.index{ |el| el[:name] == start }
  end_idx = stations.index{ |el| el[:name] == destination }

  if start_idx > end_idx
    return stations[end_idx..start_idx].reverse
  end

  stations[start_idx..end_idx]
end #one_line_trip

def multi_line_trip start_line, start_station, dest_line, dest_station
  trip_to_exchange = one_line_trip start_line, start_station, 'Union Square'
  trip_from_exchange = one_line_trip dest_line, 'Union Square', dest_station

  multi_trip_map = {}
  multi_trip_map[start_line.to_sym] = trip_to_exchange
  multi_trip_map[dest_line.to_sym] = trip_from_exchange.reject{ |el| el[:name] == "Union Square" };

  multi_trip_map
end #multi_line_trip

def is_station_open line, station
  train_line = $train_lines.select { |el| el[:line] == line }
  stations = train_line.first[:stations]
  station_idx = stations.index{ |el| el[:name] == station }
  train_station = stations.select{ |el| el[:name] == station }

  if train_line.first[:status] == 'open'
    if train_station.first[:status] == 'closed'
      closest = get_closest_station train_line, station_idx
      return { closest: closest.first[:name] + ' Station.', status: false }
    end

    return { status: true }
  end

  { closest: 'This train line is closed. No station is open.', status: false }
end #is_station_open

def get_closest_station line, station_idx
  hub_idx = line.first[:stations].index{ |el| el[:name] == 'Union Square' }

  if station_idx > hub_idx
    station_idx, hub_idx = hub_idx, station_idx
  end

  open_stations = line.first[:stations][station_idx..hub_idx].select{ |el| el[:status] == "open"}

  open_stations.take(1)
end #get_closest_station

def closed_station_notice which, line, station, closest
  if which === 'start'
    puts "Sorry. Your start station #{station} on the #{line} line is closed. Please choose a different station to journey from.".blue.on_red.blink
  else
    puts "Sorry. Your arrival station #{station} on the #{line} line is closed. Please choose a different station to journey to.".blue.on_red.blink
  end
end #closedStationNotice()

def print_trip start_line, dest_line, map

  if map.kind_of?(Array)
    puts "Board the #{start_line} line and travel through:".black.on_light_white
    generate_map map
    puts ""
    puts "You have arrived.".light_yellow
    puts ""
    puts "#{map.length} stops in total.".light_black

  else
    map_to = map[start_line.to_sym]
    map_from = map[dest_line.to_sym]

    puts "Board the #{start_line} line and travel through:".black.on_light_white
    time_to_hub = generate_map map_to

    puts ""
    puts "Change at Union Square.".light_yellow
    puts ""

    puts "Board the #{dest_line} line and travel through:".black.on_light_white
    generate_map map_from
    puts""
    puts "You have arrived.".light_yellow
    puts ""
    puts "#{map_to.length + map_from.length} stops in total.".light_black
  end
end #print_trip

def generate_map map
  map.each do |station|
    if station[:status] == 'open'
      puts "#{station[:name]} Station.".light_green
    else
      puts "#{station[:name]} Station.".light_black
    end
  end
  return
end #generateMap()


# plan_trip 'N', '8th', 'N', '28th' #test single line
# puts ""
# puts "===================================="
# puts ""
# plan_trip 'N', '28th', '6', '33rd'
# puts""

print "Which train line are you boarding? "
start_line = gets.chomp

print "Which station are you boarding at? "
start_station = gets.chomp

print "Will you be boarding a connecting line (y/n)? "
connecting = gets.chomp

if connecting == "y"
  print "What is your connecting train line "
  dest_line = gets.chomp
else
  dest_line = start_line
end

print "Which station are you stoping at? "
dest_station = gets.chomp
puts ""

plan_trip start_line, start_station, dest_line, dest_station
