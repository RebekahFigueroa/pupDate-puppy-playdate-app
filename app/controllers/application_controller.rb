class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :isAuthorized

  def current_owner
    Owner.find_by(id: session[:owner_id])
  end

  def login_owner
    session[:owner_id] = @owner.id
  end
  
  def isAuthorized 
    return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :owner_id
  end 

  private 

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
