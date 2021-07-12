import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className="template">
      <Link className="btn-link demoOne" to="/demoOne">DemoOne</Link>
      <Link className="btn-link demoTwo" to="/demoTwo">DemoTwo</Link>
      
    </div>
  );
};

export default Home;