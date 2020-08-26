import React, { Component } from 'react'
import SignUpForm from '../components/SignUpForm'
import BodyImage from '../components/BodyImage'

class MainContainer extends Component {
    render() {
        return(
            <div>
                <main>
                    <div className="content">
                        <BodyImage />
                        <SignUpForm />
                    </div>
                </main>
            </div>
        )
    }
}

export default MainContainer
