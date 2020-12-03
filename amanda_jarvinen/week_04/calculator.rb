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

# MENUS
def start_calculator
  display_title
  main_menu
end # start_calculator

def display_title
  puts "\n***********************"
  puts "  CALC the CALCULATOR   ".magenta
  puts "***********************\n\n"
end # display_title

def display_main_menu
  puts "Main Menu: ".magenta
  puts "1: Calculator"
  puts "2: Mortgage Calculator"
  puts "3: BMI Calculator"
  puts "4: Trip Calculator"
  puts "q: Quit"
  print "\nWhat would you like to use?  "
  gets.chomp.downcase
end # display

def main_menu
  option = display_main_menu

  case option
  when '1' then calculator
  when '2' then mortgage_calculator
  when '3' then bmi_calculator
  when '4' then trip_calculator
  when 'q' then return
  else          puts "Pick a valid option"
  end # case
end # main_menu

def display_calculator
  puts "\nCalculator Menu: ".magenta
  puts "+    : Addition"
  puts "-    : Subtraction"
  puts "*    : Multiplication"
  puts "/    : Division"
  puts "e    : Exponent"
  puts "sqrt : Square root"
  puts "m    : Return to main menu"
  puts "q    : Quit calculator"
  puts " "
  print "Which operation would you like to perform?  "
  gets.chomp
end # display_calculator

def end_message
  puts "\nWould you like to return to the main menu ('m') or quit ('q')?"
  selection = gets.chomp
  if selection == 'q'
    return
  else
    main_menu
  end
end # end_message

# CALCULATOR
def calculator
  loop do
    operation = display_calculator

    if operation == 'q'
      puts "\n\n***********************"
      return " Thanks for using CALC\n".magenta
    elsif operation == 'm'
      main_menu
    elsif operation == 'sqrt'
      first_number = getOperator
    else
      first_number = getOperator
      second_number = getOperator
    end

    result = case operation
    when '+'    then add first_number, second_number
    when '-'    then subtract first_number, second_number
    when '*'    then multiply first_number, second_number
    when '/'    then divide first_number, second_number
    when 'e'    then exponent first_number, second_number
    when 'sqrt' then square_root first_number
    else             "Invalid option. Pick from the menu.".red
    end
    puts "\n----------------"
    puts "#{first_number} #{operation} #{second_number} =  #{result}".blue
    puts "----------------\n\n"
  end # loop
end # calculator

def getOperator
  print "Enter a number: "
  gets.to_f
end # getOperator

def add(first_number, second_number)
  first_number + second_number
end # add

def subtract(first_number, second_number)
  first_number - second_number
end # subtract

def multiply(first_number, second_number)
  first_number * second_number
end # multiply

def divide(first_number, second_number)
  first_number / second_number
end # divide

def exponent(first_number, second_number)
  first_number ** second_number
end # exponent

def square_root(number)
  Math.sqrt(number)
end # square_root

# MORTGAGE CALCULATOR
def mortgage_calculator
  puts "\nMortgage Calculator: ".magenta

  print "How much is your principal?  "
  principal = gets.to_f

  print "What is your annual interest rate?  "
  interest_rate = gets.to_f

  print "How many payments ?  "
  number_payments = gets.to_f


  mortgage = calculate_mortgage(principal, interest_rate, number_payments)

  puts "\n----------------"
  puts "Monthly mortgage payment: $#{mortgage}.".blue
  puts "----------------\n\n"

  end_message
end # mortgage_calculator

def calculate_mortgage(principal, interest_rate, number_payments)
  monthly_interest_rate = interest_rate / 12

  p = principal
  r = monthly_interest_rate
  n = number_payments

  mortgage_repayments = p * ((r * ((1 + r) ** n) / (((1 + r) ** n) - 1)))
  mortgage_repayments.round(2)
end # calculate_mortgage

# BMI CALCULATOR
def bmi_calculator
  puts "\nBMI Calculator: ".magenta
  print "How much do you weigh (kg)?  "
  weight = gets.to_f
  print "How tall (m) are you?  "
  height = gets.to_f
  bmi = calculate_bmi(height, weight)

  puts "\n----------------"
  puts "Bmi = #{bmi}".blue
  puts "----------------\n\n"

  end_message
end # bmi_calculator

def calculate_bmi(height, weight)
  bmi = weight/(height**2)
  bmi = bmi.to_i
end # calculate_bmi

# TRIP CALCULATOR
def trip_calculator
  puts "\nTrip Calculator: ".magenta

  print "How far are you going (km)?  "
  distance = gets.to_f

  print "How fast do you travel (km/hr)?  "
  speed_hour = gets.to_i

  print "How many liters do you use per km?  "
  km_liter = gets.to_f

  print "How much do you pay per liter?  "
  price_liter = gets.to_f

  time = calculate_trip_time(distance, speed_hour)

  cost = calculate_trip_cost(distance, km_liter, price_liter)

  puts "\n----------------"
  puts "Trip cost: $#{cost}.".blue
  puts "Trip time: #{time} minutes.".blue
  puts "----------------\n\n"

  end_message
end # trip_calculator

def calculate_trip_time(distance, speed_hour)
  (distance / speed_hour * 3600 / 60).round(0)
end # calculate_trip_time

def calculate_trip_cost(distance, km_liter, price_liter)
  fuel = distance / km_liter
  cost = (fuel * price_liter).round(2)
end # calculate_trip_cost

# WAKE UP CAL
start_calculator
