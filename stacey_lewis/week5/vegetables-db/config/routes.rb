Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #CRUD


  #Create**********************************


    #1.

    get '/vegetables/new' => 'vegetables#new', as: 'new_vegetable'

    #2.

    post '/vegetables' => 'vegetables#create'


  #Read************************************

  #1. when you get this route, go to the vegetables controller, and find the index method AND page. index by convention is the read page.
  get '/vegetables' => 'vegetables#index'

  #2. when you get this route, go to the vegetables controller, and access the show method AND page. By convention show is the page for showing details of indivudla items from a central index page.

  get '/vegetables/:id' => 'vegetables#show', as: 'vegetable'

  #Update**********************************


    #1.

    get '/vegetables/:id/edit' => 'vegetables#edit', as: 'edit_vegetable'

    #2.

    post '/vegetables/:id' => 'vegetables#update'


  #Delete**********************************

  get 'vegetables/:id/delete' => 'vegetables#destroy', as: 'destroy_vegetable'


end
