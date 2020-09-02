export const loginUser = (payload, callback) => async(dispatch) => {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: payload })
        })
        .then(res => res.json())
        localStorage.setItem("token", response.token)
        console.log(dispatch({type: 'LOGIN_USER', payload: response}))
        callback()
}