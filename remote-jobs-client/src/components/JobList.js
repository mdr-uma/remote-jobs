import React from 'react'
import Button from './Button'
import dateFormat from 'dateformat'

const renderJobs = (props) => {
    return props.jobs.map((job, index) => {
            let date = job.date
            return (
                <div key={index} className="all-jobs">
                    <h5>{dateFormat(date, "mmmm dS, yyyy")}</h5>
                    <h3>{job.company}</h3>
                    <h4>{job.position}</h4>
                    <a alt="job link" href={job.url}>{job.url}</a>
                    <h6>{job.description}</h6>
                    {/* {props.user && props.user.savedJobs.includes(job) ? null : <Button className="button" job={job} /> } */}
                    {job.slug ? <Button className="button" job={job} /> : null}
                </div>
            )
    })
}
               
const JobList = props => {
    return(
        <div className="job-container">
            {renderJobs(props)}
        </div>
    )
}

export default JobList