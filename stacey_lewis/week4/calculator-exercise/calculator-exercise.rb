

require 'colorize'#this tells ruby that they want to use this library

#mortage calculation
def loan_calc(loan_amount,interest_rate,loan_term,loan_type)
  if loan_type.downcase == "pi"
    r = interest_rate/12
    n = loan_term*12
    d = ( ( ( (1+r)**n) - 1) / (r*(1+r)**n))
    result = loan_amount/d

  elsif loan_type.downcase == "io"
    r = interest_rate/12
    result = loan_amount * r
  end #end if
end


#calculator operations
def multiplication(first, second)
  result = first * second
end

def division(first, second)
  result = first / second
end

def addition(first, second)
  result = first + second
end

def subtraction(first, second)
  result = first - second
end

def square_root(first)
  result = Math.sqrt(first).round(1)
end

def exponent(first, second)
  result = first**second
end



#BMI calculation
def bmi(height,weight)
  result = weight / (height/100)**2
end


#trip calculation
def trip_calc(distance,fuel,consumption)
  result = (distance/100) * consumption * (fuel/100)
end



#main calculation
tool_choice = 0
until tool_choice == "x"

  puts "What do you want to do today? Chose from one of the following options:"
  puts "a: use calculator"
  puts "b: calculate monthly mortage repayments"
  puts "c: calculate BMI"
  puts "d: calculate trip time & cost"
  puts "x: exit program"

  tool_choice = gets.chomp
    if tool_choice == "a"
      puts "You chose calculator"

      calculation_choice = 0
      until calculation_choice == "x"

      puts "What calculation do you want to do today? Choose from the following options:"
      puts "a: multiplication"
      puts "b: division"
      puts "c: addition"
      puts "d: subtraction"
      puts "e: square root"
      puts "f: exponent"
      puts "x: back to main menu"


      calculation_choice = gets.chomp

      if calculation_choice == "a" #multiplication
        puts "What is the first number you want to multiply?"
        first = gets.to_i
        puts "What is the second number you want to multiply?"
        second = gets.to_i
        multiple = multiplication(first, second)
        puts "#{first} times #{second} equals #{multiple}"
      # end

      elsif calculation_choice == "b" #division
        puts "What is the denominator?"
        first = gets.to_i
        puts "What is the numerator?"
        second = gets.to_i
        divide = division(first, second)
        puts "#{first} divided by #{second} equals #{divide}"
      # end

      elsif calculation_choice == "c" #addition
        puts "What is the first number you want to add?"
        first = gets.to_i
        puts "What would you like to add to that number?"
        second = gets.to_i
        add = addition(first, second)
        puts "#{first} plus #{second} equals #{add}"
      # end

      elsif calculation_choice == "d" #subtraction
        puts "What is the starting number?"
        first = gets.to_i
        puts "What number do you want to subtract from it?"
        second = gets.to_i
        subtract = subtraction(first, second)
        puts "#{first} less #{second} equals #{subtract}"
      # end

      elsif calculation_choice == "e" #square root
        puts "What number do you want to know the square root of?"
        first = gets.to_i
        square_calc = square_root(first)
        puts "The square root of #{first} equals #{square_calc}"

      elsif calculation_choice == "f" #exponent
        puts "What is the starting number?"
        first = gets.to_i
        puts "What is the exponent"
        second = gets.to_i
        exp = exponent(first, second)
        puts "#{first} to the power of #{second} equals #{exp}"

      elsif calculation_choice == "x"
        break

      end # end else if

    end #calculator loop

 #mortage calculator
  elsif tool_choice == "b"
    puts "You chose mortage repayment calculator"
    puts "How much is your loan?"
    loan_amount = gets.to_i
    puts "What is your interest rate? (e.g. enter 0.05 for 5%)"
    interest_rate = gets.to_f
    puts "What is your loan term (years)?"
    loan_term = gets.to_i
    puts "Is the loan interest only (IO), or principal and interest (PI)?"
    loan_type = gets.chomp
    loan = loan_calc(loan_amount,interest_rate,loan_term, loan_type)
      if loan_type == "pi"
        loan_type_text = "principal & interest"
      else
        loan_type_text = "interest only"
      end
    puts "Your monthly repayment amount for a #{loan_type_text} for $#{loan_amount} at #{interest_rate*100}% interest rate, over #{loan_term} years is $#{loan.round(1)} per month"

  #BMI calculator
  elsif tool_choice == "c"
    puts "You chose BMI calculator"
    puts "What is your height (in cms)?"
    height = gets.to_f
    puts "What is your weight (in kgs)?"
    weight = gets.to_f
    bmi_calc = bmi(height, weight)
    puts "Your BMI is #{bmi_calc.round(1)}"
      if bmi_calc < 18.5
        puts "Your are considered underweight"
      elsif bmi_calc > 30
        puts "You are considered obese"
      elsif bmi_calc >= 18.5 && bmi_calc < 26
        puts "You are considered normal weight"
      elsif bmi_calc >= 25 && bmi_calc < 30
        puts "You are considered overweight"
      end

      #trip calculator
  elsif tool_choice == "d"
    puts "You chose trip cost calculator"
    puts "How far are you going (kms)?"
    distance = gets.to_f
    puts "How much was fuel (cents per litre - number only)?"
    fuel = gets.to_f
    puts "What is your vehicle's average fuel consumption (litres per 100 kms)"
    consumption = gets.to_f
    trip = trip_calc(distance,fuel,consumption)
    puts "for a trip of #{distance}kms, at #{fuel} cents per litre, with your car's consumption of #{consumption} litres per 100 kilometres, your trip will cost $#{trip}"

  elsif tool_choice == "x"
    puts "See you again soon!"
    break

  end

end #end loop

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
