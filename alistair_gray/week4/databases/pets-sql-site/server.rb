

require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'

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

# ROOT ROUTE
get '/' do
  erb :home
end

# CRUD ROUTES FOR OUR PETS DB:

# Create===============================

# 1. Show blank form for entering new pet details
get '/pets/new' do
  erb :new
end # GET /pets/new (blank form)
# 2. Form submits to here, where we add the details to the database,
#    and then redirect to another page as the index
post '/pets' do
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  insert_sql = "
INSERT INTO pets(name, species, description, roundness, alive, age, image_url)
VALUES (
  '#{params[:name]}',
  '#{params[:species]}',
  '#{params[:description]}',
  #{params[:roundness]},
  #{params[:alive]},
  #{params[:age]},
  '#{params[:image_url]}'
  );
"
db_query insert_sql

  # After processing this form submit and inserting the details into the DB, we don't want this route to show its own template - what if someone tries to reload? It's safer to redirect to a new page altogether
  redirect '/pets'
end # POST /pets (form submit and insert)
# Read=================================

# 1. Index - list all the rows in the table
get '/pets' do

  # Establish a connection to the database, by using Ruby gem, and telling it the name of our DB file
  @pets = db_query 'SELECT * FROM pets;'

  erb :index
end # GET /pets index
# 2. Details (show) - show detailed info for a single row
get '/pets/:id' do
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  @pet = db.execute "SELECT * FROM pets WHERE id = #{params[:id]};"
  @pet = @pet.first # removes the hash from the array, which makes it easier to work with
  db.close

  erb :show
end

# Update===============================

# 1. Show a form whose fields are prepo


# Delete===============================
get '/pets/:id/delete' do
  db_query "DELETE FROM pets WHERE id = #{params[:id]}"

  redirect '/pets' # back to the index
end

# require 'pry'; binding.pry

get '/pets/:id/edit' do
  @pet = db_query "SELECT * FROM pets WHERE id = #{params[:id]}"
  @pet = @pet.first

  erb :edit
end

# Form submits to here, updates the DB and redirects to the show page
post '/pets/:id' do
  db_query "UPDATE pets SET
    name = '#{params[:name]}',
    species = '#{params[:species]}',
    description = '#{params[:description]}',
    roundness = #{params[:roundness]},
    alive = #{params[:alive]},
    age = #{params[:age]},
    image_url = '#{params[:image_url]}'
    WHERE id = #{params[:id]};
  "

  redirect "/pets/#{params[:id]}"
end
