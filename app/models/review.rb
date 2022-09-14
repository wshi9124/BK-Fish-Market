class Review < ApplicationRecord
    belongs_to :user
    belongs_to :product
    validates :star, :content, presence: true
    validates :user_id, uniqueness: { scope: :product_id }
end
