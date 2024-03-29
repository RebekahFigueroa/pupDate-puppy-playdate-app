class DogSerializer < ActiveModel::Serializer
  attributes :id, :owner_id, :name, :age, :breed, :gender, :size, :description, :image

  belongs_to :owner

  has_many :rsvps
  has_many :playdates, through: :rsvps
  

end
