import React, { Component } from 'react'
import BodyImage from './BodyImage'
import JobList from './JobList'
import { connect } from 'react-redux'

class SearchResult extends Component {  
    render() {
        return (
            <div>
                <div className="search-image">
                    <BodyImage />
                </div>
                <div className="search-container">
                    <JobList jobs={this.props.jobs} user={this.props.user}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ jobs, user }) => {
    return {
        jobs: jobs.slice(1),
        user
    }
}

export default connect(mapStateToProps)(SearchResult)
