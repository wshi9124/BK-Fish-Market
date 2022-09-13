class PurchasedItemSerializer < ActiveModel::Serializer
  attributes :id, :purchase_id, :product_id, :purchased_price, :quantity
end
