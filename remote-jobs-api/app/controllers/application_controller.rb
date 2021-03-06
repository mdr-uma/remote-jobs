class ApplicationController < ActionController::API
    include ::ActionController::Cookies

    def current_user
        begin
        @current_user ||= User.find_by(id: authenticate_user)
        rescue
            return nil
        end
    end

    def logged_in?
        !!current_user
    end

    def serializer_user(user)
        { username: user.username, email:user.email, id: user.id}
    end

    def issue_token(payload)
        JWT.encode(payload, "secret", "HS256")
    end

    def authenticate_user
        jwt = cookies.signed[:jwt]
        JWT.decode(jwt, "secret", "HS256")[0]["id"]
    end
end

