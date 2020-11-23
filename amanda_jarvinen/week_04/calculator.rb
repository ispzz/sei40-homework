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
