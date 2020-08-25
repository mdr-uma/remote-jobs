import React from 'react'
import {connect} from 'react-redux'
import {createUser} from './actions/createUser'
import {Switch, Route } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'


class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.createUser()
    }

    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={} />
                    <Route exact path='/login' component={} />
                    <Route exact path='/signup' component={SignUpForm} />
                </Switch>
             </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return{
        users: state.users
    }
}

export default connect(mapStateToProps, {createUser})(UsersContainer)