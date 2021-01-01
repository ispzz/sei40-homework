class CalculatorController < ApplicationController

  def do_calculation

    @first = params[:first].to_i
    @op = params[:op]
    @second = params[:second].to_i

    # @answer = case @op
    # when '+' then @first + @second
    # when '-' then @first - @second
    # when '*' then @first * @second
    # when 'div' then @first / @second
    # end

    @answer = @first.send( @op, @second )

  end



def form

end


end
