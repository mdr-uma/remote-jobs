import React, { Component } from 'react'
import SignUpForm from '../components/SignUpForm'
import BodyImage from '../components/BodyImage'
import JobList from '../components/JobList'
import JobSearch from '../components/JobSearch'
import {fetchJobs} from '../actions/fetchJobs'
import {connect} from 'react-redux'

class MainContainer extends Component {
    state = {
        jobs: []
    }

    componentDidMount() {
        this.props.fetchJobs()
    }

    render() {
        return(
            <div>
                <main>
                    <div className="content">
                        <BodyImage />
                        <SignUpForm />
                        <JobList jobs={this.state.jobs}/>
                        <JobSearch fetchJobs={this.fetchJobs}/>
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        jobs: state.jobs
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchJobs: () => dispatch(fetchJobs())
//     }
// }

export default connect(mapStateToProps, {fetchJobs})(MainContainer)
