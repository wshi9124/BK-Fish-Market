class ReviewsController < ApplicationController
    skip_before_action :authorized, only: [:show]
    def create
        review= Review.create!(review_params)
        render json: review, status: :created
    end

    def show
        render json: Product.find(params[:id]).reviews
    end

    private

    def review_params
        params.permit(:star, :content, :user_id, :product_id)
    end
end
