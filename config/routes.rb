Rails.application.routes.draw do
  root to: "pages#home"
  devise_for :users
  resources :articles
  get 'partner', to: 'pages#partner', as: :partner

  # Defines the root path route ("/")
  # root "posts#index"
end
