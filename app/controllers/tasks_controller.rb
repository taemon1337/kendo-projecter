class TasksController < ApplicationController
  before_action :set_form, only: [:update, :destroy]

  # GET /forms
  # GET /forms.json
  def index
    @tasks = Task.all
    
    respond_to do |format|
      format.json { render json: { tasks: @tasks, total: @tasks.count }}
    end
  end


  # POST /forms
  # POST /forms.json
  def create
    @task = Task.new(form_params)

    respond_to do |format|
      if @task.save
        format.json { render json: { tasks: @task }, status: :created }
      else
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /forms/1
  # PATCH/PUT /forms/1.json
  def update
    respond_to do |format|
      if @task.update(form_params)
        format.json { render json: { tasks: @task }, status: :ok, location: @task }
      else
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /forms/1
  # DELETE /forms/1.json
  def destroy
    @task.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_form
      @task = Task.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def form_params
      params.require(:task).permit(:name,:description,:ownership,{ :group_ids => [] },:form_id,{ :required_field_ids => [] },{ :editable_field_ids => [] },{ :viewable_field_ids => [] })
    end
end
