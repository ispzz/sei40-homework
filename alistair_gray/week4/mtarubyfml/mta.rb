# Welcome to MTA 2: Ruby's Revenge


#---MTA Lines-------------------------------------------------------
mta = {
:n => ["times square", "34th", "28th", "23rd", "union square", "8th"],
:l => ["8th", "6th", "union square", "3rd", "1st"],
:s => ["grand central", "33rd", "28th", "23rd", "union square", "astor place"]
}

# ##---User Interface-----------------------------------------------
# #---Departures----------------------------------------------------
puts "==============================="
print "Please enter starting line: "
start_line = gets.chomp
print "Please enter starting station: "
start_stn = gets.chomp
puts "==============================="
#
# # #---Destination-------------------------------------------------
print "Please enter destination line: "
end_line = gets.chomp
print "Please enter destination station: "
end_stn = gets.chomp
puts "==============================="
#
# #---Trip Display--------------------------------------------------
puts "=========Chosen Trip==========="
puts "-------------------------------"
puts "Departing: #{start_line} Line, #{start_stn} station"
puts "-------------------------------"
puts "Arriving: #{end_line} Line, #{end_stn} station"

start_stn_num = mta.index(start_line)
p start_stn_num






#
