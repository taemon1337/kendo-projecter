class WorkflowsController < ApplicationController
  before_action :set_form, only: [:update, :destroy]

  # GET /forms
  # GET /forms.json
  def index
    @workflows = Workflow.all
    
    respond_to do |format|
      format.json { render json: { workflows: @workflows, total: @workflows.count }}
    end
  end


  # POST /forms
  # POST /forms.json
  def create
    @workflow = Workflow.new(form_params)

    respond_to do |format|
      if @workflow.save
        format.json { render json: { workflows: @workflow }, status: :created }
      else
        format.json { render json: @workflow.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /forms/1
  # PATCH/PUT /forms/1.json
  def update
    respond_to do |format|
      if @workflow.update(form_params)
        format.json { render json: { workflows: @workflow }, status: :ok, location: @workflow }
      else
        format.json { render json: @workflow.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /forms/1
  # DELETE /forms/1.json
  def destroy
    @workflow.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_form
      @workflow = Workflow.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def form_params
      params.require(:workflow).permit(:name,:description,{ :task_ids => [] },:ownership)
    end
end
