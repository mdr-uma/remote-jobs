import React from 'react'
import { useHistory } from "react-router-dom";


const Button = (props) => {
    const history = useHistory()
    
    const routeChange =()=> {
        history.push(`/dashboard`)
    }
    return(
        <div>
            <i className="fas fa-save" onClick={routeChange}></i>
            {/* {props.buttonText} */}
        </div>
    )
}

export default Button