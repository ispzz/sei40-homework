require 'sinatra'
require 'sinatra/reloader'
require 'httparty'




get '/' do
  erb :form
end


get '/movie/results' do

@movie = HTTParty.get "https://api.themoviedb.org/3/movie/#{params[:movie_id]}?api_key=24d863d54c86392e6e1df55b9a328755"

  erb :results
end
