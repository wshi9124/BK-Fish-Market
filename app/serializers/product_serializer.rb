class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :weight, :description
end
