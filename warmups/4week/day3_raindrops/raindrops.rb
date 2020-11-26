# - If the number contains 3 as a factor, output 'Pling'.
# - If the number contains 5 as a factor, output 'Plang'.
# - If the number contains 7 as a factor, output 'Plong'.

def raindrops(number)

    output = ''
    if number % 3 == 0
        output += 'Pling'
    end
    output += 'Plang' if number % 5 == 0
    output += 'Plong' if number % 7 == 0

    # if output.empty?
    #     return number
    # end
    return number if output.empty?

    output
    
end

puts "input 6: #{raindrops(6)}"
puts "input 10: #{raindrops(10)}"
puts "input 28: #{raindrops(28)}"
puts "input 34: #{raindrops(34)}"
puts "input 1755: #{raindrops(1755)}"
