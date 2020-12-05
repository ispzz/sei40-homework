Rails.application.routes.draw do


  #Create ==============================================

  # 1. Blank form

  get '/cities/new' => 'cities#new', as: 'new_city'


  # 2. Form submits here, save to DB, redirect

  post '/cities' => 'cities#create'

  #Read =================================================

  # 1. Index of Cities

  get '/cities' => 'cities#index'

  # 2. Show page for one planet, by ID

  get '/cities/:id' => 'cities#show', as: 'city'


  #Update ================================================

  # 1. Show pre-filled form (which means query the DB to find the item to edit by its ID)

  get '/cities/:id/edit' => 'cities#edit', as: 'edit_city'


  # 2. Form submits here, do the update after again finding the item first by ID, and then redirect

  post '/cities/:id' => 'cities#update'


  #Delete =================================================

  # 1. delete city

  get '/cities/:id/delete' => 'cities#destroy', as: 'destroy_city'

















end
