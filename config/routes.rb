Rails.application.routes.draw do

  root 'wishlists#new'

  get  'login'  => 'sessions#new'
  post 'login'  => 'sessions#create'

  get  'signup' => 'users#new'
  post 'signup' => 'users#create'

  resources :users, except: [:new, :create]

  resources :wishlists

end
