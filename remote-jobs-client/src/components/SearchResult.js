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
                    <JobList jobs={this.props.jobs} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ jobs }) => {
    return {
        jobs: jobs.slice(1)
    }
}

export default connect(mapStateToProps)(SearchResult)
