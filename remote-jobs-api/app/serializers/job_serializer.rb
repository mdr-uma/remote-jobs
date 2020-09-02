class JobSerializer < ActiveModel::Serializer
    attributes :id, :url, :company, :date, :position, :description

    # has_many :users_jobs
    has_many :users, through: :users_jobs
end