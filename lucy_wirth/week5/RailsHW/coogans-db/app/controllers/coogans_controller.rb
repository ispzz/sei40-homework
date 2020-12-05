
class CoogansController < ApplicationController


  # CREATE ####################################

  # 1. Blank form, no query
  def new
    @coogan = Coogan.new
  end

  # 2. Form submits here, save form data to DB, redirect
  def create
    # render plain: params.to_s
    # raise 'hell'  # force an error and a web console to open

    # There is an exta level of nesting here: the form fields
    # are within a parent hash 'params[:coogan]' - this is
    # because we built our form HTML using the form_with helper,
    # and it creates tags like
    # <input type="text" name="coogan[name]" >
    # which cause params to have that extra nesting

    # TODO: make sure coogan was actually created
    Coogan.create(
      title: params[:coogan][:title],
      format: params[:coogan][:format],
      year: params[:coogan][:year],
      image_url: params[:coogan][:image_url]
    )

    # 'create' doesn't show its own template due to issues
    # around reloading a page reached via a form submit
    # (i.e. duplicating the create) - instead we redirect
    # somewhere else

    redirect_to coogans_path  # go to 'coogans' i.e. the index

  end # create()

  # READ ######################################

  # 1. Index of coogans
  def index
    # AR query to get all coogans, save into instance variable
    @coogans = Coogan.all
  end # index

  # 2. Show page for one coogan, by ID
  def show
    @coogan = Coogan.find params[:id]
  end

  # Update #####################################

  # 1. Show pre-filled form (which means query the DB to
  #    find the item to edit by its ID)
  def edit
    @coogan = Coogan.find params[:id]
  end # edit()

  # 2. Form submits here, do the update after
  #    finding the item first by ID, and then redirect
  def update

    # 1. Query the DB to get the item we want to edit.
    #    We have the id to lookup from the url /coogans/:id
    #    i.e. it's in params[:id]
    coogan = Coogan.find params[:id]

    # 2. call .update() on that object, passing in the
    #    new values from the form submit, in params[:coogan]
    # TODO: make sure the update was successful
    # i.e. did it fail because of validations?
    coogan.update(
      title: params[:coogan][:title],
      format: params[:coogan][:format],
      year: params[:coogan][:year],
      image_url: params[:coogan][:image_url]
    )

    # As with 'create', we don't show our own template for
    # this method - to avoid resubmission errors, we
    # redirect to the show page for the item we just updated
    redirect_to coogan_path(coogan.id)  #"/coogans/#{ coogan.id }"

  end # update()


  # Delete #####################################
  def destroy
    Coogan.destroy params[:id]

    redirect_to coogans_path  # back to index
  end # destroy()

end # coogansController
