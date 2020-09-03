import React from 'react'
import {Button} from 'react-bootstrap'
import JobList from './JobList'



const DashBoard = (props) => {
    return(
        <div className="content">
            <div className="job-list">
                <h1> Welcome to your DashBoard.</h1>
                <p>You can see all your saved jobs here. Good Luck on Job hunt!</p>
            </div>
            <div className="side-bar">
                Hi, {props.userName}!
                <br/>
                <Button variant="outline-primary" onClick={()=>props.logOut()}>Log Out</Button>
            </div>
            <div className="saved-job">
                {props.savedJobs ? <JobList jobs={props.savedJobs} /> : null}  
            </div>
        </div>  
    )
}

export default DashBoard