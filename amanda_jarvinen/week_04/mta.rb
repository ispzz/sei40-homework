require 'colorize'

# Network lines
mta = {
  n: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  l: ['8TH', '6th', 'Union Square', '3rd', '1st'],
  6 => ['Grand Central', '33rd', '28TH', '23RD', 'Union Square', 'Astor Place']
}

def calculate_num_stops stations
  stations.length unless stations.nil?
end

def get_stations network, line, origin, destination
  origin_idx = network[line].index(origin)
  destination_idx = network[line].index(destination)

  case
  when origin_idx < destination_idx then network[line][(origin_idx + 1)..destination_idx]
  when origin_idx > destination_idx then network[line][(destination_idx)..origin_idx - 1].reverse!
  else puts "You are at your destination"
  end
end

def single_line line, origin, destination, network
  stations = get_stations network, line, origin, destination
  total_stops = calculate_num_stops stations

  {stations: stations, total_stops: total_stops}
end

def plan_trip o_line, origin, d_line, destination, network

  if o_line == d_line
    trip = single_line o_line, origin, destination, network

    puts "You must travel through the following stops on the #{o_line.upcase} line:"
    puts trip[:stations]
    puts "Total stations: #{trip[:total_stops]}."

  else
    exchange = (network[o_line] & network[d_line]).join # Intersection (common elements of 2 arrays)
    first_leg = single_line o_line, origin, exchange, network
    first_leg[:stations].pop # Remove exchange station
    last_leg = single_line d_line, exchange, destination, network
    stations = (first_leg[:stations] + last_leg[:stations]).join(', ')
    total_stops = first_leg[:total_stops] + last_leg[:total_stops]

    puts "You must travel through the following stops on the #{o_line.upcase} line:"
    puts first_leg[:stations]
    puts "Please exchange to #{d_line.upcase} at #{exchange}. Then travel:"
    puts last_leg[:stations]
    puts "Total stations: #{total_stops}."
  end

  puts "Have a great day!\n"
end

def display_title
  puts "\n*************************************"
  puts "     WELCOME TO MTA Trip Planner ".magenta
  puts " 🚂 We choo...choose to move you 😃 "
  puts "*************************************\n\n"
end

def display_menu
  puts "Menu: ".magenta
  puts "p : Plan a trip"
  puts "t : Test the program"
  puts "q : Quit"
  print "\nWhich would you like to do?  "
  gets.chomp
end

def plan_trip_prompt network
  print "What line (:n, :l or 6) are you starting on? "
  start_line = gets.to_sym

  print "Which station are you on now? "
  start_station = gets.chomp

  print "What is your transfer line (:n, :l or 6)? "
  end_line = gets.to_sym

  print "Where do you want to get off? "
  end_station = gets.chomp

  # Edge case: User is already at destination
  if start_station == end_station
    puts "\nYou are already at your destination".red
    main_menu
  end

  plan_trip start_line, start_station, end_line, end_station, network
end

def run_tests(network)
  puts "\nRUNNING TESTS".magenta

  # Single-line and origin is destination
  puts "\ntest: user at destination:".blue
  plan_trip(:n, 'Union Square', :n, 'Union Square', network)




  
  # Single-line and forward direction
  # trip_sf = single_line(:n, '34th', 'Union Square', network)
  # p trip_sf

  # Single-line and reverse direction
  puts "\ntest: (:n, 'Union Square', :n, '34th', 'mta')".blue
  plan_trip(:n, 'Union Square', :n, '34th', network)

  # Multi-line trip
  puts "\ntest: (n, '34th', l, '1st', 'mta')".blue
  plan_trip(:n, '34th', :l, '1st', network)

  puts "\nEND OF TESTS\n".magenta
end

def main_menu network
  loop do
    selection = display_menu

    case selection
    when 'p' then plan_trip_prompt network
    when 't' then run_tests(network)
    when 'q' then return
    else     puts "Invalid selection".red
    end
  end
end # main_menu

def start_planner network
  display_title
  main_menu network
end # display_title

start_planner mta
