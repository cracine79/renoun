class AddNamesToSellerReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :seller_reviews, :first_name, :string
    add_column :seller_reviews, :last_init, :string

  end
end
