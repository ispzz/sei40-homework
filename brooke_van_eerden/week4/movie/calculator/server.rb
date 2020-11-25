require 'sinatra'
require 'sinatra/reloader'


get '/' do
  "Hello from the calculator root route"
end

get "/intro" do
  erb :intro
end


get '/calc/form' do ### shows the form
  erb :form
end

get '/calc/result' do ### takes form info and does something with it

end
  first_num = params[:firstnum].to_i
  second_num = params[:secondnum].to_i
  operator = params[:operator]

  if  operator == "+"
  @total = first_num + second_num
  @op = "plus"
elsif operator == "-"
  @total = first_num - second_num
  @op = "minus"
elsif operator == "*"
  @total = first_num * second_num
  @op = "multiplied by"
elsif operator == "divided"
  @total = first_num / second_num
  @op = "divided by"
end
erb :calc
  # " #{params[:first_num]} #{@op} #{params[
end




get '/calc/:first_num/:operator/:second_num' do

  first_num = params[:first_num].to_i
  second_num = params[:second_num].to_i
  operator = params[:operator]

  if  operator == "+"
  @total = first_num + second_num
  @op = "plus"
elsif operator == "-"
  @total = first_num - second_num
  @op = "minus"
elsif operator == "*"
  @total = first_num * second_num
  @op = "multiplied by"
elsif operator == "divided"
  @total = first_num / second_num
  @op = "divided by"
end
erb :calc
  # " #{params[:first_num]} #{@op} #{params[:second_num]} = #{@total} "
end
