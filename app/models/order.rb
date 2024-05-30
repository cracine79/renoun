# == Schema Information
#
# Table name: orders
#
#  id            :bigint           not null, primary key
#  instrument_id :bigint           not null
#  buyer_id      :bigint           not null
#  delivered     :boolean
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Order < ApplicationRecord
    validates :instrument_id, presence: true
    validates :buyer_id, presence: true

    belongs_to :buyer, class_name: :User
    belongs_to :instrument
end
