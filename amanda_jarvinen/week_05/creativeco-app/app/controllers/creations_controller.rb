class CreationsController < ApplicationController
  def new
    @creation = Creation.new
  end

  def create
    Creation.create creation_params
    redirect_to creations_path
  end

  def index
    @creations = Creation.all
  end

  def show
    @creation = Creation.find params[:id]
  end

  def edit
    @creation = Creation.find params[:id]
  end

  def update
    creation = Creation.find params[:id]
    creation.update creation_params
    redirect_to creation_path(creation.id)
  end

  def destroy
    Creation.destroy params[:id]
    redirect_to creations_path # back to index
  end

  def creation_params
    params.require(:creation).permit(:title, :medium, :image_url, :coder_id)
  end

end
