class CreateInstruments < ActiveRecord::Migration[7.0]
  def change
    create_table :instruments do |t|
      t.string :item_name, null: false
      t.string :condition, null: false
      t.float :price, null: false
      t.text :description, null: false
      t.string :brand, null: false
      t.string :category, null: false
      t.float :shipping
      t.references :seller, index: true, foreign_key: { to_table: :users}


      t.timestamps
    end
  end
end
