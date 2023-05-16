import React from "react";

import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  const countryName = recipe.country;

  return (
    <div className="recipe-card">
      <div className="flag-overlay">
        {/* <img
          className="flag"
          src={`./assets/flags/${recipe.country.value}.svg`}
          alt={countryName}
        /> */}
      </div>
      <img className="recipe-photo" src={recipe.photo} alt={recipe.name} />
      <div className="recipe-card-content">
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
        <p>{recipe.preparation}</p>
        <p>Country of origin: {countryName}</p>
        {recipe.ingridients && recipe.ingridients.length > 0 && (
          <>
            <table className="ingredient-table">
              <thead>
                <tr>
                  <th>Ingredients</th>
                </tr>
              </thead>
              <tbody>
                {recipe.ingridients.map((ingridient, index) => (
                  <tr key={index}>
                    <td colSpan="2">{ingridient}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
