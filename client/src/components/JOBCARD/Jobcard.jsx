import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img from "../../img/imgjob.jpg"
const JobCard = ({ job }) => {

  return (
    <>
   
    <Card className="card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title><span>JOB Title:</span>{job.jobTitle}</Card.Title>
        <Card.Text><span>Company:</span>{job.companyname}</Card.Text>
        <Card.Text><span>Job location:</span>{job.companylocation}</Card.Text>
        <Card.Text><span>Job salary:</span>{job.salary}</Card.Text>
        <Card.Text><span>Job description:</span>{job.description}</Card.Text>
        <Card.Text><span>Job post on:</span>{job.date}</Card.Text>
        <Button variant="success">Apply</Button>
      </Card.Body>
    </Card>
    </>
   
  );
};

export default JobCard;
