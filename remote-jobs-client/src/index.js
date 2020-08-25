import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'
import manageUsersAndJobs from './reducers/manageUsersAndJobs'
import './index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(manageUsersAndJobs, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App/>
    </Provider>
</Router>,
document.getElementById('root')
)