class Comment < ApplicationRecord
  belongs_to :owner_id
  belongs_to :playdate_id

  validates :text, presence: true, length: { maximum: 300 }

end
