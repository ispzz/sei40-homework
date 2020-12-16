require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'

db = SQLite3::Database.new 'database.db'
db.results_as_hash = true
@mountains = db.execute 'SELECT * FROM mountains;'
db.close
# require 'pry'; binding.pry
erb :index
end
# ROOTE ROUTE:
# get '/' do
#   erb :home
# end

# CRUD ROUTES

#1. Index - list all the rows in the table
# get '/mountains' do
#
