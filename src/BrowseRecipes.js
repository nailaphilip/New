import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import RecipeCard from "./components/RecipeCard";

import "./BrowseRecipes.css";

function BrowseRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container">
      <h1>Browse Recipes</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search recipes by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="recipe-list">
        {recipes
          .filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </div>
  );
}

export default BrowseRecipes;
