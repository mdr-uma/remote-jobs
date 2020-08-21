class Job < ApplicationRecord
    has_and_belongs_to_many :users

    validates :url, uniqueness:true
end
