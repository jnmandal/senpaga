Rails.application.routes.draw do

  root 'wishlists#new'

  get  'login'  => 'sessions#new'
  post 'login'  => 'sessions#create'
  get  'logout' => 'sessions#destroy'

  get  'signup' => 'users#new'

  resources :users, except: [:new]

  resources :wishlists do
    member do
      get 'scrape'
    end
  end

end
