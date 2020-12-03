require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# 1. Show a blank form for typing stock codes into
get '/' do

  erb :form
end

# 2. form submits to here, does lookup, prints results
get '/lookup' do
  p params
  movie = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{params[:movie_name]}"
p movie
  @movie_list = movie['results']

  erb :movie_info
end
