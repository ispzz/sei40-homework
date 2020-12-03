require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :form
end

get '/lookup' do
  @keyword = params[:keyword]

  @movies = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@keyword}"

  @num = @movies['results'].length


  # p movies['results'][0]['original_title']

  erb :movie_info
end

get '/movie/:id' do
  @id = params[:id]

  @movie = HTTParty.get "https://api.themoviedb.org/3/movie/#{@id}?api_key=24d863d54c86392e6e1df55b9a328755"

  @cast = HTTParty.get "https://api.themoviedb.org/3/movie/#{@id}/credits?api_key=24d863d54c86392e6e1df55b9a328755"

  # @cast['cast'][0]['name']

  # @movies = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@keyword}"
  #
  # @num = @movies['results'].length


   # p @movie['tagline']

  erb :movie_stuff
end
