class BrandsController < ApplicationController

  # Create ###################

  # 1. new (blank form)
def new
 @brands = Brand.new
end

  #2. create (form submits here, add to DB, redirect)
def create
  # raise 'hell' force an error, so we can debug in the web console

#Try to just pass the hash of form values to .create - so much quicker!
  # Brand.create params[:brand]
  # NOT SECURE!! We dont just let through

  # Srong Params:
  # We write a method in the private section of this controller
  # which acts as a doorman to check the fields were passing in form the form via params - only the approved
  Brand.create brand_params

  redirect_to brands_path

end
  # Read ################

  #  1. index (all rows)
def index
 @brands = Brand.all
end

  # 2. show (details about one row, by ID)
def show
  @brand = Brand.find params[:id]
end
  # Update ###############

  #  1. edit (show pre-populated form, i.e also get row gby ID)
def edit
  @brands = Brand.find params[:id]
end
  # 2. update (form submits here, update DB, redirect to show)
def update
  @brands = Brand.find params[:id]
  brand.update brand_params
  redirect_to brand_path(brand.id)
end
  # Delete ################

  # 1. destroy (remove row from DB, redirect to index)
def destroy
  Brand.destroy params[:id]
  redirect_to brands_path
end

 # methods defined below the privat heading are for internal use only by the actions of this controller;
 # this is, they are NOT the handlers for routes defined in routes.rb
private

def brand_params
  # Make sure the brand key is set and only let through the approved form fields from within that
  params.require(:brand).permit(:name, :shoe_type, :origination, :influencer, :bio, :price, :image)

end

end
