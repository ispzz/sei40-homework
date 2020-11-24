puts "=====================Trip Calculator================"

print "What distance, in miles, are your travelling: "
distance = gets.to_f

print "What is your travel speed per hour: "
speed = gets.to_f

print "How much is a price per gallon of fuel: "
price_per_gallon = gets.to_f

print "How much gallon of fuel is required per mile: "
miles_per_gallon = gets.to_f

def trip_time distance, speed
  distance / speed
end

def trip_cost  distance, price_per_gallon, miles_per_gallon
  fuel_consumed = distance * miles_per_gallon
  fuel_consumed * price_per_gallon
end

puts "Trip Time: #{trip_time distance, speed}"
puts "Trip Cost: #{trip_cost distance, price_per_gallon, miles_per_gallon}"
