export default function usersReducer(state = {}, action){

    switch (action.type) {
        case 'CREATE_USERS':
            return {
                user: action.payload
            }
        default:
            return state
    }
}