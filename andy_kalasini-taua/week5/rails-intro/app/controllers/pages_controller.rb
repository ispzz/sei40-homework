
class PagesController < ApplicationController

  def say_hello
    puts "Got to say_hello method"
  end

  def haha
    # render plain: 'Lol'
    @title = 'Smoking Dogs'
  end

  def greet
    @recipient = params[:person]
  end


end
