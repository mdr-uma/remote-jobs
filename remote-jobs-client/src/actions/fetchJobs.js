export const fetchJobs = () => async (dispatch) => {
    const res = await fetch('https://remoteok.io/api?ref=producthunt')
    .then(res => res.json())
    dispatch({type: 'ADD_JOBS', jobs: res}) 
}
