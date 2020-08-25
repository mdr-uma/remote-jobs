Rails.application.routes.draw do

    post '/login' => "sessions#login"
    delete '/logout', to: 'sessions#destroy'

resources :users, only: [:create, :index, :show]
resources :jobs, except: :update

end
