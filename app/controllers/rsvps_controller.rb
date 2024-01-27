class RsvpsController < ApplicationController
  before_action :authorize 

  def create
    rsvp = Rsvp.create!(rsvp_params)
    render json: rsvp, status: :created 
  end 

  private

  def  rsvp_params
      params.permit(:dog_id, :playdate_id, :note)
  end

  def authorize 
    render json: { error: ["Owner must be logged in"] }, status: 401 unless session[:owner_id]
  end

end
