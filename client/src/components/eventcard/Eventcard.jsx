import React  from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img1 from "../../img/imgevent.jpg"
const EventCard = ({event}) => {
  return (
  <>
    <Card className="card">
      <Card.Img variant="top" src={img1}/>
      <Card.Body>
        <Card.Title><span>Event name:</span>{event.eventname}</Card.Title>
        <Card.Text><span>Event description:</span>{event.eventdesc}</Card.Text>
        <Card.Text><span>Event place:</span>{event.eventplace}</Card.Text>
        <Card.Footer><span>post on:</span>{event.date}</Card.Footer>
        <Button variant="success">Apply Event</Button>
      </Card.Body>
    </Card>
    </>
   
  );
};

export default EventCard;
