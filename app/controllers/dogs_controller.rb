class DogsController < ApplicationController
  before_action :authorize 
  def index
    if dog_params[:owner_id] 
      dogs = Dog.where(owner_id: dog_params[:owner_id])
      render json: dogs, status: :ok
    else
      dogs = Dog.all
      render json: dogs, status: :ok
    end
  end
  

  def show
    dog = Dog.find(params[:id])
    if dog
      render json: {owner_id: dog.owner_id, name: dog.name, age: dog.age, breed: dog.breed, gender: dog.gender, size: dog.size, description: dog.description, image: dog.image}, status: :ok 
    else 
      render json: "no user found with id", status: 404 
    end 
  end 

  def create
    dog = Dog.create!(dog_params)
    render json: dog, status: :created 
  end 

  def update
    dog = current_owner.dogs.find(params[:id])
    if dog
      if dog.update!(dog_params)
        render json: dog
      else
        render json: { error: "Failed to update the dog profile", errors: review.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Dog not found" }, status: :not_found
    end
  end 

  def destroy
    dog =  current_owner.dogs.find(params[:id])
    dog.destroy
    head :no_content
  end 

  private

  def  dog_params
      params.permit(:owner_id, :name, :age, :breed, :gender, :size, :description, :image)
  end

  def authorize 
    render json: { error: ["Owner must be logged in"] }, status: 401 unless session[:owner_id]
  end
end
