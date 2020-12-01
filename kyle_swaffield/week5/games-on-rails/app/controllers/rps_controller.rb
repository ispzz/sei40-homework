class RpsController < ApplicationController
  def form
  end
  def result
    @user = params[:rps]
    array = ['Rock','Paper','Scissors']
    num = rand 0..2
    @comp_choice = array[num]
    comp = "Computer Wins, better luck next time."
    use = "Well done, You win."

    if @user == @comp_choice
      @result = "Draw"
    elsif ((@comp_choice == "Rock" && @user == "Scissors") || (@comp_choice == "Paper" && @user == "Rock") || (@comp_choice == "Scissors" && @user == "Paper"))
      @result = comp
    else ((@comp_choice == "Rock" && @user == "Paper") || (@comp_choice == "Paper" && @user == "Scissors") || (@comp_choice == "Scissors" && @user == "Rock"))
      @result = use
    end
  end
end
