class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :email

    # has_many :users_jobs
    has_many :jobs, through: :users_jobs
end