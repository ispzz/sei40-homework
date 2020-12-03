Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

#home page route
get '/' => 'welcome#welcome'

#magic 8 ball routes
#1. lookup
get '/games/magic' => 'magic#ask'

#2. results
get '/games/magic/answer' => 'magic#answer'

#secret number game routes
#1. pick number

get '/games/secret' => 'secret#ask'

#2. show guess results

get '/games/secret/:guess' => 'secret#answer'

#rock paper scissors
#1.

get '/games/rps' => 'rps#play'

#2.

get '/games/rps/:throw'=> 'rps#result'


end
