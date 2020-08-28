import React from 'react'
import {createUser} from '../actions/createUser'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
// import image from '../images/image-1.jpeg'

class SignUpForm extends React.Component{
    state = {
        username: "",
        email: "",
        password: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createUser(this.state, () => {
            this.props.history.push('/dashboard')
        })
        this.setState({
            username: "",
            email: "",
            password: ""
        })
    }

    render() {
        return(
            <div>
                <div className="sidebar">
                    <div className="form-container">
                        <h3>Sign Up</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label>Username: </label>
                            <input type="text" placeholder="username" value={this.state.username} name="username" onChange={this.handleChange}/> <br/><br/>
                            <label>Email Address: </label>
                            <input type="text" placeholder="eg@gmail.com" value={this.state.email} name="email" onChange={this.handleChange}/> <br/><br/>
                            <label>Password: </label>
                            <input type="password" placeholder="password" value={this.state.password} name="password" onChange={this.handleChange}/> <br/><br/>
                            <input type="submit"/>
                        </form>
                        {/* <img src={image}/> */}

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {createUser})(withRouter(SignUpForm))