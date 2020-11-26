# Tell Ruby that we want to use one of the pre-installed gem libraries
# in this particular program
# i.e. <script src="js/something.js"
require 'sinatra'
# reload server automatically on changes
require 'sinatra/reloader'

# Define some routes that our web server will respond to
# i.e. when this erver sees a particular request, such as for the root
# page of the site "/", how should it respond?

# We will respond, initially, by sending strings of text directly
# back to the browser

get '/' do
  # Here is where we respond to requests for '/'
  puts "Got a request for /"

  # What we send to the browser is whatever the last line
  # of our 'get' block evaluates to: here, a string
  "Hello from Sinatra"
end # get '/'

get '/luckynumber' do
  @num = Random.rand 100
  # Go into the views folder (default template location), and find the file called 'lucky.erb'
  # Returns the cotents of that file
  erb :lucky
end # get '/luckynumber'

# get '/hello/zara' do
#   'Hi there Zara'
# end
#
# get '/hello/kyle' do
#   'Hi there Kyle'
# end

# respond to any request for "/hello/something"
get '/hello/:student_name' do
  "Hello there, #{params[:student_name]}"
end

get '/hello/:name/:mood' do
  # "Hello there, #{params[:name]}, you seem to be feeling #{params[:mood]}"
  @student_name = params[:name]
  erb :mood_ring
end
