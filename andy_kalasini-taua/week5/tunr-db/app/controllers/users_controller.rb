class UsersController < ApplicationController
  def new
    @user = User.new # make a blank User object to give to 'form_with' in the template
  end

  def create
    User.create user_params
  end

  def index
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
