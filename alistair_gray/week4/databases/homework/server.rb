# PSUEDOCODE

# require stuff that the page needs to use
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

# CREATE
get '/units/new' do
  # Grab all the units from the database that I need to create

  erb :new
end

post '/units' do
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  insert_sql = "
INSERT INTO units(name, species, absoluteness, rating, image_url)
VALUES (
  '#{params[:name]}',
  '#{params[:species]}',
  #{params[:absoluteness]},
  #{params[:rating]},
  '#{params[:image_url]}'
  );
"
db_query insert_sql

redirect '/units'
end
# READ
get '/units' do
  @units = db_query 'SELECT * FROM units;'
  erb :list
end

get '/units/:id' do
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  @unit = db.execute "SELECT * FROM units WHERE id = #{params[:id]};"
  @unit = @unit.first
  db.close

  erb :show
end

# UPDATE
get '/units/:id/edit' do
  @unit = db_query "SELECT * FROM units WHERE id = #{params[:id]}"
  @unit = @unit.first

  erb :edit
end

post '/units/:id' do
  db_query "UPDATE units SET
    name = '#{params[:name]}',
    species = '#{params[:species]}',
    absoluteness = '#{params[:absoluteness]}',
    rating = #{params[:rating]},
    image_url = '#{params[:image_url]}'
    WHERE id = #{params[:id]};
  "

  redirect "/units/#{params[:id]}"
end
# DELETE

get '/units/:id/delete' do
  db_query "DELETE FROM units WHERE id = #{params[:id]}"

  redirect '/units' # back to the index
end
