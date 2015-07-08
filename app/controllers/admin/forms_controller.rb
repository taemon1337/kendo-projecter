class Admin::FormsController < ApplicationController
  before_action :set_admin_form, only: [:show, :edit, :update, :destroy]

  # GET /admin/forms
  # GET /admin/forms.json
  def index
    @admin_forms = Admin::Form.all
    
    respond_to do |format|
      format.json { render json: { forms: @admin_forms, total: @admin_forms.count }}
    end
  end

  # POST /admin/forms
  # POST /admin/forms.json
  def create
    @admin_form = Admin::Form.new(admin_form_params)

    respond_to do |format|
      if @admin_form.save
        format.json { render json: { forms: @admin_form }, status: :created, location: @admin_form }
      else
        format.json { render json: @admin_form.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /admin/forms/1
  # PATCH/PUT /admin/forms/1.json
  def update
    respond_to do |format|
      if @admin_form.update(admin_form_params)
        format.json { render json: { forms: @admin_form }, status: :ok, location: @admin_form }
      else
        format.json { render json: @admin_form.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/forms/1
  # DELETE /admin/forms/1.json
  def destroy
    @admin_form.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_form
      @admin_form = Admin::Form.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_form_params
      params[:admin_form]
    end
end
