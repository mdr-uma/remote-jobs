class UsersJob < ApplicationRecord
    belongs_to :user 
    belongs_to :job
    validates :job_id, uniqueness:true, :scope => :user_id
end
