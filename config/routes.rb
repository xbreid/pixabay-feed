# config/routes.rb
Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, param: :_username
    get 'photos', to: 'pixabay#photos', as: 'photos'
    get 'videos', to: 'pixabay#videos', as: 'videos'
    post '/auth/login', to: 'authentication#login'
  end

  get '/*a', to: 'application#not_found'
end