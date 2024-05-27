# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  star_rating     :float
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password 
    
    has_many :instruments_for_sale, foreign_key: :seller_id, class_name: :Instrument

    validates :email, 
        length: { in: 3..100 },
        format: { with: URI::MailTo::EMAIL_REGEXP },
        uniqueness: true

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..25 }, allow_nil: true
    validates :star_rating, numericality: { in: 0..5}, allow_nil: true

    before_validation :ensure_session_token

    def self.find_by_credentials(email, password)
       
       user = User.find_by(email: email)
        if user&.authenticate(password)
          return user
        else
          return nil
        end  
    end

    def reset_session_token!
        self.update!(session_token: generate_unique_session_token)
        return self.session_token
      end

    private
    def generate_unique_session_token
        while true
            token = SecureRandom.base64
            return token unless User.exists?(session_token: token)
        end
    end

    def ensure_session_token
        self.session_token ||= self.generate_unique_session_token
    end

end
