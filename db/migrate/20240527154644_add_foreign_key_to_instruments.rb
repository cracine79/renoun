class AddForeignKeyToInstruments < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :instruments, :users, column: :seller_id
  end
end
