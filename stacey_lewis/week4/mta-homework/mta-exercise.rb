# MTA Lab

$subway = {
  n_line: ['Times Square', '34th', '28th (n line)', '23rd (n Line)', 'Union Square', '8th (n line)'],
  l_line: [ '8th (l line)', '6th', 'Union Square', '3rd', '1st'],
  six_line: ['Grand Central', '33rd', '28th (six line)', '23rd (six line)', 'Union Square', 'Astor Place'],
}

#set start and end positions.. run twice for changeover stations
def find_position(line,start_point,end_point)
  start_position = $subway[line].find_index(start_point)
  end_position = $subway[line].find_index(end_point)

  if start_position > end_position
    stop_array = $subway[line][end_position..start_position]
    stop_array.reverse
  else
    $subway[line][start_position..end_position]
  end
end


#variables to test with.
$start_line = :six_line
$start_stop = "Grand Central"
$changeover = "Union Square"
$end_line = :l_line
$end_stop = "8th (l line)"


#find crossover station
if $start_line != $end_line
  section_1 = find_position($start_line,$start_stop,$changeover)
  section_1.shift
  section_2 = find_position($end_line,$changeover,$end_stop)
  section_2.shift

  puts "Get on at #{$start_stop}. Travel these stops on the #{$start_line}: #{section_1.join(", ")}. Change at #{$changeover} to the #{$end_line}, continue the following stops: #{section_2.join(", ")}. Excluding starting station, you will pass through #{section_1.count() + section_2.count()} stops."

else
  section = find_position($start_line,$start_stop,$end_stop)
  section.shift

  puts "Get on at #{$start_stop}.Travel these stops on the #{$start_line}: #{section.join(", ")}. No line change required. Excluding starting station, you will pass through #{section.count()} stops."
end

#count array items and add together.

# find the array position for a line
# check if it is before or after the end point
# reverse the order in the stop array

# Step 2
# check for union square cross and count either up or down depending on direction
# array1 & array2 - will get intersection point
# join together into note


# Activity:
# Students should create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints:
#
# the stations the user must pass through, in order
# where to change lines, if necessary
# the total number of stops for the trip.
# There are 3 subway lines:
#

#method for finding direction
# def stop_array_def(start,stop)

# end
