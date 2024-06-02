
json.orders do
    @orders.each do |instrument|
        json.set! instrument[:order_item_id] do
            json.id  instrument[:order_item_id]
            json.item_name instrument[:item_name]
            json.price instrument[:price]
            json.shipping instrument[:shipping]
            json.seller_first_name instrument[:seller_first_name]
            json.seller_last_name instrument[:seller_last_name]
            json.seller_id instrument[:seller_id]
            json.photoUrl instrument[:photo_url]
            json.created_at @order_item.created_at
            json.instrument_id instrument[:instrument_id]
        end
    end
end


    
json.instrument do
  json.extract! @instrument, :id, :item_name, :condition, :price, :description, :brand, :category, :model, :created_at, :updated_at, :available
  json.photoUrl @instrument.photo.attached? ? @instrument.photo.url : nil
  json.seller @instrument.seller
end
