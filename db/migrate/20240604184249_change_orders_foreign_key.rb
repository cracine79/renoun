class ChangeOrdersForeignKey < ActiveRecord::Migration[7.0]
  def change
    change_column :orders, :buyer, foreign_key: { to_table: :users }, index: true, null: false 
  end
end
