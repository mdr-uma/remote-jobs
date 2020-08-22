export const createUser= (data) => {
    return(dispatch) => {
        dispatch({type: 'LOADING_USERS'})
        fetch('http://localhost:3000/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => console.log(response.json()))
            .then(user => dispatch({ type: 'CREATE_USERS', payload: user }))
    }

}
