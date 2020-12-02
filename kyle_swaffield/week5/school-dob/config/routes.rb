Rails.application.routes.draw do
  get '/' => 'grades#index'
  resources :grades
  resources :students
  resources :teachers
end
