import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommunityCard from './Community';
import signup from '../AUTH/Signup';


const Communityget = () => {
  const [communitys, setCommunitys] = useState([]);
  const [signup, setSignup] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/community")
      .then(result => {
        setCommunitys(result.data);
      })
      .catch(err => {
        console.log(err);
      });

    axios.get("http://localhost:8000/registerxp")
      .then(result => {
        setSignup(result.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <form>
        <input onChange={(e) => setSearch(e.target.value)} placeholder='search' />
      </form>

      {communitys.length > 0 ? (
        communitys.filter((community) => {
          return search.trim() === "" ||
            community.companyname.toLowerCase().includes(search.toLowerCase()) ||
            community.communitydesc.toLowerCase().includes(search.toLowerCase());
        }).map((community, index) => (
          <CommunityCard key={community.id} community={community} signup={signup} />
          
        ))
      ) : (
        <p>No communities available</p>
      )}
    </>
  );
};

export default Communityget;
