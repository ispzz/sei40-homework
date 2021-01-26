class Calculator
    # You should use define a Calculator class which uses the constructor function (`initialize`) to set the question, and an `answer` method to return the answer.
    def initialize( question )
        # get and set the question here
        @question = question
        puts "@question = #{question}"
        matches
    end

    # Create a method to grab "7", "minus", "5" from "What is 7 minus 5?"
    # get the first num, second num and the operator
    def matches
        @matches = @question.match(/(-?\d+) (plus|minus|divided by|multiplied by) (-?\d+)/)
        puts "@matches = #{@matches[1]}, #{@matches[2]}, #{@matches[3]}"
    end

    def first_int
        @matches[1].to_i
    end

    def second_int
        @matches[3].to_i
    end

    # Check if the operator matches +, -, *, /
    def operator
        case @matches[2]
        when "plus" then :+
        when "minus" then :-
        when "divided by" then :/
        when "multiplied by" then :*
        end
    end

    # Get the answer
    def answer
        @answer = first_int.send(operator, second_int)
        # 1.send(:+, 2) === 1 + 2
    end
end

a = Calculator.new( "What is -6 multiplied by 4?" )

puts a.answer