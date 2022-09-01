class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        user= User.create!(user_params)
        session[:user_id]= user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation, :is_admin)
    end

end
