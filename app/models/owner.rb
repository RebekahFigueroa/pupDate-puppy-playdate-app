class Owner < ApplicationRecord
  has_secure_password

  has_many :dogs
  has_many :comments
  has_many :playdates
  has_many :rsvps, through: :dogs

  validates :username, presence: true, uniqueness: true
  validates :zipcode, presence: true
  validates :city, presence: true
end
