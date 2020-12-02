class RpsController < ApplicationController

  def play
  end

  def throw
    rps = [ 'scissors', 'paper', 'rock'  ]
    @computer = rps.sample
    @you = params[:throw]

    @winner = 'You Won.'
    @winner = 'It is a draw' if @computer == @you

    position = rps.index(@you) - rps.index(@computer)
    if position.abs == 1 && rps.index(@computer) < rps.index(@you)
      @winner = 'Computer Won.'
    elsif position == -2
      @winner = 'Computer Won.'
    end
  end
end
