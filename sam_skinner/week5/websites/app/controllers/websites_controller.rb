class WebsitesController < ApplicationController
  # CREATE
  def new
    @website = Website.new
  end

  def create
    Website.create website_params
    redirect_to websites_path
  end

  # READ
  def index
    @websites = Website.all
  end

  def show
    @website = Website.find params[:id]
    @hacked = @website.hacked ? 'Yes' : 'No'
  end

  # UPDATE
  def edit
    @website = Website.find params[:id]
  end

  def update
    website = Website.find params[:id]
    website.update website_params
    redirect_to website_path(website.id)
  end

  # DESTROY
  def destroy
    Website.destroy params[:id]
    redirect_to websites_path
  end

  private

  def website_params
    params.require(:website).permit(:name, :frontend_id, :backend_id, :launched, :hacked, :domain, :owned_by, :wiki)
  end
end
