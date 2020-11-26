require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'


def db_query(sql)
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  mountains = db.execute sql
  db.close
  mountains
end #db_query

get '/' do
  erb :home
end


# Create
get '/mountains/new' do
  erb :new
end

post '/mountains' do
  sql = "
  INSERT INTO mountains (name, elevation_m, location, guided_climbs, first_climber, year_climbed, wikipedia)
    VALUES (
      '#{params[:name]}',
      #{params[:elevation_m]},
      '#{params[:location]}',
      #{params[:guided_climbs]},
      '#{params[:first_climber]}',
      #{params[:year_climbed]},
      '#{params[:wikipedia]}'
    );
  "
  db_query sql

  redirect '/mountains'
end


# Read

get '/mountains' do
  @mountains = db_query 'SELECT * FROM mountains;'
  erb :index
end

get '/mountains/:id' do
  @mountain = db_query "SELECT * FROM mountains WHERE id = #{params[:id]};"
  @mountain = @mountain.first
  erb :show
end

# Update

get '/mountains/:id/edit' do
  @mountain = db_query "SELECT * FROM mountains WHERE id = #{params[:id]};"
  @mountain = @mountain.first
  erb :edit
end

post '/mountains/:id' do
  db_query "UPDATE mountains SET
    name = '#{params[:name]}',
    elevation_m = #{params[:elevation_m]},
    location = '#{params[:location]}',
    guided_climbs = #{params[:guided_climbs]},
    first_climber = '#{params[:first_climber]}',
    year_climbed = #{params[:year_climbed]},
    wikipedia = '#{params[:wikipedia]}'
    WHERE id = #{params[:id]};
  "
  redirect "/mountains/#{params[:id]}"
end

# Delete
get '/mountains/:id/delete' do
  db_query "DELETE FROM mountains WHERE id = #{params[:id]}"
  redirect '/mountains'
end
