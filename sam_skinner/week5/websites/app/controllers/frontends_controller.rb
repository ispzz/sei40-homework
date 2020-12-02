class FrontendsController < ApplicationController
  # CREATE
  def new
    @frontend = Frontend.new
  end

  def create
    Frontend.create frontend_params
    redirect_to frontends_path
  end

  # READ
  def index
    @frontends = Frontend.all
  end

  def show
    @frontend = Frontend.find params[:id]
  end

  # UPDATE
  def edit
    @frontend = Frontend.find params[:id]
  end

  def update
    frontend = Frontend.find params[:id]
    frontend.update frontend_params
    redirect_to frontend_path(frontend.id)
  end

  # DESTROY
  def destroy
    Frontend.destroy params[:id]
    redirect_to frontends_path
  end

  private

  def frontend_params
    params.require(:frontend).permit(:name, :date_released, :logo)
  end
end
