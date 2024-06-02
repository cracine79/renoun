# == Schema Information
#
# Table name: seller_reviews
#
#  id          :bigint           not null, primary key
#  reviewer_id :bigint           not null
#  seller_id   :bigint           not null
#  title       :string           not null
#  body        :text             not null
#  stars       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  first_name  :string
#  last_init   :string
#
class SellerReview < ApplicationRecord

    validates :seller_id, presence: true
    validates :reviewer_id, presence: true
    validates :body, presence: true
    validates :title, presence: true
    validates :stars, presence: true
    validates :stars, numericality: {in: 1..5}

    belongs_to :reviewer, class_name: :User
    belongs_to :seller, class_name: :User

end
