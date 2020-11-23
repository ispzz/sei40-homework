# Calculator
# Explanation
# You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# The menu should be displayed again, and process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
require 'colorize'


# Display menu and retrieve inputs
def display_title
  puts "***********************"
  puts "  CALC the CALCULATOR   ".magenta
  puts "***********************\n\n"
end

def display_main_menu
  puts "Main Menu: ".magenta
  puts "1: Calculator"
  puts "2: Mortgage Calculator"
  puts "q: Quit"
  print "\nWhat would you like to do?  "
  gets.chomp
end

def main_menu
  display_title

  option = display_main_menu

  case option
  when '1' then calculator
  # when '2' then mortgage_calculator
when 'q' then return
  else          puts "Pick a valid option"
  end

end

def display_calculator
  puts "\nCalculator Menu: ".magenta
  puts "+    : Addition"
  puts "-    : Subtraction"
  puts "*    : Multiplication"
  puts "/    : Division"
  puts "e    : Exponent"
  puts "sqrt : Square root"
  puts "q    : Quit calculator"
  puts " "
  print "Which operation would you like to perform?  "
  gets.chomp
end


def getOperator
  print "Enter a number: "
  gets.to_f
end

# Calculations
def add(first_number, second_number)
  first_number + second_number
end

def subtract(first_number, second_number)
  first_number - second_number
end

def multiply(first_number, second_number)
  first_number * second_number
end

def divide(first_number, second_number)
  first_number / second_number
end

def exponent(first_number)
  Math.exp(first_number)
end

def square_root(number)
  Math.sqrt(number)
end

def calculator
  loop do
    operation = display_calculator

    if operation == 'q'
      puts "\n\n***********************"
      return " Thanks for using CALC\n".magenta
    elsif operation == 'sqrt' || operation =='e'
      first_number = getOperator
    else
      first_number = getOperator
      second_number = getOperator
    end


    result = case operation
    when '+' then add first_number, second_number
    when '-' then subtract first_number, second_number
    when '*' then multiply first_number, second_number
    when '/' then divide first_number, second_number
    when 'e' then exponent first_number
    when 'sqrt' then square_root first_number
    else          "Invalid option. Pick from the menu.".red
    end
    puts "\n----------------"
    puts "#{first_number} #{operation} #{second_number} =  #{result}".blue
    puts "----------------\n\n"
  end # loop
end # calculator

puts main_menu

# Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour
