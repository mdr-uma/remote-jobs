export const userJob = () => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/jobs`, {
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },      
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                dispatch({ type: "USER_JOB", job: data})
            })
    }
}

export const removeJob = (id) => {
    return dispatch => {
        return fetch(`http://localhost:3000/jobs/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            }
        })
        .then(job => {
        dispatch({type: "REMOVE_JOB", id})
        })
    }
}