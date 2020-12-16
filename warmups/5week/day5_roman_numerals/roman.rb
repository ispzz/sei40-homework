class Roman
    def initialize
        # An instance variable so that we can use it in any method of this class
        @roman_map = {
            1000 => 'M',
             900 => 'CM',
             500 => 'D',
             400 => 'CD',
             100 => 'C',
              90 => 'XC',
              50 => 'L',
              40 => 'XL',
              10 => 'X',
               9 => 'IX',
               5 => 'V',
               4 => 'IV',
               1 => 'I'
          }
    end

    def to_roman( number )

        # create a variable to store the result
        result = ''

        # loop through @roman_map??? compare to number??
        @roman_map.each do |key, value|

            puts "===== key: #{key}, value: #{value} ====="

            while number >= key

                puts "while #{number} >= #{key}"

                result += value # result = 'M'
                puts "key: #{key}, result: #{result}, number: #{number}"

                number -= key
                puts "new number: #{number}, new result: #{result}"
                puts "-----------------"

            end # while end

        end # end @roman_map.each

        # return the final result
        result

    end # to_roman end

end # class end

roman = Roman.new
puts roman.to_roman( 1990 )