import React from "react";

import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.photo} alt={recipe.name} />
      <div className="recipe-card-content">
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
        <p>Country of origin: {recipe.country}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
