
json.orders do
    @orders.each do |instrument|
        json.set! @order_item.id do
            json.id  @order_item.id
            json.item_name instrument.item_name
            json.price instrument.price
            json.seller_first_name instrument.seller.first_name
            json.seller_last_name instrument.seller.last_name
            json.photoUrl instrument.photo.attached? intrument.photo.url : nil
            json.created_at @order_item.created_at
        end
    end
end
