import React from "react";
import { Link } from "react-router-dom";

import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  const countryName = recipe.country;

  return (
    <div className="recipe-card">
      <div className="flag-overlay"></div>
      <img className="recipe-photo" src={recipe.photo} alt={recipe.name} />
      <div className="recipe-card-content">
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
        <p>Country of origin: {countryName}</p>
        <Link to={`/recipes/${recipe.id}`} className="recipe-link">
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
