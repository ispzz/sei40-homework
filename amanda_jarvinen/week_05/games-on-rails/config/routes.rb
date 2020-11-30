Rails.application.routes.draw do
#   Magic 8 Ball

# Magic 8 ball takes user's questions from a form submission and returns a positive or negative answer.
# You should make a route like /games/magic/ask which routes to magic#ask_question (i.e. you will need a controller called magic_controller.rb which has a method ask_question). This controller action will have a template which shows a form with a single text input field (the template will have to be called app/views/magic/ask_question.html.erb).
# The form should use its action attribute to submit to another route, for example /games/magic/answer which you will have to route to an appropriate action, pulling the question out of params.

# 1. Route for magic 8 ball form
get '/games/magic/ask' => 'magic#ask_question'

# 2. Route for magic 8 ball answer
get '/games/magic/answer' => 'magic#get_answer'


# Secret Number

# Users click a number between 1 and 10. The controller validates the guess and renders the win or lose view.
# You should make a route like /games/secret/:guess which routes to secret#play

get '/games/secret/guess_form' => 'secret#form'



end
