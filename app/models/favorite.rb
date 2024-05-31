# == Schema Information
#
# Table name: favorites
#
#  id            :bigint           not null, primary key
#  instrument_id :bigint           not null
#  favoriter_id  :bigint           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Favorite < ApplicationRecord
    validates :instrument_id, presence: true
    validates :favoriter_id, presence: true

  
    belongs_to :instrument
    belongs_to :favoriter, class_name: :User

end
