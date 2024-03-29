require_dependency 'owner'

class Playdate < ApplicationRecord
  belongs_to :owner
  has_many :rsvps
  has_many :comments
  has_many :dogs, through: :rsvps

  validates :location, presence: true
  validates :time, presence: true
  validates :date, presence: true
  validates :size_limit, presence: true
  validates :age_limit, presence: true
  validates :playdate_size_limit, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 2, less_than_or_equal_to: 100 }

  validate :date_must_be_in_future

  def date_must_be_in_future
    if date.present? && date < Date.today
      errors.add(:date, "can't be in the past")
    end
  end

end
