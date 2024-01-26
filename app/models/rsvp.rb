require_dependency 'dog'
require_dependency 'playdate'

class Rsvp < ApplicationRecord
  belongs_to :dog
  belongs_to :playdate

  validates :note, presence: true, length: { maximum: 300 }
end
