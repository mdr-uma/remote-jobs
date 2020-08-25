class UserSerializer < ActiveModel::Serializer
    attributes :id, :email

    # has_many :users_jobs
    has_many :jobs, through: :users_jobs
end