class RpsController < ApplicationController

def play
end

def result
  array = ["Rock","Scissors","Paper"]

  @computer_guess = array.sample
  # puts computer_guess


    if @computer_guess == params[:guess].to_s
      @result = "It's a draw. If you aren't winning, your losing though right?"
    elsif (@computer_guess == "Rock" && params[:guess] == "Paper") |
       (@computer_guess == "Paper" && params[:guess] == "Scissors") |
       (@computer_guess == "Scissors" && params[:guess] == "Rock")
       @result = "You win, you are really good at this. Like, Wow."
    else @result = "Sorry, you lose! Don't give up your day job?"
  end


end
  


end
