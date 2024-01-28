require_relative "../services/gcs_client"

class DogsController < ApplicationController
  before_action :authorize 
  def index
    gcs_client = GcsClient.new()
    if dog_params[:owner_id] 
      dogs = Dog.where(owner_id: dog_params[:owner_id]).map do |dog| 
        dog.image = gcs_client.get_read_url(dog.image) 
        dog
      end
      render json: dogs, status: :ok
    else
      dogs = Dog.all.map do |dog| 
        dog.image = gcs_client.get_read_url(dog.image) 
        dog
      end
      render json: dogs, status: :ok
    end
  end
  

  def show
    dog = Dog.find(params[:id])
    read_url = GcsClient.new().get_read_url(dog.image)

    if dog
      render json: {
        owner_id: dog.owner_id,
        name: dog.name,
        age: dog.age,
        breed: dog.breed,
        gender: dog.gender,
        size: dog.size,
        description: dog.description,
        image: read_url
      }, status: :ok 
    else 
      render json: "no user found with id", status: 404 
    end 
  end 

  def create
    dog = Dog.create!(dog_params)
    dog.image = GcsClient.new().get_read_url(dog.image)
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

  def get_write_url
    
  end

  private

  def  dog_params
      params.permit(:owner_id, :name, :age, :breed, :gender, :size, :description, :image)
  end

  def authorize 
    render json: { error: ["Owner must be logged in"] }, status: 401 unless session[:owner_id]
  end
end
