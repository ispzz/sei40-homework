Rails.application.routes.draw do

  # waste CRUD:

  # Create ####################

  # 1. new (blank form)
  get '/wastes/new' => 'wastes#new', as: 'new_waste'  # gives new_waste_path

  # 2. create (form submits here, add to DB, redirect to index)
  post '/wastes' => 'wastes#create'

  # Read ######################

  # 1. index (all rows)
  get '/wastes' => 'wastes#index'

  # 2. show (details about one row, by ID)
  get '/wastes/:id' => 'wastes#show', as: 'waste' # waste_path

  # Update ####################

  # 1. edit (show pre-populated form, i.e. also get row by ID)
  get '/wastes/:id/edit' => 'wastes#edit', as: 'edit_waste' # edit_waste_path

  # 2. update (form submits here, update DB, redirect to show)
  # Because we are using the 'form_with' form builder, it automatically
  # submits edit forms (as opposed to new forms) using the more recent
  # 'patch' method, instead of 'post'
  patch '/wastes/:id' => 'wastes#update'

  # Delete ####################

  # 1. destroy (remove row from DB, redirect to index)
  delete '/wastes/:id' => 'wastes#destroy'  # same helper as show: waste_path(id)


  # Works CRUD routes
  resources :solutions
  # ZOMMNGGG! This one line create ALL 7 STANDARD CRUD ROUTES

end # ALL ROUTE ABOVE THIS LINE
