class SecretController < ApplicationController

  def play

  end

  def guess
    @myguess = params[:guess]
    @computer =  (1..10).to_a.sample
    @result = @computer == params[:guess].to_i ? true : false
  end

end
