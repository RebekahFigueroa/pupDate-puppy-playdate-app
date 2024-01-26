Rails.application.routes.draw do
  
  resources :owners, only: [:index, :show, :create]
  resources :dogs, only: [:index, :create, :update, :destroy]
  resources :playdates
  resources :rsvps
  resources :comments

  get "/auth", to: "auth#auth"

  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy" 

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
