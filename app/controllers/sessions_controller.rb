class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create, :show, :destroy]

    #To Log In
    def create 
        user = User.find_by(email: params[:email], account_type: params[:account_type])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { error: "Invalid Email or password" }, status: 401
        end
    end

    # /me
    def show
        if current_user
            render json: current_user
        else
            render json: { message: "Not logged in" }, status: 401
        end
    end

    # To Log Out
    def destroy
        session.delete :user_id
        head :no_content
    end

end

