Rails.application.routes.draw do

    post '/login' => "sessions#login"
    delete '/logout' => "sessions#destroy"
    get '/currentUser' => "sessions#currentUser"

resources :users, only: [:create, :index, :show]
resources :jobs, except: :update

end
