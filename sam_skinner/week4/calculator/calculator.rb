require 'colorize'

puts 'Welcome to the Mathculator - Please select a operation to begin:'.red
puts '1) "+" addition of num1 and num2'
puts '2) "-" subtraction of num2 from num1'
puts '3) "*" multiplication of num1 and num2'
puts '4) "/" division of num1 by num2'
puts '5) "^" num1 to the power of num2'
puts '6) "v" square root of num1'
puts '7) "b" calculate BMI'
puts '8) "m" monthly mortgage repayments'
puts '9) "t" calculate trip time and costs'


loop do
  print 'Choose an operator ("q" to quit):  '.yellow
  operation = gets.chomp.downcase

  #first input
  if operation == "q"
    break
  elsif operation == "b"
    print 'Enter weight (kgs):  '
  elsif operation == "m"
    print 'Enter loan amount ($):  '
  elsif operation == "t"
    print 'Enter trip distance (kms):  '
  else
    print 'Enter first number:  '
  end
  num1 = gets.to_f


  #second input
  if operation == "b"
    print 'Enter height (cms):  '
    num2 = gets.to_f / 100
  elsif operation == "m"
    print 'Enter loan term (years):  '
    num2 = gets.to_i * 12
  elsif operation == "t"
    print 'Enter kms per litre:  '
    num2 = gets.to_f
  elsif operation != "v"
    print 'Enter second number:  '
    num2 = gets.to_f
  end


  #third input
  if operation == "m"
    print 'Enter interest rate (%):  '
    num3 = gets.to_f / 100
  elsif operation == "t"
    print 'Enter price per litre ($):  '
    num3 = gets.to_f
  end


  #forth input
  if operation == "t"
    print 'Enter speed (km/hr):  '
    num4 = gets.to_f
  end


  def bmi(mass, height)
    mass / height ** 2
  end #bmi


  def weight_status(bmi)
    case bmi
    when 0...18.5 then "Underweight".light_red
    when 18.5...25 then "Normal weight".green
    when 25...30 then "Overweight".light_red
    when 30...9999 then "Obese".red
    end
  end #weight_status


  def monthly_payments(loan, months, interest)
    loan * (interest * (1 + interest) ** months) / ((1 + interest) ** months - 1)
  end #monthly_payments


  def trip_time(distance, speed)
    distance / speed
  end #trip_time


  def trip_cost(distance, fuel, price)
    distance / fuel * price
  end #trip_cost


  case operation
  when "+" then puts "The result of #{num1} plus #{num2} is #{num1 + num2}".yellow
  when "-" then puts "The result of #{num1} minus #{num2} is #{num1 - num2}".yellow
  when "*" then puts "The result of #{num1} multiplied by #{num2} is #{num1 * num2}".yellow
  when "/" then puts "The result of #{num1} divided by #{num2} is #{num1 / num2}".yellow
  when "^" then puts "The result of #{num1} to the power of #{num2} is #{num1 ** num2}".yellow
  when "v" then puts "The result of square rooting #{num1} is #{Math.sqrt(num1)}".yellow
  when "b" then puts "Your BMI is #{bmi(num1, num2).round(2)} which gives you a weight class of ".yellow + "#{weight_status(bmi num1, num2)}"
  when "m" then puts "A loan of #{num1.round(0)} over #{num2} months at #{num3 * 100}% interest will result in monthly payments of $#{monthly_payments(num1, num2, num3).round(0)}".yellow
  when "t" then puts "Your trip will take #{trip_time(num1, num4).round(2)} hours and will cost $#{trip_cost(num1, num2, num3).round(2)}".yellow
  end
end
