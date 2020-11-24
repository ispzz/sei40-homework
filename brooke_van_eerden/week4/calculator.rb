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
#
#

def what_process
  puts "what process are we using? (+,-, *, /, square_root)"
  process = gets.chomp
  process
end
#
  puts "Welcome to Bash_Calculator"
quit = "y"

# def bash_calculator
  until quit == "n"
    

    puts "what process are we using? (+,-, *, /, square_root)"
    process = gets.chomp
    if process == "square_root"
      puts "square root of what number?"
      first = gets.to_i

      total =  Math.sqrt(first)
      p "Your sum is #{total}"
    else
      puts "what is our first number?"
      first = gets.to_i
      puts "what is our second number?"
      second = gets.to_i


    if process == "+"
      total = first + second
      p "Your sum is #{first}#{process}#{second}=#{total}"
    elsif process == "-"
      total = first - second
        p "Your sum is #{first}#{process}#{second}=#{total}"
    elsif process == "*"
      total = first * second
        p "Your sum is #{first}#{process}#{second}=#{total}"
    elsif process == "/"
      total = first / second
        p "Your sum is #{first}#{process}#{second}=#{total}"
    elsif process == "square_root"

    else

      p "invalid equation"
    end #end if which sign
  end #end square_root
    # puts "Do you have another equation?(y/n)"
    quit = gets.chomp
  end # end until
  puts "goodbye"
# end# end function calc
