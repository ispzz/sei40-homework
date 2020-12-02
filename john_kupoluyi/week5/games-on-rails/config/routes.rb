Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/games' => 'games#select'

  #Magic Ball
  get '/games/magic/ask' => 'magic#ask_question'
  get '/games/magic/answer' => 'magic#answer'

  #Secret Number
  get '/games/secret' => 'secret#play'
  get '/games/secret/:guess' => 'secret#guess'

  #Rock-Paper-Scissors
  get '/games/rock_paper_scissors' => 'rps#play'
  get '/games/rock_paper_scissors/:throw' => 'rps#throw'
end
