Rails.application.routes.draw do

get '/dashboard' => 'dashboard#app'

#These are all API endpoints (JSON only)


get '/uptime' => 'dashboard#uptime'

get '/cpuhog'

end
