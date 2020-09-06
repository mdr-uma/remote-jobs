const savedJobsReducer = (state = [], action) => {
    console.log(action.id)
    switch (action.type) {
        case 'SAVED_JOB':
            return (
                [...state, {job:action.job, save: action.save}]
            )
        case 'REMOVE_JOB':
            return (
                state.filter(job => job.id !== action.id)
                )

        default:
            return state
    }
}

export default savedJobsReducer