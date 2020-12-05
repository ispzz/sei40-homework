Rails.application.routes.draw do

 # Create ###############################

 # 1. Blank form
 get '/coogans/new' => 'coogams#new', as: 'new_coogan'
                                      # new_coogan_path

 # 2. Form submits here, save to DB, redirect
 post '/coogans' => 'coogans#create'

 # Read #################################

 # 1. Index page, i.e. list every row of the 'coogans' table
 get '/coogans' => 'coogans#index'
                   # use app/controllers/coogans_controller.rb
                   # i.e. the class coogansController
                   # and use the method in that class
                   # called 'index'

 # 2. Show page, i.e. details about one row (coogan) by ID
 get '/coogans/:id' => 'coogans#show', as: 'coogan'
                                       # gives coogan_path


 # Update ###############################

 # 1. Show pre-filled form
 get '/coogans/:id/edit' => 'coogans#edit', as: 'edit_coogan'
                                            # edit_coogan_path(id)

 # 2. Form submits to here, do DB update, redirect
 post '/coogans/:id' => 'coogans#update'


 # Destroy ##############################
 get '/coogans/:id/delete' => 'coogans#destroy', as: 'destroy_coogan'

end # all routes must go above
