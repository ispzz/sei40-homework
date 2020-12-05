class MountainsController < ApplicationController

  def which_mountain
    puts "testing"

  end

  def mountain_one
    @title = 'Mount Everest'
  end


  def index
    @mountains = Mountain.all
  end

end
