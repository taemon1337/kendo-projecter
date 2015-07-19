class DatasourcesController < ApplicationController
  before_action :set_form, only: [:update, :destroy]

  # GET /forms
  # GET /forms.json
  def index
    @datasources = Datasource.all
    
    respond_to do |format|
      format.json { render json: { datasources: @datasources, total: @datasources.count }}
    end
  end


  # POST /forms
  # POST /forms.json
  def create
    @datasource = Datasource.new(form_params)

    respond_to do |format|
      if @datasource.save
        format.json { render json: { datasources: @datasource }, status: :created }
      else
        format.json { render json: @datasource.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /forms/1
  # PATCH/PUT /forms/1.json
  def update
    respond_to do |format|
      if @datasource.update(form_params)
        format.json { render json: { datasources: @datasource }, status: :ok, location: @datasource }
      else
        format.json { render json: @datasource.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /forms/1
  # DELETE /forms/1.json
  def destroy
    @datasource.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_form
      @datasource = Datasource.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def form_params
      params.require(:datasource).permit(Datasource.permitted_attributes)
    end
end
