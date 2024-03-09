import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './Jobcard';



const jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setsearch] = useState('')


  useEffect(() => {
    axios.get("http://localhost:8000/jobs")
      .then(result => {
        setJobs(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
     <form>
          <input onChange={(e) => setsearch(e.target.value)} placeholder='search' />
        </form>

        {jobs.length > 0 ? (
          jobs.filter((job) => {
            return search.trim() === "" 
            ||job.jobTitle.toLowerCase().includes(search.toLowerCase())
            ||job.companyname.toLowerCase().includes(search.toLowerCase())
            ||job.salary.toLowerCase().includes(search.toLowerCase())

          }).map((job, index) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs available</p>
        )}


    </>

  );

};

export default jobs;
