# Students should create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints:
#
# the stations the user must pass through, in order
# where to change lines, if necessary
# the total number of stops for the trip.
# There are 3 subway lines:
#
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.

 $line_n = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
 $line_l = ['8th', '6th', 'Union Square', '3rd', '1st']
 $line_6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

# puts "What Line will you start on?"
# start_line = gets.chomp
# puts "What station will you start on?"
# start_station = gets.chomp
# puts "What Line will you end on?"
# end_line = gets.chomp
# puts "What station will you end on?"
# end_station = gets.chomp

def line_trip(start_line, start_station, end_line, end_station)
    start_index = start_line.index(start_station)
    end_index = end_line.index(end_station)
p start_line
    p end_line

    p start_index
    p end_index
    if start_line != end_line
      union_index_start = start_line.index('Union Square')
      union_index_end = end_line.index('Union Square')
      p "union start #{union_index_start}"
      p "union end #{union_index_end}"
       if start_index > union_index_start && end_index > union_index_end
         number_stops = (start_index - union_index_start) + (end_index - union_index_end)
         list_stops_start = start_line[union_index_start...start_index].reverse
         list_stops_end = end_line[union_index_end...end_index].reverse
          p " 39 You will travel #{list_stops_start} on your first line changing at Union Station and travel the following stops on your second line #{list_stops_end}"
         p number_stops
         p list_stops_start
         p list_stops_end
       elsif start_index > union_index_start && end_index < union_index_end
           number_stops = (start_index - union_index_start) + (union_index_end - end_index)
           list_stops_start = start_line[union_index_start...start_index].reverse
           list_stops_end = end_line[end_index...union_index_end]
            p " 47 You will travel #{list_stops_start} on your first line changing at Union Station and travel the following stops on your second line #{list_stops_end}"
           p number_stops
           p list_stops_start
           p list_stops_end
        elsif start_index < union_index_start && end_index < union_index_end
             number_stops = (union_index_start - start_index) + (union_index_end - end_index)
             list_stops_start = start_line[start_index...union_index_start]
             list_stops_end = end_line[end_index...union_index_end].reverse
              p " 55 You will travel #{list_stops_start} on your first line changing at Union Square and travel the following stops on your second line #{list_stops_end}"
             p number_stops
             p list_stops_start
             p list_stops_end
          elsif start_index < union_index_start && end_index > union_index_end
               number_stops = (union_index_start - start_index) + (end_index - union_index_end)
               list_stops_start = start_line[start_index...union_index_start]
               list_stops_end = end_line[union_index_end...end_index].reverse
               p " 63 You will travel #{list_stops_start} on your first line changing at Union Station and travel the following stops on your second line #{list_stops_end}"
               p number_stops
               p list_stops_start
               p list_stops_end
          end # if start/end >/<
    else # else same lines
    if start_index > end_index
      number_stops = start_index - end_index
      list_stops = start_line[end_index..start_index].reverse
      p "You will travel #{list_stops}"
      p number_stops
      p list_stops
    else
    number_stops = end_index - start_index
    list_stops = start_line[start_index..end_index]
    p "You will travel #{list_stops}"
    p number_stops
    p list_stops
  end
end

    # p "you will be travelling on #{start_line}"
    p "#{end_index} - #{start_index} = #{number_stops}"
    p "Your starting station is #{start_station}, your final station is #{end_station}"
    p "You will travel #{number_stops} stops."

end
# line_trip('Times Square', '23rd')
# line_trip('8th', 'Times Square')
# line_trip($line_n,'Times Square', '23rd')
# line_trip($line_n,'8th', 'Times Square')
line_trip(start_line, start_station, end_line, end_station)
