class PlaydateSerializer < ActiveModel::Serializer
  attributes :id, :owner_id, :location, :date, :time, :size_limit, :age_limit, :playdate_size_limit

  belongs_to :owner
  has_many :rsvps
  has_many :comments
  has_many :dogs, through: :rsvps
end
