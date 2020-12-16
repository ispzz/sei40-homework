class CodersController < ApplicationController
  def new
    @coder = Coder.new
  end

  def create
    Coder.create coder_params
    redirect_to coders_path
  end

  def index
    @coders = Coder.all
  end

  def show
    @coder = Coder.find params[:id]
  end

  def edit
    @coder = Coder.find params[:id]
  end

  def update
    coder = Coder.find params[:id]
    coder.update coder_params
    redirect_to coder_path(coder.id)
  end

  def destroy
    Coder.destroy params[:id]
    redirect_to coders_path # back to index
  end

  def coder_params
    params.require(:coder).permit(:name, :nationality, :image_url, :bio, :portfolio_url, :instagram_url)
  end
end
