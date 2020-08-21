class UserSerializer < ActiveModel::Serializer
    attributes :email, :password

    # has_many :users_jobs
    has_many :jobs, through: :users_jobs
end