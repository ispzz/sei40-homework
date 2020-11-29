require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

# Show all the SQL
ActiveRecord::Base.logger = Logger.new(STDOUT)

class Property < ActiveRecord::Base
  has_many :renters
end

class Renter < ActiveRecord::Base
  belongs_to :property
end

get '/' do
  erb :home
end

# Create
get '/properties/new' do
  erb :new
end

post '/properties' do
  Property.create(
    description: params[:description],
    street_name: params[:street_name],
    suburb: params[:suburb],
    postcode: params[:postcode],
    state: params[:state],
    image_url: params[:image_url]
  )

  redirect '/properties'
end

# Read
get '/properties' do
  @properties = Property.all
  erb :'properties/index'
end

get '/properties/:id' do
  @property = Property.find params[:id]
  erb :'properties/show'
end

# Update
get '/properties/:id/edit' do
  @property = Property.find params[:id]
  erb :'properties/edit'
end

post '/properties/:id' do
  property = Property.find params[:id]
  property.update(
    description: params[:description],
    street_name: params[:street_name],
    suburb: params[:suburb],
    postcode: params[:postcode],
    state: params[:state],
    image_url: params[:image_url]
  )

  redirect "/properties/#{params[:id]}"
end

# Delete
get '/properties/:id/delete' do
  Property.destroy params[:id]
  redirect '/properties'
end
