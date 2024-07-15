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
    resources :users do
     resources :orders, only: [:index, :create]
    end
    resources :favorites, only: [:create, :destroy]

    resources :seller_reviews, only: [:create, :destroy, :show, :update]

    resources :users do
      resource :seller_reviews, only: [:index]
    end



    resources :instrument_reviews, only: [:create, :update, :destroy]
    
    get 'instruments/:instrument_id/instrument_reviews', to: 'instrument_reviews#show'
  end

  get '*path', to: "static_pages#frontend_index"

end
