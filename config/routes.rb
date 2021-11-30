# config/routes.rb
Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, param: :_username
  end

  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'
end