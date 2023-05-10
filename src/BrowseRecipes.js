import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import RecipeCard from "./components/RecipeCard";

import "./BrowseRecipes.css";

function BrowseRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container">
      <h1>Browse Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default BrowseRecipes;
