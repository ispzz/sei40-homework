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
def calculator ()
  operation = display_menu
  first_number = getOperator
  second_number = getOperator
  result = case operation
  when '+' then add first_number, second_number
  when '-' then subtract first_number, second_number
  result
end

puts calculator
