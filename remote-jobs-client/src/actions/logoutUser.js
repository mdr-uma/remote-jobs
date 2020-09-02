export const logoutUser = () => {
    localStorage.removeItem("token")
    return {
        type: "LOGOUT_USER"
    }
}