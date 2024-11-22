Rails.application.routes.draw do
  root to: "articles#index"
  resources :articles, except: :index

  # Defines the root path route ("/")
  # root "posts#index"
end
