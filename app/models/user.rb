class User < ApplicationRecord
    has_secure_password
    validates :first_name, :last_name, :email, :password, :password_confirmation, :is_admin, presence: true
    validates :email, :username, uniqueness: true
    validates :email, email: true
    validates :username, :password, length: { in: 4..20 }
end
