export const createUser= (payload) => {
    return(dispatch) => {
        dispatch({type: 'LOADING_USERS'})
        fetch('http://localhost:3000/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            credentials: "include", 
            body: JSON.stringify({user:payload})
        })
            .then(response => console.log(response.json()))
            .then(data => dispatch({ type: 'CREATE_USERS', user: data }))
    }

}
