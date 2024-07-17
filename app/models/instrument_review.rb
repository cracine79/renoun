# == Schema Information
#
# Table name: instrument_reviews
#
#  id                  :bigint           not null, primary key
#  reviewer_name       :string           default("anonymous")
#  title               :string           not null
#  body                :string           not null
#  instrument_name     :string           not null
#  stars               :integer          not null
#  helpful_count       :integer          default(0)
#  purchased_on_renoun :boolean          default(FALSE), not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class InstrumentReview < ApplicationRecord
    validates :title, presence: true
    validates :body, presence: true
    validates :stars, presence: true
    validates :stars, numericality: {in: 1..5}
    validates :instrument_name, presence: true

end
