class User < ApplicationRecord
    has_many :users_jobs
    has_many :jobs, through: :users_jobs

    has_secure_password

    validates :email, presence: true, uniqueness: true 
    validates :password, presence: true 
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
end
