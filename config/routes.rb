Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: {format: :json} do
        resources :courses, except: [:new, :edit]
        resources :enrollments, only: [:index, :create, :destroy]
        resources :wishlists, only: [:index, :create, :destroy]
        resource :users, only: [:create]
        resource :session, only: [:create, :destroy]
    end
    root to: 'static#root'
end
