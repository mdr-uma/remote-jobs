export default function usersReducer(state = {}, action){
    switch (action.type) {
        case 'CREATE_USER':
            return (
                action.payload
            )

        case 'LOGIN_USER':
            return (
                action.payload
            )

        case 'LOGOUT_USER':
            return {}

        case 'CURRENT_USER':
            return (
                action.user
                )

        case 'REMOVE_JOB':
            return (
                { ...state, savedJobs: state.savedJobs.filter(job => job.id !== action.id) }
            )
    
        default:
            return state
    }
}