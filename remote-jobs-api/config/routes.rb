Rails.application.routes.draw do

resources :users, only: :create
resources :jobs, except: :update

end
