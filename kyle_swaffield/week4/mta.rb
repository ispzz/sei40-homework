# MTA Lab
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
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# We should be able to say:
#
# plan_trip( :n, "Times Square", :l, "1st" )
# # Or something along those lines
# Hints:
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number!
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
require 'pry'
require 'colorize'

def dir_func st_station, un_sq, start_line
  if start_line.find_index(st_station) > start_line.find_index(un_sq)
    "down"
  else
    "up"
  end
end
def get_station_list array,beg_stat,cha_stat

  if dir_func(beg_stat,cha_stat,array) == "up"
    st_idx = array.find_index(beg_stat)
    un_idx = array.find_index(cha_stat)
    array[st_idx..un_idx]
  else
    st_idx = array.find_index(beg_stat)
    un_idx = array.find_index(cha_stat)
    array[un_idx..st_idx]
  end
end
def plan_trip_multi_line(start_line, start_station, end_line, end_station)
  mta={
    N:["Times Square","34th","28th","23rd","Union Square","8th"],
    L:["8th","6th","Union Square","3rd","1st"],
    SIX:["Grand Central","33rd","28th","23rd","Union Square","Astor Place"]
  }
  un_sq = "Union Square"
  array1 = get_station_list mta[start_line], start_station, un_sq
  array2 = get_station_list mta[end_line], end_station, un_sq
  if array1.first == "Union Square"
    array1.reverse!
  end
  if array2.last == "Union Square"
    array2.reverse!
  end
  array1 + array2
end
def plan_trip_single_line(start_line, start_station, end_station)
  mta={
    N:["Times Square","34th","28th","23rd","Union Square","8th"],
    L:["8th","6th","Union Square","3rd","1st"],
    SIX:["Grand Central","33rd","28th","23rd","Union Square","Astor Place"]
  }
   get_station_list mta[start_line], start_station, end_station
end

def trip_message start_station,start_line,end_station,end_line
  if start_line == end_line
    trip_array = plan_trip_single_line(start_line, start_station, end_station)
    line="s"
    if(end_station == trip_array[0])
      trip_array.reverse!
    end
  else
    trip_array = plan_trip_multi_line(start_line, start_station, end_line, end_station)
    line="m"
  end
  print "Your trip will start at ".light_blue
  print start_station.to_s.green
  print " on line ".light_blue
  puts start_line.to_s.green
  puts "your trip will include the following stations: ".light_blue
  check=0
  trip_array.each do |station|
    if station == "Union Square" && check == 0 && line == "m"
      check += 1
      print "At Union Square you will change to line ".light_blue
      print end_line.to_s.green
      puts " and continue to:".light_blue
    elsif station == "Union Square" && check > 0 && line == "m"
    else
      print "Station: ".light_blue
      puts station.to_s.yellow
    end
  end
end

start_line = 1
start_station = 1
end_line = 1
end_station = 1

until start_line == "q" ||start_station == "q" || end_line == "q" || end_station == "q"
  puts "Welcome to the MTA".yellow
  puts "Enter q at any time to exit".red
  print "Start Line: ".light_blue
    test = gets.chomp
    if test == "q"
      break
    else
      start_line = test.to_sym
    end
  print "Start Station: ".light_blue
  test = gets.chomp
  if test == "q"
    break
  else
    start_station = test
  end
  print "End Line: ".light_blue
  test = gets.chomp
  if test == "q"
    break
  else
    end_line = test.to_sym
  end
  print "End Station:".light_blue
  test = gets.chomp
  if test == "q"
    break
  else
    end_station = test
  end
  trip_message start_station,start_line,end_station,end_line
end


# binding.pry
