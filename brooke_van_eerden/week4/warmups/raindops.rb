# ## Warmup - Raindrops
# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:
# - If the number contains 3 as a factor, output 'Pling'.
# - If the number contains 5 as a factor, output 'Plang'.
# - If the number contains 7 as a factor, output 'Plong'.
# - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
# ### Examples
# - 28 has 7 as a factor.
#  * In raindrop-speak, this would be a simple "Plong".
# - 1755 has 3 and 5 as factors.
#  * In raindrop-speak, this would be a "PlingPlang".
# - 34 has neither 3, 5 nor 7 as a factor.
#  * Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
# New file setup today. You will need to create a ```raindrops.rb``` file that can be executable in your terminal.
#
#
#


puts "What Number?"
number = gets.to_i

def raindrops number
output = ''
case number
when % 3 == 0 then output += "Pling"
when % 5 == 0 then output +=  "Plang"
when % 7 == 0 then output +=  "Plong"
else                output +=  "#{number}"
end
end
puts "input 28: #{raindrops 1755}"
#
# if number % 3 == 0 && number % 5 == 0 && number % 7 == 0
#     puts "PlingPlangPlong"
# elsif number % 3 == 0 && number % 5 == 0
#     puts "PlingPlang"
# elsif number % 5 == 0 && number % 7 == 0
#     puts "PlangPlong"
# elsif number % 7 == 0 && number % 3 == 0
#     puts "PlingPlong"
# elsif number % 3 == 0
#     puts "Pling"
# elsif number % 5 == 0
#     puts "Plang"
# elsif number % 7 == 0
#     puts "Plong"
# else
#   puts "Raindrop speak doesnt understand #{number}"
# end
