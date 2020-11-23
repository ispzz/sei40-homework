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
def display_menu
  puts "***********************"
  puts "  CALC the CALCULATOR   ".magenta
  puts "***********************"
  puts "Menu:"
  puts "+ : Addition"
  puts "- : Subtraction"
  puts "* : Multiplication"
  puts "/ : Division"
  puts "q : Quit calculator"
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

def calculator ()
  operation = display_menu

  first_number = getOperator
  second_number = getOperator
  loop do
    operation = display_menu

    if operation == 'q'
      puts "\n\n***********************"
      return " Thanks for using CALC\n".magenta
    end

    first_number = getOperator
    second_number = getOperator

    result = case operation
    when '+' then add first_number, second_number
    when '-' then subtract first_number, second_number
    when '*' then multiply first_number, second_number
    when '/' then divide first_number, second_number
    else          "Invalid option. Pick from the menu.".red
    end

    puts "\n #{first_number} #{operation} #{second_number} =  #{result}\n\n".blue
  end # loop
end # calculator

puts calculator
