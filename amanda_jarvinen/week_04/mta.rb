require 'colorize'

# Network lines
mta = {
  n: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  l: ['8TH', '6th', 'Union Square', '3rd', '1st'],
  6 => ['Grand Central', '33rd', '28TH', '23RD', 'Union Square', 'Astor Place']
}

def calculate_num_stops stations
  stations.length unless stations.nil?
end # calculate_num_stops

def get_stations network, line, start, finish
  stations = network[line]
  start_idx = stations.index(start)
  finish_idx = stations.index(finish)

  if start_idx < finish_idx
    stations[(start_idx + 1)..finish_idx]
  else
    stations[(finish_idx)..start_idx - 1].reverse!
  end
end # get_stations

def single_line line, start, finish, network
  stations = get_stations network, line, start, finish
  total_stops = calculate_num_stops stations

  {stations: stations, total_stops: total_stops}
end # single_line

def plan_trip start_line, start, end_line, finish, network

  puts "You must travel through the following stops on the #{start_line} line:".blue

  if start_line == end_line
    trip = single_line start_line, start, finish, network
    total_stops = trip[:total_stops]
    puts trip[:stations]

  else
    exchange = (network[start_line] & network[end_line]).join # Intersection (common elements of 2 arrays)
    first_leg = single_line start_line, start, exchange, network
    first_leg[:stations].pop # Remove exchange station
    last_leg = single_line end_line, exchange, finish, network
    stations = (first_leg[:stations] + last_leg[:stations]).join(', ')
    total_stops = first_leg[:total_stops] + last_leg[:total_stops]

    puts first_leg[:stations]
    puts "Please exchange to #{end_line.upcase} at #{exchange}. Then travel:".blue
    puts last_leg[:stations]
  end

  puts "Total stations: #{total_stops}".blue
  puts "Have a great day!\n\n".magenta
end # plan_trip

def display_title
  puts "\n*************************************"
  puts "     WELCOME TO MTA Trip Planner ".magenta
  puts " 🚂 We choo...choose to move you 😃 "
  puts "*************************************\n\n"
end # display_title

def display_menu
  puts "Menu: ".magenta
  puts "p : Plan a trip"
  puts "t : Test the program"
  puts "q : Quit"
  print "\nWhich would you like to do?  "
  gets.chomp
end # display_menu

def plan_trip_prompt network
  print "What line (n, l or 6) are you starting on? "
  start_line = gets.chomp

  if start_line == "6"
    start_line = start_line.to_i
  else
    start_line = start_line.to_sym
  end

  print "Which station are you on now? "
  start = gets.chomp

  print "What is your transfer line (n, l or 6)? "
  end_line = gets.chomp

  if end_line == "6"
    end_line = end_line.to_i
  else
    end_line = end_line.to_sym
  end

  print "Where do you want to get off? "
  finish = gets.chomp
  puts "\n"

  # Edge case: User is already at destination
  if start == finish
    puts "\nYou are already at your destination".red
    main_menu
  else
    plan_trip start_line, start, end_line, finish, network
  end
end # plan_trip_prompt

def run_tests(network)
  puts "\nRUNNING TESTS".magenta

  # Single-line and origin is destination
  puts "\ntest: user at destination:".blue
  plan_trip(:n, 'Union Square', :n, 'Union Square', network)


  # Single-line and reverse direction
  puts "\ntest: (:n, 'Union Square', :n, '34th', 'mta')".blue
  plan_trip(:n, 'Union Square', :n, '34th', network)

  # Multi-line trip
  puts "\ntest: (n, '34th', l, '1st', 'mta')".blue
  plan_trip(:n, '34th', :l, '1st', network)

  puts "\ntest: (6, 'Grand Central', l, '1st', 'mta')".blue
  plan_trip(6, 'Grand Central', :l, '1st', network)

  puts "\nEND OF TESTS\n".magenta
end # run_tests

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
