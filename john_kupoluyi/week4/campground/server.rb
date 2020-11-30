require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'date'

#connect ActiveRecord to the database
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

#setup database table associations with ActiveRecord
class Camper < ActiveRecord::Base
  has_many :camps
  has_many :comments
end

class Camp < ActiveRecord::Base
  belongs_to :camper
  has_many :comments, dependent: :destroy
end

class Comment < ActiveRecord::Base
  belongs_to :camp
  belongs_to :camper
end


#####################################################################
###------------------BEGINNING OF CAMP ROUTES--------------------###

# ROOT
get '/' do
  redirect '/camps'
end

# CREATE ROUTES
get '/camps/new' do
  @campers = Camper.all
  erb :'camps/new'
end

post '/camps' do
  Camp.create(
    name: params[:name],
    location: params[:location],
    image_url: params[:image_url],
    description: params[:description],
    price: params[:price],
    camper_id: params[:camper_id],
    created_on: DateTime.now
  )

  redirect '/camps'
end

# READ ROUTES
get '/camps' do
  @camps = Camp.all
  erb :'camps/index'
end

get '/camps/:id' do
  @camp = Camp.find params[:id]
  erb :'camps/show'
end

# UPDATE ROUTES
get '/camps/:id/edit' do
  @campers = Camper.all
  @camp = Camp.find params[:id]
  erb :'camps/edit'
end

post '/camps/:id' do
  camp = Camp.find params[:id]

  camp.update(
    name: params[:name],
    location: params[:location],
    image_url: params[:image_url],
    description: params[:description],
    price: params[:price],
    updated_on: DateTime.now,
    updated_by: params[:camper_id]
  )

  redirect "/camps/#{params[:id]}"
end

# DELETE ROUTES
get '/camps/:id/delete' do
  Camp.destroy params[:id]
  redirect '/camps'
end


#######################################################################
###------------------BEGINNING OF CAMPER ROUTES--------------------###

# CREATE ROUTES
get '/campers/new' do
  erb :'campers/new'
end

post '/campers' do
  Camper.create(
    name: params[:name],
    email: params[:email]
  )

  redirect '/camps'
end


#######################################################################
###------------------BEGINNING OF COMMENT ROUTES--------------------###

# CREATE ROUTES
get '/comments/:camp_id/new' do
  @campers = Camper.all
  @camp = Camp.find params[:camp_id]
  erb :'comments/new'
end

post '/comments/:camp_id' do
  Comment.create(
    comment: params[:comment],
    rating: params[:rating],
    camper_id: params[:camper_id],
    camp_id: params[:camp_id],
    created_on: DateTime.now
  )

  redirect "/camps/#{params[:camp_id]}"
end
