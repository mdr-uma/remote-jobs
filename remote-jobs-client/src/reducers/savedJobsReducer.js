const savedJobsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVED_JOB':
            return (
                [...state, {job:action.job, save: action.save}]
            )

        default:
            return state
    }
}

export default savedJobsReducer