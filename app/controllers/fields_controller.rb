class FieldsController < ApplicationController
  before_action :set_form, only: [:update, :destroy]

  # GET /fields
  # GET /fields.json
  def index
    @fields = Field.all
    
    respond_to do |format|
      format.json { render json: { fields: @fields, total: @fields.count }}
    end
  end


  # POST /fields
  # POST /fields.json
  def create
    @field = Field.new(form_params)

    respond_to do |format|
      if @field.save
        format.json { render json: { fields: @field }, status: :created }
      else
        format.json { render json: @field.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /fields/1
  # PATCH/PUT /fields/1.json
  def update
    respond_to do |format|
      if @field.update(form_params)
        format.json { render json: { fields: @field }, status: :ok, location: @field }
      else
        format.json { render json: @field.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /fields/1
  # DELETE /fields/1.json
  def destroy
    @field.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_form
      @field = Field.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def form_params
      params.require(:field).permit(:name,:title,:description,:element,:element_attributes,:kendo_role,:kendo_opts)
    end
end
