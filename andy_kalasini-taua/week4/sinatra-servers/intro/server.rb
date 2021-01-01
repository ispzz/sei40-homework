
require 'sinatra'
require 'sinatra/reloader'

# 1. similar to <script src ="js/something.js">

# 2. define some rountes that our webserver will respond to.


get '/' do
  # Here is where we respond to requests for '/'
  puts "got a request for /!!!"

  "Hello from sinatra"
end

get '/luckynumber' do

  @num = Random.rand 100

  # "<h1>Here is your lucky number, you lucky thing: #{num}</h1>"

erb :lucky

end

# get '/hello/Zara' do
#   "Hi there Zara"
# end
#
# get '/hello/kyle' do
#   "Hi there Kyle"
# end

  get '/hello/:recipient' do

 "Hello there, #{ params[:recipient] }"
end

get '/hello/:name/:mood' do
  # puts "Params:", params
  # "Hello, #{ params[:name]}, I hope you are #{ params[:mood] }"
  @student_name = params[:name]
  @student_name.upcase! 
  erb :mood_ring
end



# puts "hello!"


# get '/luckynumber' do
#
# @num = Random.rand 100
#
#   <h1>"Here is your lucky number: #{num}"</h1>
#
#   erb :mood_ring
#  end
#
#
# get '/hello/:recipient' do
#   'Hi there Zara'
# end
#
#
# get '/hello/:recipient' do
#   "Hello there, #{ params[:recipient]}"
# end
#
# get 'hello/:name/:mood' do
  # "Hello, #{ params[:name] }, I hope you are #{ params[:mood]}"
# end
