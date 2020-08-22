import React from 'react'
import {createUser} from '../actions/createUser'
import {connect} from 'react-redux'

class SignUpForm extends React.Component{
    state = {
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
        this.props.createUser(this.state)
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return(
            <div>
                <div className="form-container">
                    <h3>Sign Up</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email Address: </label>
                        <input type="text" placeholder="eg@gmail.com" value={this.state.email} name="email" onChange={this.handleChange}/> <br/><br/>
                        <label>Password: </label>
                        <input type="password" placeholder="password" value={this.state.password} name="password" onChange={this.handleChange}/> <br/><br/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, {createUser})(SignUpForm)