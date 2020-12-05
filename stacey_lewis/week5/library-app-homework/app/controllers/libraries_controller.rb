class LibrariesController < ApplicationController

  def new
    @library = Library.new
  end

  def create
    Library.create library_params
    redirect_to libraries_path
  end

  def index
    @libraries = Library.all
  end

  def show
    @library = Library.find params[:id]
  end

  def edit
    @library = Library.find params[:id]

  end

  def update
    library = Library.find params[:id]
    library.update library_params
    redirect_to library_path(library.id)
  end

  def destroy
    Library.destroy params[:id]
    redirect_to libraries_path
  end

  private

  def library_params
    params.require(:library).permit(:name,:address,:city,:postcode,:opening_hours,:logo)
  end

end
