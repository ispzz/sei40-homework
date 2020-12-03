Rails.application.routes.draw do

  root to: 'pages#index'

  #magic
  get '/magic' => 'magic#form'
  get '/magic/result' => 'magic#result'
  #secret
  get '/secret' => 'secret#form'
  get '/secret/result' => 'secret#result'
  #rps
  get '/rps' => 'rps#form'
  get '/rps/result' => 'rps#result'

end
