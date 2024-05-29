class Api::CartsController < ApplicationController

    def index
        @carts = Cart.all
        render 'api/carts/index'
    end

    def destroy

        @cart = Cart.find(params[:id]);
       
        if @cart.destroy
            render json: @cart.id
        else
            render render json: {errors: @cart.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def create
        @cart = Cart.new(cart_params)
        if @cart.save!
            render json: @cart
        else
            render json: {errors: @cart.errors.full_messages }, status: :unprocessable_entity
        end
    end



    private
    
    def cart_params
        params.require(:cart).permit(:buyer_id, :instrument_id)
    end
    

end