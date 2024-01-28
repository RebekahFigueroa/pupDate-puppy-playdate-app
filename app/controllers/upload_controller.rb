require_relative "../services/gcs_client"

class UploadController < ApplicationController
  def upload 
    extension = File.extname(params[:file_name])

    # implement a method that generates a file name 
    file_name = SecureRandom.uuid + extension
    puts "Generated file name: #{file_name}"
    
    # creates that file in gcs (empty) file
    write_url = GcsClient.new().upload_file(file_name, params[:file_type])

    #returns file name and write URL for that file name
    render json: {
      file_name: file_name,
      write_url: write_url
    }, status: :ok
  end 
end
