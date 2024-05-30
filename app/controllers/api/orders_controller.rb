class Api::OrdersController < ApplicationController



    def create
        @user = User.find(params[:id])
        @cart = @user.carts
        @orders = []
        @cart.each do |cart_item|
            @order_item = Order.new(instrument_id: cart_item.instrument_id, buyer_id: cart_item.buyer_id, delivered: false)
            @orders.push(@order_item)
            instrument = Instrument.find(cart_item.instrument_id)
            instrument.available = false
        end
        render 'api/orders/show'
    end


end