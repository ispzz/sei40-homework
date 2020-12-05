class TeachersController < ApplicationController
  def new
    @teacher = Teacher.new
  end

  def create
    Teacher.create teacher_params
    redirect_to teachers_path
  end

  def index
    @teachers = Teacher.all
  end

  def show
    @teacher = Teacher.find params[:id]
    check_if_logged_in
  end

  def edit
    @teacher = Teacher.find params[:id]
  end

  def update
    teacher = Teacher.find params[:id]
    teacher.update teacher_params
    redirect_to login_path unless @teacher.user_id == @current_user.id
  end

  def destroy
    Teacher.destroy params[:id]
    redirect_to teacher_path
  end
  private
  def teacher_params
    params.require(:teacher).permit(:name, :image,:dob,:grade_id)
  end
end
