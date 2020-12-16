class GradesController < ApplicationController
  def new
    @grade = Grade.new
  end

  def create
    Grade.create grade_params
    redirect_to grades_path
  end

  def index
    @grades = Grade.all
  end

  def show
    @grade = Grade.find params[:id]
  end

  def edit
    @grade = Grade.find params[:id]
  end

  def update
    grade = Grade.find params[:id]
    grade.update grade_params
    redirect_to grade_path(grade.id)
  end

  def destroy
    Grade.destroy params[:id]
    redirect_to grades_path
  end
  private
  def grade_params
    params.require(:grade).permit(:name,:image)
  end

end
