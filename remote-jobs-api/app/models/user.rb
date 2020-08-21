class User < ApplicationRecord
    has_and_belongs_to_many :jobs

    validates :email, presence: true, uniqueness: true 
    validates :password, presence: true 
end
