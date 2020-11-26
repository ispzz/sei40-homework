puts "What is the current temperature?"

# User is prompted to input the current temperature

temp = gets.to_f #Changes input to float

puts "Is the A/C working? (y/n)"

# User is prompted to input if the a/c is working

air_con = gets.chomp.downcase

puts "What temperature do you desire?"

# User is prompted to input a new temperature

new_temp = gets.to_f #Changes input to float

# p temp, air_con, new_temp

if
  air_con == "y" && temp > new_temp
  then
  puts "Turn on A/C please"
elsif
  air_con == "y" && temp == new_temp
  then
  puts "Looking good"
elsif
  air_con == "n" && temp > new_temp
  then
  puts "Fix A/C please"
elsif
  air_con == "n" && temp < new_temp
  then
  puts "Please fix A/C whenever you have a chance, it's cool"
else
  puts "I don't know what you want"
end
