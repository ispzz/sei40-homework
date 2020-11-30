# SERVER: Planets and Moons

# Prerequisites -----------------------------------
require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'
require 'active_record'


# Active Record QOL -------------------------------
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'

)
ActiveRecord::Base.logger = Logger.new(STDOUT)

class Moon < ActiveRecord::Base
  belongs_to :planet
end

class Planet < ActiveRecord::Base
  has_many :moons
end
#--------------------------------------------------

def db_query(sql)
  puts '===================='
  puts sql
  puts '===================='

  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  results = db.execute sql
  db.close

  results # implicit return
end # db_query

# ROOT ROUTE---------------------------------------
get '/' do
  erb :home
end

# CREATE ------------------------------------------

# Form Field to create new planet
get '/planets/new' do
  erb :new_planet
end

# Submit and Redirect back to /planets
post '/planets' do
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  Planet.create(
    name: params[:name],
    orbital_period: params[:orbital_period],
    day_length: params[:day_length],
    dist_sun: params[:dist_sun],
    inhabited: params[:inhabited],
    atmosphere: params[:atmosphere],
    img_url: params[:img_url]
  )

  redirect '/planets'
end


# Form Field to create new moon
get '/moons/new' do
  erb :new_moon
end

# Submit and Redirect back to /moons

post '/moons' do
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  Moon.create(
    name: params[:name],
    orbital_period: params[:orbital_period],
    day_length: params[:day_length],
    inhabited: params[:inhabited],
    atmosphere: params[:atmosphere],
    img_url: params[:img_url]
  )

  redirect '/moons'
end


# READ --------------------------------------------

# Index of Planets
get '/planets' do
  @planets = Planet.all
  erb :planets_index
end

# Show page of selected planet
get '/planets/:id' do
  @planet = Planet.find params[:id]
  erb :planets_show
end

# Index of Moons
get '/moons' do
  @moons = Moon.all
  erb :moons_index
end

# Show page of selected planet
get '/moons/:id' do
  @moon = Moon.find params[:id]
  erb :moons_show
end
# UPDATE ------------------------------------------

# Edit Planet
get '/planets/:id/edit_planet' do
  @planet = Planet.find params[:id]
  erb :edit_planet
end

post '/planets/:id' do
  planet = Planet.find params[:id]
  planet.update(
    name: params[:name],
    orbital_period: params[:orbital_period],
    day_length: params[:day_length],
    dist_sun: params[:dist_sun],
    inhabited: params[:inhabited],
    atmosphere: params[:atmosphere],
    img_url: params[:img_url]
  )
  redirect "/planets"
end

# Edit Moon
get '/moons/:id/edit_moon' do
  @moon = Moon.find params[:id]
  erb :edit_moon
end

post '/moons/:id' do
  moon = Moon.find params[:id]
  moon.update(
    name: params[:name],
    orbital_period: params[:orbital_period],
    day_length: params[:day_length],
    inhabited: params[:inhabited],
    atmosphere: params[:atmosphere],
    img_url: params[:img_url],
    planet_id: params[:planet_id]
  )
  redirect "/moons"
end

# DELETE ------------------------------------------

# Delete Planet
get '/planets/:id/delete' do
  Planet.destroy params[:id]
  redirect '/planets'
end

# Delete Moon
get '/moons/:id/delete' do
  Moon.destroy params[:id]
  redirect '/moons'
end
