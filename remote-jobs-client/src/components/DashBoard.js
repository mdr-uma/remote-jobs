import React from 'react'

const DashBoard = (props) => {
    return(
        <div className= "content">
            <div className="job-list">
                <h1> Welcome to your DashBoard.</h1>
                <p>You can see all your saved jobs here. Good Luck on Job hunt!</p>
            </div>
            <div className="side-bar">
                Hi, {props.userName}!
            </div>
            <div className="saved-job">

            </div>
        </div>
        
    )
}

export default DashBoard