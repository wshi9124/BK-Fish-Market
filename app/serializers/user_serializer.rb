class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :account_type

  has_many :reviews
end
