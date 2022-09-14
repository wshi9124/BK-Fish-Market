class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :star, :content, :created_at

  belongs_to :user
end
