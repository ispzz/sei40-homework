puts "===========BMI Calculator=============="

print "Enter your weight in Kilograms (kg): "
weight = gets.to_f

print "Enter your height in meters (m): "
height = gets.to_f

bmi = weight / height**2

puts "Your BMI measurement is #{bmi.round(2)}."
