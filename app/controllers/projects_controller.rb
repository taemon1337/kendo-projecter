class ProjectsController < ApplicationController
  before_action :set_form, only: [:update, :destroy]

  # GET /forms
  # GET /forms.json
  def index
    @projects = Project.all
    
    respond_to do |format|
      format.json { render json: { projects: @projects, total: @projects.count }}
    end
  end


  # POST /forms
  # POST /forms.json
  def create
    @project = Project.new(form_params)

    respond_to do |format|
      if @project.save
        format.json { render json: { projects: @project }, status: :created }
      else
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /forms/1
  # PATCH/PUT /forms/1.json
  def update
    respond_to do |format|
      if @project.update(form_params)
        format.json { render json: { projects: @project }, status: :ok, location: @project }
      else
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /forms/1
  # DELETE /forms/1.json
  def destroy
    @project.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_form
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def form_params
      params.require(:project).permit(:name,:description,:workflow_id,{ :group_ids => [] },:current_task_id)
    end
end
