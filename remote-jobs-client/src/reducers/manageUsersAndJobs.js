import { combineReducers } from 'redux'
import userReducer from './userReducer'
import jobsReducer from '../reducers/jobsReducer'

const rootReducer = combineReducers({
    user: userReducer,
    jobs: jobsReducer
})

export default rootReducer