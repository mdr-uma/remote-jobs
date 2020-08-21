class Job < ApplicationRecord
    has_many :users

    validates :url, uniqueness:true
end
