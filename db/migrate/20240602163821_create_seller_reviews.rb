class CreateSellerReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :seller_reviews do |t|
        t.references :reviewer, foreign_key: { to_table: :users }, index: true, null: false
        t.references :seller, foreign_key: {to_table: :users}, index: true, null: false
        t.string :title, null: false
        t.text :body, null: false
        t.integer :stars, null: false

      t.timestamps
    end
  end
end
