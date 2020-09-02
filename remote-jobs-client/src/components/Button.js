import React from 'react'
import { useHistory } from "react-router-dom";
import {connect} from "react-redux"
import {savedJobs} from '../actions/fetchJobs'


const Button = (props) => {
    const history = useHistory()
    const routeChange =()=> {
        history.push(`/dashboard`)
    }
    return(
        <div>
            <i className="fas fa-save" onClick={() => props.savedJobs(props.job, props.user, routeChange)}></i>
        </div>
    )
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}

export default connect(mapStateToProps, {savedJobs})(Button)