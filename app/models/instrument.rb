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
    
    
end