class UsersController < ApplicationController
    before_action :authenticate_user, only: [:show]

    def index
        @users = User.all
        if @users
            render json: @users
        else 
            render json: {
                error: 'no users found'
            }, status: 500
        end
    end

    # def show
    #     @user = User.find_by(id: params[:id])
    #     if @user
    #         render json: @user 
    #     else
    #         render json: {
    #             status: 500,
    #             errors: ['no users found']
    #         }
    #     end
    # end

    def create
        @user = User.create(user_params)
        if @user.valid?
            created_jwt = issue_token({id: @user.id})
            cookies.signed[:jwt] = {value: created_jwt, httponly: true, expires: 1.hour.from_now}
            render json: @user
        else
            render json: {error: "Somthing went wrong, Please try again later."}
        end
        # render json: user.save ? user : {error: 'something went wrong'}
    end

    private

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end

end
