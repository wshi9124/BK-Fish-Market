class PurchasedItem < ApplicationRecord
    belongs_to :purchase
    has_one :product
    validates :purchased_price, :quantity, presence: true
end
