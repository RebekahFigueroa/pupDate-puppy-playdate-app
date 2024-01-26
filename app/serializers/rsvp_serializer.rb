class RsvpSerializer < ActiveModel::Serializer
  attributes :dog_id, :playdate_id, :note 
  belongs_to :dog
  belongs_to :playdate
end
