
  json.extract! @instrument, :id, :item_name, :condition, :price, :description, :brand, :category, :model, :created_at, :updated_at, :available, :seller_id, :shipping
  json.photoUrl @instrument.photo.attached? ? @instrument.photo.url : nil
  json.favorites_count @favorites_count
  json.seller_first_name @instrument.seller.first_name
  json.seller_last_name @instrument.seller.last_name

  
