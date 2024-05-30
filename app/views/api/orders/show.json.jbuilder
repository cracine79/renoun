
json.orders do
    @orders.each do |instrument|
        json.set! @order_item.id do
            json.id  @order_item.id
            json.item_name instrument[:item_name]
            json.price instrument[:price]
            json.seller_first_name instrument[:seller_first_name]
            json.seller_last_name instrument[:seller_last_name]
            json.photoUrl instrument[:photo_url]
            json.created_at @order_item.created_at
        end
    end
end
