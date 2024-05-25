@instruments.each do |instrument|
    json.set! instrument.id do
        json.id instrument.id
        json.item_name instrument.item_name
        json.condition instrument.condition
        json.price instrument.price
        json.description instrument.description
        json.brand instrument.brand
        json.category instrument.category
        json.created_at instrument.created_at
        json.updated_at instrument.updated_at
        json.model instrument.model
        json.dude instrument.model
    end
end