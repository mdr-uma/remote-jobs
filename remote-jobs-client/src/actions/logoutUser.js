export const logoutUser = () => {
    return dispatch => {
     return fetch(`http://localhost:3000/logout`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            }
        })
        .then(data =>
        dispatch({type: "LOGOUT_USER"})
        )
    }
}