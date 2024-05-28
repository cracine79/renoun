# == Schema Information
#
# Table name: carts
#
#  id            :bigint           not null, primary key
#  instrument_id :bigint           not null
#  buyer_id      :bigint           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Cart < ApplicationRecord
 

    validates :instrument_id, presence: true
    validates :buyer_id, presence: true

    belongs_to :buyer, class_name: :User
    belongs_to :instrument
    
end
