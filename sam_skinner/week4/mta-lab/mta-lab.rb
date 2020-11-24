require 'colorize'

$mta =  {"N" => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
         "L" => ['8th', '6th', 'Union Square', '3rd', '1st'],
         "6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']}

#====Display Logic====
def plan_trip(start_line, start_station, end_line, end_station)
  trip_destinations = line_check(start_line, start_station, end_line, end_station)
  puts "Your journey takes you through the following stations on the #{start_line} Line: #{trip_destinations[0].join(', ')}.".green
  if start_line != end_line
    puts "Change at Union Square".yellow
    puts "Your journey continues through the following stations on the #{end_line} Line: #{trip_destinations[1].join(', ')}.". green
  end
end #plan_trip


#====Business Logic====
def check_reverse(line, start_station, end_station)
  if $mta[line].index(start_station) < $mta[line].index(end_station)
    #stations run forward through array
    line_journey(line, start_station, end_station)
  else
    #stations run in reverse through array
    line_journey(line, end_station, start_station).reverse
  end
end #check_reverse


def line_check(start_line, start_station, end_line, end_station)
  if start_line == end_line
    #one line trip
    first_trip = check_reverse(start_line, start_station, end_station)
  else
    #two line trip
    first_trip = check_reverse(start_line, start_station, "Union Square")
    second_trip = check_reverse(end_line, "Union Square", end_station)
    total_trip = [first_trip, second_trip]
  end
end #line_check


def line_journey(line, start_station, end_station)
  start_pos = $mta[line].index start_station
  end_pos = $mta[line].index end_station
  journey = $mta[line][start_pos..end_pos]
end #line_journey



plan_trip("N", "34th", "L", "8th")
