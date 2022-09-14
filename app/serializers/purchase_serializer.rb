class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :location, :tax, :shipping, :created_at, :payment_method

  has_many :purchased_items
end
