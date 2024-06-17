class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.references :instrument, foreign_key: { to_table: :instruments }, index: true, null: false
      t.references :buyer, foreign_key: { to_table: :users }, index: true, null: false
      t.boolean :delivered

      t.timestamps
    end
  end
end
