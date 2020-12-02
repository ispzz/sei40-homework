Rails.application.routes.draw do

  root :to => "creations#index"

  # Coders
  resources :coders

  # Creations
  resources :creations
end
