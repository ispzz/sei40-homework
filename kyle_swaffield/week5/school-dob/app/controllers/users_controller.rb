class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create user_params

    if @user.persisted?
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render :new
    end

  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
  def user_params
  params.require(:user).permit(:name,:email, :password, :password_confirmation)
  end
end
