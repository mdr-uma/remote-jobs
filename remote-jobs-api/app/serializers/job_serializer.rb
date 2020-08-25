class JobSerializer < ActiveModel::Serializer
    attributes :id, :url, :title, :company_name, :job_type, :candidate_required_location, :salary, :description

    # has_many :users_jobs
    has_many :users, through: :users_jobs
end