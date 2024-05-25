json.instrument do
  json.extract! @instrument, :id, :item_name, :condition, :price, :description, :brand, :category, :model, :created_at, :updated_at
end