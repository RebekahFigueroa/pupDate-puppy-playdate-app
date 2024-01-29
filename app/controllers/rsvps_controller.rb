require_relative "../services/gcs_client"

class RsvpsController < ApplicationController
  before_action :authorize 

  def index
    rsvps = Rsvp.where(playdate_id: params[:playdate_id])
    render json: rsvps, status: :ok
  end

  def create
    playdate = Playdate.find(params[:playdate_id])
    
    # Check if the dog meets the playdate requirements
    unless dog_meets_playdate_requirements(playdate)
      render json: { error: ["Your dog doesn't meet the playdate requirements"] }, status: :unprocessable_entity
      return
    end

    rsvp = Rsvp.create!(rsvp_params)
    rsvp.dog.image = GcsClient.new().get_read_url(rsvp.dog.image)
    render json: rsvp, status: :created 
  end 

  def destroyByPlaydateId
    rsvps = Rsvp.joins(:dog).where(dogs: { owner_id: current_owner.id }, playdate_id: params[:playdate_id])
    rsvps.destroy_all if rsvps.any?
    head :no_content
  end

  private

  def  rsvp_params
      params.permit(:dog_id, :playdate_id, :note)
  end

  def authorize 
    render json: { error: ["Owner must be logged in"] }, status: 401 unless session[:owner_id]
  end

  def dog_meets_playdate_requirements(playdate)
    # Logic for playdate size limit
    playdate_size_limit = playdate.playdate_size_limit
    current_rsvps_count = Rsvp.where(playdate_id: playdate.id).count
    return false if playdate_size_limit.present? && current_rsvps_count >= playdate_size_limit

    # Logic for size limit
    dog_params = params[:dog]
    size_limit = playdate.size_limit
    dog_size = dog_params && dog_params[:size]
    return false if size_limit.present? && size_limit != "None" && dog_size != size_limit

    # Logic for age limit
    age_limit = playdate.age_limit
    dog_age = dog_params && dog_params[:age]
    return false if age_limit.present? && age_limit != "None" && dog_age != age_limit

    return true
  end

end
