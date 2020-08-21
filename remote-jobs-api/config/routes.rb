Rails.application.routes.draw do

resources :users, only: [:create, :index]
resources :jobs, except: :update

end
