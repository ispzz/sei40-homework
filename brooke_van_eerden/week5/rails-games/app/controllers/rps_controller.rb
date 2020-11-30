class RpsController < ApplicationController

  def choice
  end

  def show
    @player_one_choice = params[:player_one_choice]

    @computer_choice = ['rock', 'paper' , 'scissors'].sample
    @player_two_choice = @computer_choice


    if @player_one_choice == 'rock' && @player_two_choice == 'scissors'
       @who_won = "Player One Wins"

    elsif @player_one_choice == 'rock' && @player_two_choice == 'paper'
      @who_won = "Computer Wins"

    elsif @player_one_choice == 'paper' && @player_two_choice == 'scissors'
      @who_won ="Computer Wins"

    elsif @player_one_choice == 'paper' && @player_two_choice == 'rock'
      @who_won = "Player One Wins"

    elsif @player_one_choice == 'scissors' && @player_two_choice == 'paper'
       @who_won ="Player One Wins"

    elsif @player_one_choice == 'scissors' && @player_two_choice == 'rock'
       @who_won ="Computer Wins"

    elsif @player_one_choice == @player_two_choice
      @who_won = "It's a draw."
    end

  end

end
