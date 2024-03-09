import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css'
import img1 from "./img/home1.jpg"
import img2 from "./img/home2.jpg"
import img3 from "./img/home3.jpg"
import enqimg from "./img/enquire1.png"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home'>
      
       <h2>WOMENSTECH COMMUNITY</h2>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>The Women's Community</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" href='/community'>MORE COMMUNITY</Button>
      </Card.Body>
    </Card>
<br></br>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>The Women's career</Card.Title>
        <Card.Text>
        Pursuing a career enables women to understand ground realities, helps them network and build useful social connections, 
        </Card.Text>
        <Button variant="primary" href='/jobs'>MORE JOBS</Button>
      </Card.Body>
    </Card>
<br>
</br>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>The Women's Event</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" href='/event'>MORE EVENT</Button>
      </Card.Body>
    </Card>
<br>
</br>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={enqimg} />
      <Card.Body>
        <Card.Title>ENQUIRE FORM</Card.Title>
        
        <Button variant="primary" href='/CreatEnquire'>ENQUIRE</Button>
      </Card.Body>
    </Card>


    </div>
   
  )
}

export default Home