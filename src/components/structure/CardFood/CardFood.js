import React from 'react';
import { Link } from 'react-router-dom';
import './CardFood.css';
import '../../structure/ListFood/ListFood';


const CardFood = (props) => {
    const food = props.data;
    return (
        <main className='foods'>
            <div className="img">
                <img src={food.image} alt="food image"></img>
            </div>
        
            <div className="food-title">
                <h3>{food.name}</h3>
                <button className="see" type="submit">See Recipe</button>
                
            </div>
        </main>

    )
};

export default CardFood;
