require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'


def db_query sql
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  result = db.execute sql
  db.close
  
  result
end


# ROOT
get '/' do
  redirect '/property'
end

# CREATE
get '/property/new' do
  erb :new
end

post '/property' do
  db_query "INSERT INTO property(name, address, description, price, beds, bath, size, image_url)
    VALUES(
      '#{params[:name]}',
      '#{params[:address]}',
      '#{params[:description]}',
      #{params[:price]},
      #{params[:beds]},
      #{params[:bath]},
      #{params[:size]},
      '#{params[:image_url]}'
      );"

  redirect '/property'
end

# READ
get '/property' do
  @prop = db_query "SELECT * FROM property"
  erb :index
end

get '/property/:id' do
  @prop = db_query "SELECT * FROM property WHERE id = #{params[:id]}"
  @prop = @prop.first

  erb :show
end

# UPDATE
get '/property/:id/edit' do
  @prop = db_query "SELECT * FROM property WHERE id = #{params[:id]}"
  @prop = @prop.first

  erb :edit
end

post '/property/:id' do
  db_query "UPDATE property SET
    name = '#{params[:name]}',
    address = '#{params[:address]}',
    description = '#{params[:description]}',
    price = #{params[:price]},
    beds = #{params[:beds]},
    bath = #{params[:bath]},
    size = #{params[:size]},
    image_url = '#{params[:image_url]}'
    WHERE id = #{params[:id]}"

  redirect "/property/#{params[:id]}"
end

# DELETE
get '/property/:id/delete' do
  db_query "DELETE FROM property WHERE id = #{params[:id]}"

  redirect '/property'
end
