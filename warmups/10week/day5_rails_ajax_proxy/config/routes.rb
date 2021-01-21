Rails.application.routes.draw do
  root to: 'pages#home'
  get '/fetch' => "pages#fetch"
end
