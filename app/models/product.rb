class Product < ApplicationRecord
    has_one :purchased_item
    has_many :reviews
    has_many :users, through: :reviews
    has_one_attached :image
    validates :name, :category, :price, :description, presence: true
    validates :description, length: { minimum: 10 }
    validates :price, numericality: true
    validates :price, numericality: { greater_than: 0 }
end
