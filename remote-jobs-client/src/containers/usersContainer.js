import React from 'react'
import {connect} from 'react-redux'
import {createUser} from './actions/createUser'



class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.createUser()
    }

    render() {
        return(
            <div>
                
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