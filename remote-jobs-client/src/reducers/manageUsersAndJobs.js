import { combineReducers } from 'redux'
import usersReducer from '../reducers/usersReducer'
import jobsReducer from '../reducers/jobsReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    jobs: jobsReducer
})

export default rootReducer