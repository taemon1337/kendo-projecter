class WrappersController < ApplicationController
  before_action :set_form, only: [:update, :destroy]

  # GET /wrappers
  # GET /wrappers.json
  def index
    @wrappers = Wrapper.all
    
    respond_to do |format|
      format.json { render json: { wrappers: @wrappers, total: @wrappers.count }}
    end
  end


  # POST /wrappers
  # POST /wrappers.json
  def create
    @wrapper = Wrapper.new(form_params)

    respond_to do |format|
      if @wrapper.save
        format.json { render json: { wrappers: @wrapper }, status: :created }
      else
        format.json { render json: @wrapper.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /wrappers/1
  # PATCH/PUT /wrappers/1.json
  def update
    respond_to do |format|
      if @wrapper.update(form_params)
        format.json { render json: { wrappers: @wrapper }, status: :ok, location: @wrapper }
      else
        format.json { render json: @wrapper.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /wrappers/1
  # DELETE /wrappers/1.json
  def destroy
    @wrapper.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_form
      @wrapper = Wrapper.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def form_params
      params.require(:wrapper).permit(:name,:description,:form_wrapper,:field_wrapper,:form_selector,:field_selector,:title_selector)
    end
end
