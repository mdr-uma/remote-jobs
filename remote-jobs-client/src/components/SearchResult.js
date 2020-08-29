import React, { Component } from 'react'
import BodyImage from './BodyImage'
import JobList from './JobList'
import { connect } from 'react-redux'

class SearchResult extends Component {  
    render() {
        return (
            <div>
                <main>
                    <div className="content">
                        <BodyImage />
                        <JobList jobs={this.props.jobs} />
                    </div>
                </main>
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
