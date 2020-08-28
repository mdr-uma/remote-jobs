import React from 'react'

const renderJobs = (jobs) => {
    return jobs.map((job, index) => {
        return (
            <div key={index}>
              <h1>{job.company}</h1>
                <a alt="job link" href={job.url}>Job links</a>
              <h4>{job.description}</h4>
            </div>
        )
    })
}

const JobList = props => {
    // console.log("props",props);
    return(
        <div>
            <p>Joblist</p>
            {renderJobs(props.jobs)}
        </div>
    )
}

export default JobList