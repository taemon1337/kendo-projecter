Rails.application.routes.draw do

  get 'pages/home'
  get 'pages/admin'

  scope '/api' do
    resources :forms, :only => [:index,:create,:update,:destroy]
  end
    
  root :to => "pages#admin"

end
