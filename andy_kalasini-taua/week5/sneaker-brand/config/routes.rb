Rails.application.routes.draw do

    # get '/brands/new' => 'brands#new', as: 'new_brand'
    # post '/brands' => 'brands#create'
    # get '/brands' => 'brands#index'
    # get '/brands/:id' => 'brands#show', as: 'brand'
    # get '/brands/:id/edit' => 'brands#edit', as: 'edit_brand'
    # patch '/brands/:id' => 'brand#update'
    # delete '/brands/:id' => 'brands#destroy'

  resources :brands


  end
