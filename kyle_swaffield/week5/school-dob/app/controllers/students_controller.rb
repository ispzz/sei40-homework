class StudentsController < ApplicationController
  def new
    @student = Student.new
  end

  def create
    Student.create student_params
    redirect_to students_path
  end

  def index
    @students = Student.all
  end

  def show
    @student = Student.find params[:id]
  end

  def edit
    @student = Student.find params[:id]
  end

  def update
    student = Student.find params[:id]
    student.update student_params
    redirect_to student_path(student.id)
  end

  def destroy
    Student.destroy params[:id]
    redirect_to students_path
  end
  private
  def student_params
    params.require(:student).permit(:name, :image, :dob, :grade_id, :teacher_id)
  end
end
