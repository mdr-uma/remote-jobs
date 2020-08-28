import React from 'react'

const DashBoard = (props) => {
    return(
        <div>
            <h1>Hi {props.userName}, Welcome to your DashBoard.</h1>
             <p>You can see all your saved job post here. Good Luck!</p>
        </div>
        
    )
}

export default DashBoard