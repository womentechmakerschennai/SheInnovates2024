import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './Eventcard';
import { Link } from 'react-router-dom';


const eventget = () => {
  const [events, setevent] = useState([]);
  const [search, setsearch] = useState('')


  useEffect(() => {
    axios.get("http://localhost:8000/event")
      .then(result => {
        setevent(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
     <form>

        <Link to={"/"}>Home</Link>
          <input onChange={(e) => setsearch(e.target.value)} placeholder='search' />
        </form>

        {events.length > 0 ? (
          events.filter((event) => {
            return search.trim() === "" 
            ||event.name.toLowerCase().includes(search.toLowerCase())
            ||event.desc.toLowerCase().includes(search.toLowerCase())
          }).map((event, index) => <EventCard key={event.id} event={event} />)
        ) : (
          <p>No events available</p> 
        
        )}


    </>

  );

};

export default eventget;
