require_relative "../services/gcs_client"

class PlaydatesController < ApplicationController
  before_action :authorize 
  def index
    gcs_client = GcsClient.new()
    playdates = if playdate_params[:dog_id]
      Playdate
        .left_outer_joins(:rsvps)
        .where("rsvps.dog_id  = ?", playdate_params[:dog_id])
        .distinct
    elsif playdate_params[:owner_id]
      owner_id = params[:owner_id]

      Playdate
        .left_outer_joins(:rsvps, :dogs)
        .where("playdates.owner_id = ? OR rsvps.dog_id IN (SELECT dogs.id FROM dogs WHERE dogs.owner_id = ?)", owner_id, owner_id)
         .distinct
    else
      Playdate.all
    end
  
    playdates = playdates.map do |playdate|
      playdate.dogs.map do |dog|
        dog.image = gcs_client.get_read_url(dog.image)
        dog
      end
  
      playdate
    end
  
    render json: playdates, status: :ok
  end

  def create
    playdate = Playdate.create!(playdate_params)
    render json: playdate, status: :created 
  end 

  def update
    playdate = current_owner.playdates.find(params[:id])
    if playdate
      if playdate.update!(playdate_params)
        render json: playdate
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
      params.permit(:dog_id, :owner_id, :location, :date, :time, :size_limit, :age_limit, :playdate_size_limit)
  end

  def authorize 
    render json: { error: ["Owner must be logged in"] }, status: 401 unless session[:owner_id]
  end

end
