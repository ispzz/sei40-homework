class SecretController < ApplicationController

def input_form
end

def show
  @secret = Random.rand(10)
  @guess = params[:number].to_i
  @win_lose = nil
  case @win_lose
  when @secret == @guess then @win_lose = "Congratulations You Guessed Right"
  else                       @win_lose =  "Sorry that was not the Secret Number"
  end
end

end
