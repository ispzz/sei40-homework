require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do

  erb :intro
end #get '/'

get '/movie/form' do


  # p movies['total_results']
  # p movies['results'][0]


  erb :form
end
# end #get '/movie/form'


get '/movie/result' do

movies = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=alien #{params[:movie_name]}"

p params[:movie_name]

p movies['results']

  @movies_results = movies ['results']
  # @release_date = movies ['results']
  # @overview = movies ['results']['overview']



  erb :result
end #get '/movie/result'
