class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def create
        user = User.new(user_params)
        render json: user.save ? user : {error: 'something went wrong'}


    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

end
