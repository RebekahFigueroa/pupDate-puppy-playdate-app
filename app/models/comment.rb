require_dependency 'owner'
require_dependency 'playdate'

class Comment < ApplicationRecord
  belongs_to :owner
  belongs_to :playdate

  validates :text, presence: true, length: { maximum: 300 }

end
