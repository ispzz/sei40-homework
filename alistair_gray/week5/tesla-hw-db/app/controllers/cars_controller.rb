class CarsController < ApplicationController
  # CREATE ---------------------------------------------------------

  # 1. New
  def new
    @car = Car.new
  end # new()

  # 2. Post, Update DB and Redirect
  def create
    Car.create(
      name: params[:car][:name],
      image_url: params[:car][:image_url],
      self_driving: params[:car][:self_driving],
      range: params[:car][:range],
      starting_price: params[:car][:starting_price]
    )

    redirect_to cars_path
  end # create()

  # ----------------------------------------------------------------

  # READ   ---------------------------------------------------------

  # 1. Index
  def index
    @cars = Car.all
  end # index

  # 2. Show
  def show
    @car = Car.find params[:id]
  end

  # ----------------------------------------------------------------

  # UPDATE ---------------------------------------------------------

  # 1. Edit
  def edit
    @car = Car.find params[:id]
  end # edit

  # 2. Post, Update DB and Redirect
  def update
    car = Car.find params[:id]

    car.update(
      name: params[:car][:name],
      image_url: params[:car][:image_url],
      self_driving: params[:car][:self_driving],
      range: params[:car][:range],
      starting_price: params[:car][:starting_price]
    )

    redirect_to car_path(car.id)
  end # update
  # ----------------------------------------------------------------

  # DESTROY --------------------------------------------------------

  # 1. Destroy
  def destroy
    Car.destroy params[:id]

    redirect_to cars_path
  end # destroy

  # ----------------------------------------------------------------
end # CarsController
