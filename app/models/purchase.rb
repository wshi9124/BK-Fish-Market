class Purchase < ApplicationRecord
    belongs_to :user
    has_many :purchased_items
    validates :location, :tax, :shipping, presence: true
end
