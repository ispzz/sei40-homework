Rails.application.routes.draw do
 
  root :to => "books#index"

  # CREATE
  get "/books/new" => "books#new", as: "new_book"

  post "/books" => "books#create"

  # READ
  get "/books" => "books#index"

  get "/books/:id" => "books#show", as: "book"

  # Update
  get "/books/:id/edit" => "books#edit", as: "edit_book"

  post "/books/:id" => "books#update"

  # Delete
  get "/books/:id/delete" => "books#destroy", as: "destroy_book"

end

