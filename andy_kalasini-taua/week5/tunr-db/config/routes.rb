Rails.application.routes.draw do

root to: 'pages#home'

#Login/logout routes
get '/login' => 'session#new' #showing the login form
post '/login' => 'session#create' #form submits to here, erforms login, redirect
delete '/login' => 'session#destroy' # logout link goes here, perform logout, redirect

resources :users

# root GET    /                pages
# login GET    /login(.:format) session#new
#      POST   /login(.:format) session
#      DELETE /login(.:format) session

end
