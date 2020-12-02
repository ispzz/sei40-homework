class BackendsController < ApplicationController
  # CREATE
  def new
    @backend = Backend.new
  end

  def create
    Backend.create backend_params
    redirect_to backends_path
  end

  # READ
  def index
    @backends = Backend.all
  end

  def show
    @backend = Backend.find params[:id]
  end

  # UPDATE
  def edit
    @backend = Backend.find params[:id]
  end

  def update
    backend = Backend.find params[:id]
    backend.update backend_params
    redirect_to backend_path(backend.id)
  end

  # DESTROY
  def destroy
    Backend.destroy params[:id]
    redirect_to backends_path
  end

  private

  def backend_params
    params.require(:backend).permit(:name, :date_released, :logo)
  end
end
