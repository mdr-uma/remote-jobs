class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def create
        user = User.new(user_params)
        render json: user.save ? user : {message: user.errors.messages}

    end

    private

    def user_params
        params.require(:quote).permit(:email, :password)
    end

end
