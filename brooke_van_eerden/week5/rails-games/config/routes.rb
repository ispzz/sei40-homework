Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to: 'pages#welcome'

get '/eightball' => 'eightball#input_form'

get '/eightball/answer' => 'eightball#answer'

get '/secret' => 'secret#input_form'

get '/secret/show' => 'secret#show'

get '/rps' => 'rps#choice'

get '/rps/result' => 'rps#show'




end
