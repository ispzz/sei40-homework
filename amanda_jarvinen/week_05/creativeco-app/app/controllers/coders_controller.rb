class CodersController < ApplicationController
  def new
    @coder = Coder.new
  end

  def create
  end

  def index
    @coders = Coder.all
  end

  def show
    @coder = Coder.find params[:id]
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
