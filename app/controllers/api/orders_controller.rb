class Api::OrdersController < ApplicationController



    def create
      
        @user = User.find(params[:user_id])
        @cart = @user.carts
        @orders = []

        @cart.each do |cart_item|
            @order_item = Order.new(instrument_id: cart_item.instrument_id, 
                                    buyer_id: cart_item.buyer_id, 
                                    delivered: false)
            @order_item.save
            @order_extended_info_item = {}
       
            @instrument = Instrument.find(cart_item.instrument_id)
        
            @instrument.available = false
           
            @instrument.save


    
        
            @order_extended_info_item[:order_item_id] = @order_item.id
            @order_extended_info_item[:item_name] = @instrument.item_name
            @order_extended_info_item[:instrument_id] = @instrument.id
            @order_extended_info_item[:buyer_id] = @order_item.buyer_id
            @order_extended_info_item[:price] = @instrument.price
            @order_extended_info_item[:seller_first_name] = @instrument.seller.first_name
            @order_extended_info_item[:seller_last_name] = @instrument.seller.last_name
            @order_extended_info_item[:photoUrl] = @instrument.photo.attached? ? @instrument.photo.url : nil
            @order_extended_info_item[:created_at] = @order_item.created_at
            @order_extended_info_item[:seller_id] = @instrument.seller_id
            @orders.push(@order_extended_info_item)
            cart_item.destroy()

      
        end
     

        render 'api/orders/show'
    end


end