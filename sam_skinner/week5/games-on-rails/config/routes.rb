Rails.application.routes.draw do
  root to: 'games#welcome'

  get '/games/magic/ask' => 'magic#ask_question'

  get '/games/magic/tell' => 'magic#tell_answer'

  get '/games/secret' => 'secret#form'

  get '/games/secret/:guess' => 'secret#play'

  get '/games/rock_paper_scissors/:throw' => 'rps#play'
end
