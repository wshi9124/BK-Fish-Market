class User < ApplicationRecord
    has_many :purchases
    has_many :reviews
    has_many :products, through: :reviews
    has_secure_password
    validates :first_name, :last_name, :email, :password, :password_confirmation, :account_type, presence: true
    validates :email, uniqueness: true
    validates :email, email: true
    validates :password, length: { in: 4..20 }
end
