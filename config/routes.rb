Rails.application.routes.draw do

  get 'pages/home'
  get 'pages/admin'

    resources :forms
    
    root :to => "pages#admin"

end
