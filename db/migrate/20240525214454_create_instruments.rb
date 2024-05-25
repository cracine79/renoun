class CreateInstruments < ActiveRecord::Migration[7.0]
  def change
    create_table :instruments do |t|
      t.string :item_name, null: false
      t.string :condition, null: false
      t.float :price, null: false
      t.text :description, null: false
      t.string :brand, null: false
      t.string :category, null: false

      add_index :instruments, :item_name

      t.timestamps
    end
  end
end
