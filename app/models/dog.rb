class Dog < ApplicationRecord
  belongs_to :owner_id

  has_many :playdates, through: :rsvps
  has_many :rsvps

  validates :name, presence: true
  validates :age, presence: true
  validates :breed, presence: true
  validates :gender, presence: true
  validates :size, presence: true
  validates :description, presence: true, length: { maximum: 300 }
  validates :image, presence: true
end
