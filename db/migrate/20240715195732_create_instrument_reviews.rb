class CreateInstrumentReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :instrument_reviews do |t|
      t.string :reviewer_name, default: "anonymous"
      t.string :title, null: false
      t.string :body, null: false
      t.string :instrument_name, null: false
      t.integer :stars, null: false
      t.integer :helpful_count, default: 0
      t.boolean :purchased_on_renoun, null: false, default: false

      t.timestamps
    end
  end
end
