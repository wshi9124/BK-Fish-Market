class ProductsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    
    def index
        render json: Product.all
    end

    def show
        product = find_product
        render json: product
    end

    def create
        product= Product.create!(product_params)
        render json: product, status: 201
    end

    def update
        product= find_product
        product.update!(product_params)
        render json: product, status: 202
    end

    private

    def find_product
        Product.find(params[:id])
    end 

    def product_params
        params.permit(:name, :category, :price, :description, :image, :active)
    end
end
