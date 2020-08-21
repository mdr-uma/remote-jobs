class User < ApplicationRecord
    has_many :users_jobs
    has_many :jobs, through: :users_jobs

    validates :email, presence: true, uniqueness: true 
    validates :password, presence: true 
end
