require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
  erb :form
end


get '/lookup' do
  @movie_title = params[:movie_title]
  @movie_request = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@movie_title}"

  erb :movie_details
end


get "/movie/:movie_link" do
  @movie_info = HTTParty.get "https://api.themoviedb.org/3/movie/#{params[:movie_link]}?api_key=24d863d54c86392e6e1df55b9a328755"

  erb :movie_page
end
