import React from 'react';
import ListFood from '../../components/structure/ListFood/ListFood';
import './Home.css';

const Home = () => {
  return (
  
      <div className="card-food">
        <h3>Healthy Food</h3>
        <ListFood />      
      </div>    
  ) 
}

export default Home