



json.favorite do
    json.extract! @favorite, :id, :instrument_id, :created_at
end