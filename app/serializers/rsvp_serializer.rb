class RsvpSerializer < ActiveModel::Serializer
  attributes :dog_id, :playdate_id, :note
  belongs_to :dog
  belongs_to :playdate
  belongs_to :owner, through: :dog
  belongs_to :owner, through: :playdate, key: :playdate_owner

  def owner
    object.dog.owner
  end

  def playdate_owner
    object.playdate.owner
  end

end
