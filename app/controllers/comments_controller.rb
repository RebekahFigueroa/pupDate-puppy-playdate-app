class CommentsController < ApplicationController
  before_action :authorize 
  def index
    comments = Comment.where(playdate_id: params[:playdate_id])
    render json: comments, status: :ok
  end

  def create
    comment = Comment.create!(comment_params)
    render json: comment, status: :created 
  end 

  def destroy
    comment =  current_owner.comments.find(params[:id])
    comment.destroy
    head :no_content
  end 


  private

  def  comment_params
    params.permit(:owner_id, :playdate_id, :text)
  end

  def authorize 
    render json: { error: ["Owner must be logged in"] }, status: 401 unless session[:owner_id]
  end
end
