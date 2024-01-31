class OwnersController < ApplicationController
  skip_before_action :isAuthorized, only: :create

  def index
    owner = Owner.find(params[:id])
    render json: owner, status: :ok
  end

  def create
      @owner = Owner.create!(owner_params)
      login_owner
      render json: @owner, status: :created
  end 

  def show
    owner = Owner.find(params[:id])
    if owner
      render json: {username: owner.username, dogs: owner.dogs}, status: :ok 
    else 
      render json: "no owner found with id", status: 404 
    end 
  end 

  private 

  def owner_params 
      params.permit(:username, :password, :city, :zipcode)
  end
end
