# Plain:  a b c d e f g h i j k l m n o p q r s t u v w x y z
# Cipher: z y x w v u t s r q p o n m l k j i h g f e d c b a

class Atbash
    # So remember we want to create an intialize method because this will be called whenever the .new method is called on the class Atbash
    # I can also pass an argument when we the .new method so maybe for this warmup I want to give it the word and I want to encode or decode
    def initialize( input 
        @word = input.downcase
        # Create a range of all the letters between "a" to "z" then convert to an array
        @alphabet = ("a".."z").to_a
        # Create another array that is just the reversed alphabet array
        @reversed_alphabet = @alphabet.reverse
    end

    def encode
        # Start off with an empty string so I can add the encoded characters to this.
        message = ""


        @word.each_char do |letter|

            # Get index of whichever letter we are on in the alphabet array
            index = @alphabet.index(letter)
            # puts index
            # Now that I have that index I can find the letter at the position in the reversed alphabet
            cipher = @reversed_alphabet[index]
            # puts "Letter = #{letter}, Index = #{index}, Reversed letter = #{cipher}"

            # Instead of using += we can use this operator << but it's normally used with arrays
            message += cipher

        end # @word.each_char end
        # Implicit return
        message
    end
end

cipher = Atbash.new "test"
puts cipher.encode

cipher = Atbash.new "gvhg"
puts cipher.encode