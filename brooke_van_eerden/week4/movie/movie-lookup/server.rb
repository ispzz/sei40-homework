require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
 ## initialise  the library just once

get "/" do
erb :form
end

get '/lookup/query' do
  @stock = (params[:query])
  movies = HTTParty.get("https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@stock}")
  @result = movies['results']

  movies['results'].each do |m|
 @first_title = movies['results'].first['title']
 @titles =  m['title']
 @release_date = m['release_date']
 @overview = m['overview']
 @poster = m['poster_path']
 # @titles = movies['title']
 @total_pages = movies['total_pages']
puts @titles

 end

erb :stock_info
end
