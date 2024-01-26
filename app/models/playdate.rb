class Playdate < ApplicationRecord
  belongs_to :owner_id
  has_many :rsvps
  has_many :comments
  has_many :dogs, through: :rsvps

  validates :location, presence: true
  validates :time, presence: true
  validates :size_limit, presence: true
  validates :age_limit, presence: true
  validates :playdate_size_limit, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 2, less_than_or_equal_to: 100 }

end
