Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

get '/test' => 'mountains#which_mountain'

get '/test2' => 'mountains#mountain_one'

get '/test3/:person' => 'mountains#greet'

get '/mountains' => 'mountains#index'

end
