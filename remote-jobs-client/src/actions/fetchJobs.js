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
