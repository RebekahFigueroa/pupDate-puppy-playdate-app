class PlaydatesController < ApplicationController
  before_action :authorize 
  def index
    if playdate_params[:dog_id] 
      playdates = Playdate.where(dog_id: playdate_params[:dog_id])
      render json: playdates, status: :ok
    else
      playdates = Playdate.all
      render json: playdates, status: :ok
    end
  end

  def create
    playdate = Playdate.create!(playdate_params)
    render json: playdate, status: :created 
  end 

  def update
    playdate = current_owner.playdates.find(params[:id])
    if playdate
      if playdate.update!(playdate_params)
        render json: playadte
      else
        render json: { error: "Failed to update the playdate", errors: review.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Playdate not found" }, status: :not_found
    end
  end 

  def destroy
    playdate =  current_owner.playdates.find(params[:id])
    playdate.destroy
    head :no_content
  end 

  private

  def  playdate_params
      params.permit(:owner_id, :location, :date, :time, :size_limit, :age_limit, :playdate_size_limit)
  end

  def authorize 
    render json: { error: ["Owner must be logged in"] }, status: 401 unless session[:owner_id]
  end

end
