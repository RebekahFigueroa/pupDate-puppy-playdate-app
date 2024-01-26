class Rsvp < ApplicationRecord
  belongs_to :dog_id
  belongs_to :playdate_id

  validates :note, presence: true, length: { maximum: 300 }
end
