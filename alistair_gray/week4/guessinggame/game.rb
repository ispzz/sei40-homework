# puts "Guesssss the number game"
#
# puts "Guess a number between 0 and 10"
#
# answer = Random.rand(11)
# puts answer

#Tell this program that you want to use the library (gem)
require 'colorize'

print "Enter the max guess value: "
max_guess = gets.to_i

answer = Random.rand 0..max_guess

guess = -1

until guess == answer
  print "enter guess: "
  guess = gets.to_i

  if guess > answer
    puts "wrong, too high".red
  elsif guess < answer
    puts "wrong, too low".blue
  end
end

puts "congrats you got it".green


# if
#   guess > answer
#   then
#   puts "Wrong, too high! Try again"
#   guessgame
# elsif
# guess < answer
# then
# puts "Wrong, too low! Try again"
# guess = gets.to_i
# elsif
#   guess == answer
#   puts "Well done you got it right"
# end

# when < answer then puts "Wrong, too low! Try again"
# when == answer then put "Well done! You got the right answer"
# end
