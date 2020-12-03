require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'

#CRUD ROUTES FOR DATABASE!!!


#this is how to reach the database - one artist at a time.
def db_query(sql)

  puts "=============="
  puts sql
  puts "=============="

  # establish a connection to the database to retrieve infomration to webpage.
  db = SQLite3::Database.new 'database.db'

  # ensure that the table is readable as hash instead of array in an array (run results_as_hash)
  db.results_as_hash = true

  #execute on sql file?
  results = db.execute sql
  #close the connection with the database.
  db.close

  results # -- implicit return

end #end db.query

#=======CREATE=============

get '/new' do
  erb :new
end

post '/' do

  insert_sql =
  " INSERT INTO artist (name, birth, death, alive, favourite_work_title, favourite_work_url)
  VALUES (
    '#{params[:name]}',
    '#{params[:birth]}',
    '#{params[:death]}',
    #{params[:living]},
    '#{params[:work_name]}',
    '#{params[:image_url]}'

    );
  "

  db_query insert_sql
  redirect '/'

end

#=======READ===============

get '/' do

@artists = db_query 'SELECT * FROM artist;'
  erb :home

end

get '/:id' do
  @artists = db_query "SELECT * FROM artist WHERE id=#{params[:id]};"
  @artist = @artists.first

  erb :show
end

#=======UPDATE=============
get '/:id/edit' do

  @artists = db_query "SELECT * FROM artist WHERE id=#{params[:id]};"
  @artist = @artists.first

  erb :edit

end

post '/:id' do

db_query "UPDATE artist SET
name = '#{params[:name]}',
birth = '#{params[:birth]}',
death = '#{params[:death]}',
alive = #{params[:living]},
favourite_work_title = '#{params[:work_name]}',
favourite_work_url = '#{params[:image_url]}'
WHERE id = #{params[:id]};
"

redirect "/#{params[:id]}"

end

#=======DELETE=============

get '/:id/delete' do
  db_query "DELETE FROM artist WHERE id = #{params[:id]}"

  redirect '/' #back to index
end
