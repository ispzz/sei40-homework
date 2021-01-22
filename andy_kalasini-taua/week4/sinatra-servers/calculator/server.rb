require 'sinatra'
require 'sinatra/reloader'


get '/' do

  # "This is working fine"
  erb :intro
end

get '/calc/:first_num/:op/:second_num' do

@first = params[:first_num].to_i
@op = params[:op]
@second = params[:second_num].to_i

# if op == "+"
#   result = first + second
# elsif op == '_'
#   result = first - second

@answer = case @op
when '+' then @first + @second
when '-' then @first - @second
when '*' then @first * @second
when 'div' then @first / @second
end


  # "Your calculation is: #{ first } #{ op } #{ second } = #{ answer }"

  erb :answer
end
