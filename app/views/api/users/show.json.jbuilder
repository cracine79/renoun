json.user do
  json.extract! @user, :id, :email, :first_name, :last_name, :created_at, :updated_at
end




json.cart do
  @cart.each do |cart|
    json.set! cart.id do
      json.id cart.id
      json.instrument_id cart.instrument_id
      json.created_at cart.created_at
    end
  end
end

json.orders do
  @orders.each do |order|
    json.set! order.id do
      json.id  order.id
      json.item_name  order.item_name
      json.price  order.price
      json.seller_first_name order.seller.first_name
      json.seller_last_name order.seller.last_name
      json.created_at order.created_at
      json.photoUrl order.photo.attached? ? order.photo.url : nil
      json.shipping order.shipping
    end
  end
end


json.favorites do
  @favorites.each do |favorite|
    json.set! favorite.id do
      json.id favorite.id
      json.instrument_id favorite.instrument_id
      json.created_at favorite.created_at
    end
  end
end

