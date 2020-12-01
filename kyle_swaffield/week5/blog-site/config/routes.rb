Rails.application.routes.draw do
  get '/' => 'blogs#index', as: 'index_blogs'
  #CREATE###################################
  get '/blogs/new' => 'blogs#new', as:'new_blog'
  post '/blogs' => 'blogs#create'
  #READ###################################
  get '/blogs' => 'blogs#index'
  get '/blogs/:id' => 'blogs#show', as: 'blog'
  #UPDATE###################################
  get '/blogs/:id/edit' => 'blogs#edit', as:'edit_blog'
  post '/blogs/:id' => 'blogs#update'
  #DELETE###################################
  get '/blogs/:id/delete' => 'blogs#destroy',as: 'destroy_blog'
end
