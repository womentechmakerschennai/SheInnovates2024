import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const CommunityCard = ({ community, signup }) => {
  const [totalXP, setTotalXP] = useState(0);
  const navigate=useNavigate()

  const finish = () => {

    setTotalXP(totalXP + 10); 
  };

  console.log(signup);

  return (
    <>
      <Card className="card">
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title><span>Community Name:</span> {community.communityname}</Card.Title>
          <Card.Text><span>Community Description:</span> {community.communitydesc}</Card.Text>
          {Array.isArray(signup) && signup.map((signupItem, index) => ( 
            <Card.Text key={index}><span>XP:</span> {signupItem.xp}</Card.Text>
          ))}
          <Card.Text><span>Total XP:</span> {totalXP}</Card.Text> {/* Display total XP */}
          <Card.Text><span>Post On:</span> {community.date}</Card.Text>
          <Button variant="success" onClick={finish}>finish</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CommunityCard;
