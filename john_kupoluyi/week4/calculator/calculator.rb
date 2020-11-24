puts "========CALCULATOR 1.0============"

def get_operation operator
  case operator
  when "1" then add
  when "2" then substract
  when "3" then multiply
  when "4" then divide
  when "5" then sqrt
  when "6" then exponent
  else "exit"
  end
end

def get_numbers
  print "Enter the first number: "
  first_number = gets.to_f

  print "Enter the second number: "
  second_number = gets.to_f

  return first_number, second_number
end

def add
  numbers = get_numbers
  numbers.first + numbers.last
end

def substract
  numbers = get_numbers
  numbers.first - numbers.last
end

def multiply
  numbers = get_numbers
  numbers.first * numbers.last
end

def divide
  numbers = get_numbers
  numbers.first / numbers.last
end

def exponent
  numbers = get_numbers
  numbers.first**numbers.last
end

def sqrt
  print "Enter a number: "
  number = gets.to_f
  Math.sqrt(number)
end

loop do
  puts "Select the number that correspond to the operation you want to perform."

  puts ""
  puts "1. for Addition (a + b)."
  puts "2. for Substraction (a - b)."
  puts "3. for Multiplication (a * b)."
  puts "4. for Division (a / b)."
  puts "5. for Square Root (sqrt of a)"
  puts "6. for exponents (a ^ b)"
  puts "9. to close calculator."
  puts ""

  operator = gets.chomp

  if operator == "9"
    puts "Quiting calculator..."
    break
  end

  puts "Result of the operation is #{get_operation operator}"
  puts ""
end
