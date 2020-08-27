import React from 'react'

const DashBoard = (props) => {
    console.log(props);
    return(
        <div>
            <h1>Hi There, Welcome to your DashBoard.</h1>
            <p>You can see all your saved job post here. Good Luck!</p>
            {/* {props.users.map(user=>
                <p key={user.id}>{user.email}</p>
            )} */}
        </div>
    )
}

export default DashBoard