puts "Which suburb do you live in?"

suburb = gets.chomp.downcase
#
# if
#   suburb == "geelong"
#   then
#   puts "Gee that's a long way to go"
# elsif
#   suburb == "melbourne"
#   then
#   puts "There are 30 cafes in your location"
# elsif
#   suburb == "brighton"
#   then
#   puts "Well how do you do"
# end

# case suburb
# when "bondi"   then puts "nice shoes"
# when "manly"   then puts "Surfs up"
# when "newtown" then puts "cool tat"
# else                puts "cool man"
# end

output = case suburb
when "bondi"   then "nice shoes"
when "manly"   then "Surfs up"
when "newtown" then "cool tat"
else                "cool man"
end

puts output
