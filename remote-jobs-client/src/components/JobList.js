import React from 'react'
import Button from './Button'

const renderJobs = (jobs) => {
    return jobs.map((job, index) => {
        return (
            <div key={index} className="all-jobs">
                {/* <img src={job.logo} alt="" className="logo"/> */}
                <h5>{job.date}</h5>
                <h3>{job.company}</h3>
                <h4>{job.position}</h4>
                <a alt="job link" href={job.url}>{job.url}</a>
                <h6>{job.description}</h6>
                <Button className="button"/>
            </div>
        )
    })
}

const JobList = props => {
    // console.log("props",props);
    return(
        <div className="job-container">
            {renderJobs(props.jobs)}
        </div>
    )
}

export default JobList