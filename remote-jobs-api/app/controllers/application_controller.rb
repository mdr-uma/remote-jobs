class ApplicationController < ActionController::API
    include ::ActionController::Cookies

    def issue_token(payload)
        JWT.encode(payload, "secret", "HS256")
    end

    def authenticate_user
        jwt = cookies.signed[:jwt]
        JWT.decode(jwt, "secret", "HS256")
    end
end

