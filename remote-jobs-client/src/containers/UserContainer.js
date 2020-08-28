import React from 'react'
import {connect} from 'react-redux'
import DashBoard from '../components/DashBoard'

class UserContainer extends React.Component{
    render() {
        return(
            <div>
                <DashBoard userName={this.props.user.username}/>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

export default connect(mapStateToProps)(UserContainer)