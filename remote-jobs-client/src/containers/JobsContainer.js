import React, { Component } from 'react'
import SignUpForm from '../components/SignUpForm'
import BodyImage from '../components/BodyImage'
import JobList from '../components/JobList'
import JobSearch from '../components/JobSearch'
import {fetchJobs} from '../actions/fetchJobs'
import {connect} from 'react-redux'

class JobsContainer extends Component {
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
                        <JobSearch />
                        <JobList jobs={this.props.jobs}/>
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = ({ jobs }) => {
    return{
        jobs : jobs.slice(1)
    }
}

export default connect(mapStateToProps, {fetchJobs})(JobsContainer)
