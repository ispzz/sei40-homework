require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')

# 1. Show a blank form for typing stock codes into
get '/' do

  erb :form
end

# 2. form submits to here, does lookup, prints results
get '/lookup' do
  stock = StockQuote::Stock.quote params[:stock_code]

  # p stock

  @price = stock.latest_price
  @company = stock.company_name

  @array = ['a','b','c']

  erb :stock_info
end
