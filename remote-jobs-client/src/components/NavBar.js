import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return(
        
        <header>
            <div className="logo-container">
                <i class="fas fa-house-user"></i>
                <i class="fas fa-laptop"></i>
                <h2 className="logo">Remote Jobs</h2>
            </div>
            <nav>
                <div className="nav-link">
                    <Link className="nav-link" to="#">Home</Link>
                    <Link className="nav-link" to="#">About</Link>
                    <Link className="nav-link" to="#">Login</Link>
                </div>
            </nav>
            <div className="follow-me">
                <a href="https://twitter.com/imoohma"><i class="fab fa-twitter-square"></i></a>
                <a href="https://www.linkedin.com/in/uma-manandhar-4013491b0/"><i class="fab fa-linkedin"></i></a>
                <a href=" https://github.com/mdr-uma"><i class="fab fa-github-square"></i></a>
            </div>
        </header>
        
    )
}

export default NavBar