class AddIndexToCart < ActiveRecord::Migration[7.0]
  def change
    add_index :carts, [:instrument_id, :buyer_id], unique: true
  end
end
