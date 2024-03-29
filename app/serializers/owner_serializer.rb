class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :username, :city, :zipcode
  has_many :dogs
  has_many :comments
  has_many :playdates
  has_many :rsvps, through: :dogs
end
