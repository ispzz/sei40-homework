Rails.application.routes.draw do

  #CREATE
  get '/probes/new' => 'probes#new', as: 'new_probe'
  post '/probes' => 'probes#create'

  #READ
  get '/probes' => 'probes#index'
  get '/probes/:id' => 'probes#show', as: 'probe'

  #UPDATE
  get '/probes/:id/edit' => 'probes#edit', as: 'edit_probe'
  post '/probes/:id' => 'probes#update'

  #DELETE
  get '/probes/:id/delete' => 'probes#delete', as: 'delete_probe'
end
