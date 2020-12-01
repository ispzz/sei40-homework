class VegetablesController < ApplicationController


  #CRUD


  #Create**********************************

    #1.
  def new
    @vegetable = Vegetable.new
  end

    #2.
  def create

    Vegetable.create(
      name: params[:vegetable][:name],
      scientific_name: params[:vegetable][:scientific_name],
      harvest_time: params[:vegetable][:harvest_time],
      height: params[:vegetable][:height],
      spacing: params[:vegetable][:spacing]
    )
    redirect_to vegetables_path

  end


  #Read************************************

  #1.

  def index

    @vegetables = Vegetable.all

  end #index


  #2.

  def show
    @vegetable = Vegetable.find params[:id]
  end #show

  #Update**********************************

  #1.

  def edit
    @vegetable = Vegetable.find params[:id]
  end

  #2.

  def update

    vegetable = Vegetable.find params[:id]

    vegetable.update(
      name: params[:vegetable][:name],
      scientific_name: params[:vegetable][:scientific_name],
      harvest_time: params[:vegetable][:harvest_time],
      height: params[:vegetable][:height],
      spacing: params[:vegetable][:spacing]
    )
    redirect_to vegetable_path(vegetable.id)


  end

  #Delete**********************************

  def destroy

    Vegetable.destroy params[:id]

    redirect_to vegetables_path #back to index

  end #destroy()

end
