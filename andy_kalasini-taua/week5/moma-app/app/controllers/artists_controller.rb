class ArtistsController < ApplicationController

  # Create ###################

  # 1. new (blank form)
def new
 @artist = Artist.new
end

  #2. create (form submits here, add to DB, redirect)
def create
  # raise 'hell' force an error, so we can debug in the web console

#Try to just pass the hash of form values to .create - so much quicker!
  # Artist.create params[:artist]
  # NOT SECURE!! We dont just let through

  # Srong Params:
  # We write a method in the private section of this controller
  # which acts as a doorman to check the fields were passing in form the form via params - only the approved
  Artist.create artist_params

  redirect_to artists_path

end
  # Read ################

  #  1. index (all rows)
def index
 @artists = Artist.all
end

  # 2. show (details about one row, by ID)
def show
  @artist = Artist.find params[:id]
end
  # Update ###############

  #  1. edit (show pre-populated form, i.e also get row gby ID)
def edit
  @artist = Artist. find params[:id]
end
  # 2. update (form submits here, update DB, redirect to show)
def update
  artist = Artist.find params[:id]
  artist.update artist_params
  redirect_to artist_path(artist.id)
end
  # Delete ################

  # 1. destroy (remove row from DB, redirect to index)
def destroy
  Artist.destroy params[:id]
  redirect_to artists_path
end

 # methods defined below the privat heading are for internal use only by the actions of this controller;
 # this is, they are NOT the handlers for routes defined in routes.rb
private

def artist_params
  # Make sure the artist key is set and only let through the approved form fields from within that
  params.require(:artist).permit(:name, :nationality, :dob, :period, :roundness, :bio, :image)

end

end # ArtistsController
