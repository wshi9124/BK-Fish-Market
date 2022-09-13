class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :star, :content
end
