class SecretController < ApplicationController


  def ask
  end

  def answer
    @random_number = ("0".."10").to_a.sample

     @guess = params[:answer]





    if @random_number == params[:answer]
      @result = "You guessed right, well done!"
    else
      @result = "Sorry that is not right, the number was #{@random_number}"
    end

  end

end
