class CitiesController < ApplicationController


#Create ==============================================

# 1. Blank form, no query

 def new

   @city = City.new

 end


# 2. Form submits here, save form

def create

City.create(
  name: params[:city][:name],
  population: params[:city][:population],
  best_food: params[:city][:best_food],
  image_url: params[:city][:image_url],
  must_see: params[:city][:must_see],
  image_url_see: params[:city][:image_url_see]
)

redirect_to cities_path

end


#Read =================================================

# 1. Index of Cities

def index

@cities = City.all

end #index


# 2. Show page for one planet, by ID

def show

@city = City.find params[:id]

end


#Update ================================================

# 1. Show pre-filled form (which means query the DB to find the item to edit by its ID)

def edit

@city = City.find params[:id]

end


# 2. Form submits here, do the update after again finding the item first by ID, and then redirect

def update

city = City.find params[:id]

city.update(
  name: params[:city][:name],
  population: params[:city][:population],
  best_food: params[:city][:best_food],
  image_url: params[:city][:image_url],
  must_see: params[:city][:must_see],
  image_url_see: params[:city][:image_url_see]
)

redirect_to city_path(city.id)

end


#Delete =================================================

# 1. delete city

def destroy

City.destroy params[:id]

redirect_to cities_path

end












end #CitiesController
