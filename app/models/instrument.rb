# == Schema Information
#
# Table name: instruments
#
#  id          :bigint           not null, primary key
#  item_name   :string           not null
#  condition   :string           not null
#  price       :float            not null
#  description :text             not null
#  brand       :string           not null
#  category    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  model       :string
#  shipping    :float
#  seller_id   :bigint
#
class Instrument < ApplicationRecord
    validates :item_name, presence: true
    validates :condition, presence: true
    validates :price, presence: true
    validates :description, presence: true
    validates :category, presence: true
    validates :item_name, presence: true
    validates :brand, presence: true

    validates :condition, inclusion: {in: ["Brand New", 
                                            "Used - Mint", 
                                            "Used - Excellent", 
                                            "Used - Good", 
                                            "Used - Poor"]}


    has_one_attached :photo
    belongs_to :seller, class_name: :User
    has_many :carts, dependent: :destroy
    has_many :prospective_buyers, through: :carts, source: :buyer
    has_one :order
end
