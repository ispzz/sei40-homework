Rails.application.routes.draw do

# CREATE -----------------------------------------------------------

# 1. New
get '/cars/new' => 'cars#new', as: 'new_car'

# 2. Post, Update DB and Redirect
post '/cars' => 'cars#create'

# ------------------------------------------------------------------
# READ   -----------------------------------------------------------

# 1. Index
get '/cars' => 'cars#index'

# 2. Show
get '/cars/:id' => 'cars#show', as: 'car'

# ------------------------------------------------------------------

# UPDATE -----------------------------------------------------------

# 1. Edit
get '/cars/:id/edit' => 'cars#edit', as: 'edit_car'

# 2. Post, Update DB and Redirect
post '/cars/:id' => 'cars#update'

# ------------------------------------------------------------------

# DESTROY ----------------------------------------------------------

# 1. Delete
get '/cars/:id/destroy' => 'cars#destroy', as: 'destroy_car'


end # end Rails / Routes
