export const loginUser = (payload) => {
    return(dispatch) => {
        fetch("http://localhost:3000/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: payload })
        })
        .then(res => console.log(res.json()))
        .then(data => dispatch({type: 'LOGIN_USER', user: data}))
    }
}