
class WastesController < ApplicationController

  # Waste CRUD:

  # Create ####################

  # 1. new (blank form)
  def new
    # Make a blank Waste object - NOT in the DB yet, no ID;
    # we do this so the form_with helper knows what kind of form to show
    # (a Create form, instead of an Update form)
    @Waste = Waste.new
  end  # new

  # 2. create (form submits here, add to DB, redirect to index)
  def create
     # raise 'hell' # force an error, so we can debug in the web console

     # Waste.create
     # Waste.create(
     #   name: params[:Waste][:name],
     #   nationality: params[:Waste][:nationality],
     #   # etc...
     # )

     # Try to just pass the hash of form values to .create - so much quicker!
     # Waste.create params[:Waste]
     # NOT SECURE!! We don't just let through any old form fields that were submitted, because users can change them (i.e. in the Dev Tools)

     # Strong params:
     # We write a method in the 'private' section of this controller,
     # which acts as a 'doorman' to check the fields we're passing in from
     # the form via params - only the approved field are permitted through
     Waste.create Waste_params

     redirect_to wastes_path

  end  #create

  # Read ######################

  # 1. index (all rows)
  def index
    @wastes = Waste.all
  end  # index

  # 2. show (details about one row, by ID)
  def show
    @Waste = Waste.find params[:id]
  end # show


  # Update ####################

  # 1. edit (show pre-populated form, i.e. also get row by ID)
  def edit
    @Waste = Waste.find params[:id]
  end  #edit


  # 2. update (form submits here, update DB, redirect to show)
  def update
    waste = Waste.find params[:id]    # lookup the Waste by ID, first
    waste.update waste_params         # using strong params again to update
    redirect_to Waste_path(Waste.id)  # back to the show page
  end

  # Delete ####################

  # 1. destroy (remove row from DB, redirect to index)
  def destroy
    Waste.destroy params[:id]
    redirect_to wastes_path  # back to index
  end

  # Methods defined below the 'private' heading are for 'internal use' only
  # by the actions of this controller;
  # this is, they are NOT the handlers for routes defined in routes.rb
  private


  def Waste_params
    # Make sure the ':Waste' key is set, and only let through the approved form fields from within that
    params.require(:Waste).permit(:name, :landfill_weight_PA, :image)
  end



end # wastesController
