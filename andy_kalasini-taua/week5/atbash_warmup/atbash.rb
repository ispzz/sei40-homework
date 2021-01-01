class Atbash

    def initialize( input )
      @word = input.downcase
      @alphabet = ("a".."z").to_a
      @reversed_alphabet = @alphabet.reverse
    end

  def encode

      message = ""

        @word.each_char do |letter|

        index = @alphabet.index(letter)
        cipher = @reversed_alphabet[index]
        puts "Letter #{letter}, Index = #{index}, Reversed letter = #{cipher}"

        message += cipher

        end
        message
    end
  end

cipher = Atbash.new "text"
puts cipher.encode

cipher = Atbash.new "gvhg"
puts cipher.encode
