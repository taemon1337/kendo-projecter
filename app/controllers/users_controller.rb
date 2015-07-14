class UsersController < ApplicationController
  before_action :set_form, only: [:update, :destroy]

  # GET /forms
  # GET /forms.json
  def index
    @users = User.all
    
    respond_to do |format|
      format.json { render json: { users: @users, total: @users.count }}
    end
  end


  # POST /forms
  # POST /forms.json
  def create
    @user = User.new(form_params)

    respond_to do |format|
      if @user.save
        format.json { render json: { users: @user }, status: :created }
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /forms/1
  # PATCH/PUT /forms/1.json
  def update
    respond_to do |format|
      if @user.update(form_params)
        format.json { render json: { users: @user }, status: :ok, location: @user }
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /forms/1
  # DELETE /forms/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_form
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def form_params
      params.require(:user).permit(:username,{ :group_ids => [] })
    end
end
