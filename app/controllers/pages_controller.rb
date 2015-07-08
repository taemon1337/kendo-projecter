class PagesController < ApplicationController
  
  def home
  end

  def admin
    redirect_to "/admin"
  end
end
