class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        user= User.create!(user_params)
        UsersMailer.with(user: user).welcome.deliver_later
        session[:user_id]= user.id
        render json: user, status: :created
    end

    def show
        render json: current_user, serializer: PurchaseHistorySerializer, include: ["purchases", "purchases.purchased_items", "purchases.purchased_items.product"]
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation, :account_type)
    end

end
