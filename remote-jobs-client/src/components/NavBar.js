import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return(
        
        <header>
            <div className="logo-container">
                <i className="fas fa-house-user"></i>
                <i className="fas fa-laptop"></i>
                <h2 className="logo">Remote Jobs</h2>
            </div>
            <nav>
                <div className="nav-link">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </div>
            </nav>
            <div className="follow-me">
                <a href="https://twitter.com/imoohma"><i className="fab fa-twitter-square"></i></a>
                <a href="https://www.linkedin.com/in/uma-manandhar-4013491b0/"><i className="fab fa-linkedin"></i></a>
                <a href=" https://github.com/mdr-uma"><i className="fab fa-github-square"></i></a>
            </div>
        </header>
        
    )
}

export default NavBar