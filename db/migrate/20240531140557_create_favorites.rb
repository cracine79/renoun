class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.references :instrument, foreign_key: { to_table: :instruments }, index: true, null: false
      t.references :favoriter, foreign_key: { to_table: :users}, index: true, null: false
      
      t.timestamps
    end

    add_index :favorites, [:instrument_id, :favoriter_id], unique: true
  end
end
