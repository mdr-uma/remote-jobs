import React from 'react'
import {connect} from 'react-redux'
import DashBoard from '../components/DashBoard'
import {logoutUser} from '../actions/logoutUser'
import {getUser} from '../actions/loginUser'
import {removeJob} from '../actions/fetchJobs'

class UserContainer extends React.Component{
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        return(
            <div>
                <DashBoard 
                userName={this.props.user.username} 
                logOut={this.props.logoutUser} 
                savedJobs={this.props.user.savedJobs}
                removeJob={this.props.removeJob}
                user={this.props.user}
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

export default connect(mapStateToProps, {logoutUser, getUser, removeJob})(UserContainer)