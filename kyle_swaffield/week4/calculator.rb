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
require 'colorize'

def menu_write

  puts "Calculate".blue
  puts "1. Addition".light_blue
  puts "2. Subtraction".light_blue
  puts "3. Mulpiplication".light_blue
  puts "4. Division".light_blue
  puts "5. Exponents".light_blue
  puts "6. Square Root".light_blue
  puts "7. Mortgage Calculator".light_blue
  puts "8. BMI Calculator".light_blue
  puts "9. Trip Calculator".light_blue
  puts "0. Exit".red
end

def solicit(type)
  case type
  when 1
    puts "Numbers you would like to add?"
    print "Number 1: "
    num1= gets.to_i
    print "Number 2: "
    num2= gets.to_i
    print "Your answer is: ".yellow
    # ans=add_calc(num1,num2).to_s
    puts add_calc(num1,num2).to_s.green
    puts " "
when 2
    puts "Numbers you would like to subtract?"
    print "Number 1: "
    num1= gets.to_i
    print "Number 2: "
    num2= gets.to_i
    print "Your answer is: ".yellow
    puts sub_calc(num1,num2).to_s.green
    puts " "
when 3
    puts "Numbers you would like to Multipy?"
    print "Number 1: "
    num1= gets.to_i
    print "Number 2: "
    num2= gets.to_i
    print "Your answer is: ".yellow
    puts mul_calc(num1,num2).to_s.green
    puts " "
when 4
    puts "Numbers you would like to Divide?"
    print "Number 1: "
    num1= gets.to_f
    print "Number 2: "
    num2= gets.to_f
    print "Your answer is: ".yellow
    puts div_calc(num1,num2).to_s.green
    puts " "
when 5
    puts "Exponents?"
    print "Base: "
    num1= gets.to_i
    print "Power: "
    num2= gets.to_i
    print "Your answer is: ".yellow
    puts exp_calc(num1,num2).to_s.green
    puts " "
when 6
    puts "Square Root?"
    print "Number: "
    num1= gets.to_i
    print "Your answer is: ".yellow
    puts roo_calc(num1).to_s.green
    puts " "
when 7
    puts "Mortgage Calculator"
    print "Loan amount: "
    p=gets.to_f
    print "Interest rate: "
    r=gets.to_f
    print "Number of years: "
    t=gets.to_f
    print "Payments per year: "
    n=gets.to_f
    print "Your answer is: ".yellow
    puts mor_calc(p,r,t,n).to_s.green
    puts " "
when 8
    puts "BMI Calculator"
    print "mass (kg): "
    m=gets.to_f
    print "Height (m): "
    h=gets.to_f
    print "Your answer is: ".yellow
    puts bmi_calc(m,h).to_s.green
    puts " "
when 9
    puts "Trip Calculator"
    print "distance (km): "
    dist=gets.to_f
    print "Km per L: "
    kml=gets.to_f
    print "Price per L: "
    prl=gets.to_f
    print "Speed (Km/h): "
    speed=gets.to_f

    print "Your trip will take: ".yellow
    puts tri_time_calc(dist,speed).to_s.green
    print "Your trip will cost: ".yellow
    print "$".green
    puts tri_cost_calc(dist,kml,prl).round(2).to_s.green
    puts " "
  end
end

def add_calc(num1,num2)
  num1 + num2
end
def sub_calc(num1,num2)
  num1 - num2
end
def mul_calc(num1,num2)
  num1 * num2
end
def div_calc(num1,num2)
  (num1 / num2)
end
def exp_calc(num1,num2)
  (num1 ** num2)
end
def roo_calc(num1)
  Math.sqrt(num1)
end
def mor_calc(p,r,t,n)
  p * (r/n) * (((1+r/n)**n)*(t)) / (((1+r/n)**n)*(t)) - 1
end
def bmi_calc(m,h)
  m / (h)**2
end
def tri_cost_calc(dist,kml,prl)
  (prl/kml)*dist
end
def tri_time_calc(dist,speed)
  sec=((dist/speed)*3600).to_i
  min, sec = sec.divmod(60)
  hour, min = min.divmod(60)
  "%02d:%02d:%02d" % [hour, min, sec] # => "13:30:00"
end

choice=11
menu_write
until choice == 0 do

  case choice
  when 1
    solicit 1
    menu_write
    puts "Please type a number between 1 and 9"
  when 2
    solicit 2
    menu_write
    puts "Please type a number between 1 and 9"
  when 3
    solicit 3
    menu_write
    puts "Please type a number between 1 and 9"
  when 4
    solicit 4
    menu_write
    puts "Please type a number between 1 and 9"
  when 5
    solicit 5
    menu_write
    puts "Please type a number between 1 and 9"
  when 6
    solicit 6
    menu_write
    puts "Please type a number between 1 and 9"
  when 7
    solicit 7
    menu_write
    puts "Please type a number between 1 and 9"
  when 8
    solicit 8
    menu_write
    puts "Please type a number between 1 and 9"
  when 9
    solicit 9
    menu_write
    puts "Please type a number between 1 and 9"
  when 0
    puts "exit"
  else
    puts "Please type a number between 1 and 9"
  end
  choice=gets.to_i
end
