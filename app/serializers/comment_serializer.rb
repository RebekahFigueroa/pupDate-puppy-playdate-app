class CommentSerializer < ActiveModel::Serializer
  attributes :id, :owner_id, :playdate_id, :text

  belongs_to :owner
  belongs_to :playdate
end
