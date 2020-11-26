require 'sinatra'
require 'sinatra/reloader'

get '/' do

  # "Hello from the calculator root route"
  erb :intro
end


# 1. Show the blank form (user types and submits form)
get '/calc/form' do
  erb :form
end

# 2. Define a route that the form is submitted to, which processes the form data, and prints a result

get '/calc/result' do
  @first = params[:firstnum].to_i
  @op = params[:operator]
  @second = params[:secondnum].to_i

  if @op == '+'
    @result = @first + @second
  end
  erb :answer
end

get '/calc/:first_num/:operator/:second_num' do

  @first = params[:first_num].to_i
  @second = params[:second_num].to_i
  @op = params[:operator]

  case @op
  when @op == '+' then @result = @first + @second
  when @op == '-' then @result = @first - @second
  when @op == '*' then @result = @first * @second
  when @op == 'div' then @result = @first / @second

  end

  erb :answer
end
