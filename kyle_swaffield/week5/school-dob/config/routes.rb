Rails.application.routes.draw do
  root to: 'pages#home'

  #login.logout routes

  get '/login' => 'session#new' #login form
  post '/login' => 'session#create' #submits here, logs in and redirects
  delete '/login' => 'session#destroy' #logout link goes here, perform logout, redirect
  resources :grades
  resources :students
  resources :teachers
  resources :users
end
