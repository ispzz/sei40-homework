class ApplicationController < ActionController::Base
  before_action :fetch_user

  def fetch_user
    #check if the user_id in the session hash is the ID
    #of a real user in our users table: if its

    if session[:user_id].present?
      @current_user = User.find_by id: session[:user_id] # find_by fails quietly
    end
    # if we did get nil then delete session
    session[:user_id] = nil unless @current_user.present?
  end

  def check_if_logged_in
    # if request coming from user that is not logged in redirect to login page to lock down routes

    unless @current_user.present?
      flash[:error] = "You must be logged in to acces this page"
      redirect_to login_path
    end

  end
end
