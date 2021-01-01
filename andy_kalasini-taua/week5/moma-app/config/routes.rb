Rails.application.routes.draw do

#Artist CRUD

# Create ###################

# 1. new (blank form)
get '/artists/new' => 'artists#new', as: 'new_artist' #gives new_artist path

#2. creat (form submits here, add to DB, redirect)
post '/artists' => 'artists#create'# Read ################

#  1. index (all rows)
get '/artists' => 'artists#index'

# 2. show (details about one row, by ID)
get '/artists/:id' => 'artists#show', as: 'artist' # _path
# Update ###############

#  1. edit (show pre-populated form, i.e also get row gby ID)
get '/artists/:id/edit' => 'artists#edit', as: 'edit_artist'
# 2. update (form submits here, update DB, redirect to show)
#Because we are using the form _with form builder, it automatically submits edit forms (as opposed to new forms) using the moment 'patch' method, instead of 'post'
patch '/artists/:id' => 'artist#update'
# Delete ################

# 1. destroy (remove row from DB, redirect to index)
delete '/artists/:id' => 'artists#destroy' #same helper as show: artist_path(id)


#Works CRUD routes

resources :works







end #
