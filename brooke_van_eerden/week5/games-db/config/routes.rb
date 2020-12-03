Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
#C
get '/games/new' => 'games#new', as: 'new_game'

post '/games' => 'games#create'
#r
get '/games' => 'games#index'

get '/games/:id' => 'games#show' , as: 'game'
#U
get '/games/:id/edit' => 'games#edit', as: 'edit_game'

post '/games/:id' => 'games#update'
#D
get '/games/:id/delete' => 'games#destroy', as: 'destroy_game'



end
