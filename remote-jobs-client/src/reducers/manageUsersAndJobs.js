import { combineReducers } from 'redux'
import userReducer from './userReducer'
import jobsReducer from './jobsReducer'
import savedJobsReducer from './savedJobsReducer'

const rootReducer = combineReducers({
    user: userReducer,
    jobs: jobsReducer,
    savedJobs: savedJobsReducer
})

export default rootReducer