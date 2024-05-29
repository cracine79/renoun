Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :instruments, only: [:show, :create, :destroy, :update, :index]
    resources :carts, only: [:create, :destroy]
    resources :users do
      resources :carts, only:[:index]
    end
  end

  get '*path', to: "static_pages#frontend_index"

end
