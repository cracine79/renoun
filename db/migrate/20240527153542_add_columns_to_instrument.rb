class AddColumnsToInstrument < ActiveRecord::Migration[7.0]
  def change
    add_column :instruments, :shipping, :float
    add_column :instruments, :seller_id, :bigint


  end
end
