puts "Welcome to Raindrops by Ruby"
input = nil

until input == "q"
print "Please enter a number or quit (q)"
input = gets.to_i

  if
    input % 3 == 0 && input % 5 == 0
    then
    puts "PlingPlang"
  elsif
    input % 3 == 0 && input % 7 == 0
    then
    puts "PlingPlong"
  elsif
    input % 5 == 0 && input % 7 == 0
    then
    puts "PlangPlong"
  elsif
    input % 3 == 0 then puts "Pling"
  elsif
    input % 5 == 0 then puts "Plang"
  elsif
    input % 7 == 0 then puts "Plong"
  else
    puts "#{input} has neither 3, 5 or 7 as a factor"
  end
end
