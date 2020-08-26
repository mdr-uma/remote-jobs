export const createUser = (payload, callback) => async(dispatch) => {
        const response = await fetch('http://localhost:3000/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            credentials: "include",
            body: JSON.stringify({ user: payload })
        })
            .then(response => response.json())
           dispatch({ type: 'CREATE_USERS', payload: response })
        callback()  
}
