class PagesController < ApplicationController
  def home
    redirect_to grades_path
  end
end
