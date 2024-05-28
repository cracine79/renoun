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
    

