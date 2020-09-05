import React from 'react'
import {Button} from 'react-bootstrap'
import JobList from './JobList'
import { useHistory } from "react-router-dom";


const DashBoard = (props) => {
    const history = useHistory()
    return(
        <div className="content">
            <div className="job-list">
                <h1> Welcome to your DashBoard.</h1>
                <p>You can see all your saved jobs here. Good Luck on Job hunt!</p>
            </div>
            <div className="side-bar">
                Hi, {props.user.username}!
                <br/>
                <Button variant="outline-primary" onClick={() => props.logOut(() => {
                    history.push('/')})}>Log Out</Button>
            </div>
            <div className="saved-job">
                {props.savedJobs ? <JobList jobs={props.savedJobs} user={props.user}/> : null}  
            </div>
        </div>  
    )
}

export default DashBoard