import React, {Component} from 'react'
import NavBar from './NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import About from './About'
import JobsContainer from '../containers/JobsContainer'
import Footer from './Footer'
import DashBoard from './DashBoard'


class App extends Component{
    render(){
        return(
            <div className="grid-container">
                <BrowserRouter>
                <NavBar/> 
                    <Route exact path='/' component={JobsContainer} /> 
                    <Route exact path='/about' component={About} /> 
                    <Route exact path='/login' component={LoginForm} />
                    <Route exact path='/dashboard' component={DashBoard} />
                </BrowserRouter>
                <Footer /> 
                
            </div>
        )
    }
}
export default App