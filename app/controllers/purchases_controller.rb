class PurchasesController < ApplicationController
    
    def create
        purchase= Purchase.create!(purchase_params)
        purchased_items = params[:purchased_items]
        purchased_items.each do |item| 
            PurchasedItem.create!(purchase_id: purchase.id, product_id: item[:id], purchased_price: item[:price], quantity: item[:quantity])
        end
        render json: current_user, status: 201
    end

    private 

    def purchase_params
        params.permit(:user_id, :location, :tax, :shipping)
    end

end
