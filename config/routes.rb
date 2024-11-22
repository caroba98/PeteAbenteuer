Rails.application.routes.draw do
  root to: "articles#index"
  devise_for :users
  resources :articles

  # Defines the root path route ("/")
  # root "posts#index"
end
