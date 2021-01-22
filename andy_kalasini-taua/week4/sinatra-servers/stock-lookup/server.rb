require 'sinatra'
require 'sinatra/relouder'
require 'stock_quote'

#1. Show us the blank form
StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')

get '/' do
  erb :form
end

get '/lookup' do

  stock = StockQuote::Stock.quote( params[:stock_code] )

  p stock

  erb :stock_info
end





#2. form submits to here, does lookup, prints results
