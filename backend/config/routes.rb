Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  get '/current_user', to: 'current_user#index'

  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # Defines the root path route ("/")
  namespace :api do
    namespace :v1 do
      get 'hello_world', to: 'sample#hello_world'
      resources :messages, only: [:index, :show, :create, :update, :destroy]
      resources :payments, only: [] do
        collection do
          post 'create_payment_intent'
          post 'confirm_payment'
          post 'cancel_payment'
        end
      end

    end
  end
end
