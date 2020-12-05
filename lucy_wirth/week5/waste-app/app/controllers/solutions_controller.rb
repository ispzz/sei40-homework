class SolutionsController < ApplicationController

  # Create

  def new
    @solution = Solution.new
  end

  def create
    # raise 'hell'
    Solution.create solution_params  # use strong (filtered) params!
    redirect_to solutions_path   # back to the index
  end

  # Read

  def index
    @solutions = Solution.all
  end

  def show
    @solution = solution.find params[:id]
  end

  def edit
    @solution = solution.find params[:id]
  end

  def update
    solution = solution.find params[:id]
    solution.update solution_params  # use strong params
    redirect_to solution_path(solution.id)
  end

  def destroy
    solution.destroy params[:id]
    redirect_to solutions_path  # back to index
  end

  private

  def solution_params
    params.require(:solution).permit(:action, :summary, :image, :links, :waste_id)
  end

end  # class solutionsController
