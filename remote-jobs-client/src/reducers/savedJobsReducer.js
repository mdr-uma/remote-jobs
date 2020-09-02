const savedJobsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVED_JOB':
            return (
                [...state, action.job]
            )

        default:
            return state
    }
}

export default savedJobsReducer