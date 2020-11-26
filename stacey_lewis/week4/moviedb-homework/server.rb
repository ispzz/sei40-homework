require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# @movies = HTTParty.get 'https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=alien'

get '/' do

  erb :movie_lookup

end



get '/movie_result' do


#
@movie = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query= #{params[:movie_search]}"

# @movie_title_list = []
#
# @movie['results'].each do |m|
#   # puts m['title']
#   @movie_title_list.push(m['title'])
# end

# puts @movie_title_list
# @first = @movie['results'].first['title']
# puts @first

erb :movie_result


end
