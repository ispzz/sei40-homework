require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'



def db_query(sql)
  puts "==========================="
  puts sql
  puts "==========================="

  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  results = db.execute sql
  db.close

  results

end
#C
get '/' do
  erb :home
end

get '/games/new' do
  erb :new
end

post '/games' do
insert_sql = "INSERT INTO video_games(name, platform,description, max_players, multiplayer, box_art)
VALUES(
  '#{params[:name]}',
  '#{params[:platform]}',
  '#{params[:description]}',
  #{params[:max_players]},
  #{params[:multiplayer]},
  '#{params[:box_art]}'
  );"

  db_query insert_sql
  redirect '/games'
end
#R
get '/games' do
  @games = db_query 'SELECT * FROM video_games;'
  erb :index
end


get '/games/:id' do
  @game = db_query "SELECT * FROM video_games WHERE id = #{params[:id]};"
  @game = @game.first
erb :show
end

#U
get "/games/:id/edit" do
  @game= db_query "SELECT * FROM video_games WHERE id = #{params[:id]};"
  @game= @game.first
  erb :edit
end

post '/games/:id' do
  db_query "UPDATE video_games SET
  name = '#{params[:name]}',
  platform = '#{params[:platform]}',
  description = '#{params[:description]}',
  max_players = #{params[:max_players]},
  multiplayer = '#{params[:multiplayer]}',
  box_art = '#{params[:box_art]}'
  WHERE id = #{params[:id]}
  "

  redirect "/games/#{params[:id]}"
end
#D
get '/games/:id/delete' do
  db_query "DELETE FROM video_games WHERE id = #{params[:id]}"
  redirect '/games'
end
