require 'sinatra'
require 'sinatra/reloader'
#define some routes that our web server will respond  # TODO:

get '/' do
  puts "Got a request for / !!!"
  "Hello from sinatra"
end


get '/luckynumber' do
  @num = Random.rand 100
  # "Here is your lucky number yay!: #{num}"
  erb :lucky ## go into the 'views' folder (default location for templates) and find the file called lucky.erb and return contents
end

# get '/hello/zara' do
#   'Hi there Zara'
# end

get '/hello/:student_name' do

  "Hi there, #{params[:student_name]}"
end

get '/hello/:name/:mood' do
  @student_name = params[:name]
  erb :mood_ring
  # "Hello, #{params[:name]}, I hope you are #{params[:mood]}"
end
