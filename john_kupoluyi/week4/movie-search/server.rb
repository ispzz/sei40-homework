require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

$BASE_URL = 'https://api.themoviedb.org/3/'
$API_URL = $BASE_URL + 'search/movie'
$API_KEY = '24d863d54c86392e6e1df55b9a328755'

# 1. route to display form input
get '/' do
  erb :search
end

# 2. route to get form data, fetch api data and render
get '/movie' do
  @term = params[:term]
  @page = '1'
  url = "#{$API_URL}?api_key=#{$API_KEY}&query=#{@term}"
  if @term.empty?
    redirect '/'
  end

  @result = HTTParty.get(url)
  erb :movie_list
end

# 3. route to show previous and next pages
get '/movie/:term/:page' do
  @term = params[:term]
  @page = params[:page]
  url = "#{$API_URL}?api_key=#{$API_KEY}&query=#{@term}&page=#{@page}"

  @result = HTTParty.get url
  erb :movie_list
end

# 4. route to show more information
get '/movie/:id' do
  movie_id = params[:id]
  url = "#{$BASE_URL}movie/#{movie_id}?api_key=#{$API_KEY}"

  @result = HTTParty.get url
  erb :movie
end
