import React, {Component} from 'react'
import SignUpForm from './components/SignUpForm'

class App extends Component{
    render(){
        return(
            <div className="grid-container">
                <header>
                    <h2>Remote Jobs</h2>
                </header>
                <main>
                    <div className="content">
                        <div className="job-list">
                            <i class='fas fa-clock'></i>
                            <i className='fas fa-laptop-house'></i>
                            <i className='fas fa-coffee'></i>
                            <hr></hr>
                            <h1>Find the best Remote Job</h1>
                        </div>
                        <div className="sidebar">
                            <SignUpForm/>
                        </div>
                    </div>
                </main>
                <footer>
                    Copyright © Remote Jobs 2020
                </footer>
            </div>
        )
    }
}
export default App