class Scrabble
    
    def initialize
         # An instance variable so that we can use it in any method of this class
        @scores = {
            'a' => 1, 'e' => 1, 'i' => 1, 'o' => 1,
            'u' => 1, 'l' => 1, 'n' => 1, 'r' => 1,
            's' => 1, 't' => 1, 'd' => 2, 'g' => 2,
            'b' => 3, 'c' => 3, 'm' => 3, 'p' => 3,
            'f' => 4, 'h' => 4, 'v' => 4, 'w' => 4,
            'y' => 4, 'k' => 5, 'j' => 8, 'x' => 8,
            'q' => 10, 'z' => 10
        }
        # puts @scores
    end

    # takes in an argument of number
    def scrabble_score( word )
        # Start with a sum of zero and we can add the score of each letter to it
        total = 0

        #  .chars turn a string into an array of the letters then we can loop through
        # .each of those
        # can also do .each_char
        # For each letter, look up the score for the letter in our scores hash
        word.chars.each do |letter|
            # puts "letter: #{letter}"
            # puts "score: #{@scores[letter]}"
            total += @scores[letter]
        end # end word.each_char

        puts "The score of the word #{word} is #{total}."

    end # end scrabble_score

end # end Class Scrabble

scrabble = Scrabble.new
scrabble.scrabble_score( 'cabbage' )