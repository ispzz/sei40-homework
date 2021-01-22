Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# Create ########################



# Read ########################

#1. Index page, i.e list every row of the 'planets' create_table
get '/planets' => 'planets#index'
                        #use/app/controllers/planets_contrrooer

#2. Show page, i.e. details about one row (planet) by ID

# Update  ########################

# Destroy ########################





end
