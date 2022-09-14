class PurchaseHistorySerializer < ActiveModel::Serializer
  attributes

  has_many :purchases
end
