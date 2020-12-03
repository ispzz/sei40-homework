class SecretController < ApplicationController
  def form
  end
  def result
    @guess = params[:number]
    @num = rand 1..25
  end
end
