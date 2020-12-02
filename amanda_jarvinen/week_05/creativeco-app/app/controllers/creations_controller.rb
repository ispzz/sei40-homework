class CreationsController < ApplicationController
  def new
    @creation = Creation.new
  end

  def create
    
  end

  def index
    @creations = Creation.all
  end

  def show
    @creation = Creation.find params[:id]
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
