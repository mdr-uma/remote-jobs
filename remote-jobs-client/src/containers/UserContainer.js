import React from 'react'
import {connect} from 'react-redux'
import DashBoard from '../components/DashBoard'
import {logoutUser} from '../actions/logoutUser'

class UserContainer extends React.Component{
    render() {
        return(
            <div>
                <DashBoard 
                userName={this.props.user.username} 
                logOut={this.props.logoutUser} 
                savedJobs={this.props.savedJobs}
                />
            </div>
        )
    }
}

const mapStateToProps = ({ user, savedJobs }) => {
    return {
        user,
        savedJobs
    }
}

export default connect(mapStateToProps, {logoutUser})(UserContainer)