class SessionController < ApplicationController
  skip_before_action :isAuthorized, only: :create
  def create
      @owner = Owner.find_by(username: params[:username])
      if @owner&.authenticate(params[:password])
          login_owner
          render json: @owner, status: :created
      else 
          render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
      end 
  end 


  def destroy
      session.delete :owner_id 
      head :no_content
  end
end