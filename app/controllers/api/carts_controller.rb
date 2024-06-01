class Api::CartsController < ApplicationController

    def index
        user_id = params[:user_id]
  
        @user = User.find_by_id(user_id)
        @carts = @user.carts
      
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
            render json: ('already in cart')
        end
    end



    private
    
    def cart_params
        params.require(:cart).permit(:buyer_id, :instrument_id)
    end
    

end