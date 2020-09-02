export const fetchJobs = () => async(dispatch) => {
    const res = await fetch('https://remoteok.io/api?ref=producthunt')
    .then(res => res.json())
    dispatch({type: 'ADD_JOBS', jobs: res}) 
}

export const fetchSearchJobs = (jobs, callback) => async(dispatch) => {
    const response = await fetch(`https://remoteok.io/api?tags=${jobs}`)
    .then(res => res.json())
    dispatch({type: 'SEARCH_JOBS', jobs: response})
    callback()
}

export const savedJobs = (job, user, callback) => {

    return (dispatch) => {
    return fetch(`http://localhost:3000/jobs`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            job: {
                 url: job.url, 
                 company:job.company, 
                 date:job.date, 
                 position:job.position, 
                 description:job.description, 
                 user_id: user.id
            }
        })
    })
    .then(res=>res.json())
    .then(data => {
        dispatch({ type: "SAVED_JOB", job: data })
        callback()
        })
    }
}