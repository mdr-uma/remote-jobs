class Job < ApplicationRecord
    has_many :users_jobs
    has_many :users, through: :users_jobs
    validates :url, uniqueness:true
end
