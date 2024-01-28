require_relative "../services/gcs_client"

class RsvpsController < ApplicationController
  before_action :authorize 

  def index
    rsvps = Rsvp.where(playdate_id: params[:playdate_id])
    render json: rsvps, status: :ok
  end

  def create
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

end
