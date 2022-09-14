class PurchasedItem < ApplicationRecord
    belongs_to :purchase
    belongs_to :product
    validates :purchased_price, :quantity, presence: true
end
