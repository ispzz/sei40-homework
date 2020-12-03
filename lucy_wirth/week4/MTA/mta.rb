# # MTA Lab
#
# ### Activity:
# - Students should create a program that models a simple subway system.
#
# - The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints:
#   + the stations the user must pass through, in order
#   + where to change lines, if necessary
#   + the total number of stops for the trip.
#
# - There are 3 subway lines:

def single_line_trip(line, start_station, end_station)
	mta = {
	  "nline" => ["Times Square", "34th", "28thn", "23rdn", "Union Square", "8th"],
	  "lline" => ["8th", "6th", "Union Square", "3rd", "1st"],
	  "sixline" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
	}

	start_index = mta[line].index( start_station )
	stop_index = mta[line].index( end_station )



puts "Hello world"

puts "start: #{ start_index }, end: #{ end_index }"

end

single_line_trip( 'nLine', '34th', '23rd'  )





# # Or something along those lines
# ```
#
# ### Hints:
# * Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# * Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# * A symbol can't just be a number!
# * Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# * Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# * The key to the lab is to find the __intersection__ of the lines at Union Square.
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
