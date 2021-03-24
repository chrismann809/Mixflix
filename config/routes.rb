Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    
    resources :users, only: [:show]
    resources :movies, only: [:show, :index]
    resources :genres, only: [:show, :index]
    resources :lists, only: [:create, :destroy, :show]
    resources :liked_movies, only: [:create, :destroy, :show]
  end

  resources :movies, only: :show
  
  root "static_pages#root"
end
