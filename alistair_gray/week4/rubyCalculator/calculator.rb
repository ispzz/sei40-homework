puts "=============================="
puts "Welcome to the Calculator"
puts "=============================="
puts "=============================="

require 'colorize'

  puts "Please choose from the following options"
  puts "+ Addition".blue
  puts "- Subtraction".red
  puts "* Multiplication".green
  puts "/ Division".yellow
  puts "** Exponential"
  puts "sqr Square Root"

input = nil

until input == "q"
  print "Choose a method or quit (q): "
  input = gets.chomp

  if
    input == "+"
    puts "Addition Selected"
    print "First Number: "
    first_num = gets.to_i
    print "First Number: "
    second_num = gets.to_i
    puts "Answer is #{first_num + second_num}"
  elsif
    input == "-"
    puts "Subtraction Selected"
    print "First Number: "
    first_num = gets.to_i
    print "First Number: "
    second_num = gets.to_i
    puts "Answer is #{first_num - second_num}"

  elsif
    input == "*"
    puts "Multiplication Selected"
    print "First Number: "
    first_num = gets.to_i
    print "First Number: "
    second_num = gets.to_i
    puts "Answer is #{first_num * second_num}"

  elsif
    input == "/"
    puts "Division Selected"
    print "First Number: "
    first_num = gets.to_i
    print "First Number: "
    second_num = gets.to_i
    puts "Answer is #{first_num / second_num}"

  elsif
    input == "**"
    puts "Exponential Selected"
    print "First Number: "
    first_num = gets.to_i
    print "First Number: "
    second_num = gets.to_i
    puts "Answer is #{first_num ** second_num}"

  elsif
    input == "sqr"
    puts "Exponential Selected"
    print "Enter Number: "
    first_num = gets.to_i
    puts "Answer is #{Math.sqrt(first_num)}"

  end

end

## Function that takes 2 number inputs
# def num_inputs
#   print "First Number: "
#   first_num = gets.to_i
#   print "Second Number: "
#   second_num = gets.to_i
# end
