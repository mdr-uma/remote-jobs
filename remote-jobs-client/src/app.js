import React, {Component} from 'react'
import SignUpForm from './components/SignUpForm'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BodyImage from './components/BodyImage'

class App extends Component{
    render(){
        return(
            <div className="grid-container">
                <NavBar/> 
                <main>
                    <div className="content">
                        <BodyImage/>
                        <SignUpForm/>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}
export default App