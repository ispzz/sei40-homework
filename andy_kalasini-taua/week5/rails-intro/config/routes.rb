Rails.application.routes.draw do

get '/hello' => 'pages#say_hello'

get '/hello/:person' => 'pages#greet'

get '/funny' => 'pages#haha'

get '/calc/:first/:op/:second' => 'calculator#do_calculation'

# 1. Blank form
get '/calc' => 'calculator#form'

# Form submit
get '/calc/submit' => 'calculator#do_calculation'





end
