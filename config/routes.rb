Rails.application.routes.draw do
  
  resources :owners, only: [:index, :show, :create]
  resources :dogs, only: [:index, :show, :create, :update, :destroy]
  resources :playdates, only: [:index, :show, :create, :update, :destroy]
  resources :rsvps, only: [:index, :show, :create, :update, :destroy]
  resources :comments, only: [:index, :show, :create, :update, :destroy]

  get "/auth", to: "auth#auth"

  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy" 

  get "/upload", to: "upload#upload"

  delete "/rsvps", to:"rsvps#destroyByPlaydateId"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
