class GroupsController < ApplicationController
  before_action :set_form, only: [:update, :destroy]

  # GET /forms
  # GET /forms.json
  def index
    @groups = Group.all
    
    respond_to do |format|
      format.json { render json: { groups: @groups, total: @groups.count }}
    end
  end


  # POST /forms
  # POST /forms.json
  def create
    @group = Group.new(form_params)

    respond_to do |format|
      if @group.save
        format.json { render json: { groups: @group }, status: :created }
      else
        format.json { render json: @group.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /forms/1
  # PATCH/PUT /forms/1.json
  def update
    respond_to do |format|
      if @group.update(form_params)
        format.json { render json: { groups: @group }, status: :ok, location: @group }
      else
        format.json { render json: @group.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /forms/1
  # DELETE /forms/1.json
  def destroy
    @group.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_form
      @group = Group.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def form_params
      params.require(:group).permit(:name,:description,{ :user_ids => [] })
    end
end
