Rails.application.routes.draw do

  get 'pages/home'
  get 'pages/admin'

  scope '/api' do
    resources :forms, :only => [:index,:create,:update,:destroy]
    resources :fields, :only => [:index,:create,:update,:destroy]
    resources :wrappers, :only => [:index,:create,:update,:destroy]
    resources :workflows, :only => [:index,:create,:update,:destroy]
    resources :tasks, :only => [:index,:create,:update,:destroy]
    resources :users, :only => [:index,:create,:update,:destroy]
    resources :groups, :only => [:index,:create,:update,:destroy]
    resources :projects, :only => [:index,:create,:update,:destroy]
    resources :datasources, :only => [:index,:create,:update,:destroy]
  end
    
  root :to => "pages#admin"

end
