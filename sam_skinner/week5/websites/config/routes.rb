Rails.application.routes.draw do
  # Websites Routes
  resources :websites

  # Frontends Routes
  resources :frontends

  # Backends Routes
  resources :backends
end
