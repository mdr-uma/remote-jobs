import React, {Component} from 'react'
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import About from './components/About'
import MainContainer from './containers/MainContainer'
import Footer from './components/Footer'


class App extends Component{
    render(){
        return(
            <div className="grid-container">
                <NavBar/> 
                <Switch>
                    <Route exact path='/' component={MainContainer} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/login' component={LoginForm} />
                </Switch>
                <Footer />

            </div>
        )
    }
}
export default App