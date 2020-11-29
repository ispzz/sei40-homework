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

# CREATE
# Properties
get '/properties/new' do
  erb :'properties/new'
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

# Renters
get '/renters/new' do
  erb :'renters/new'
end

post '/renters' do
  Renter.create(
    first_name: params[:first_name],
    last_name: params[:last_name],
    phone_number: params[:phone_number],
    paid: params[:paid],
    rent: params[:rent],
    property_id: params[:property_id]  
  )

  redirect '/renters'
end

# READ
# Properties
get '/properties' do
  @properties = Property.all
  erb :'properties/index'
end

get '/properties/:id' do
  @property = Property.find params[:id]
  erb :'properties/show'
end

# Renters
get '/renters' do
  @renters = Renter.all
  erb :'renters/index'
end

get '/renters/:id' do
  @renter = Renter.find params[:id]
  erb :'renters/show'
end

# UPDATE
# Properties
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
  
  # Renters
  get '/renters/:id/edit' do
    @renter = Renter.find params[:id]
    @properties = Property.all
    erb :'renters/edit'
  end

  post '/renters/:id' do
    renter = Renter.find params[:id]
    renter.update(
      first_name: params[:first_name],
      last_name: params[:last_name],
      phone_number: params[:phone_number],
      paid: params[:paid],
      rent: params[:rent],
      property_id: params[:property_id]  
    )
    redirect "renters/#{params[:id]}"
  end

# DELETE
# Properties
get '/properties/:id/delete' do
  Property.destroy params[:id]
  redirect '/properties'
end

# Renters
get '/renters/:id/delete' do
  Renter.destroy params[:id]
  redirect '/renters'
end