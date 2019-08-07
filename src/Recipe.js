import React from 'react';
import './App.css';

const Recipe = ({title,calories,image,ingredients})=> {
  return(
    <div className="recipe">
      <h3>{title}</h3>
      Ingredients: <ol>
        {
          ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))
        }
      </ol>
      <img src={image}/>
      <p>calories = {calories}</p>
    </div>
  )
};

export default Recipe;
