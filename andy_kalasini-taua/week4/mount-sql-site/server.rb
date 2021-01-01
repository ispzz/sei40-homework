require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'


# @mountains = db.execute 'SELECT * FROM mountains;'
# db.close
# require 'pry'; binding.pry

# ROOTE ROUTE:
get '/' do
  erb :home
end

# ROUTES

#1. Index - list all the rows in the table
get '/mountains' do
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  @mountains = db.execute "SELECT * FROM mountains;"
  erb :index

end
