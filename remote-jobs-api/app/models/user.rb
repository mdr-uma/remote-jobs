class User < ApplicationRecord
    has_many :jobs

    validates :email, presence: true, uniqueness: true 
    validates :password, presence: true 
end
