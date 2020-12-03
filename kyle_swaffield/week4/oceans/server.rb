require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require "date"

def db_query(sql)
  puts "============================="
  puts sql
  puts "============================="
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  results =db.execute sql
  db.close
  results
end

# ROOT ROUTE
get '/' do
  @employees = db_query "SELECT * FROM employees;"
  erb :index
end

# CREATE
get '/employees/new' do
  erb :new
end

post '/employee' do
  sql = "INSERT INTO employees (
  first_name, last_name, mobile, email, birthdate, start_date, image_url
  )VALUES(
    '#{params[:first_name]}',
    '#{params[:last_name]}',
    #{params[:mobile]},
    '#{params[:email]}',
    '#{params[:birthdate]}',
    '#{params[:start_date]}',
    '#{params[:image_url]}'
  );"
  db_query sql
  redirect "/"
end


# READ
get '/employee/:emp_id' do

  @employees = db_query "SELECT * FROM employees WHERE emp_id = " + params[:emp_id] + ";"
  @employees = @employees.first

  erb :show
end

#UPDATE
get '/employee/:emp_id/edit' do
  @employee = db_query "SELECT * FROM employees WHERE emp_id = " + params[:emp_id] + ";"
  @employee = @employee.first
  erb :edit
end

post '/employee/:emp_id' do
  sql = "UPDATE employees SET
    first_name = '#{params[:first_name]}',
    last_name = '#{params[:last_name]}',
    mobile = #{params[:mobile]},
    email = '#{params[:email]}',
    birthdate = '#{params[:birthdate]}',
    start_date = '#{params[:start_date]}',
    image_url = '#{params[:image_url]}'
    WHERE emp_id = #{params[:emp_id]};"
    db_query sql
    redirect "/employee/#{params[:emp_id]}"
end

#DELETE
get '/employee/:emp_id/delete' do
  db_query "DELETE FROM employees WHERE emp_id = #{params[:emp_id]}"
redirect '/'
end
